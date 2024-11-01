import React from 'react';
import FileUploader from './components/FileUploader';
import { Share2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Share2 className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                TempShare
              </h1>
            </div>
            <nav className="flex space-x-4">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Secure Temporary File Sharing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Upload and share files securely with automatic deletion. 
            Perfect for temporary file sharing with optional password protection.
          </p>
        </div>

        <FileUploader />
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TempShare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;