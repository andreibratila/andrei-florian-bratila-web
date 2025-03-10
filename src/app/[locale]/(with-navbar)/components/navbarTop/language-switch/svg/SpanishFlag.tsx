export const SpanishFlag: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      className={className}
    >
      <rect width="3" height="0.6" fill="#c60b1e" />
      <rect width="3" height="0.8" y="0.6" fill="#ffc400" />
      <rect width="3" height="0.6" y="1.42" fill="#c60b1e" />
    </svg>
  );
};
