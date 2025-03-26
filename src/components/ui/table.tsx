import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TableProps {
  className?: string;
  children: ReactNode;
}

export const Table: FC<TableProps> = ({ className, children }) => {
  return <table className={twMerge('min-w-full divide-y divide-gray-200', className)}>{children}</table>;
};

interface TableBodyProps {
  className?: string;
  children: ReactNode;
}

export const TableBody: FC<TableBodyProps> = ({ className, children }) => {
  return <tbody className={twMerge('bg-white divide-y divide-gray-200', className)}>{children}</tbody>;
};

interface TableCellProps {
  className?: string;
  children: ReactNode;
}

export const TableCell: FC<TableCellProps> = ({ className, children }) => {
  return <td className={twMerge('px-6 py-4 whitespace-nowrap', className)}>{children}</td>;
};

interface TableHeadProps {
  className?: string;
  children: ReactNode;
}

export const TableHead: FC<TableHeadProps> = ({ className, children }) => {
  return <th className={twMerge('px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider', className)}>{children}</th>;
};

interface TableHeaderProps {
  className?: string;
  children: ReactNode;
}

export const TableHeader: FC<TableHeaderProps> = ({ className, children }) => {
  return <thead className={twMerge('bg-gray-50', className)}>{children}</thead>;
};

interface TableRowProps {
  className?: string;
  children: ReactNode;
}

export const TableRow: FC<TableRowProps> = ({ className, children }) => {
  return <tr className={twMerge('bg-white', className)}>{children}</tr>;
};