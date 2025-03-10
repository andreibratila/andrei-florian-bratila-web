// 'use server';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { HiOfficeBuilding } from 'react-icons/hi';

import Image from 'next/image';

import type { JobI } from '@/interface';

export const JobCardSelected: React.FC<{ exp: JobI }> = ({ exp }) => {
  return (
    <>
      <div className="w-[90%]">
        <h3 className="text-xl font-semibold text-dark-h3 dark:text-light-h3">
          <span className="text-blue-500">{exp.position}</span> - {exp.company}
        </h3>
        <div className="inline-flex items-center space-x-fl-3xs">
          <FaCalendarDays />
          <p className="text-dark-text dark:text-light-text">{exp.period}</p>
          <span className="text-dark-text dark:text-light-text"> | </span>
          <FaMapMarkerAlt />
          <p className="text-dark-text dark:text-light-text"> {exp.location}</p>
        </div>
        <h4 className="mt-fl-2xs font-medium text-dark-h3 dark:text-light-h3">
          {exp.title}
        </h4>
        <p className="mt-fl-3xs text-dark-text dark:text-light-text">
          {exp.description}
        </p>
      </div>
      <div className="flex h-fl-3xl w-fl-3xl transform place-content-center place-items-center overflow-hidden rounded-full border-2 border-blue-500 bg-light-bg shadow-md transition-transform duration-300 hover:scale-105 max-md:my-fl-md md:h-fl-2xl md:w-fl-2xl">
        {exp.image ? (
          <Image
            src={exp.image}
            alt={exp.company}
            width={400}
            height={400}
            className="h-auto w-full p-fl-3xs"
          />
        ) : (
          <HiOfficeBuilding className="h-auto w-full p-fl-xs text-light-text dark:text-light-text" />
        )}
      </div>
    </>
  );
};
