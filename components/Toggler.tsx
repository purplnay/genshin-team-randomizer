import clsx from "clsx";
import Image from "next/image";
import { useId, useRef, useState } from "react";

interface Props {
  label: string;
  image: string;
  onToggle(val: boolean): any;
}

/**
 * A toggleable image.
 */
export default function Toggler({ label, image, onToggle }: Props) {
  const id = useId();

  const ref = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState(true);

  return (
    <div>
      <label
        className={clsx("cursor-pointer", !selected && "opacity-50")}
        htmlFor={id}
      >
        <Image src={image} alt={`${label}'s icon`} width={48} height={48} />
        <span className="sr-only">{label}</span>
      </label>
      <input
        ref={ref}
        id={id}
        className="sr-only"
        type="checkbox"
        checked={selected}
        onChange={() => {
          setSelected(!selected);
          onToggle(!selected);
        }}
      />
    </div>
  );
}
