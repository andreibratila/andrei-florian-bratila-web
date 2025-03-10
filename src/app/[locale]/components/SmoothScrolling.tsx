import { ReactLenis } from 'lenis/react';

export const SmoothScrolling = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const lenis = useLenis();

  // useEffect(() => {
  //   lenis?.scrollTo(0, { immediate: true });
  // }, [lenis]);

  return (
    <ReactLenis root options={{ autoRaf: true }}>
      {children}
    </ReactLenis>
  );
};
