export const UbuntuSvg: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle fill="#f47421" cy="50" cx="50" r="45" />
      <circle
        fill="none"
        stroke="#ffffff"
        strokeWidth="8.55"
        cx="50"
        cy="50"
        r="21.825"
      />
      <g id="friend">
        <circle fill="#f47421" cx="19.4" cy="50" r="8.4376" />
        <path stroke="#f47421" strokeWidth="3.2378" d="M67,50H77" />
        <circle fill="#ffffff" cx="19.4" cy="50" r="6.00745" />
      </g>
      <use transform="rotate(120,50,50)" />
      <use transform="rotate(240,50,50)" />
    </svg>
  );
};
