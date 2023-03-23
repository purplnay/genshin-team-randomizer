import autoAnimate from "@formkit/auto-animate";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import Checkbox from "~/components/Checkbox";
import FilterSection from "~/components/FilterSection";
import TeamCharacter from "~/components/TeamCharacter";
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
   * List ref for auto-animate.
   */
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listRef.current && autoAnimate(listRef.current);
  }, [listRef]);

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
    <div className="md:container md:mx-auto">
      <div className="mt-6 flex justify-center">
        <Link
          className="rounded bg-yellow-300 px-4 py-1 text-center text-xs text-black shadow-lg "
          href="/versions"
        >
          <p>
            Updated for version <strong>3.5 Phase 2</strong>!
          </p>
        </Link>
      </div>

      <h1 className="my-8 px-8 text-center text-3xl leading-snug sm:my-12 sm:text-4xl md:text-4xl lg:text-5xl">
        Genshin Team Randomizer
      </h1>

      <div className="flex flex-col items-center">
        <p className="mb-3 text-zinc-200">Generated team</p>

        <ul className="flex w-full max-w-2xl space-x-4">
          <TeamCharacter character={team[0]} />
          <TeamCharacter character={team[1]} />
          <TeamCharacter character={team[2]} />
          <TeamCharacter character={team[3]} />
        </ul>
      </div>

      <form onSubmit={generateTeam}>
        <button
          className="rounded bg-purple-400 px-4 py-2 text-white"
          type="submit"
        >
          Generate team
        </button>

        <FilterSection title="Elements">
          {Object.keys(elements).map((element) => (
            <Toggler
              key={element}
              label={element[0].toUpperCase() + element.substring(1)}
              image={`/elements/${element}.webp`}
              onToggle={(v) => setElements({ ...elements, [element]: v })}
            />
          ))}
        </FilterSection>

        <FilterSection title="Weapons">
          {Object.keys(weapons).map((weapon) => (
            <Toggler
              key={weapon}
              label={weapon[0].toUpperCase() + weapon.substring(1)}
              image={`/weapons/${weapon}.webp`}
              onToggle={(v) => setWeapons({ ...weapons, [weapon]: v })}
            />
          ))}
        </FilterSection>

        <FilterSection title="Rarity">
          {Object.keys(rarity).map((r) => (
            <Checkbox
              key={r}
              label={`${r} stars`}
              onToggle={(v) => setRarity({ ...rarity, [r]: v })}
            />
          ))}
        </FilterSection>
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

        <ul ref={listRef}>
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
