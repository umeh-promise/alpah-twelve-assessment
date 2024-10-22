"use client";

import React, { useCallback, useEffect, useRef } from "react";
import ReactPortal from "./react-portal";
import { cn } from "@/utils";

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  parentClassName?: string;
  onClose?: () => void;
}

export default function Modal({
  children,
  className = "",
  parentClassName = "",
  isOpen = false,
  onClose,
}: ModalProps) {
  const modalRef = useRef(null);

  const handleCloseModal = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const handleEscapeKey = (event: { key: string }) => {
      if (event.key === "Escape" && isOpen) {
        handleCloseModal();
      }
    };
    document.body.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleCloseModal, isOpen]);

  return (
    <ReactPortal wrapperId="modal">
      <aside
        className={cn(
          "pointer-events-none fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-gray-400/20 px-4 py-11 opacity-0 transition-all duration-300 ease-linear",
          {
            "pointer-events-auto opacity-100": isOpen,
          },
          parentClassName,
        )}
        ref={modalRef}
      >
        <section
          className={cn(
            "mt-10 max-h-fit w-[33.5rem] max-w-full translate-x-full overflow-y-auto rounded-md bg-sidebar transition-all delay-100 duration-300 ease-linear md:w-40",
            {
              "translate-x-0": isOpen,
            },
            className,
          )}
          role="dialog"
        >
          {children}
        </section>
      </aside>
    </ReactPortal>
  );
}
