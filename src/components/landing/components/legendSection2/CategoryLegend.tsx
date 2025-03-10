export const CategoryLegend = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => {
  return (
    <li className="flex items-center space-x-fl-xs">
      <span
        className={`h-fl-sm w-fl-sm rounded-full bg-gradient-to-r ${color}`}
      ></span>
      <span className="text-fl-lg">{name}</span>
    </li>
  );
};
