export interface UploadResponse {
  status: string;
  data: {
    url: string;
    id: string;
    filename: string;
  };
}

export interface FileDetails {
  file: File;
  password?: string;
  expiryMinutes: string;
}