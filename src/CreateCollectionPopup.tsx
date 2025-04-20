import { useState } from "react";
import data from "./data.json";

interface CreateCollectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; cover: File; files: File[] }) => void;
}

const CreateCollectionPopup = ({ isOpen, onClose, onSubmit }: CreateCollectionPopupProps) => {
  const { popup, styles } = data;
  const [collectionName, setCollectionName] = useState("");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collectionName || !coverFile) {
      alert("Please provide a collection name and cover image.");
      return;
    }
    onSubmit({ name: collectionName, cover: coverFile, files });
    setCollectionName("");
    setCoverFile(null);
    setFiles([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-2">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-full md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">{popup.title}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={popup.placeholder}
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm sm:text-base"
          />
          <input
            type="file"
            accept={popup.fileAcceptImage}
            onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          <input
            type="file"
            accept={popup.fileAcceptMultiple}
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
              {popup.cancelButtonText}
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: styles.popupButtonColor,
                color: styles.popupTextColor,
              }}
              className="px-4 py-2 rounded"
            >
              {popup.saveButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollectionPopup;
