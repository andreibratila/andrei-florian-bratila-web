'use client';

import { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { DivButtonMouse } from '@/components';
import type { LocaleI } from '@/i18n';

import { languages } from '../../../components/navbarTop/language-switch/dataLanguages';

export const CVDownloadClient = ({
  locale,
  buttonTraduction,
}: {
  locale: LocaleI;
  buttonTraduction: string;
}) => {
  const [selected, setSelected] = useState(locale);

  const handleDownload = () => {
    const cvUrl = `/cv/Andrei_Florian_Bratila_CV_Fullstack_Developer_${selected.toUpperCase()}.pdf`;
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Tabs de idiomas con efecto de desplazamiento */}
      <motion.div
        layout
        className="flex flex-wrap place-content-center place-items-center gap-fl-xs rounded-lg bg-white p-fl-2xs dark:bg-gray-800"
      >
        {Object.entries(languages).map(([, { path, Flag }]) => (
          <HoverMouseButtonType key={path}>
            <Chip
              text={path.toUpperCase()}
              selected={selected === path}
              setSelected={() => setSelected(path)}
            >
              <Flag className="mr-fl-3xs h-5 w-5" />
            </Chip>{' '}
          </HoverMouseButtonType>
        ))}
      </motion.div>
      <HoverMouseButtonType>
        <button onClick={handleDownload}>
          <DivButtonMouse
            durationAnimation={0.5}
            className="inline-flex place-items-center rounded-xl border-2 border-dark-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]"
          >
            <span className="inline-flex">
              <span>
                <FaFileDownload className="h-fl-md w-fl-md" />
              </span>
              {/* </span> */}
              <span className="ml-fl-3xs-xs text-nowrap text-fl-lg">
                {buttonTraduction}
              </span>
            </span>
          </DivButtonMouse>
        </button>
      </HoverMouseButtonType>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  children,
}: {
  text: string;
  selected: boolean;
  setSelected: () => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.button
      onClick={setSelected}
      layout
      className={`relative flex items-center rounded-md px-fl-2xs py-fl-3xs text-fl-xs font-medium transition-colors ${
        selected
          ? 'text-white'
          : 'text-light-text dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200'
      }`}
    >
      <span className="relative z-10 flex items-center">
        {children} {text}
      </span>
      {selected && (
        <motion.div
          layoutId="pill-tab"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-800"
        />
      )}
    </motion.button>
  );
};
