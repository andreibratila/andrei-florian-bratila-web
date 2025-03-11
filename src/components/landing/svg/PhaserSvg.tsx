import React from 'react';

import Image from 'next/image';

export const PhaserSvg: React.FC = () => {
  return (
    <div
      className={`flex h-[90%] w-full place-content-center place-items-center`}
    >
      <Image
        src="/images/phaser-planet-small.avif"
        alt="Phaser"
        width={200}
        height={173}
        className="h-auto w-full"
      />
    </div>
  );
};
