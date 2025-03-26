"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatDialog } from "./chat-dialog";

export function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      <ChatDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
