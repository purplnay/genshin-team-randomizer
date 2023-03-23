import clsx from "clsx";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import Checkbox from "~/components/Checkbox";
import Toggler from "~/components/Toggler";
import { Character, characters } from "~/lib/characters";

export default function Home() {
  /**
   * The latest generated team.
   */
  const [team, setTeam] = useState<Character[]>([]);

  /**
   * The active elements.
   */
  const [elements, setElements] = useState({
    anemo: true,
    geo: true,
    electro: true,
    dendro: true,
    hydro: true,
    pyro: true,
    cryo: true,
  });

  /**
   * The active weapon types.
   */
  const [weapons, setWeapons] = useState({
    sword: true,
    polearm: true,
    claymore: true,
    catalyst: true,
    bow: true,
  });

  /**
   * The active rarities.
   */
  const [rarity, setRarity] = useState({
    4: true,
    5: true,
  });

  /**
   * The selected characters.
   */
  const [selected, setSelected] = useState(
    characters.map((character) => character.id)
  );

  // Keep in sync with localStorage (ref to track only next renders)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      const ids = localStorage.getItem("selected");

      if (ids) {
        setSelected(JSON.parse(ids));
      }

      isFirstRender.current = false;
    } else {
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }, [selected]);

  /**
   * The character search by name.
   */
  const [search, setSearch] = useState("");

  /**
   * The filtered characters.
   */
  const filteredCharacters = characters
    .filter((character) => elements[character.element])
    .filter((character) => weapons[character.weapon])
    .filter((character) => rarity[character.rarity]);

  /**
   * Generate a random team based on current filters.
   */
  function generateTeam(e: FormEvent) {
    e.preventDefault();

    // Filter all chars (and traveler out)
    const filtered = filteredCharacters.filter(
      (item) =>
        selected.includes(item.id) &&
        !item.id.includes("aether") &&
        !item.id.includes("lumine")
    );

    // Get the active travelers
    const travelers = filteredCharacters.filter(
      (item) =>
        selected.includes(item.id) &&
        (item.id.includes("aether") || item.id.includes("lumine"))
    );

    // Pick a random traveler
    const traveler =
      travelers[Math.floor(Math.random() * travelers.length)] || null;

    // Add the traveler to the active chars if any
    if (traveler) {
      filtered.push(traveler);
    }

    const selection: Character[] = [];

    if (filtered.length <= 4) {
      // Just use the whole list
      selection.push(...filtered);
    } else {
      while (selection.length < 4) {
        const char = filtered[Math.floor(Math.random() * filtered.length)];

        // Only add a char once
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

        <button
          className="rounded bg-purple-400 px-4 py-2 text-white"
          type="submit"
        >
          Generate team
        </button>
      </form>

      <div>
        <div>
          <button
            className="rounded bg-purple-400 px-4 py-2 text-sm text-white disabled:opacity-70"
            disabled={selected.length === characters.length}
            onClick={() =>
              setSelected(characters.map((character) => character.id))
            }
          >
            Select all
          </button>
          <button
            className="rounded bg-purple-400 px-4 py-2 text-sm text-white disabled:opacity-70"
            disabled={!selected.length}
            onClick={() => setSelected([])}
          >
            Deselect all
          </button>
        </div>

        <div>
          <input
            placeholder="Search name"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setSearch("")}>X</button>
        </div>

        <ul>
          {filteredCharacters
            .filter((character) =>
              character.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((character) => (
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
