import Image from "next/image";
import { FormEvent, useState } from "react";
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

  const filteredCharacters = characters
    .filter((character) => elements[character.element])
    .filter((character) => weapons[character.weapon])
    .filter((character) => rarity[character.rarity]);

  function generateTeam(e: FormEvent) {
    e.preventDefault();

    const selection: Character[] = [];

    if (filteredCharacters.length <= 4) {
      selection.push(...filteredCharacters);
    } else {
      while (selection.length < 4) {
        const char =
          filteredCharacters[
            Math.floor(Math.random() * filteredCharacters.length)
          ];

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
          <label htmlFor="anemo">Anemo</label>
          <input
            id="anemo"
            type="checkbox"
            checked={elements.anemo}
            onChange={(e) =>
              setElements({ ...elements, anemo: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="geo">Geo</label>
          <input
            id="geo"
            type="checkbox"
            checked={elements.geo}
            onChange={(e) =>
              setElements({ ...elements, geo: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="electro">Electro</label>
          <input
            id="electro"
            type="checkbox"
            checked={elements.electro}
            onChange={(e) =>
              setElements({ ...elements, electro: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="dendro">Dendro</label>
          <input
            id="dendro"
            type="checkbox"
            checked={elements.dendro}
            onChange={(e) =>
              setElements({ ...elements, dendro: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="hydro">Hydro</label>
          <input
            id="hydro"
            type="checkbox"
            checked={elements.hydro}
            onChange={(e) =>
              setElements({ ...elements, hydro: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="pyro">Pyro</label>
          <input
            id="pyro"
            type="checkbox"
            checked={elements.pyro}
            onChange={(e) =>
              setElements({ ...elements, pyro: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="cryo">Cryo</label>
          <input
            id="cryo"
            type="checkbox"
            checked={elements.cryo}
            onChange={(e) =>
              setElements({ ...elements, cryo: e.target.checked })
            }
          />
        </div>

        <br />
        <div>
          <label htmlFor="sword">Sword</label>
          <input
            id="sword"
            type="checkbox"
            checked={weapons.sword}
            onChange={(e) =>
              setWeapons({ ...weapons, sword: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="polearm">Polearm</label>
          <input
            id="polearm"
            type="checkbox"
            checked={weapons.polearm}
            onChange={(e) =>
              setWeapons({ ...weapons, polearm: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="claymore">Claymore</label>
          <input
            id="claymore"
            type="checkbox"
            checked={weapons.claymore}
            onChange={(e) =>
              setWeapons({ ...weapons, claymore: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="catalyst">Catalyst</label>
          <input
            id="catalyst"
            type="checkbox"
            checked={weapons.catalyst}
            onChange={(e) =>
              setWeapons({ ...weapons, catalyst: e.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="bow">Bow</label>
          <input
            id="bow"
            type="checkbox"
            checked={weapons.bow}
            onChange={(e) => setWeapons({ ...weapons, bow: e.target.checked })}
          />
        </div>

        <br />

        <div>
          <label htmlFor="four-star">4 Star</label>
          <input
            id="four-star"
            type="checkbox"
            checked={rarity[4]}
            onChange={(e) => setRarity({ ...rarity, [4]: e.target.checked })}
          />
        </div>
        <div>
          <label htmlFor="five-star">5 Star</label>
          <input
            id="five-star"
            type="checkbox"
            checked={rarity[5]}
            onChange={(e) => setRarity({ ...rarity, [5]: e.target.checked })}
          />
        </div>

        <button className="bg-blue-400 px-4 py-2" type="submit">
          Generate team
        </button>
      </form>

      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
            <Image
              src={`/icons/${character.id}.webp`}
              alt={character.name}
              width={64}
              height={64}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
