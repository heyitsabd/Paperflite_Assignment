import React, { JSX } from 'react';
import '../css/MainCardEle.css';

interface cardInnerdata {
  name: string;
  cover: string;
  files: File[];
}

interface mainCardFileType {
  collection: cardInnerdata;
  editingIndex: number | null;
  index: number;
  newName: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRenameSubmit: () => void;
  handleRenameKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleNameClick: (index: number) => void;
  collections: cardInnerdata[];
  getFileCategorySummary: (extensions: string[]) => string;
  getFileExtension: (files: File[]) => string[];
}

function MainCardEle({
  collection,
  editingIndex,
  index,
  newName,
  handleNameChange,
  handleRenameSubmit,
  handleRenameKeyDown,
  handleNameClick,
  collections,
  getFileCategorySummary,
  getFileExtension,
}: mainCardFileType): JSX.Element {
  return (
    <div key={index} className="card-container">
      <img
        src={collection.cover}
        alt="Cover"
        className="card-cover"
      />
      {editingIndex === index ? (
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          onBlur={handleRenameSubmit}
          onKeyDown={handleRenameKeyDown}
          autoFocus
          className="card-name-input"
        />
      ) : (
        <h2
          className="card-name"
          onClick={() => {
            const originalIndex = collections.findIndex(
              (col) => col.name === collection.name
            );
            handleNameClick(originalIndex);
          }}
        >
          {collection.name}
        </h2>
      )}
      <p className="card-file-summary">
        {getFileCategorySummary(getFileExtension(collection.files))}
      </p>
    </div>
  );
}

export default MainCardEle;
