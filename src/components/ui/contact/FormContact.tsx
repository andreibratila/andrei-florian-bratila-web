import { useTranslations } from 'next-intl';

import { FormClient } from './FormClient';

export const FormContact = () => {
  const t = useTranslations('Contact');

  return (
    <div className="rounded-xl border border-gray-300 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-fl-base font-semibold dark:text-white">
        {t('form.title')}
      </h3>
      <FormClient
        nameTraduction={t('form.name')}
        emailTraduction={t('form.email')}
        subjectTraduction={t('form.subject')}
        messageTraduction={t('form.message')}
        sendTraduction={t('form.send')}
        errorTraduction={t('form.errorTraduction')}
        successTraduction={t('form.successTraduction')}
      />
    </div>
  );
};
