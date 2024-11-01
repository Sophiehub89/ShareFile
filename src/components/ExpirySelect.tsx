import React from 'react';
import { Clock } from 'lucide-react';

interface ExpirySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ExpirySelect({ value, onChange }: ExpirySelectProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Clock className="h-4 w-4 text-gray-400" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white pl-10 pr-4 py-2"
      >
        <option value="10">10 minutes</option>
        <option value="30">30 minutes</option>
        <option value="60">1 hour</option>
        <option value="120">2 hours</option>
        <option value="360">6 hours</option>
        <option value="720">12 hours</option>
        <option value="1440">24 hours</option>
      </select>
    </div>
  );
}