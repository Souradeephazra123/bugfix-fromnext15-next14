"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Message = {
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

type ChatDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      content:
        "Hi there! I'm the Schapira CPA virtual assistant. How can I help you with your manufacturing business finances today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmittedContact, setHasSubmittedContact] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message to chat
    const userMessage: Message = {
      content,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // If we haven't collected contact info yet and this is the 3rd user message, show the form
      if (
        !hasSubmittedContact &&
        messages.filter((m) => m.role === "user").length === 2
      ) {
        setShowContactForm(true);
        setIsLoading(false);
        return;
      }

      // Format messages for API
      const apiMessages = messages
        .concat(userMessage)
        .map(({ content, role }) => ({
          content,
          role,
        }));

      // Call our API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message) {
        // Add assistant response to chat
        setMessages((prev) => [
          ...prev,
          {
            content: data.choices[0].message.content,
            role: "assistant",
            timestamp: new Date(),
          },
        ]);
      } else {
        // Handle error
        setMessages((prev) => [
          ...prev,
          {
            content:
              "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly.",
            role: "assistant",
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          content: "I'm sorry, something went wrong. Please try again later.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Submit contact info to HubSpot
      const response = await fetch("/api/hubspot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contactInfo,
          message: messages.find((m) => m.role === "user")?.content || "",
        }),
      });

      if (response.ok) {
        setHasSubmittedContact(true);
        setShowContactForm(false);

        // Thank the user and continue the conversation
        setMessages((prev) => [
          ...prev,
          {
            content: `Thanks ${contactInfo.firstName || "there"}! Now, how can I help you with your manufacturing business finances?`,
            role: "assistant",
            timestamp: new Date(),
          },
        ]);
      } else {
        throw new Error("Failed to submit contact info");
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      setMessages((prev) => [
        ...prev,
        {
          content:
            "I'm having trouble saving your information. Let's continue our conversation anyway.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
      setShowContactForm(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-20 right-4 z-50 w-full max-w-sm rounded-lg shadow-lg transition-all duration-300 ease-in-out bg-background border border-border",
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo-mark.png"
              alt="Schapira CPA"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-semibold">Schapira CPA Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="p-4 h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            isUser={message.role === "user"}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-muted text-foreground rounded-lg px-4 py-2">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: "600ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <div className="p-4 border-t border-b">
          <form onSubmit={handleContactSubmit} className="space-y-3">
            <h4 className="font-medium text-sm">
              To better assist you, please share your contact information:
            </h4>
            <input
              type="email"
              placeholder="Email *"
              required
              value={contactInfo.email}
              onChange={(e) =>
                setContactInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full p-2 text-sm border rounded"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                value={contactInfo.firstName}
                onChange={(e) =>
                  setContactInfo((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                className="w-1/2 p-2 text-sm border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={contactInfo.lastName}
                onChange={(e) =>
                  setContactInfo((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                className="w-1/2 p-2 text-sm border rounded"
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-sm"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={isLoading || showContactForm}
        />
      </div>
    </div>
  );
}
