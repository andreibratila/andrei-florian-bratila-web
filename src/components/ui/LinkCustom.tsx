import Link from 'next/link';

export const LinkCustom = ({
  children,
  locale, // Valor por defecto
  href = '',
  className = '',
  scroll = true,
}: {
  children: React.ReactNode;
  locale: string;
  href?: string;
  className?: string;
  scroll?: boolean;
}) => {
  return (
    <Link className={className} href={`/${locale}/${href}`} scroll={scroll}>
      {children}
    </Link>
  );
};
