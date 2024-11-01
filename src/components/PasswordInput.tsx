import React from 'react';
import { Lock } from 'lucide-react';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Lock className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="password"
        placeholder="Optional password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white pl-10 pr-4 py-2"
      />
    </div>
  );
}