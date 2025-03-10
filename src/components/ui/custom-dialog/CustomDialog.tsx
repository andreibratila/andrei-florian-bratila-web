'use client';

import { useRouter } from 'next/navigation';

export function CustomDialog({
  children,
  styleDialogContent,
}: {
  children: React.ReactNode;
  styleDialogContent: string;
}) {
  const router = useRouter();
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => router.back()}
        data-state="open"
        className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        style={{ pointerEvents: 'auto' }}
        data-aria-hidden="false"
        aria-hidden="false"
      ></div>

      {/* Dialog Content */}
      <div
        role="dialog"
        aria-labelledby="dialog-title"
        data-state="open"
        className={`fixed left-[50%] top-[50%] z-50 flex max-h-[90vh] w-auto translate-x-[-50%] translate-y-[-50%] flex-col gap-4 overflow-y-auto rounded-xl border bg-light-bg p-6 shadow-xl duration-200 dark:bg-dark-bg ${styleDialogContent}`}
        style={{ pointerEvents: 'auto' }}
      >
        {children}
      </div>
    </>
  );
}
