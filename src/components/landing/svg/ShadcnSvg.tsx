export const ShadcnSvg: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 256 256"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    >
      <rect width="256" height="256" fill="none" />
      <line x1="208" y1="128" x2="128" y2="208" />
      <line x1="192" y1="40" x2="40" y2="192" />
    </svg>
  );
};
