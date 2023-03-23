import clsx from "clsx";
import { useId, useRef, useState } from "react";

interface Props {
  label: string;
  onToggle(v: boolean): any;
}

export default function Checkbox({ label, onToggle }: Props) {
  const id = useId();

  const ref = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(true);

  return (
    <div
      className={clsx(
        "cursor-pointer rounded bg-purple-400 px-4 py-2 text-sm text-white",
        !checked && "opacity-70"
      )}
    >
      <label className="cursor-pointer select-none" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
          onToggle(!checked);
        }}
      />
    </div>
  );
}
