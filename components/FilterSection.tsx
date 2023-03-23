import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FilterSection({ title, children }: Props) {
  return (
    <div>
      <p>{title}</p>
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
}
