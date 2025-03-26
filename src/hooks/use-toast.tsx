'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  title: string;
  description: string;
  variant: 'default' | 'success' | 'error';
}

interface ToastContextType {
  toast: (toast: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (newToast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, newToast]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t !== newToast));
    }, 3000); // Remove toast after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((t, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              t.variant === 'success'
                ? 'bg-green-500 text-white'
                : t.variant === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-gray-800 text-white'
            }`}
          >
            <strong>{t.title}</strong>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToasterProps {
  toasts: Toast[];
}

