import React from 'react';

import Image from 'next/image';

export const ZustandSvg: React.FC = () => {
  return (
    <div className={`flex h-[90%] place-content-center place-items-center`}>
      <Image
        src="/images/zustand-logo.avif"
        alt="Phaser"
        width={528}
        height={413}
        className="h-auto w-full"
      />
    </div>
  );
};
