import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from 'react-icons/fa';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { DivButtonMouse } from '@/components';
import { EMAIL_ENV, GITHUB_URL_ENV, LINKEDIN_URL_ENV } from '@/config';
import { Link } from '@/i18n';

import { SalutingHand } from '../Saludo';

export const Section1 = () => {
  const t = useTranslations('LandingSection1'); // Traducciones específicas para esta página
  return (
    <section className="flex flex-col pt-fl-3xl 2xl:container max-2xl:mx-fl-3xs-3xl">
      <div className="flex flex-col place-items-center font-bold 2xl:grid 2xl:grid-cols-3">
        <div className="col-span-2 flex flex-col">
          <div className="text-fl-3xl">
            <h1 className="flex flex-col space-y-fl-md text-fl-3xl">
              <span className="flex text-nowrap">
                {t('title')}
                <SalutingHand />
              </span>
              <span className="">
                {t('subtitle')}{' '}
                <span className="text-blue-500">Andrei Florian Bratila</span>
              </span>
            </h1>
          </div>
          <div className="mt-fl-lg flex flex-col max-md:space-y-fl-xs md:flex-row md:space-x-fl-md">
            <HoverMouseButtonType>
              <Link href="/cv-download" scroll={false}>
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
                      {t('button')}
                    </span>
                  </span>
                </DivButtonMouse>
              </Link>
            </HoverMouseButtonType>

            <div className="flex space-x-fl-xs">
              <HoverMouseButtonType>
                <a
                  target="_blank"
                  rel="noopener"
                  href={GITHUB_URL_ENV}
                  aria-label="Github"
                >
                  <DivButtonMouse
                    durationAnimation={0.4}
                    className="grid h-full w-full place-items-center rounded-xl border-2 border-dark-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]"
                  >
                    <FaGithub className="h-fl-md w-fl-md" />
                  </DivButtonMouse>
                </a>
              </HoverMouseButtonType>

              <HoverMouseButtonType>
                <a
                  className=""
                  target="_blank"
                  rel="noopener"
                  href={LINKEDIN_URL_ENV}
                  aria-label="Linkedin"
                >
                  <DivButtonMouse
                    durationAnimation={0.4}
                    className="grid h-full w-full place-items-center rounded-xl border-2 border-dark-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]"
                  >
                    <FaLinkedin className="h-fl-md w-fl-md" />
                  </DivButtonMouse>
                </a>
              </HoverMouseButtonType>

              <HoverMouseButtonType>
                <a href={`mailto:${EMAIL_ENV}}`} aria-label="Mail">
                  <DivButtonMouse
                    durationAnimation={0.4}
                    className="grid h-full w-full place-items-center rounded-xl border-2 border-dark-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black] dark:border-light-bg dark:shadow-[3px_3px_0px_#F7F7F7]"
                  >
                    <FaMailBulk className="h-fl-md w-fl-md" />
                  </DivButtonMouse>
                </a>
              </HoverMouseButtonType>
            </div>
          </div>
          <div className="mt-fl-xl text-fl-lg font-light text-gray-700 dark:text-gray-300 max-2xl:text-justify">
            <p>
              {t('p11')}
              <span className="font-bold text-blue-500">FullStack</span>
              {t('p12')}
              <span className="text-indigo-500"> TypeScript</span>,
              <span className="text-indigo-500"> Next.js</span>
              <span className="text-indigo-500"> Nest.js</span>,{t('p14')}
              <span className="font-medium text-green-500"> Web3 </span>(
              <span className="font-medium text-blue-600">smart contracts</span>
              {t('p15')}
              <span className="italic text-gray-800 dark:text-gray-200">
                {' '}
                Solidity
              </span>{' '}
              {t('p16')}
              <span className="font-medium text-orange-500"> Metamask</span>
              {t('p17')}
              <span className="text-yellow-500"> BSC</span>).
            </p>
            <p className="mt-fl-md">
              {t('p21')}
              <span className="font-medium text-red-500"> VPS</span>,{t('p22')}
              <span className="font-medium text-purple-500"> webhooks</span>
              {t('p23')}
              <span className="font-medium text-gray-500"> Nginx</span>
              {t('p24')}.
            </p>
          </div>
        </div>
        <Image
          className="rounded-full border-4 border-dark-bg transition-transform duration-500 hover:scale-105 dark:border-light-bg max-2xl:mt-fl-xl"
          src="/images/andrei.avif"
          alt="Andrei Florian Bratila"
          width={800}
          height={800}
          priority
        />
      </div>
    </section>
  );
};
