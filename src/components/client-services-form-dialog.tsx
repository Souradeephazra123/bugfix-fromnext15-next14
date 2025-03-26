"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ClientServicesFormDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

export function ClientServicesFormDialog({
  children,
  triggerClassName,
}: ClientServicesFormDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Upgrade Your Services
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Complete the form below to claim your 20% discount
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="popup-name" className="block font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="popup-name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="popup-company" className="block font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="popup-company"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your company"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="popup-email" className="block font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="popup-email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="popup-phone" className="block font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="popup-phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">
              I'm interested in (select all that apply):
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="popup-service1"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="popup-service1" className="ml-2">
                  Strategic Tax Planning
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="popup-service2"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="popup-service2" className="ml-2">
                  Virtual CFO Advisory
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="popup-service3"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="popup-service3" className="ml-2">
                  Advanced Analytics Implementation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="popup-service4"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="popup-service4" className="ml-2">
                  Cost Accounting Optimization
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="popup-message" className="block font-medium">
              Additional Information
            </label>
            <textarea
              id="popup-message"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your specific needs or questions"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg"
            >
              Upgrade My Services Now and Save 20%
            </Button>
            <p className="text-center text-sm text-gray-600 mt-2">
              Your information is secure and will not be shared.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
