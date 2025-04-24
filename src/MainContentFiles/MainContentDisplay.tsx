import React, { JSX, useEffect, useState } from "react";
import CreateCollectionPopup from "../CreateCollectionPopup";
import { useCollectionPopup } from "../CollectionPopupContext";
import data from "../data.json";
import MainCardEle from "./MainCardEle";
import "../css/MainContentDisplay.css"; // ✅ Imported CSS file

function MainContentDisplay(): JSX.Element {
  const [collections, setCollections] = useState<
    { name: string; cover: string; files: File[] }[]
  >([]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(1);
  const ItemsPerPage = 8;

  const { isOpen, openPopup, closePopup, activeType, searchQuery } = useCollectionPopup();

  useEffect(() => {
    setCollections(
      data.dummyCollections.map((collection) => ({
        ...collection,
        files: collection.files.map((fileName) => new File([], fileName)), 
      }))
    );
  }, []);

  const getFileExtension = (files: File[]): string[] =>
    files.map((file) => file.name.split(".").pop()?.toLowerCase() || "");

  const getFileCategorySummary = (extensions: string[]): string => {
    let photoCount = 0;
    let documentCount = 0;
    let videoCount = 0;
    let othersCount = 0;

    extensions.forEach((ext) => {
      if (["jpg", "jpeg", "png", "webp"].includes(ext)) photoCount++;
      else if (["pdf", "txt", "doc", "docx"].includes(ext)) documentCount++;
      else if (["mp4", "mov", "avi", "mkv"].includes(ext)) videoCount++;
      else othersCount++;
    });

    const summary: string[] = [];
    if (photoCount) summary.push(`${photoCount} Photo${photoCount > 1 ? "s" : ""}`);
    if (documentCount) summary.push(`${documentCount} Document${documentCount > 1 ? "s" : ""}`);
    if (videoCount) summary.push(`${videoCount} Video${videoCount > 1 ? "s" : ""}`);
    if (othersCount) summary.push(`${othersCount} Other File${othersCount > 1 ? "s" : ""}`);

    return summary.length > 0 ? summary.join(", ") : "No file";
  };

  const handleCreate = (data: { name: string; cover: File; files: File[] }) => {
    const coverURL = URL.createObjectURL(data.cover);
    setCollections((prev) => [
      ...prev,
      { name: data.name, cover: coverURL, files: data.files },
    ]);
    closePopup();
  };

  const handleNameClick = (index: number) => {
    setEditingIndex(index);
    setNewName(collections[index].name);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleRenameSubmit = () => {
    if (editingIndex === null) return;
    const updated = [...collections];
    updated[editingIndex].name = newName;
    setCollections(updated);
    setEditingIndex(null);
    setNewName("");
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleRenameSubmit();
    else if (e.key === "Escape") {
      setEditingIndex(null);
      setNewName("");
    }
  };

  const filterCollections = (
    collections: { name: string; cover: string; files: File[] }[]
  ) =>
    collections.filter((collection) => {
      const nameMatch = collection.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (!nameMatch) return false;

      const extensions = getFileExtension(collection.files);
      if (activeType === "photos")
        return extensions.some((ext) => ["jpg", "jpeg", "png", "webp"].includes(ext));
      if (activeType === "video")
        return extensions.some((ext) => ["mp4", "mov", "avi", "mkv"].includes(ext));
      if (activeType === "document")
        return extensions.some((ext) => ["pdf", "txt", "doc", "docx"].includes(ext));

      return true;
    });

  const filteredCollections = filterCollections(collections);

  const paginatedFilteredCollections = filteredCollections.slice(
    (pageCount - 1) * ItemsPerPage,
    pageCount * ItemsPerPage
  );

  const nextPageLogic = filteredCollections.slice(
    pageCount * ItemsPerPage,
    (pageCount + 1) * ItemsPerPage
  );

  return (
    <div className="main-container">
      {collections.length === 0 && (
        <button onClick={openPopup} className="create-btn">
          Create a new collection
        </button>
      )}

      {filteredCollections.length > 0 && (
        <div className="collection-grid">
          {paginatedFilteredCollections.map((collection, index) => (
            <MainCardEle
              key={index}
              collection={collection}
              editingIndex={editingIndex}
              index={index}
              newName={newName}
              handleNameChange={handleNameChange}
              handleRenameSubmit={handleRenameSubmit}
              handleRenameKeyDown={handleRenameKeyDown}
              handleNameClick={handleNameClick}
              collections={collections}
              getFileExtension={getFileExtension}
              getFileCategorySummary={getFileCategorySummary}
            />
          ))}
        </div>
      )}

      {filteredCollections.length === 0 && (
        <p className="no-results">No collections match your search.</p>
      )}

      <div className="pagination">
        <button
          onClick={() => setPageCount((prev) => prev - 1)}
          disabled={pageCount === 1}
          className={`page-btn ${pageCount === 1 ? "disabled" : "active"}`}
        >
          Prev
        </button>

        <span className="page-count">{pageCount}</span>

        <button
          onClick={() => setPageCount((prev) => prev + 1)}
          disabled={nextPageLogic.length === 0}
          className={`page-btn ${nextPageLogic.length === 0 ? "disabled" : "active"}`}
        >
          Next
        </button>
      </div>

      <CreateCollectionPopup
        isOpen={isOpen}
        onClose={closePopup}
        onSubmit={handleCreate}
      />
    </div>
  );
}

export default MainContentDisplay;
