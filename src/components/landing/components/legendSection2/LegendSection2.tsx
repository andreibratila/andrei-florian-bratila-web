import { useTranslations } from 'next-intl';

import { HeaderDialog } from '@/components';

import { categorysSection2 } from '../../data';
import { CategoryLegend } from './CategoryLegend';

export const LegendSection2 = () => {
  const t = useTranslations('Tecnologies');

  const categoriesMaped = Object.entries(categorysSection2).map(
    ([name, { color }]) => (
      <CategoryLegend key={name} name={t(name)} color={color} />
    ),
  );

  return (
    <>
      <HeaderDialog title={t('legend')} />
      {/* <h3 className="mb-fl-xs text-center text-fl-xl font-bold">Legend</h3> */}
      {categoriesMaped}
    </>
  );
};
