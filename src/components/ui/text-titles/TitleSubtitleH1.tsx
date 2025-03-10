export const TitleSubtitleH1 = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center">
      <h1 className="mb-fl-2xs">{title}</h1>
      <p className="mb-fl-md text-fl-base text-light-subtitle dark:text-dark-subtitle">
        {subtitle}
      </p>
    </div>
  );
};
