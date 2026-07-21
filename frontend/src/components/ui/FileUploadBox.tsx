import React, { useCallback, useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';

interface FileUploadBoxProps {
  onFilesSelected: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
}

export const FileUploadBox: React.FC<FileUploadBoxProps> = ({ onFilesSelected, multiple = false, accept = 'image/*' }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      onFilesSelected(multiple ? filesArray : [filesArray[0]]);
      e.dataTransfer.clearData();
    }
  }, [multiple, onFilesSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      onFilesSelected(multiple ? filesArray : [filesArray[0]]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:border-transparent ${
        isDragActive 
          ? 'border-brand-yellow bg-brand-yellow/10 shadow-[0_0_20px_rgba(255,214,0,0.1)] scale-[1.01]' 
          : 'border-white/10 hover:border-brand-yellow/50 bg-white/5 hover:bg-white/8'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={onButtonClick}
      tabIndex={0}
      role="button"
      aria-label="Upload files"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onButtonClick();
        }
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
        multiple={multiple}
        accept={accept}
      />
      <UploadCloud className={`w-12 h-12 mb-4 transition-all duration-300 ${isDragActive ? 'text-brand-yellow scale-110' : 'text-gray-400'}`} />
      <p className="text-gray-300 text-center mb-2">
        <span className="font-semibold text-brand-yellow">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    </div>
  );
};
