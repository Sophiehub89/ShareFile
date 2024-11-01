import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import FilePreview from './FilePreview';
import ExpirySelect from './ExpirySelect';
import PasswordInput from './PasswordInput';
import { uploadFile } from '../services/uploadService';

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [expiryTime, setExpiryTime] = useState('30');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (selectedFile: File | undefined) => {
    if (!selectedFile) {
      setError('Please select a file');
      return;
    }

    if (selectedFile.size > 100 * 1024 * 1024) {
      setError('File size must be less than 100MB');
      return;
    }

    setFile(selectedFile);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError('');

    try {
      const url = await uploadFile({
        file,
        password,
        expiryMinutes: expiryTime
      });
      setUploadedUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setError('');
    setPassword('');
    setUploadedUrl('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div
        className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {!file ? (
          <div>
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Drag and drop your file here
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Or click to select a file (max 100MB)
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Select File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*,application/pdf,application/zip,audio/mpeg,video/mp4"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <FilePreview file={file} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExpirySelect value={expiryTime} onChange={setExpiryTime} />
              <PasswordInput value={password} onChange={setPassword} />
            </div>

            {error && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">{error}</p>
            )}

            <div className="flex justify-between">
              <button
                onClick={resetForm}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isUploading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    <span>Uploading...</span>
                  </>
                ) : (
                  'Upload File'
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {uploadedUrl && (
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            File Uploaded Successfully!
          </h4>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={uploadedUrl}
              readOnly
              className="block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2 px-3"
            />
            <button
              onClick={() => navigator.clipboard.writeText(uploadedUrl)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              Copy URL
            </button>
          </div>
          {password && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember to share the password separately with your recipient.
            </p>
          )}
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>File will be automatically deleted after {expiryTime} minutes</span>
          </p>
        </div>
      )}
    </div>
  );
}