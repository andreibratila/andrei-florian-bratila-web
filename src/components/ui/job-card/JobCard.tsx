import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { HiOfficeBuilding } from 'react-icons/hi';

import Image from 'next/image';

import { JobI } from '@/interface';

import { DivButtonMouse } from '../DivButtonMouse';
import { JobCardSelected } from './JobCardSelected';

export const JobCard = ({ exp }: { exp: JobI }) => {
  return (
    <DivButtonMouse
      durationAnimation={0.5}
      ComponentOptional={<JobCardSelected exp={exp} />}
      divPosition="flex items-center px-fl-sm py-fl-2xs"
      divText="text-white dark:text-light-text"
      className="flex items-center rounded-xl border-2 border-dark-bg px-fl-sm py-fl-2xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7] max-md:flex-col"
    >
      <div className="w-[90%]">
        <h3 className="text-xl font-semibold">
          <span className="text-blue-500 dark:text-blue-200">
            {exp.position}
          </span>{' '}
          - {exp.company}
        </h3>
        <div className="inline-flex items-center space-x-fl-3xs">
          <FaCalendarDays />
          <p className="">{exp.period}</p> <span> | </span>
          <FaMapMarkerAlt /> <p> {exp.location}</p>
        </div>
        <h4 className="mt-fl-2xs font-medium">{exp.title}</h4>
        <p className="mt-fl-3xs">{exp.description}</p>
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
    </DivButtonMouse>
  );
};
