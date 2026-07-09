"use client";

import { useEffect } from "react";

export function Toast({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  useEffect(() => {
    const id = setTimeout(onDismiss, 2200);
    return () => clearTimeout(id);
  }, [onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
    >
      <div className="rounded-pill bg-ink px-4 py-2.5 font-body text-sm font-medium text-white shadow-card">
        {message}
      </div>
    </div>
  );
}
