import { FaCopy, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { useTranslations } from 'next-intl';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import {
  EMAIL_ENV,
  GITHUB_URL_ENV,
  LINKEDIN_URL_ENV,
  X_URL_ENV,
} from '@/config';

import { CopyToClipboard } from '../CopyToClipboard';

export const InformacionContacto = () => {
  const t = useTranslations('Contact');

  return (
    <div className="rounded-xl border border-gray-300 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-fl-base font-semibold dark:text-white">
        {t('informacion.title')}
      </h3>
      <p className="mb-fl-xs text-gray-700 dark:text-gray-300">
        {t('informacion.description')}
      </p>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('informacion.email')}
          </label>
          <div className="inline-flex w-full items-center rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <CopyToClipboard
              text={EMAIL_ENV}
              textTraduction={t('informacion.phoneCopied')}
            >
              <HoverMouseButtonType>
                <FaCopy className="mr-fl-3xs" />
              </HoverMouseButtonType>
            </CopyToClipboard>

            <p>{EMAIL_ENV}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('informacion.phone')}
          </label>
          <div className="inline-flex w-full items-center rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <CopyToClipboard
              text={t('informacion.phone_value')}
              textTraduction={t('informacion.phoneCopied')}
            >
              <HoverMouseButtonType>
                <FaCopy className="mr-fl-3xs" />
              </HoverMouseButtonType>
            </CopyToClipboard>

            <p>{t('informacion.phone_value')}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('informacion.location')}
          </label>
          <div className="w-full rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>{t('informacion.location_value')}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('informacion.social')}
          </label>
          <div className="flex w-full space-x-fl-xs rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <a
              href={LINKEDIN_URL_ENV}
              target="_blank"
              rel="noopener"
              aria-label="Linkedin"
            >
              <HoverMouseButtonType>
                <FaGithub size={25} />{' '}
              </HoverMouseButtonType>
            </a>
            <a
              href={GITHUB_URL_ENV}
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <HoverMouseButtonType>
                <FaLinkedin size={25} />{' '}
              </HoverMouseButtonType>
            </a>
            <a
              href={X_URL_ENV}
              target="_blank"
              rel="noopener"
              aria-label="Twitter / X"
            >
              <HoverMouseButtonType>
                <FaXTwitter size={25} />{' '}
              </HoverMouseButtonType>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
