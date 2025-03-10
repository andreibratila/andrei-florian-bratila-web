import { FaClock, FaExternalLinkAlt } from 'react-icons/fa';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import type { CertificateI } from '@/interface';

import { TechnologyBadge } from './TechnologyBadge';

export const CertificateCard = ({ cert }: { cert: CertificateI }) => {
  // <div className="flex flex-col justify-between space-y-fl-2xs rounded-xl border border-gray-300 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900">

  return (
    <div className="rounded-xl border-2 border-dark-bg p-fl-xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]">
      <div className="flex h-full flex-col justify-between space-y-fl-2xs">
        <div className="flex flex-col items-start space-y-fl-2xs">
          <h3 className="text-center text-fl-sm font-semibold">
            {cert.titleBlue}
            <span className="text-light-subtitle dark:text-dark-subtitle">
              {cert.title}
            </span>
          </h3>
          <p className="text-fl-xs">{cert.description}</p>
        </div>
        <div>
          <div className="flex w-full items-center justify-between rounded-lg text-fl-xs">
            <h4>Tecnologías</h4>
            <div className="flex items-center space-x-fl-3xs opacity-90">
              <FaClock />
              <p>{cert.hours} horas</p>
            </div>
          </div>
          {/* Lista de tecnologías debajo */}
          <ul className="mt-2 flex flex-wrap gap-2">
            {cert.tecnologias.map((tech, idx) => (
              <TechnologyBadge key={idx} tech={tech} />
            ))}
          </ul>
          <HoverMouseButtonType>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-fl-xs flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-dark-text shadow-md transition-colors duration-500 hover:bg-blue-700 dark:text-dark-text"
            >
              <FaExternalLinkAlt className="mr-fl-3xs" /> Ver Certificado
            </a>
          </HoverMouseButtonType>
        </div>
      </div>
    </div>
  );
};
