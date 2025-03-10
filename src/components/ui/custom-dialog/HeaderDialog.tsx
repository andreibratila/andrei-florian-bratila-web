import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';

import ButtonCloseDialog from './ButtonCloseDialog';

export const HeaderDialog = ({ title }: { title: string }) => {
  return (
    <>
      <h2
        id="dialog-title"
        className="w-full text-center text-fl-xl font-semibold"
      >
        {title}
      </h2>
      <HoverMouseButtonType>
        <ButtonCloseDialog />
      </HoverMouseButtonType>
    </>
  );
};
