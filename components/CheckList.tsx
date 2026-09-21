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
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-hazard-400 text-ink-900">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium text-ink-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}
