import React, { JSX, useState } from "react";
import CreateCollectionPopup from "../CreateCollectionPopup"; // adjust path as needed
import { useCollectionPopup } from "../CollectionPopupContext";

function MainContentDisplay(): JSX.Element {
  const [collections, setCollections] = useState<
    { name: string; cover: string; files: File[] }[]
  >([]);

  const { isOpen, openPopup, closePopup } = useCollectionPopup();

  const handleCreate = (data: { name: string; cover: File; files: File[] }) => {
    const coverURL = URL.createObjectURL(data.cover);

    setCollections((prevCollections) => [
      ...prevCollections,
      { name: data.name, cover: coverURL, files: data.files },
    ]);

    closePopup();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {collections.length === 0 && (
        <button
          onClick={openPopup}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow"
        >
          Create a new collection
        </button>
      )}

      {collections.length > 0 && (
        <div className="flex flex-col md:flex-row gap-4 mt-8 text-center">
          {collections.map((collection, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">{collection.name}</h2>
              <img
                src={collection.cover}
                alt="Cover"
                className="w-40 h-40 object-cover rounded-md mx-auto"
              />
              <p className="mt-2 text-gray-600">{collection.files.length} files saved</p>
            </div>
          ))}
        </div>
      )}

      <CreateCollectionPopup
        isOpen={isOpen}
        onClose={closePopup}
        onSubmit={handleCreate}
      />
    </div>
  );
}

export default MainContentDisplay;
