export const TechnologyBadge = ({ tech }: { tech: string }) => {
  return (
    <li className="rounded-md bg-blue-600/10 px-3 py-1 text-fl-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
      {tech}
    </li>
  );
};
