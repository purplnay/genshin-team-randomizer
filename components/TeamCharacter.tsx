import Image from "next/image";
import { Character } from "~/lib/characters";
import { elements } from "~/lib/elements";

interface Props {
  character?: Character;
}

export default function TeamCharacter({ character }: Props) {
  const src = character ? `/icons/${character.id}.webp` : "/empty.svg";
  const name = character ? character.name : "Empty";

  return (
    <div className="flex flex-1">
      <div className="flex flex-col items-center">
        <Image
          className="mb-1 rounded"
          src={src}
          alt={name}
          width={112}
          height={112}
          style={{
            backgroundColor: character && elements[character.element] + "af",
          }}
        />
        <p className="text-center text-sm">{name}</p>
      </div>
    </div>
  );
}
