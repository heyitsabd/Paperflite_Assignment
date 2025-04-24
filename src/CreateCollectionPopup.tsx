import { useState } from "react";
import data from "./data.json";
import './css/CreateCollectionPopup.css';

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
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">{popup.title}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={popup.placeholder}
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            className="popup-input"
          />
          <input
            type="file"
            accept={popup.fileAcceptImage}
            onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
            className="popup-file-input"
          />
          <input
            type="file"
            accept={popup.fileAcceptMultiple}
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="popup-file-input"
          />
          <div className="popup-button-container">
            <button
              type="button"
              onClick={onClose}
              className="popup-button popup-cancel-button"
            >
              {popup.cancelButtonText}
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: styles.popupButtonColor,
                color: styles.popupTextColor,
              }}
              className="popup-button popup-save-button"
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
