import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    cover: File;
    files: File[];
  }) => void;
}

const CreateCollectionModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [cover, setCover] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && cover) {
      onSubmit({ name, cover, files });
      setName('');
      setCover(null);
      setFiles([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h3 className="text-lg font-semibold mb-4">Create New Collection</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Collection Name:
            <input
              type="text"
              className="border p-2 mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col">
            Cover Image:
            <input
              type="file"
              accept="image/*"
              className="mt-1"
              onChange={(e) => setCover(e.target.files?.[0] || null)}
              required
            />
          </label>

          <label className="flex flex-col">
            Files to Save:
            <input
              type="file"
              accept="image/*,video/*,.pdf,.doc,.docx,.txt"
              multiple
              className="mt-1"
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
            />
          </label>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
            Save Collection
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCollectionModal;
