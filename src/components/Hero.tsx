import React from 'react';
import { Shield, Clock, Share } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Secure File Sharing,{' '}
        <span className="text-indigo-600 dark:text-indigo-400">Made Simple</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Upload, share, and automatically delete your files. Fast, secure, and free.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Sharing</h3>
          <p className="text-gray-600 dark:text-gray-300">Password protection and encrypted transfers</p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Auto-Delete</h3>
          <p className="text-gray-600 dark:text-gray-300">Files removed after your chosen time</p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <Share className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy Sharing</h3>
          <p className="text-gray-600 dark:text-gray-300">Simple URLs for quick file sharing</p>
        </div>
      </div>
    </section>
  );
}