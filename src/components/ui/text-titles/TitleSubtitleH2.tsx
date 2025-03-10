export const TitleSubtitleH2 = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <h2 className="mb-fl-2xs text-center">{title}</h2>
      <p className="mb-fl-md text-center text-fl-base text-light-subtitle dark:text-dark-subtitle">
        {subtitle}
      </p>
    </>
  );
};
