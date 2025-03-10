export const SoliditySvg: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-150 50 800 750"
    >
      <path
        className="opacity-45"
        d="M391.9 0l-130.7 232.3H0L130.6 0 391.9 0"
      />
      <path
        className="opacity-60"
        d="M261.2 232.3h261.3L391.9 0h-261.3L261.2 232.3z"
      />
      <path
        className="opacity-80"
        d="M130.6 464.5l130.6-232.2L130.6 0 0 232.3 130.6 464.5z"
      />
      <path
        className="opacity-45"
        d="M131.9 813l130.7-232.3h261.3L393.2 813H131.9"
      />
      <path
        className="opacity-60"
        d="M262.6 580.7h-261.3L131.9 813H393.2L262.6 580.7z"
      />
      <path
        className="opacity-80"
        d="M393.2 348.5l-130.6 232.2L393.2 813l130.7-232.3L393.2 348.5z"
      />
    </svg>
  );
};
