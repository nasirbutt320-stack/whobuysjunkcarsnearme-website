import { CheckIcon } from "./icons";

export default function CheckList({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`grid gap-3 ${
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="text-navy-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}
