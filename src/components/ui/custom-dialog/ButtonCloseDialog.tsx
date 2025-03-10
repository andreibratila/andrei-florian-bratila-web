'use client';

import { IoIosCloseCircleOutline } from 'react-icons/io';

import { useRouter } from 'next/navigation';

export default function ButtonCloseDialog() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="absolute right-fl-2xs top-fl-2xs rounded-sm disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      onClick={() => router.back()}
    >
      <IoIosCloseCircleOutline className="h-fl-md w-fl-md" />
    </button>
  );
}
