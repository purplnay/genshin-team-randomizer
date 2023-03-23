export interface Character {
  id: string;
  name: string;
  element: "anemo" | "geo" | "electro" | "dendro" | "hydro" | "pyro" | "cryo";
  weapon: "sword" | "polearm" | "claymore" | "catalyst" | "bow";
  rarity: 4 | 5;
}

export const characters: Character[] = [
  {
    id: "albedo",
    name: "Albedo",
    element: "geo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "alhaitham",
    name: "Alhaitham",
    element: "dendro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "aloy",
    name: "Aloy",
    element: "cryo",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "amber",
    name: "Amber",
    element: "pyro",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "arataki-itto",
    name: "Itto",
    element: "geo",
    weapon: "claymore",
    rarity: 5,
  },
  {
    id: "barbara",
    name: "Barbara",
    element: "hydro",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "beidou",
    name: "Beidou",
    element: "electro",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "bennett",
    name: "Bennett",
    element: "pyro",
    weapon: "sword",
    rarity: 4,
  },
  {
    id: "candace",
    name: "Candace",
    element: "hydro",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "chongyun",
    name: "Chongyun",
    element: "cryo",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "collei",
    name: "Collei",
    element: "dendro",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "cyno",
    name: "Cyno",
    element: "electro",
    weapon: "polearm",
    rarity: 5,
  },
  {
    id: "diluc",
    name: "Diluc",
    element: "pyro",
    weapon: "claymore",
    rarity: 5,
  },
  {
    id: "diona",
    name: "Diona",
    element: "cryo",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "dori",
    name: "Dori",
    element: "electro",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "eula",
    name: "Eula",
    element: "cryo",
    weapon: "claymore",
    rarity: 5,
  },
  {
    id: "faruzan",
    name: "Faruzan",
    element: "anemo",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "fischl",
    name: "Fischl",
    element: "electro",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "ganyu",
    name: "Ganyu",
    element: "cryo",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "gorou",
    name: "Gorou",
    element: "geo",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "hu-tao",
    name: "Hu Tao",
    element: "pyro",
    weapon: "polearm",
    rarity: 5,
  },
  {
    id: "jean",
    name: "Jean",
    element: "anemo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "kaedehara-kazuha",
    name: "Kaedehara Kazuha",
    element: "anemo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "kaeya",
    name: "Kaeya",
    element: "cryo",
    weapon: "sword",
    rarity: 4,
  },
  {
    id: "kamisato-ayaka",
    name: "Ayaka",
    element: "cryo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "kamisato-ayato",
    name: "Ayato",
    element: "hydro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "keqing",
    name: "Keqing",
    element: "electro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "klee",
    name: "Klee",
    element: "pyro",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "kujou-sara",
    name: "Kujou Sara",
    element: "electro",
    weapon: "bow",
    rarity: 4,
  },
  {
    id: "kuki-shinobu",
    name: "Kuki Shinobu",
    element: "electro",
    weapon: "sword",
    rarity: 4,
  },
  {
    id: "layla",
    name: "Layla",
    element: "cryo",
    weapon: "sword",
    rarity: 4,
  },
  {
    id: "lisa",
    name: "Lisa",
    element: "electro",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "lumine-anemo",
    name: "Lumine (Anemo)",
    element: "anemo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "lumine-geo",
    name: "Lumine (Geo)",
    element: "geo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "lumine-electro",
    name: "Lumine (Electro)",
    element: "electro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "lumine-dendro",
    name: "Lumine (Dendro)",
    element: "dendro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "aether-anemo",
    name: "Aether (Anemo)",
    element: "anemo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "aether-geo",
    name: "Aether (Geo)",
    element: "geo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "aether-electro",
    name: "Aether (Electro)",
    element: "electro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "aether-dendro",
    name: "Aether (Dendro)",
    element: "dendro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "mona",
    name: "Mona",
    element: "hydro",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "nahida",
    name: "Nahida",
    element: "dendro",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "nilou",
    name: "Nilou",
    element: "hydro",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "ningguang",
    name: "Ningguang",
    element: "geo",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "noelle",
    name: "Noelle",
    element: "geo",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "qiqi",
    name: "Qiqi",
    element: "cryo",
    weapon: "sword",
    rarity: 5,
  },
  {
    id: "raiden-shogun",
    name: "Raiden Shogun",
    element: "electro",
    weapon: "polearm",
    rarity: 5,
  },
  {
    id: "razor",
    name: "Razor",
    element: "electro",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "rosaria",
    name: "Rosaria",
    element: "cryo",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "sangonomiya-kokomi",
    name: "Kokomi",
    element: "hydro",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "sayu",
    name: "Sayu",
    element: "anemo",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "shenhe",
    name: "Shenhe",
    element: "cryo",
    weapon: "polearm",
    rarity: 5,
  },
  {
    id: "shikanoin-heizou",
    name: "Shikanoin Heizou",
    element: "anemo",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "sucrose",
    name: "Sucrose",
    element: "anemo",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "tartaglia",
    name: "Tartaglia",
    element: "hydro",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "thoma",
    name: "Thoma",
    element: "pyro",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "tighnari",
    name: "Tighnari",
    element: "dendro",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "venti",
    name: "Venti",
    element: "anemo",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "wanderer",
    name: "Wanderer",
    element: "anemo",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "xiangling",
    name: "Xiangling",
    element: "pyro",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "xiao",
    name: "Xiao",
    element: "anemo",
    weapon: "polearm",
    rarity: 5,
  },
  {
    id: "xingqiu",
    name: "Xingqiu",
    element: "hydro",
    weapon: "sword",
    rarity: 4,
  },
  {
    id: "xinyan",
    name: "Xinyan",
    element: "pyro",
    weapon: "claymore",
    rarity: 4,
  },
  {
    id: "yae-miko",
    name: "Yae Miko",
    element: "electro",
    weapon: "catalyst",
    rarity: 5,
  },
  {
    id: "yanfei",
    name: "Yanfei",
    element: "pyro",
    weapon: "catalyst",
    rarity: 4,
  },
  {
    id: "yaoyao",
    name: "Yaoyao",
    element: "dendro",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "yelan",
    name: "Yelan",
    element: "hydro",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "yoimiya",
    name: "Yoimiya",
    element: "pyro",
    weapon: "bow",
    rarity: 5,
  },
  {
    id: "yun-jin",
    name: "Yun Jin",
    element: "geo",
    weapon: "polearm",
    rarity: 4,
  },
  {
    id: "zhongli",
    name: "Zhongli",
    element: "geo",
    weapon: "polearm",
    rarity: 5,
  },
];
