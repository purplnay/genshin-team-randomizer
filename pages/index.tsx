import clsx from "clsx";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Checkbox from "~/components/Checkbox";
import Toggler from "~/components/Toggler";
import { Character, characters } from "~/lib/characters";

export default function Home() {
  const [team, setTeam] = useState<Character[]>([]);

  const [elements, setElements] = useState({
    anemo: true,
    geo: true,
    electro: true,
    dendro: true,
    hydro: true,
    pyro: true,
    cryo: true,
  });

  const [weapons, setWeapons] = useState({
    sword: true,
    polearm: true,
    claymore: true,
    catalyst: true,
    bow: true,
  });

  const [rarity, setRarity] = useState({
    4: true,
    5: true,
  });

  const [selected, setSelected] = useState(
    characters.map((character) => character.id)
  );

  const filteredCharacters = characters
    .filter((character) => elements[character.element])
    .filter((character) => weapons[character.weapon])
    .filter((character) => rarity[character.rarity]);

  function generateTeam(e: FormEvent) {
    e.preventDefault();

    const filtered = filteredCharacters.filter((item) =>
      selected.includes(item.id)
    );

    const selection: Character[] = [];

    if (filtered.length <= 4) {
      selection.push(...filtered);
    } else {
      while (selection.length < 4) {
        const char = filtered[Math.floor(Math.random() * filtered.length)];

        if (!selection.find((item) => item.id === char.id)) {
          selection.push(char);
        }
      }
    }

    setTeam(selection);
  }

  return (
    <div>
      <div>
        <p>Team:</p>

        <ul>
          <li>{team[0]?.name || "<none>"}</li>
          <li>{team[1]?.name || "<none>"}</li>
          <li>{team[2]?.name || "<none>"}</li>
          <li>{team[3]?.name || "<none>"}</li>
        </ul>
      </div>

      <form onSubmit={generateTeam}>
        <div>
          <p>Elements</p>
          <div className="flex flex-wrap">
            {Object.keys(elements).map((element) => (
              <Toggler
                key={element}
                label={element[0].toUpperCase() + element.substring(1)}
                image={`/elements/${element}.webp`}
                onToggle={(v) => setElements({ ...elements, [element]: v })}
              />
            ))}
          </div>
        </div>

        <div>
          <p>Weapons</p>
          <div className="flex flex-wrap">
            {Object.keys(weapons).map((weapon) => (
              <Toggler
                key={weapon}
                label={weapon[0].toUpperCase() + weapon.substring(1)}
                image={`/weapons/${weapon}.webp`}
                onToggle={(v) => setWeapons({ ...weapons, [weapon]: v })}
              />
            ))}
          </div>
        </div>

        <div>
          <p>Rarity</p>
          <div className="flex">
            {Object.keys(rarity).map((r) => (
              <Checkbox
                key={r}
                label={`${r} stars`}
                onToggle={(v) => setRarity({ ...rarity, [r]: v })}
              />
            ))}
          </div>
        </div>

        <button className="bg-blue-400 px-4 py-2" type="submit">
          Generate team
        </button>
      </form>

      <div>
        <div>
          <button
            onClick={() =>
              setSelected(characters.map((character) => character.id))
            }
          >
            Select all
          </button>
          <button onClick={() => setSelected([])}>Deselect all</button>
        </div>

        <ul>
          {filteredCharacters.map((character) => (
            <li
              key={character.id}
              className={selected.includes(character.id) ? "" : "opacity-50"}
            >
              <p>{character.name}</p>
              <button
                onClick={() =>
                  setSelected((s) => {
                    if (!s.includes(character.id)) {
                      return [...s, character.id];
                    }

                    return s.filter((item) => item !== character.id);
                  })
                }
              >
                <Image
                  src={`/icons/${character.id}.webp`}
                  alt={character.name}
                  width={64}
                  height={64}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
