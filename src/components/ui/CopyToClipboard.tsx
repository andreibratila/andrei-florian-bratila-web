'use client';

import { useEffect } from 'react';

import { useCopyToClipboard } from '@uidotdev/usehooks';
import { toast } from 'sonner';

export const CopyToClipboard = ({
  text,
  textTraduction,
  children,
}: {
  text: string;
  textTraduction: string;
  children: React.ReactNode;
}) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  useEffect(() => {
    if (copiedText) {
      toast.success(textTraduction);
      copyToClipboard('');
    }
  }, [copiedText, textTraduction, copyToClipboard]);

  return (
    <button aria-label="Copy Clipboard" onClick={() => copyToClipboard(text)}>
      {children}
    </button>
  );
};
