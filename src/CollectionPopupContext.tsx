import React, { createContext, useContext, useState, ReactNode } from "react";

interface CollectionPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  activeType: string;
  setActiveType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
}

const CollectionPopupContext = createContext<CollectionPopupContextType | undefined>(undefined);

export const CollectionPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <CollectionPopupContext.Provider
      value={{ isOpen, openPopup, closePopup, activeType, setActiveType, searchQuery, setSearchQuery }}
    >
      {children}
    </CollectionPopupContext.Provider>
  );
};

export const useCollectionPopup = () => {
  const context = useContext(CollectionPopupContext);
  if (!context) throw new Error("useCollectionPopup must be used within a CollectionPopupProvider");
  return context;
};
