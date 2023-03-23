import { ReactNode } from "react";

interface Props {
  title: string;
  legend?: string;
  children: ReactNode;
}

export default function FilterSection({ title, legend, children }: Props) {
  return (
    <div className="space-y-2">
      <p className="flex items-center space-x-2">
        <span>{title}</span>
        {legend && <span className="text-sm text-zinc-300">({legend})</span>}
      </p>
      <ul className="flex flex-wrap">{children}</ul>
    </div>
  );
}
