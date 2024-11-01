import { FileDetails, UploadResponse } from '../types';

export async function uploadFile({ file, password, expiryMinutes }: FileDetails): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  
  if (password) {
    formData.append('password', password);
  }
  
  formData.append('expires', expiryMinutes);

  try {
    const response = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: UploadResponse = await response.json();
    return formatShareableUrl(data.data);
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error('Failed to upload file. Please try again.');
  }
}

function formatShareableUrl(data: { id: string; filename: string }): string {
  return `https://tmpfiles.org/dl/${data.id}/${encodeURIComponent(data.filename)}`;
}