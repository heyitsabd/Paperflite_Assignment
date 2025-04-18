import React, { createContext, useContext, useState, ReactNode } from "react";

interface CollectionPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const CollectionPopupContext = createContext<CollectionPopupContextType | undefined>(undefined);

export const CollectionPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <CollectionPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </CollectionPopupContext.Provider>
  );
};

export const useCollectionPopup = () => {
  const context = useContext(CollectionPopupContext);
  if (!context) throw new Error("useCollectionPopup must be used within a CollectionPopupProvider");
  return context;
};
