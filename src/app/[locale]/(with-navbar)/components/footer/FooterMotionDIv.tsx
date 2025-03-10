// 'use client';

// import { useLayoutEffect, useState } from 'react';

// import { motion } from 'framer-motion';
// import { useLenis } from 'lenis/react';

export const FooterMotionDIv = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [nearBottom, setNearBottom] = useState(false);
  // const lenis = useLenis();

  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     if (!lenis) return;
  //     const scrollPosition = lenis.scroll;
  //     const maxScroll = lenis.limit;
  //     const triggerPoint = maxScroll * 0.95; // 95% del scroll total
  //     setNearBottom(scrollPosition >= triggerPoint);
  //   };

  //   lenis?.on('scroll', handleScroll);
  //   return () => lenis?.off('scroll', handleScroll);
  // }, [lenis]);

  return (
    <div
      // initial={{ top: '100%' }}
      // animate={{ top: nearBottom ? '100%' : '-100%' }}
      // transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative flex w-full place-content-center place-items-center"
    >
      {children}
    </div>
  );
};
