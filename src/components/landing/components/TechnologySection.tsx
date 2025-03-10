import Link from 'next/link';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';

import { TecnologiesI } from '../data';
import { CardTecnology } from './CardTecnology';

export const TechnologySection = ({
  title,
  technologies,
  locale,
  legendText,
  className,
  linkClassName,
}: {
  title: string;
  technologies: TecnologiesI[];
  locale: string;
  legendText: string;
  className?: string;
  linkClassName?: string;
}) => {
  return (
    <div className="mt-fl-lg">
      <div className="flex w-full place-content-between place-items-end px-fl-3xs">
        <h3>{title}</h3>
        <HoverMouseButtonType>
          <Link
            className={`${linkClassName} text-link text-fl-base font-extralight underline dark:text-dark-link`}
            href={`/${locale}/legend`}
            scroll={false}
          >
            {legendText}
          </Link>
        </HoverMouseButtonType>
      </div>
      <div className={`grid ${className} p-fl-3xs`}>
        {/* <div className="flex w-full flex-wrap justify-between gap-fl-md"> */}
        {technologies.map(({ title, Icon, category }, index) => (
          <CardTecnology
            key={title}
            category={category}
            className={` ${index >= 12 && 'md:hidden 2xl:block'} `}
          >
            <Icon className="h-[80%] w-full" />
            <div className="mt-fl-xs w-full rounded-sm bg-light-bg dark:bg-dark-bg">
              <span className="mt-fl-md text-fl-sm font-bold text-light-text dark:text-dark-text">
                {title}
              </span>
            </div>
          </CardTecnology>
        ))}
      </div>
    </div>
  );
};
