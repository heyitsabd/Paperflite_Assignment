import { useState } from "react";

interface CreateCollectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; cover: File; files: File[] }) => void;
}

function CreateCollectionPopup({ isOpen, onClose, onSubmit }: CreateCollectionPopupProps) {
  const [collectionName, setCollectionName] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: Ensure a name and cover image are provided
    if (!collectionName || !coverFile) {
      alert("Please provide a collection name and cover image.");
      return;
    }

    // Handle the submission
    onSubmit({ name: collectionName, cover: coverFile, files });
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">Create New Collection</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Collection Name"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          <input
            type="file"
            accept="image/*,video/*,.pdf,.doc,.docx"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="w-full"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCollectionPopup;
