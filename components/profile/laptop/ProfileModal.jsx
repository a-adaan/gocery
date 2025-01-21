"use client";
import { useEffect, useRef } from "react";

export default function ProfileModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  // Open/Close the modal based on `isOpen`
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal(); // Open the modal
    } else if (!isOpen && modalRef.current) {
      modalRef.current.close(); // Close the modal
    }

    const handleEscKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose(); // Close modal if ESC is pressed
      }
    };

    // Add the event listener when modal is open
    if (isOpen) {
      document.addEventListener("keydown", handleEscKeyPress);
    }

    // Cleanup the event listener when modal is closed
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  return (
    <dialog className="modal " ref={modalRef}>
      <div className="modal-box w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-hidden">
        <form method="dialog ">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className=" absolute right-2 top-2 m-4"
          >
            ✕
          </button>
          <kbd className="kbd kbd-sm">Esc</kbd>
        </form>
        {children}
      </div>
    </dialog>
  );
}
