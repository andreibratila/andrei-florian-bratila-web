export const CatalanFlag: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      className={className}
    >
      <rect width="3" height="0.222" fill="#FCDD09" />
      <rect width="3" height="0.222" fill="#DA121A" y="0.222" />
      <rect width="3" height="0.222" fill="#FCDD09" y="0.444" />
      <rect width="3" height="0.222" fill="#DA121A" y="0.666" />
      <rect width="3" height="0.222" fill="#FCDD09" y="0.888" />
      <rect width="3" height="0.222" fill="#DA121A" y="1.11" />
      <rect width="3" height="0.222" fill="#FCDD09" y="1.333" />
      <rect width="3" height="0.222" fill="#DA121A" y="1.555" />
      <rect width="3" height="0.444" fill="#FCDD09" y="1.777" />
    </svg>
  );
};
