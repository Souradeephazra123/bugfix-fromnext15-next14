
import { FC } from 'react';

interface Toast {
  title: string;
  description: string;
  variant: 'default' | 'success' | 'error';
}

interface ToasterProps {
  toasts: Toast[];
}

export const Toaster: FC<ToasterProps> = ({ toasts }) => {
  return (
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
  );
};