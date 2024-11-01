import React from 'react';
import { FileText, File as FileIcon } from 'lucide-react';

interface FilePreviewProps {
  file: File;
}

export default function FilePreview({ file }: FilePreviewProps) {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isPreviewable = file.type.startsWith('image/');

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      {isPreviewable ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="h-16 w-16 object-cover rounded"
        />
      ) : (
        <div className="h-16 w-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
          {file.type.includes('pdf') ? (
            <FileText className="h-8 w-8 text-gray-400" />
          ) : (
            <FileIcon className="h-8 w-8 text-gray-400" />
          )}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {file.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {formatFileSize(file.size)}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {file.type || 'Unknown type'}
        </p>
      </div>
    </div>
  );
}