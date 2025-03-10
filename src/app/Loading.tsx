'use client';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="flex space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-green-500 delay-200"></div>
        <div className="delay-400 h-4 w-4 animate-bounce rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}
