const megaMap = {
  venusaur: ["Venusaurite"],
  charizard: ["Charizardite X", "Charizardite Y"],
  blastoise: ["Blastoisinite"],
  alakazam: ["Alakazite"],
  gengar: ["Gengarite"],
  kangaskhan: ["Kangaskhanite"],
  pinsir: ["Pinsirite"],
  gyarados: ["Gyaradosite"],
  aerodactyl: ["Aerodactylite"],
  mewtwo: ["Mewtwonite X", "Mewtwonite Y"],
  ampharos: ["Ampharosite"],
  scizor: ["Scizorite"],
  heracross: ["Heracronite"],
  houndoom: ["Houndoominite"],
  tyranitar: ["Tyranitarite"],
  blaziken: ["Blazikenite"],
  gardevoir: ["Gardevoirite"],
  mawile: ["Mawilite"],
  aggron: ["Aggronite"],
  medicham: ["Medichamite"],
  manectric: ["Manectite"],
  banette: ["Banettite"],
  absol: ["Absolite"],
  garchomp: ["Garchompite"],
  lucario: ["Lucarionite"],
  abomasnow: ["Abomasite"],
};

// Object mapping Mega names to their Mega Stones
const megaStoneMap = {
  beedrill: ["Beedrillite"],
  pidgeot: ["Pidgeotite"],
  slowbro: ["Slowbronite"],
  steelix: ["Steelixite"],
  sceptile: ["Sceptilite"],
  swampert: ["Swampertite"],
  sableye: ["Sablenite"],
  sharpedo: ["Sharpedonite"],
  camerupt: ["Cameruptite"],
  altaria: ["Altarianite"],
  glalie: ["Glalitite"],
  salamence: ["Salamencite"],
  metagross: ["Metagrossite"],
  latias: ["Latiasite"],
  latios: ["Latiosite"],
  lopunny: ["Lopunnite"],
  gallade: ["Galladite"],
  audino: ["Audinite"],
  diancie: ["Diancite"],
};
legendsStones = {
  clefable: ["Clefablite"],
  victreebel: ["Victreebelite"],
  starmie: ["Starminite"],
  dragonite: ["Dragoninite"],
  meganium: ["Meganiumite"],
  feraligatr: ["Feraligite"],
  skarmory: ["Skarmorite"],
  froslass: ["Froslassite"],
  emboar: ["Emboarite"],
  excadrill: ["Excadrite"],
  scolipede: ["Scolipite"],
  scrafty: ["Scraftinite"],
  eelektross: ["Eelektrossite"],
  chandelure: ["Chandelurite"],
  chesnaught: ["Chesnaughtite"],
  delphox: ["Delphoxite"],
  greninja: ["Greninjite"],
  pyroar: ["Pyroarite"],
  malamar: ["Malamarite"],
  barbaracle: ["Barbaracite"],
  dragalge: ["Dragalgite"],
  hawlucha: ["Hawluchanite"],
  drampa: ["Drampanite"],
  falinks: ["Falinksite"],
  "floette (black)": ["Floettite"],
  zygarde: ["zygardite"],
};

const alolanForms = [
  "Rattata",
  "Raticate",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Vulpix",
  "Ninetales",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Geodude",
  "Graveler",
  "Golem",
  "Grimer",
  "Muk",
  "Exeggutor",
  "Marowak",
];

const gigantamaxForms = [
  "Venusaur",
  "Charizard",
  "Blastoise",
  "Pikachu",
  "Butterfree",
  "Meowth",
  "Machamp",
  "Gengar",
  "Kingler",
  "Lapras",
  "Eevee",
  "Snorlax",
  "Garbodor",
  "Corviknight",
  "Orbeetle",
  "Drednaw",
  "Coalossal",
  "Flapple",
  "Appletun",
  "Sandaconda",
  "Toxtricity-Amped",
  "Toxtricity-Low-Key",
  "Centiskorch",
  "Hatterene",
  "Grimmsnarl",
  "Alcremie",
  "Copperajah",
  "Duraludon",
  "Urshifu-Single",
  "Urshifu-Rapid",
  "Rillaboom",
  "Cinderace",
  "Inteleon",
];

const pokemon151 = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

// --- FORM ROTATING POKEMON SHINY TOGGLE ---
// List of baseNames for form-rotating Pokémon (except unown)
const formRotators = [
  "darmanitan-standard",
  "darmanitan-zen",
  "darmanitan-standard-galar",
  "darmanitan-zen-galar",
  "shaymin-land",
  "shaymin-sky",
  "castform",
  "castform-sunny",
  "castform-rainy",
  "castform-snowy",
  "burmy",
  "burmy-plant",
  "burmy-sandy",
  "burmy-trash",
  "giratina",
  "giratina-altered",
  "giratina-origin",
  "rotom",
  "rotom-heat",
  "rotom-wash",
  "rotom-frost",
  "rotom-fan",
  "rotom-mow",
  "rotom-normal",
  "deoxys-normal",
  "deerling",
  "deerling-spring",
  "deerling-summer",
  "deerling-autumn",
  "deerling-winter",
  "sawsbuck",
  "sawsbuck-spring",
  "sawsbuck-summer",
  "sawsbuck-autumn",
  "sawsbuck-winter",
  "meloetta-aria",
  "meloetta-pirouette",
  "tornadus-incarnate",
  "tornadus-therian",
  "thundurus-incarnate",
  "thundurus-therian",
  "landorus-incarnate",
  "landorus-therian",
  "enamorus-incarnate",
  "enamorus-therian",
  "keldeo-ordinary",
  "keldeo-resolute",
  "shellos",
  "gastrodon",
  "shellos-east",
  "gastrodon-east",
  "shellos-west",
  "gastrodon-west",
  "cherrim",
  "cherrim-overcast",
  "cherrim-sunshine",
  "meowstic-male",
  "meowstic-female",
  "aegislash-shield",
  "aegislash-blade",
  "furfrou",
  "vivillon",
  "xerneas",
  "xerneas-active",
  "xerneas-neutral",
  "flabebe-red",
  "flabebe-blue",
  "flabebe-yellow",
  "flabebe-white",
  "flabebe-orange",
  "floette-red",
  "floette-blue",
  "floette-yellow",
  "floette-white",
  "floette-orange",
  "florges-red",
  "florges-blue",
  "florges-yellow",
  "florges-white",
  "florges-orange",
  "zygarde-50",
  "indeedee-male",
  "indeedee-female",
  "arceus",
  "kyurem",
  "black-kyurem",
  "white-kyurem",
  "rayquaza",
  "kyogre",
  "groudon",
  "zygarde-10",
  "zygarde-complete",
  "furfrou-heart",
  "furfrou-star",
  "furfrou-diamond",
  "furfrou-debutante",
  "furfrou-matron",
  "furfrou-dandy",
  "furfrou-la-reine",
  "furfrou-kabuki",
  "furfrou-pharaoh",
  "vivillon-archipelago",
  "vivillon-continental",
  "vivillon-elegant",
  "vivillon-fancy",
  "vivillon-garden",
  "vivillon-high-plains",
  "vivillon-icy-snow",
  "vivillon-jungle",
  "vivillon-marine",
  "vivillon-meadow",
  "vivillon-modern",
  "vivillon-monsoon",
  "vivillon-ocean",
  "vivillon-poke-ball",
  "vivillon-polar",
  "vivillon-river",
  "vivillon-sandstorm",
  "vivillon-savanna",
  "vivillon-sun",
  "vivillon-tundra",
  "hoopa",
  "hoopa-unbound",
  "necrozma",
  "necrozma-dusk-mane",
  "necrozma-dawn-wings",
  "necrozma-ultra",
  "wishiwashi",
  "wishiwashi-school",
  "wishiwashi-solo",
  "silvally",
  "minior-red-meteor",
  "minior-blue-meteor",
  "minior-green-meteor",
  "minior-yellow-meteor",
  "minior-indigo-meteor",
  "minior-violet-meteor",
  "minior-orange-meteor",
  "minior-red",
  "minior-blue",
  "minior-green",
  "minior-yellow",
  "minior-indigo",
  "minior-violet",
  "minior-orange",
  "minior-meteorite",
  "mimikyu-disguised",
  "mimikyu-busted",
  "cramorant",
  "cramorant-gulping",
  "cramorant-gorging",
  "zacian",
  "zacian-crowned",
  "zamazenta",
  "zamazenta-crowned",
  "eiscue",
  "eiscue-ice",
  "eiscue-no-ice",
  "calyrex-ice",
  "calyrex-shadow",
  "zarude-dada",
  "zarude",
  "dialga-origin",
  "palkia-origin",
  "dialga",
  "palkia",
  "morpeko",
  "morpeko-hangry",
  "maushold",
  "maushold-family-of-three",
  "gimmighoul",
  "gimmighoul-roaming",
  "dudunsparce",
  "dudunsparce-three-segment",
  "ogerpon-teal",
  "ogerpon-wellspring",
  "ogerpon-hearthflame",
  "ogerpon-cornerstone",
  "pecharunt-shell",
  "pecharunt",
  "terapagos-stellar",
  "terapagos-terastal",
  "terapagos",
  "koraidon",
  "koraidon-mount",
  "miraidon",
  "miraidon-mount",
  "arceus-normal",
  "arceus-fire",
  "arceus-water",
  "arceus-electric",
  "arceus-grass",
  "arceus-ice",
  "arceus-fighting",
  "arceus-poison",
  "arceus-ground",
  "arceus-flying",
  "arceus-psychic",
  "arceus-bug",
  "arceus-rock",
  "arceus-ghost",
  "arceus-dragon",
  "arceus-dark",
  "arceus-steel",
  "arceus-fairy",
];

const visibilityMap = new WeakMap();

// --- Mega stone image fetcher ---
function getMegaStoneImgUrl(stoneName, version) {
  // Get the image from serebii
  const normalized = stoneName
    .toLowerCase()
    .replace(/ /g, "-")
    .replace("-", "");
  return `https://www.serebii.net/itemdex/sprites/${
    version === "plza" ? "za" : "pgl"
  }/${normalized}.png`;
}

const swordShieldImages = {};
const bdspImages = {};
const plaImages = {};
const svImages = {};
const letsGoImages = {};
const plzaImages = {};

(function injectThemeToggle() {
  if (document.getElementById("theme-toggle-btn")) return;

  const btn = document.createElement("button");
  btn.id = "theme-toggle-btn";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "10001";
  btn.style.padding = "8px 16px";
  btn.style.borderRadius = "8px";
  btn.style.border = "2px solid var(--accent-color)";
  btn.style.background = "var(--card-bg)";
  btn.style.color = "var(--accent-text)";
  btn.style.fontWeight = "bold";
  btn.style.cursor = "pointer";
  btn.textContent = "🌙 Dark Mode";

  // Insert after navbar if present, else at body start
  const nav = document.getElementById("pokelist-navbar");
  if (nav && nav.nextSibling) {
    nav.parentNode.insertBefore(btn, nav.nextSibling);
  } else {
    document.body.insertBefore(btn, document.body.firstChild);
  }

  // Helper: get current theme
  function getTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Helper: set theme
  function setTheme(theme, manual = false) {
    if (manual) {
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } else {
      // Only set attribute if manual override
      if (localStorage.getItem("theme")) {
        document.body.setAttribute("data-theme", theme);
      } else {
        document.body.removeAttribute("data-theme");
      }
    }
    btn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

  // On button click: toggle theme
  btn.onclick = function () {
    const current = getTheme();
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme, true);
  };

  // On page load: apply theme
  setTheme(getTheme());

  // Listen for system changes if no manual override
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
})();

// --- NAVIGATION BAR INJECTOR ---
(function injectNavbar() {
  if (document.getElementById("pokelist-navbar")) return;

  // Dropdown groups
  const groups = [
    {
      label: "Gen 1-3",
      type: "right",
      links: [
        { href: "red-blue.html", label: "Red/Blue" },
        { href: "yellow.html", label: "Yellow" },
        { href: "gold-silver.html", label: "Gold/Silver" },
        { href: "crystal.html", label: "Crystal" },
        { href: "ruby-sapphire.html", label: "Ruby/Sapphire" },
        { href: "emerald.html", label: "Emerald" },
        { href: "firered-leafgreen.html", label: "FireRed/LeafGreen" },
      ],
    },
    {
      label: "Gen 4-6",
      type: "left",
      links: [
        { href: "diamond-pearl.html", label: "Diamond/Pearl" },
        { href: "platinum.html", label: "Platinum" },
        { href: "heartgold-soulsilver.html", label: "HeartGold/SoulSilver" },
        { href: "black-white.html", label: "Black/White" },
        { href: "black2-white2.html", label: "Black 2/White 2" },
        { href: "x-y.html", label: "X/Y" },
        {
          href: "omegaruby-alphasapphire.html",
          label: "Omega Ruby/Alpha Sapphire",
        },
      ],
    },
    {
      label: "Gen 7+",
      type: "left",
      links: [
        { href: "sun-moon.html", label: "Sun/Moon" },
        { href: "ultra-sun-ultra-moon.html", label: "Ultra Sun/Ultra Moon" },
        { href: "letsgo.html", label: "Let's Go Pikachu/Eevee" },
        { href: "sword-shield.html", label: "Sword/Shield" },
        {
          href: "brilliantdiamond-shiningpearl.html",
          label: "Brilliant Diamond/Shining Pearl",
        },
        { href: "pla.html", label: "Legends: Arceus" },
        { href: "scarlet-violet.html", label: "Scarlet/Violet" },
        { href: "plza.html", label: "Legends: Z-A" },
      ],
    },
  ];

  const nav = document.createElement("nav");
  nav.id = "pokelist-navbar";

  // Home link
  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "Home";
  nav.appendChild(homeLink);

  // Dropdowns
  groups.forEach((group) => {
    const dropdown = document.createElement("div");
    dropdown.className = "pokelist-dropdown";
    if (group.type === "left") {
      dropdown.classList.add("left");
    }

    const selected = document.createElement("span");
    selected.className = "selected";
    selected.tabIndex = 0;
    selected.textContent = group.label;
    dropdown.appendChild(selected);

    const options = document.createElement("div");
    options.className = "options";
    group.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      options.appendChild(a);
    });
    dropdown.appendChild(options);

    // Dropdown toggle logic
    selected.onclick = (e) => {
      dropdown.classList.toggle("open");
    };

    nav.appendChild(dropdown);
  });

  document.body.insertBefore(nav, document.body.firstChild);
})();

(function () {
  const list = document.querySelector(".square-list");
  if (!list) return;

  const version = list.dataset.version;
  const mode = list.dataset.mode; // "single" or "double"
  const options = list.dataset.options ? list.dataset.options.split(",") : [];

  // -----------------------------------------------------
  // Normalizer for data-pokemon values (display stays same)
  // -----------------------------------------------------
  function normalizeName(name) {
    let lower = name.toLowerCase().trim();

    // Nidoran special handling
    if (lower === "nidoran♂" || lower === "nidoran♂".normalize("NFKD"))
      return "nidoran-m";
    if (lower === "nidoran♀" || lower === "nidoran♀".normalize("NFKD"))
      return "nidoran-f";

    // Farfetch'd → farfetchd
    if (lower === "farfetch'd") return "farfetchd";
    if (lower === "sirfetch'd") return "sirfetchd";

    // Mr. Mime → mr-mime
    if (lower === "mr. mime") return "mr-mime";

    // Mime Jr. → mime-jr
    if (lower === "mime jr.") return "mime-jr";

    // Mr. Rime → mr-rime
    if (lower === "mr. rime") return "mr-rime";

    if (lower === "deoxys") {
      if (version === "gen3") return "deoxys-normal";
      if (version === "emerald") return "deoxys-speed";
      if (version === "firered-leafgreen") return "deoxys-attack";
      return "deoxys-normal";
    }

    if (lower === "giratina") return "giratina-altered";

    if (lower === "shaymin") return "shaymin-land";

    if (lower === "darmanitan") return "darmanitan-standard";
    if (lower === "darmanitan-galar") return "darmanitan-standard-galar";

    if (lower === "basculin (red)") return "basculin-red-striped";
    if (lower === "basculin (blue)") return "basculin-blue-striped";
    if (lower === "basculin (white)") return "basculin-white-striped";

    if (lower === "tornadus") return "tornadus-incarnate";
    if (lower === "thundurus") return "thundurus-incarnate";
    if (lower === "landorus") return "landorus-incarnate";
    if (lower === "enamorus") return "enamorus-incarnate";

    if (lower === "keldeo") return "keldeo-ordinary";
    if (lower === "meloetta") return "meloetta-aria";

    if (lower === "cherrim" && version === "gen8") return "cherrim-overcast";

    if (lower.includes("flabébé")) return lower.replace("flabébé", "flabebe");

    if (lower === "meowstic") return "meowstic-male";

    if (lower === "aegislash") return "aegislash-shield";

    // Pumpkaboo and Gourgeist default to Super Size, so that the image resolution is better
    if (lower === "pumpkaboo") return "pumpkaboo-super";
    if (lower === "gourgeist") return "gourgeist-super";

    if (lower === "zygarde") return "zygarde-50";

    if (lower === "indeedee") return "indeedee-male";

    if (lower === "palafin") return "palafin-zero";

    if (lower.includes("tauros ")) {
      if (lower.includes("combat")) return "tauros-combat";
      if (lower.includes("blaze")) return "tauros-blaze";
      if (lower.includes("aqua")) return "tauros-aqua";
    }

    // Urshifu (Single Strike) -> urshifu-single, same with rapid
    if (lower.startsWith("urshifu")) {
      if (lower.includes("single")) return "urshifu-single";
      if (lower.includes("rapid")) return "urshifu-rapid";
    }

    if (lower.startsWith("alolan ")) return lower.slice(7) + "-alola";
    if (lower.startsWith("galarian "))
      return normalizeName(lower.slice(9)) + "-galar";
    if (lower.startsWith("hisuian "))
      return normalizeName(lower.slice(8)) + "-hisui";
    if (lower.startsWith("paldean "))
      return normalizeName(lower.slice(8)) + "-paldea";

    if (lower.includes("lycanroc")) {
      // It will be "Lycanroc (Form)", so change it to "lycanroc-form"
      const form = lower.match(/\(([^)]+)\)/);
      if (form && form[1]) {
        return `lycanroc-${form[1].toLowerCase()}`;
      }
    }
    if (lower.includes("oricorio")) {
      const form = lower.match(/\(([^)]+)\)/);
      if (form && form[1]) {
        return `oricorio-${form[1]
          .toLowerCase()
          .replace(/[\s]/g, "-")
          .replace(/[']/g, "")}`;
      }
    }

    if (lower === "wishiwashi") return "wishiwashi-solo";

    if (lower === "type:null") return "type-null";

    if (lower === "minior")
      return version !== "gen9" ? "minior-red-meteor" : "minior-meteorite";
    if (lower === "mimikyu") return "mimikyu-disguised";
    if (lower === "eiscue") return "eiscue-ice";

    if (lower.startsWith("floette") && lower.includes("black"))
      return "floette-eternal";

    if (lower === "ogerpon") return "ogerpon-teal";

    if (version === "gen7" || version === "ultra-sun-ultra-moon") {
      // Alolan forms
      const baseName = lower.trim();
      if (alolanForms.some((f) => f.toLowerCase().includes(baseName))) {
        return `${baseName}-alola`;
      }
    }

    // General fallback: strip punctuation & spaces
    return lower
      .replace(/[\s.']/g, "-") // replace spaces, periods, apostrophes with "-"
      .replace(/-+/g, "-") // compress double hyphens
      .replace(/[^a-z0-9-]/g, ""); // safety: remove unusual chars
  }

  // -----------------------------------------------------
  // Function to generate li elements
  // -----------------------------------------------------
  // --- Update generateListItems to handle multiple stones ---
  function generateListItems(pokemonArray, extraClass = "") {
    pokemonArray.forEach((name) => {
      const normalized = normalizeName(name);

      const li = document.createElement("li");
      if (extraClass) li.classList.add(extraClass);

      // Check if this Pokémon is a Mega
      const lowerName = name.toLowerCase();

      // --- Mega stone ---
      let megaStones = null;
      // Only show mega stones if version is a supported game
      if (
        version === "gen6" ||
        version === "omegaruby-alphasapphire" ||
        version === "gen7" ||
        version === "ultra-sun-ultra-moon" ||
        version === "letsgo" ||
        version === "plza"
      ) {
        // Add ORAS megas if version is omegaruby-alphasapphire or sun + moon
        if (
          version === "omegaruby-alphasapphire" ||
          version === "gen7" ||
          version === "ultra-sun-ultra-moon" ||
          version === "plza"
        ) {
          megaStones = megaMap[lowerName] || megaStoneMap[lowerName] || null;
          if (version === "plza") {
            megaStones = megaStones || legendsStones[lowerName] || null;
          }
        } else {
          megaStones = megaMap[lowerName] || null;
        }
      }

      // --- Extension state from localStorage ---
      let extStates = [];
      if (megaStones) {
        megaStones.forEach((stone, idx) => {
          const extKey = `mega-ext-${version}-${lowerName}-${idx}`;
          extStates[idx] = localStorage.getItem(extKey) || "circle";
        });
      }

      li.innerHTML = `
      <div class="item-header">${name}</div>
      <div class="tilt-wrapper">
        <img
          src=""
          alt="${name}"
          data-pokemon="${normalized}"
          data-version="${version}"
        />
        <span class="favorite-star">★</span>
      </div>
      <div class="item-footer">
        ${
          mode === "single"
            ? `<input type="checkbox" />`
            : options
                .map(
                  (opt) => `
                <label class="version-option">
                  <input type="checkbox" />
                  <span>${opt}</span>
                </label>
              `
                )
                .join("")
        }
      </div>
      ${
        megaStones
          ? `<div class="item-extension">
              ${megaStones
                .map(
                  (stone, idx) =>
                    `<img src="${
                      extStates[idx] === "stone"
                        ? getMegaStoneImgUrl(stone, version)
                        : "circle.png"
                    }" alt="${stone}" data-stone-index="${idx}">`
                )
                .join("")}
            </div>`
          : ""
      }
    `;

      list.appendChild(li);
    });
  }

  // -----------------------------------------------------
  // Generate list items for standard data-pokemon
  // -----------------------------------------------------
  if (list.dataset.pokemon) {
    const pokemonList = list.dataset.pokemon.split(",");
    generateListItems(pokemonList);
  }

  // -----------------------------------------------------
  // Generate list items for national data attribute
  // -----------------------------------------------------
  if (list.dataset.national) {
    const nationalList = list.dataset.national.split(",");
    generateListItems(nationalList, "national");
  }
})();

const spriteCache = {};

function ensureShinyStates(img) {
  if (!img.dataset.shinyStates) {
    img.dataset.shinyStates = JSON.stringify({
      gen1: false,
      yellow: false,
      gen2: false,
      crystal: false,
      gen3: false,
      emerald: false,
      "firered-leafgreen": false,
      gen4: false,
      platinum: false,
      "heartgold-soulsilver": false,
      gen5: false,
      gen52: false,
      gen6: false,
      "omegaruby-alphasapphire": false,
      gen7: false,
      "ultra-sun-ultra-moon": false,
      gen8: false,
      "brilliantdiamond-shiningpearl": false,
      pla: false, // Pokemon Legends: Arceus
      gen9: false,
      letsgo: false, // Pokemon Let's Go Pikachu/Eevee
      plza: false, // Pokemon Legends: Z-A
    });
  }
}

const generationMap = {
  gen1: "generation-i",
  yellow: "generation-i",
  gold: "generation-ii",
  silver: "generation-ii",
  crystal: "generation-ii",
  gen3: "generation-iii",
  emerald: "generation-iii",
  "firered-leafgreen": "generation-iii",
  gen4: "generation-iv",
  platinum: "generation-iv",
  "heartgold-soulsilver": "generation-iv",
  gen5: "generation-v",
  gen52: "generation-v",
  gen6: "generation-vi",
  "omegaruby-alphasapphire": "generation-vi",
  gen7: "generation-vii",
  "ultra-sun-ultra-moon": "generation-vii",
  gen8: "generation-viii",
  "brilliantdiamond-shiningpearl": "generation-viii",
  pla: "generation-viii",
  gen9: "generation-ix",
  letsgo: "generation-vii",
  plza: "generation-ix",
};

const generationMap2 = {
  gen1: "red-blue",
  yellow: "yellow",
  gold: "gold",
  silver: "silver",
  crystal: "crystal",
  gen3: "ruby-sapphire",
  emerald: "emerald",
  "firered-leafgreen": "firered-leafgreen",
  gen4: "diamond-pearl",
  platinum: "platinum",
  "heartgold-soulsilver": "heartgold-soulsilver",
  gen5: "black-white",
  gen52: "black-white",
  gen6: "x-y",
  "omegaruby-alphasapphire": "omegaruby-alphasapphire",
  gen7: "ultra-sun-ultra-moon", // Both gen7 and the actual ultra sun + moon are this, because there were no 2d sprites for sun + moon
  "ultra-sun-ultra-moon": "ultra-sun-ultra-moon",
  gen8: "sword-shield",
  "brilliantdiamond-shiningpearl": "brilliantdiamond-shiningpearl",
  pla: "legends-arceus",
  gen9: "scarlet-violet",
  letsgo: "lets-go",
  plza: "z-a",
};

const variantMap = {
  front_default: "",
  front_shiny: "_s",
  front_female: "_h",
  front_shiny_female: "_h_s",
};

function getShiny(img, version) {
  ensureShinyStates(img);
  const states = JSON.parse(img.dataset.shinyStates);
  if (version === "gold" || version === "silver") {
    return states["gen2"] || false;
  } else return states[version] || false;
}

function setShiny(img, version, shiny) {
  ensureShinyStates(img);
  const states = JSON.parse(img.dataset.shinyStates);
  if (version === "gold" || version === "silver") {
    states["gen2"] = shiny;
  } else states[version] = shiny;
  img.dataset.shinyStates = JSON.stringify(states);
}

document.querySelectorAll(".tilt-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // increased tilt factor: from /20 -> /12
    wrapper.style.transform = `perspective(500px) rotateX(${
      -y / 12
    }deg) rotateY(${x / 12}deg) scale(1.05)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.style.transform =
      "perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

async function fetchPokemonSprite(
  pokemonName,
  version = "gen1",
  variant = "front_default",
  custom = ""
) {
  // If the pokemon is not in first 151 and version is firered-leafgreen, change version to emerald
  if (
    version === "firered-leafgreen" &&
    !pokemon151.includes(
      pokemonName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("-")
    ) &&
    !pokemonName.startsWith("deoxys")
  ) {
    version = "emerald";
  }
  let form;
  // Get image form
  const img = document.querySelector(`img[data-pokemon='${pokemonName}']`);
  if (img) {
    form = img.dataset.form ? img.dataset.form : null;
  } else {
    form = null;
  }
  const cacheKey =
    pokemonName + (form ? form : "") + "-" + version + "-" + variant;

  if (spriteCache[cacheKey]) {
    return spriteCache[cacheKey];
  }

  try {
    let response;
    if (custom !== "") response = await fetch(custom);
    else {
      if (
        [
          "gen8",
          "brilliantdiamond-shiningpearl",
          "pla",
          "gen9",
          "letsgo",
          "plza",
        ].includes(version)
      ) {
        let img;
        document.querySelectorAll("img[data-pokemon]").forEach((item) => {
          // Check if they have a "form" data attribute, if so, remove that string and the hyphen before it from pokemonName, then search for an image with that data-pokemon attribute
          const form = item.dataset.form ? item.dataset.form : null;
          let baseName = pokemonName;
          if (form) {
            baseName = pokemonName.replace(`-${form}`, "");
          }
          if (item.dataset.pokemon === baseName) {
            img = item;
          }
        });
        const blankImg =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        const key = (
          pokemonName
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + variantMap[variant]
        ).replace("-Gigantamax", "_g");
        if (pokemonName.includes("flabebe") && version === "gen9") {
          const flabebeKey =
            Object.keys(flabebeColorMap)
              .find((k) => pokemonName.includes(k.split("-")[1]))
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant];
          if (svImages[flabebeKey]) {
            spriteCache[cacheKey] = svImages[flabebeKey];
            return svImages[flabebeKey];
          }
        } else if (pokemonName.includes("flabebe") && version === "plza") {
          const flabebeKey =
            Object.keys(flabebeColorMap)
              .find((k) => pokemonName.includes(k.split("-")[1]))
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant];
          if (plzaImages[flabebeKey]) {
            spriteCache[cacheKey] = plzaImages[flabebeKey];
            return plzaImages[flabebeKey];
          }
        }
        if (version === "gen8" && swordShieldImages[key]) {
          spriteCache[cacheKey] = swordShieldImages[key];
          return swordShieldImages[key];
        } else if (
          version === "brilliantdiamond-shiningpearl" &&
          bdspImages[key]
        ) {
          spriteCache[cacheKey] = bdspImages[key];
          return bdspImages[key];
        } else if (version === "pla" && plaImages[key]) {
          spriteCache[cacheKey] = plaImages[key];
          return plaImages[key];
        } else if (version === "gen9" && svImages[key]) {
          spriteCache[cacheKey] = svImages[key];
          return svImages[key];
        } else if (version === "letsgo" && letsGoImages[key]) {
          spriteCache[cacheKey] = letsGoImages[key];
          return letsGoImages[key];
        } else if (version === "plza" && plzaImages[key]) {
          spriteCache[cacheKey] = plzaImages[key];
          return plzaImages[key];
        } else if (pokemonName.endsWith("-alola") && version === "letsgo") {
          // Use pokeapi with ultra sun/moon
          spriteCache[cacheKey] = await fetchPokemonSprite(
            pokemonName,
            "ultra-sun-ultra-moon",
            variant,
            custom
          );
          return spriteCache[cacheKey];
        }
        if (
          pokemonName.includes("toxtricity") &&
          img &&
          img.dataset.form === "gigantamax"
        ) {
          pokemonName = "toxtricity-gigantamax"; // Special case for toxtricity gigantamax form
        }
        if (
          formRotators.includes(pokemonName) ||
          (img &&
            img.dataset.form &&
            !["normal", ""].includes(img.dataset.form))
        ) {
          // Don't use blankImg, use the actual one used in lazy loading
          const key = (
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ).replace("-Gigantamax", "_g");
          let url = null;
          if (version === "gen8") {
            if (swordShieldImages[key]) {
              spriteCache[cacheKey] = swordShieldImages[key];
              url = swordShieldImages[key];
            } else url = null;
          } else if (version === "brilliantdiamond-shiningpearl") {
            if (bdspImages[key]) {
              spriteCache[cacheKey] = bdspImages[key];
              url = bdspImages[key];
            } else url = null;
          } else if (version === "pla") {
            if (plaImages[key]) {
              spriteCache[cacheKey] = plaImages[key];
              url = plaImages[key];
            } else url = null;
          } else if (version === "gen9") {
            if (svImages[key]) {
              spriteCache[cacheKey] = svImages[key];
              url = svImages[key];
            } else url = null;
          } else if (version === "plza") {
            if (plzaImages[key]) {
              spriteCache[cacheKey] = plzaImages[key];
              url = plzaImages[key];
            } else url = null;
          } else if (version === "letsgo") {
            if (pokemonName.endsWith("-alola")) {
              // Use pokeapi with ultra sun/moon
              spriteCache[cacheKey] = await fetchPokemonSprite(
                pokemonName,
                "ultra-sun-ultra-moon",
                variant,
                custom
              );
              url = spriteCache[cacheKey];
            } else if (letsGoImages[key]) {
              spriteCache[cacheKey] = letsGoImages[key];
              url = letsGoImages[key];
            } else url = null;
          }
          if (url) return url;
          else {
            console.warn(
              "Image not found for key:",
              key,
              "using blankImg instead."
            );
          }
        }

        spriteCache[cacheKey] = blankImg;
        return blankImg;
      } else {
        // Flabebe handling for games that use pokeapi, use the links in the shiny toggling
        if (
          pokemonName.includes("flabebe") ||
          pokemonName.includes("floette") ||
          pokemonName.includes("florges")
        ) {
          isShiny = variant === "front_shiny";
          if (pokemonName.startsWith("flabebe")) {
            colorKey = Object.keys(flabebeColorMap).find(
              (k) => pokemonName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            );
            if (colorKey) {
              spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
                generationMap[version]
              }/${generationMap2[version]}/${isShiny ? "shiny/" : ""}${
                flabebeColorMap[colorKey]
              }.png`;
            }
          } else if (pokemonName.startsWith("floette")) {
            colorKey = Object.keys(floetteColorMap).find(
              (k) => pokemonName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            );
            if (colorKey) {
              spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
                generationMap[version]
              }/${generationMap2[version]}/${isShiny ? "shiny/" : ""}${
                floetteColorMap[colorKey]
              }.png`;
            }
          } else if (pokemonName.startsWith("florges")) {
            colorKey = Object.keys(florgesColorMap).find(
              (k) => pokemonName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            );
            if (colorKey) {
              spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
                generationMap[version]
              }/${generationMap2[version]}/${isShiny ? "shiny/" : ""}${
                florgesColorMap[colorKey]
              }.png`;
            }
          }
          spriteCache[cacheKey] = spriteUrl;
          return spriteUrl;
        } else {
          response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
          );
        }
      }
    }
    if (!response.ok)
      throw new Error(
        `Pokemon ${pokemonName} not found ${custom ? custom : ""}`
      );
    if (custom !== "") return custom;
    const data = await response.json();

    const gen = generationMap[version] || "generation-i";
    if (data.sprites.versions?.[gen]?.[generationMap2[version]]?.[variant]) {
      spriteCache[cacheKey] =
        data.sprites.versions[gen][generationMap2[version]][variant];
      return data.sprites.versions[gen][generationMap2[version]][variant];
    }
  } catch (error) {
    console.error("Fetch failed for", pokemonName, error);
    return "";
  }
}

const customUrls = ["flabebe", "floette", "florges"];
const customUrlNames = { flabebe: 669, floette: 670, florges: 671 };

const flabebeColorMap = {
  "flabebe-red": "669-red",
  "flabebe-blue": "669-blue",
  "flabebe-yellow": "669-yellow",
  "flabebe-white": "669-white",
  "flabebe-orange": "669-orange",
};
const floetteColorMap = {
  "floette-red": "670-red",
  "floette-blue": "670-blue",
  "floette-yellow": "670-yellow",
  "floette-white": "670-white",
  "floette-orange": "670-orange",
  "floette-eternal": "670-eternal",
};
const florgesColorMap = {
  "florges-red": "671-red",
  "florges-blue": "671-blue",
  "florges-yellow": "671-yellow",
  "florges-white": "671-white",
  "florges-orange": "671-orange",
};

// Automatically update all Pokémon images
async function setAllPokemonImages() {
  const images = Array.from(document.querySelectorAll("img[data-pokemon]"));
  await Promise.all(
    images.map(async (img) => {
      const pokemon = img.dataset.pokemon;
      let version;
      if (img.dataset.version === "gold" || img.dataset.version === "silver") {
        version = "gen2";
      } else version = img.dataset.version || "gen1";
      ensureShinyStates(img);
      let spriteUrl = "";

      // Flabébé color forms
      if (pokemon.startsWith("flabebe")) {
        const key = Object.keys(flabebeColorMap).find((k) =>
          pokemon.includes(k.split("-")[1])
        );
        if (version === "gen9") {
          const key =
            Object.keys(flabebeColorMap)
              .find((k) => pokemon.includes(k.split("-")[1]))
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (svImages[key]) {
            spriteUrl = svImages[key];
          }
        } else if (version === "plza") {
          const key =
            Object.keys(flabebeColorMap)
              .find((k) => pokemon.includes(k.split("-")[1]))
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (plzaImages[key]) {
            spriteUrl = plzaImages[key];
          }
        } else {
          if (key) {
            spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generationMap[version]}/${generationMap2[version]}/${flabebeColorMap[key]}.png`;
          }
        }
      }
      // Floette color forms
      else if (pokemon.startsWith("floette")) {
        const key = Object.keys(floetteColorMap).find((k) =>
          pokemon.includes(k.split("-")[1])
        );
        if (version === "plza") {
          const plzaKey =
            Object.keys(floetteColorMap)
              .find((k) => pokemon.includes(k.split("-")[1]))
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (plzaImages[plzaKey]) {
            spriteUrl = plzaImages[plzaKey];
          }
        } else if (version === "gen9") {
          const svKey =
            Object.keys(floetteColorMap)
              .find(
                (k) =>
                  pokemon.includes(k.split("-")[1]) && !k.includes("florges") // Exclude Florges keys
              )
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (svImages[svKey]) {
            spriteUrl = svImages[svKey];
          }
        } else if (key) {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generationMap[version]}/${generationMap2[version]}/${floetteColorMap[key]}.png`;
        }
      }
      // Florges color forms
      else if (pokemon.startsWith("florges")) {
        const key = Object.keys(florgesColorMap).find((k) =>
          pokemon.includes(k.split("-")[1])
        );
        if (version === "gen9") {
          const svKey =
            Object.keys(florgesColorMap)
              .find(
                (k) =>
                  pokemon.includes(k.split("-")[1]) && !k.includes("flabebe") // Exclude Flabebe keys
              )
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (svImages[svKey]) {
            spriteUrl = svImages[svKey];
          }
        } else if (version === "plza") {
          const plzaKey =
            Object.keys(florgesColorMap)
              .find(
                (k) =>
                  pokemon.includes(k.split("-")[1]) && !k.includes("flabebe") // Exclude Flabebe keys
              )
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap["front_default"];
          if (plzaImages[plzaKey]) {
            spriteUrl = plzaImages[plzaKey];
          }
        } else if (key) {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generationMap[version]}/${generationMap2[version]}/${florgesColorMap[key]}.png`;
        }
      }
      if (
        version === "brilliantdiamond-shiningpearl" &&
        pokemon.startsWith("unown")
      ) {
        // Special case for unown forms in BDSP
        const formLetter = pokemon.split("-")[1] || "a";
        const key = "Unown-" + formLetter.toUpperCase().split("").join("-");
        if (bdspImages[key]) {
          spriteUrl = bdspImages[key];
        }
      } else if (version === "pla" && pokemon.startsWith("unown")) {
        // Special case for unown forms in PLA
        const formLetter = pokemon.split("-")[1] || "a";
        const key = "Unown-" + formLetter.toUpperCase().split("").join("-");
        if (plaImages[key]) {
          spriteUrl = plaImages[key];
        }
      }
      // Normal case
      if (!spriteUrl) {
        spriteUrl = await fetchPokemonSprite(pokemon, version);
      }
      if (spriteUrl) img.src = spriteUrl;
    })
  );
}

async function init() {
  const list = document.querySelector(".square-list");
  const version = list?.dataset.version;

  if (version === "gen8") {
    const response = await fetch("sword-shield.json");
    const data = await response.json();
    Object.assign(swordShieldImages, data);
  } else if (version === "brilliantdiamond-shiningpearl") {
    const response = await fetch("bd-sp.json");
    const data = await response.json();
    Object.assign(bdspImages, data);
  } else if (version === "pla") {
    const response = await fetch("pla.json");
    const data = await response.json();
    Object.assign(plaImages, data);
  } else if (version === "gen9") {
    const response = await fetch("sv.json");
    const data = await response.json();
    Object.assign(svImages, data);
  } else if (version === "letsgo") {
    const response = await fetch("letsgo.json");
    const data = await response.json();
    Object.assign(letsGoImages, data);
  } else if (version === "plza") {
    const response = await fetch("plza.json");
    const data = await response.json();
    Object.assign(plzaImages, data);
  }

  await setAllPokemonImages();
  // Observe all images with data-pokemon (all gens)
  document.querySelectorAll("img[data-pokemon]").forEach((img) => {
    observer.observe(img);
  });
  rotateAll();

  // Force initial intersection check for elements already in view
  Array.from(document.querySelectorAll("img[data-version]"))
    .filter((img) => {
      return ["gen8", "brilliantdiamond-shiningpearl"].includes(
        img.dataset.version
      );
    })
    .forEach(async (img) => {
      const rect = img.getBoundingClientRect();
      const inView = rect.top < window.innerHeight + 200 && rect.bottom > -200;

      if (inView) {
        const pokemon = img.dataset.pokemon;
        const shiny = getShiny(img, version);
        const key =
          pokemon
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (shiny ? "_s" : "");

        if (version === "gen8") {
          if (swordShieldImages[key]) {
            img.src = swordShieldImages[key];
          }
        } else if (version === "brilliantdiamond-shiningpearl") {
          if (bdspImages[key]) img.src = bdspImages[key];
        } else if (version === "pla") {
          if (plaImages[key]) img.src = plaImages[key];
        } else if (version === "gen9") {
          if (svImages[key]) img.src = svImages[key];
        } else if (version === "plza") {
          if (plzaImages[key]) img.src = plzaImages[key];
        } else if (version === "letsgo") {
          if (pokemon.endsWith("-alola")) {
            // Use pokeapi with ultra sun/moon
            spriteCache[cacheKey] = fetchPokemonSprite(
              pokemon,
              "ultra-sun-ultra-moon",
              variant,
              custom
            );
            img.src = spriteCache[cacheKey];
          } else if (letsGoImages[key]) img.src = letsGoImages[key];
        } else {
          img.src = await fetchPokemonSprite(
            pokemon,
            version,
            shiny ? "front_shiny" : "front_default"
          );
        }
      }
    });
}

init();

// --- LAZY LOAD IMAGES FOR ALL GENERATIONS ---
const observer = new IntersectionObserver(
  async (entries) => {
    for (const entry of entries) {
      const img = entry.target;
      if (!img.dataset || !img.dataset.pokemon) continue;

      const pokemon = img.dataset.pokemon;
      const version = img.dataset.version;
      const shiny = getShiny(img, version);
      let key = (
        pokemon
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-") + (shiny ? "_s" : "")
      ).replace("-Gigantamax", "_g");

      if (entry.isIntersecting) {
        visibilityMap.set(img, true);
        // ENTER VIEW → load image if available
        if (version === "gen8" && swordShieldImages[key]) {
          img.src = swordShieldImages[key];
        } else if (
          version === "brilliantdiamond-shiningpearl" &&
          bdspImages[key]
        ) {
          img.src = bdspImages[key];
        } else if (version === "pla" && plaImages[key]) {
          img.src = plaImages[key];
        } else if (version === "gen9" && svImages[key]) {
          img.src = svImages[key];
        } else if (version === "letsgo" && letsGoImages[key]) {
          img.src = letsGoImages[key];
        } else if (version === "plza" && plzaImages[key]) {
          img.src = plzaImages[key];
        } else if (pokemon.endsWith("-alola") && version === "letsgo") {
          // Use pokeapi with ultra sun/moon
          img.src = await fetchPokemonSprite(
            pokemon,
            "ultra-sun-ultra-moon",
            shiny ? "front_shiny" : "front_default"
          );
        } else {
          // For other gens, fetch sprite
          const variant = shiny ? "front_shiny" : "front_default";
          const spriteUrl = await fetchPokemonSprite(pokemon, version, variant);
          if (spriteUrl) img.src = spriteUrl;
        }
      } else {
        visibilityMap.set(img, false);
        // LEAVE VIEW → unload image (replace with static gif)
        img.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      }
    }
  },
  {
    root: null,
    rootMargin: "200px", // pre-load just before entering view
    threshold: 0.1,
  }
);

async function rightClickImage(e, wrapper) {
  const img = wrapper.querySelector("img[data-pokemon]");
  if (!img) return;

  let version = ["gold", "silver"].includes(img.dataset.version)
    ? "gen2"
    : img.dataset.version;
  if (version === "gen1" || version === "yellow") return;

  // Find baseName for this img
  let baseName = img.dataset.pokemon;
  let formName = img.dataset.form || null;
  if (img.dataset.mega === "true") {
    if (version === "letsgo") version = "ultra-sun-ultra-moon";
    // Use Mega form name
    if (baseName === "charizard") {
      baseName = img
        .closest("li")
        .querySelector(".item-extension img")
        .alt.toLowerCase()
        .includes("x")
        ? "charizard-mega-x"
        : "charizard-mega-y";
    } else if (baseName === "mewtwo") {
      baseName = img
        .closest("li")
        .querySelector(".item-extension img")
        .alt.toLowerCase()
        .includes("x")
        ? "mewtwo-mega-x"
        : "mewtwo-mega-y";
    } else {
      baseName = `${baseName}-mega`;
    }
    if (version === "plza") {
      parts = baseName.split("-");
      baseName = "Mega-" + parts[0] + (parts[2] ? parts[2].toUpperCase() : "");
    }
  }
  // Flabebe, Floette, Florges color forms handling
  if (
    baseName.startsWith("flabebe") ||
    baseName.startsWith("floette") ||
    baseName.startsWith("florges")
  ) {
    const isShiny = getShiny(img, version);
    let colorKey = null;
    let spriteUrl = "";
    if (baseName.startsWith("flabebe")) {
      colorKey = Object.keys(flabebeColorMap).find(
        (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
      );
      if (version === "gen9") {
        const key =
          Object.keys(flabebeColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (svImages[key]) {
          spriteUrl = svImages[key];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      } else if (version === "plza") {
        const key =
          Object.keys(flabebeColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (plzaImages[key]) {
          spriteUrl = plzaImages[key];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      }
      if (colorKey) {
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
          generationMap[version]
        }/${generationMap2[version]}/${!isShiny ? "shiny/" : ""}${
          flabebeColorMap[colorKey]
        }.png`;
      }
    } else if (baseName.startsWith("floette")) {
      colorKey = Object.keys(floetteColorMap).find(
        (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
      );
      if (version === "gen9") {
        const svKey =
          Object.keys(floetteColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (svImages[svKey]) {
          spriteUrl = svImages[svKey];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      } else if (version === "plza") {
        const plzaKey =
          Object.keys(floetteColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (plzaImages[plzaKey]) {
          spriteUrl = plzaImages[plzaKey];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      }
      if (colorKey) {
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
          generationMap[version]
        }/${generationMap2[version]}/${!isShiny ? "shiny/" : ""}${
          floetteColorMap[colorKey]
        }.png`;
      }
    } else if (baseName.startsWith("florges")) {
      colorKey = Object.keys(florgesColorMap).find(
        (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
      );
      if (version === "gen9") {
        const svKey =
          Object.keys(florgesColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (svImages[svKey]) {
          spriteUrl = svImages[svKey];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      } else if (version === "plza") {
        const plzaKey =
          Object.keys(florgesColorMap)
            .find(
              (k) => baseName.replace(" ", "-").replace(/[\(\)]/g, "") === k
            )
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (!isShiny ? "_s" : "");
        if (plzaImages[plzaKey]) {
          spriteUrl = plzaImages[plzaKey];
          img.src = spriteUrl;
          setShiny(img, version, !isShiny);
          const li = wrapper.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            img.dataset.pokemon,
            version,
            !isShiny,
            checkboxes,
            visibleIndex
          );
          return;
        }
      }
      if (colorKey) {
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
          generationMap[version]
        }/${generationMap2[version]}/${!isShiny ? "shiny/" : ""}${
          florgesColorMap[colorKey]
        }.png`;
      }
    }
    if (spriteUrl) img.src = spriteUrl;
    setShiny(img, version, !isShiny);

    // Reload checkbox state for current visible version & shiny
    const li = wrapper.closest("li");
    const checkboxes = Array.from(li.querySelectorAll("input[type=checkbox]"));
    const visibleIndex = li.dataset.visibleIndex
      ? parseInt(li.dataset.visibleIndex)
      : 0;
    loadCheckboxState(
      img.dataset.pokemon,
      version,
      !isShiny,
      checkboxes,
      visibleIndex
    );
    return;
  }

  // If this is a form-rotating Pokémon (except unown)
  if (
    (formRotators.includes(baseName) &&
      formName &&
      formName !== "normal" &&
      formName !== "") ||
    (formName && formName === "gigantamax")
  ) {
    // Toggle shiny state for current form
    const isShiny = getShiny(img, version);
    const newVariant = isShiny ? "front_default" : "front_shiny";
    let spriteUrl = "";

    // Get form name if present
    let form = formName;
    // Special handling for some Pokémon
    if (baseName.startsWith("giratina")) {
      form = formName || "altered";
      if (version === "brilliantdiamond-shiningpearl") {
        spriteUrl =
          bdspImages[
            `Giratina-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else if (version === "pla") {
        spriteUrl =
          plaImages[
            `Giratina-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        if (form === "altered") {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            !isShiny ? "/shiny" : ""
          }/487.png`;
        } else {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            !isShiny ? "/shiny" : ""
          }/487-origin.png`;
        }
      }
    } else if (baseName === "rotom" && version !== "gen4") {
      form = formName || "normal";
      if (version === "gen8") {
        spriteUrl =
          swordShieldImages[
            `Rotom-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else if (version === "brilliantdiamond-shiningpearl") {
        if (newVariant === "front_shiny") {
          spriteUrl = bdspImages[`Rotom_s`];
        } else {
          spriteUrl =
            bdspImages[
              `Rotom-${form}`
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("-") + (newVariant === "front_shiny" ? "_s" : "")
            ];
        }
      } else if (version === "gen9") {
        const key =
          `Rotom-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "");
        if (svImages[key]) {
          spriteUrl = svImages[key];
        }
      } else {
        let generation = generationMap[version];
        let formSuffix = form !== "normal" ? `-${form}` : "";
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${
          generationMap2[version]
        }${!isShiny ? "/shiny" : ""}/479${formSuffix}.png`;
      }
    } else if (baseName.startsWith("burmy")) {
      form = formName || "plant";
      if (version === "brilliantdiamond-shiningpearl") {
        spriteUrl =
          bdspImages[
            `Burmy-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else if (version === "pla") {
        spriteUrl =
          plaImages[
            `Burmy-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else {
        if (form === "plant") {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${!isShiny ? "/shiny" : ""}/412.png`;
        } else {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${
            !isShiny ? "/shiny" : ""
          }/412-${form}.png`;
        }
      }
    } else if (baseName === "shaymin-land") {
      form = formName || "land";
      spriteUrl = await fetchPokemonSprite(
        `shaymin-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "darmanitan-standard") {
      form = formName || "standard";
      spriteUrl = await fetchPokemonSprite(
        `darmanitan-${form}`,
        version,
        newVariant
      );
    } else if (baseName.includes("darmanitan") && baseName.includes("galar")) {
      form = formName || "standard-galar";
      console.log(
        `Darmanitan-${form.slice(0, -6)}-Galar`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-") + (newVariant === "front_shiny" ? "_s" : "")
      );
      spriteUrl =
        swordShieldImages[
          `Darmanitan-${form.slice(0, -6)}-Galar`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "")
        ];
    } else if (baseName === "deerling") {
      form = formName || "spring";
      if (version === "gen9") {
        const key =
          `Deerling-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "");
        if (svImages[key]) {
          spriteUrl = svImages[key];
        }
      } else {
        const generation = generationMap[version];
        const ver = generationMap2[version];
        const formSuffix = form === "spring" ? "" : `-${form}`;
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          !isShiny ? "/shiny" : ""
        }/585${formSuffix}.png`;
      }
    } else if (baseName === "sawsbuck") {
      form = formName || "spring";
      if (version === "gen9") {
        const key =
          `Sawsbuck-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "");
        if (svImages[key]) {
          spriteUrl = svImages[key];
        }
      } else {
        const generation = generationMap[version];
        const ver = generationMap2[version];
        const formSuffix = form === "spring" ? "" : `-${form}`;
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          !isShiny ? "/shiny" : ""
        }/586${formSuffix}.png`;
      }
    } else if (baseName === "meloetta-aria") {
      form = formName || "aria";
      spriteUrl = await fetchPokemonSprite(
        `meloetta-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "tornadus-incarnate") {
      form = formName || "incarnate";
      spriteUrl = await fetchPokemonSprite(
        `tornadus-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "thundurus-incarnate") {
      form = formName || "incarnate";
      spriteUrl = await fetchPokemonSprite(
        `thundurus-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "landorus-incarnate") {
      form = formName || "incarnate";
      spriteUrl = await fetchPokemonSprite(
        `landorus-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "enamorus-incarnate") {
      form = formName || "incarnate";
      spriteUrl = await fetchPokemonSprite(
        `enamorus-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "keldeo-ordinary") {
      form = formName || "ordinary";
      spriteUrl = await fetchPokemonSprite(
        `keldeo-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "shellos") {
      form = formName || "west";
      const generation = generationMap[version];
      const ver = generationMap2[version];
      const formSuffix = form === "west" ? "" : "-east";
      const key =
        `Shellos-${form}`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-") + (newVariant === "front_shiny" ? "_s" : "");
      if (version === "gen8") {
        spriteUrl = swordShieldImages[key];
      } else if (version === "brilliantdiamond-shiningpearl") {
        spriteUrl = bdspImages[key];
      } else if (version === "pla") {
        spriteUrl = plaImages[key];
      } else if (version === "gen9") {
        if (svImages[key]) {
          spriteUrl = svImages[key];
        }
      } else
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          !isShiny ? "/shiny" : ""
        }/422${formSuffix}.png`;
    } else if (baseName === "gastrodon") {
      form = formName || "west";
      const generation = generationMap[version];
      const ver = generationMap2[version];
      const formSuffix = form === "west" ? "" : "-east";
      const key =
        `Gastrodon-${form}`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-") + (newVariant === "front_shiny" ? "_s" : "");
      if (version === "gen8") {
        spriteUrl = swordShieldImages[key];
      } else if (version === "brilliantdiamond-shiningpearl") {
        spriteUrl = bdspImages[key];
      } else if (version === "pla") {
        spriteUrl = plaImages[key];
      } else if (version === "gen9") {
        if (svImages[key]) {
          spriteUrl = svImages[key];
        }
      } else
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}/${
          !isShiny ? "shiny/" : ""
        }423${formSuffix}.png`;
    } else if (baseName === "cherrim") {
      form = formName || "overcast";
      if (version === "brilliantdiamond-shiningpearl") {
        spriteUrl =
          bdspImages[
            `Cherrim-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else if (version === "pla") {
        spriteUrl =
          plaImages[
            `Cherrim-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else {
        const generation = generationMap[version];
        const ver = generationMap2[version];
        const formSuffix = form === "overcast" ? "" : "-sunshine";
        if (version !== "gen8")
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
            !isShiny ? "/shiny" : ""
          }/421${formSuffix}.png`;
        else {
          spriteUrl =
            swordShieldImages[
              `cherrim-${form}`
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("-") + (newVariant === "front_shiny" ? "_s" : "")
            ];
        }
      }
    } else if (baseName.startsWith("meowstic")) {
      form = formName || "male";
      spriteUrl = await fetchPokemonSprite(
        `meowstic-${form}`,
        version,
        newVariant
      );
    } else if (baseName.startsWith("mimikyu")) {
      form = formName || "disguised";
      spriteUrl = await fetchPokemonSprite(
        `mimikyu-${form}`,
        version,
        newVariant
      );
    } else if (baseName.startsWith("ogerpon")) {
      form = formName || "teal";
      spriteUrl = await fetchPokemonSprite(
        `ogerpon-${form}`,
        version,
        newVariant
      );
    } else if (baseName.startsWith("cramorant")) {
      form = formName || "normal";
      spriteUrl =
        swordShieldImages[
          `Cramorant-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "")
        ];
    } else if (baseName === "aegislash-shield") {
      form = formName || "shield";
      spriteUrl = await fetchPokemonSprite(
        `aegislash-${form}`,
        version,
        newVariant
      );
    } else if (baseName === "furfrou") {
      form = formName || "natural";
      if (version === "plza") {
        const key =
          `Furfrou-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (newVariant === "front_shiny" ? "_s" : "");
        if (plzaImages[key]) {
          spriteUrl = plzaImages[key];
        }
      } else {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}/${
          newVariant === "front_shiny" ? "shiny/" : ""
        }676-${form}.png`;
      }
    } else if (baseName.startsWith("vivillon")) {
      form = formName || "modern";
      if (version === "gen9") {
        spriteUrl =
          svImages[
            `Vivillon-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else if (version === "plza") {
        if (newVariant === "front_shiny") {
          spriteUrl = plzaImages[`Vivillon_s`];
        } else {
          spriteUrl =
            plzaImages[
              `Vivillon-${form}`
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("-") + (newVariant === "front_shiny" ? "_s" : "")
            ];
        }
      } else {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
          newVariant === "front_shiny" ? "/shiny" : ""
        }/666-${form}.png`;
      }
    } else if (baseName === "xerneas") {
      form = formName || "active";
      if (version === "plza") {
        spriteUrl =
          plzaImages[`Xerneas${newVariant === "front_shiny" ? "_s" : ""}`];
      } else {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        if (form === "neutral") {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}/716-neutral.png`;
        } else {
          spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}/716-active.png`;
        }
      }
    } else if (baseName.startsWith("wishiwashi")) {
      form = formName || "solo";
      spriteUrl = await fetchPokemonSprite(
        `wishiwashi-${form}`,
        version,
        newVariant
      );
    } else if (baseName.startsWith("indeedee")) {
      form = formName || "male";
      spriteUrl = await fetchPokemonSprite(
        `indeedee-${form}`,
        version,
        newVariant
      );
    } else if (
      baseName.startsWith("zacian") ||
      baseName.startsWith("zamazenta")
    ) {
      form = formName || "hero";
      spriteUrl =
        swordShieldImages[
          `${
            baseName.charAt(0).toUpperCase() + baseName.split("-")[0].slice(1)
          }${form === "crowned" ? "-Crowned" : ""}${
            newVariant === "front_shiny" ? "_s" : ""
          }`
        ];
    } else if (baseName.startsWith("eiscue")) {
      form = formName || "ice";
      spriteUrl =
        swordShieldImages[
          `Eiscue-${form}${newVariant === "front_shiny" ? "_s" : ""}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-")
        ];
    } else if (baseName.startsWith("minior") && version === "gen9") {
      // Only normal shiny
      spriteUrl = svImages[`Minior_s`];
    } else if (baseName.startsWith("pecharunt")) {
      form = formName || "normal";
      spriteUrl = await fetchPokemonSprite(
        `pecharunt${newVariant !== "front_shiny" ? `-${form}` : ""}`,
        version,
        newVariant
      );
    } else if (baseName.startsWith("zygarde")) {
      form = formName || "50";
      if (version === "plza" && form === "mega")
        spriteUrl =
          plzaImages[`Mega-zygarde${newVariant === "front_shiny" ? "_s" : ""}`];
      else
        spriteUrl = await fetchPokemonSprite(
          `zygarde-${form}`,
          version,
          newVariant
        );
    } else if (baseName.startsWith("arceus")) {
      form = formName || "normal";
      spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
        generationMap[version]
      }/${generationMap2[version]}/${isShiny ? "shiny/" : ""}493-${form}.png`;
    } else if (baseName.startsWith("silvally")) {
      form = formName || "normal";
      if (version === "gen8") {
        spriteUrl =
          swordShieldImages[
            `Silvally-${form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (newVariant === "front_shiny" ? "_s" : "")
          ];
      } else {
        spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
          generationMap[version]
        }/${generationMap2[version]}/${
          newVariant === "front_shiny" ? "shiny/" : ""
        }773-${form}.png`;
      }
    } else {
      // General case for other form-rotating Pokémon
      form = formName || "normal";
      spriteUrl = await fetchPokemonSprite(
        `${baseName.replace("-normal", "")}-${form}`,
        version,
        newVariant
      );
    }

    await updateAllOfPokemon(img.dataset.pokemon, (pkmImg) => {
      if (spriteUrl) pkmImg.src = spriteUrl;
      setShiny(pkmImg, version, !isShiny);

      // Reload checkbox state for current visible version & shiny
      const li = pkmImg.closest("li");
      const checkboxes = Array.from(
        li.querySelectorAll("input[type=checkbox]")
      );
      const visibleIndex = li.dataset.visibleIndex
        ? parseInt(li.dataset.visibleIndex)
        : 0;
      loadCheckboxState(
        pkmImg.dataset.pokemon,
        version,
        !isShiny,
        checkboxes,
        visibleIndex
      );
    });
    return;
  } else if (baseName.startsWith("unown")) {
    // In any gen except brilliantdiamond-shiningpearl, show shiny "a" form, if that gen, then show correct shiny form
    const isShiny = !getShiny(img, version);
    const form = img.dataset.form || "a";
    let spriteUrl = "";
    if (version === "brilliantdiamond-shiningpearl") {
      spriteUrl =
        bdspImages[
          `Unown-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (isShiny ? "_s" : "")
        ];
    } else if (version === "pla") {
      spriteUrl =
        plaImages[
          `Unown-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (isShiny ? "_s" : "")
        ];
    } else if (version === "firered-leafgreen") {
      spriteUrl = await fetchPokemonSprite(
        `unown`,
        "emerald",
        isShiny ? "front_shiny" : "front_default"
      );
    } else {
      spriteUrl = await fetchPokemonSprite(
        `unown`,
        version,
        isShiny ? "front_shiny" : "front_default"
      );
    }
    await updateAllOfPokemon(img.dataset.pokemon, (pkmImg) => {
      if (spriteUrl) pkmImg.src = spriteUrl;
      setShiny(pkmImg, version, isShiny);
      // Reload checkbox state for current visible version & shiny
      const li = pkmImg.closest("li");
      const checkboxes = Array.from(
        li.querySelectorAll("input[type=checkbox]")
      );
      const visibleIndex = li.dataset.visibleIndex
        ? parseInt(li.dataset.visibleIndex)
        : 0;
      loadCheckboxState(
        pkmImg.dataset.pokemon,
        version,
        isShiny,
        checkboxes,
        visibleIndex
      );
    });
    return;
  }

  if (["gold", "silver"].includes(img.dataset.version)) {
    const baseName = img.dataset.pokemon;
    const isShiny = getShiny(img, "gen2");
    // Toggle shiny state
    const newShiny = !isShiny;
    for (const v of ["gold", "silver"]) {
      const imgs = document.querySelectorAll(
        `img[data-pokemon="${baseName}"][data-version="${v}"]`
      );
      for (const i of imgs) {
        const spriteUrl = await fetchPokemonSprite(
          baseName,
          v,
          newShiny ? "front_shiny" : "front_default"
        );
        if (spriteUrl) i.src = spriteUrl;
        setShiny(i, v, newShiny);
        // Make sure the visible image matches the toggled shiny state
        i.dataset.version = v;
      }
    }
    // Optionally update checkboxes if needed
    const li = img.closest("li");
    const checkboxes = Array.from(li.querySelectorAll("input[type=checkbox]"));
    const visibleIndex = li.dataset.visibleIndex
      ? parseInt(li.dataset.visibleIndex)
      : 0;
    loadCheckboxState(
      img.dataset.pokemon,
      img.dataset.version,
      newShiny,
      checkboxes,
      visibleIndex
    );
    return;
  }

  // --- Normal Pokémon ---
  const isShiny = getShiny(img, version);
  const newVariant = isShiny ? "front_default" : "front_shiny";

  let spriteUrl;
  let key;
  if (img.dataset.mega === "true") key = baseName + (!isShiny ? "_s" : "");
  else
    key = (
      baseName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("-") + (!getShiny(img, version) ? "_s" : "")
    ).replace("-Gigantamax", "_g");
  if (version === "gen8") {
    if (swordShieldImages[key]) {
      spriteUrl = swordShieldImages[key];
    }
  } else if (version === "brilliantdiamond-shiningpearl") {
    if (bdspImages[key]) {
      spriteUrl = bdspImages[key];
    }
  } else if (version === "pla") {
    if (plaImages[key]) {
      spriteUrl = plaImages[key];
    }
  } else if (version === "gen9") {
    if (svImages[key]) {
      spriteUrl = svImages[key];
    }
  } else if (version === "plza") {
    if (plzaImages[key]) {
      spriteUrl = plzaImages[key];
    }
  } else if (version === "letsgo") {
    if (baseName.endsWith("-alola")) {
      // Use pokeapi with ultra sun/moon
      spriteUrl = await fetchPokemonSprite(
        baseName,
        "ultra-sun-ultra-moon",
        newVariant
      );
    } else if (letsGoImages[key]) {
      spriteUrl = letsGoImages[key];
    }
  } else spriteUrl = await fetchPokemonSprite(baseName, version, newVariant);

  await updateAllOfPokemon(img.dataset.pokemon, async (pkmImg) => {
    if (spriteUrl) pkmImg.src = spriteUrl;
    setShiny(pkmImg, version, !isShiny);

    // Reload checkbox state for current visible version & shiny
    const li = pkmImg.closest("li");
    const checkboxes = Array.from(li.querySelectorAll("input[type=checkbox]"));
    const visibleIndex = li.dataset.visibleIndex
      ? parseInt(li.dataset.visibleIndex)
      : 0;
    loadCheckboxState(
      pkmImg.dataset.pokemon,
      pkmImg.dataset.version,
      getShiny(pkmImg, pkmImg.dataset.version),
      checkboxes,
      visibleIndex
    );
  });
}

function leftClickImage(e, wrapper) {
  const img = wrapper.querySelector("img[data-pokemon]");
  if (!img) return;

  const pokemon = img.getAttribute("alt").split(" ")[0];
  if (!pokemon) return;

  const urlPokemon =
    pokemon.charAt(0).toUpperCase() + pokemon.slice(1).toLowerCase();

  const url = `https://bulbapedia.bulbagarden.net/wiki/${urlPokemon}_(Pokémon)`;

  window.open(url, "_blank"); // open in new tab
}

// Right-click to toggle shiny variant
document.querySelectorAll(".tilt-wrapper").forEach((wrapper) => {
  const star = wrapper.querySelector(".favorite-star");
  const img = wrapper.querySelector("img[data-pokemon]");
  if (!img || !star) return;

  const key = `${img.dataset.pokemon}-${img.dataset.version}-favorite`;
  star.classList.toggle("favorited", localStorage.getItem(key) === "true");

  star.addEventListener("click", (e) => {
    e.stopPropagation();
    const isFav = star.classList.toggle("favorited");
    localStorage.setItem(key, isFav.toString());
  });

  if (window.matchMedia("(pointer: coarse)").matches) {
    wrapper.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default click behavior
      rightClickImage(e, wrapper);
    });
  } else {
    wrapper.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default click behavior
      leftClickImage(e, wrapper);
    });
    wrapper.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent default context menu
      rightClickImage(e, wrapper);
    });
  }
});

function saveCheckboxState(pokemonName, version, isShiny, index, checked) {
  const key = `${pokemonName}-${version}${isShiny ? "-shiny" : ""}`;
  const stored = JSON.parse(localStorage.getItem(key)) || [];
  stored[index] = checked; // Gold = 0, Silver = 1
  localStorage.setItem(key, JSON.stringify(stored));
}

function loadCheckboxState(pokemonName, version, isShiny, checkboxes) {
  const key = `${pokemonName}-${version}${isShiny ? "-shiny" : ""}`;
  const stored = JSON.parse(localStorage.getItem(key)) || [];
  checkboxes.forEach((cb, i) => {
    cb.checked = stored[i] || false;
  });
}

document.querySelectorAll(".square-list li").forEach((li) => {
  const img = li.querySelector("img[data-pokemon]");
  const checkboxes = Array.from(li.querySelectorAll("input[type=checkbox]"));
  const visibleIndex = li.dataset.visibleIndex
    ? parseInt(li.dataset.visibleIndex)
    : 0;

  // Initialize checkbox state
  if (img.dataset.version === "gold" || img.dataset.version === "silver") {
    loadCheckboxState(
      img.dataset.pokemon,
      "gold",
      getShiny(img, "gold"),
      checkboxes
    );
    loadCheckboxState(
      img.dataset.pokemon,
      "silver",
      getShiny(img, "silver"),
      checkboxes
    );
  } else {
    loadCheckboxState(
      img.dataset.pokemon,
      img.dataset.version,
      getShiny(img, img.dataset.version),
      checkboxes,
      visibleIndex
    );
  }

  // Listen for changes
  checkboxes.forEach((checkbox, i) => {
    checkbox.addEventListener("change", () => {
      if (img.dataset.version === "gold" || img.dataset.version === "silver") {
        saveCheckboxState(
          img.dataset.pokemon,
          "gold",
          getShiny(img, "gold"),
          i,
          checkbox.checked
        );
        saveCheckboxState(
          img.dataset.pokemon,
          "silver",
          getShiny(img, "silver"),
          i,
          checkbox.checked
        );
      } else {
        saveCheckboxState(
          img.dataset.pokemon,
          img.dataset.version,
          getShiny(img, img.dataset.version),
          i,
          checkbox.checked
        );
      }
      updateAllOfPokemon(img.dataset.pokemon, (pkmImg) => {
        if (
          pkmImg.dataset.version === "gold" ||
          pkmImg.dataset.version === "silver"
        ) {
          loadCheckboxState(
            pkmImg.dataset.pokemon,
            "gold",
            getShiny(pkmImg, "gold"),
            Array.from(
              pkmImg.closest("li").querySelectorAll("input[type=checkbox]")
            )
          );
          loadCheckboxState(
            pkmImg.dataset.pokemon,
            "silver",
            getShiny(pkmImg, "silver"),
            Array.from(
              pkmImg.closest("li").querySelectorAll("input[type=checkbox]")
            )
          );
        } else {
          const li = pkmImg.closest("li");
          const checkboxes = Array.from(
            li.querySelectorAll("input[type=checkbox]")
          );
          const visibleIndex = li.dataset.visibleIndex
            ? parseInt(li.dataset.visibleIndex)
            : 0;
          loadCheckboxState(
            pkmImg.dataset.pokemon,
            pkmImg.dataset.version,
            getShiny(pkmImg, pkmImg.dataset.version),
            checkboxes,
            visibleIndex
          );
        }
      });
    });
  });
});

// Toggle all checkboxes
function setAllCheckboxes(state) {
  document
    .querySelectorAll(".item-footer input[type=checkbox]")
    .forEach((cb) => {
      cb.checked = state;
    });
}

document
  .getElementById("toggle-shinies")
  ?.addEventListener("click", async () => {
    const wrappers = document.querySelectorAll(".tilt-wrapper");
    for (const wrapper of wrappers) {
      const img = wrapper.querySelector("img[data-pokemon]");
      if (!img) continue;

      const version = img.dataset.version;
      if (version === "gen1" || version === "yellow") continue;

      // Special handling for multi-form Pokémon
      let forms = [];
      let baseName = img.dataset.pokemon;
      let isShiny = getShiny(img, version);
      let newVariant = isShiny ? "front_default" : "front_shiny";
      if (img.dataset.mega === "true") {
        // Use Mega form name
        if (baseName === "charizard") {
          baseName = img
            .closest("li")
            .querySelector(".item-extension img")
            .alt.toLowerCase()
            .includes("x")
            ? "charizard-mega-x"
            : "charizard-mega-y";
        } else if (baseName === "mewtwo") {
          baseName = img
            .closest("li")
            .querySelector(".item-extension img")
            .alt.toLowerCase()
            .includes("x")
            ? "mewtwo-mega-x"
            : "mewtwo-mega-y";
        } else {
          baseName = `${baseName}-mega`;
        }
      }

      if (baseName === "deoxys-normal") {
        forms = ["normal", "attack", "defense", "speed"];
        for (const form of forms) {
          const spriteUrl = await fetchPokemonSprite(
            `deoxys-${form}`,
            version,
            newVariant
          );
          if (spriteUrl) img.src = spriteUrl;
          img.dataset.form = form;
          setShiny(img, version, !isShiny);
        }
      } else if (baseName === "rotom" && version !== "gen4") {
        forms = ["normal", "heat", "wash", "fan", "frost", "mow"];
        for (const form of forms) {
          let formSuffix = form !== "normal" ? `-${form}` : "";
          let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${
            !isShiny ? "/shiny" : ""
          }/479${formSuffix}.png`;
          img.src = url;
          img.dataset.form = form;
          setShiny(img, version, !isShiny);
        }
      } else if (baseName === "burmy") {
        forms = ["plant", "sandy", "trash"];
        for (const form of forms) {
          let url =
            form === "plant"
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generationMap[version]}/${generationMap2[version]}/412.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generationMap[version]}/${generationMap2[version]}/412-${form}.png`;
          img.src = url;
          img.dataset.form = form;
          setShiny(img, version, !isShiny);
        }
      } else {
        // Normal Pokémon
        const spriteUrl = await fetchPokemonSprite(
          img.dataset.pokemon,
          version,
          newVariant
        );
        if (spriteUrl) img.src = spriteUrl;
        setShiny(img, version, !isShiny);
      }

      const li = wrapper.closest("li");
      const checkboxes = Array.from(
        li.querySelectorAll("input[type=checkbox]")
      );
      const visibleIndex = li.dataset.visibleIndex
        ? parseInt(li.dataset.visibleIndex)
        : 0;
      loadCheckboxState(
        img.dataset.pokemon,
        version,
        !isShiny,
        checkboxes,
        visibleIndex
      );
    }
  });

if (document.getElementById("reset-data")) {
  document.getElementById("reset-data").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all saved data?")) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (
          key &&
          key.includes(document.querySelector(".square-list").dataset.version)
        ) {
          localStorage.removeItem(key);
          // After removing, decrement i because localStorage length changes
          i--;
        }
      }
      // Reload the page to reflect changes
      window.location.reload();
    }
  });
}

// Utility to create single big checkbox for single-version mode
function createSingleCheckbox(footer, savedState = false, onChange) {
  const existing = footer.querySelector(".single-version-checkbox");
  if (existing) existing.remove();

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.className = "single-version-checkbox";
  newCheckbox.checked = savedState;

  newCheckbox.addEventListener("change", (e) => onChange(e.target.checked));

  footer.appendChild(newCheckbox);
}

// Show only first version
if (document.getElementById("show-only-first-version")) {
  document
    .getElementById("show-only-first-version")
    .addEventListener("click", () => {
      document.querySelectorAll("li .item-footer").forEach((footer) => {
        const versionCheckboxes = footer.querySelectorAll(
          "label.version-option input[type=checkbox]"
        );
        // Hide all original checkboxes
        versionCheckboxes.forEach(
          (cb) => (cb.closest("label").style.display = "none")
        );

        // Copy state from first checkbox
        const li = footer.closest("li");
        li.dataset.visibleIndex = 0; // for first version
        const img = li.querySelector("img[data-pokemon]");
        let savedState = false;
        if (versionCheckboxes[0] && img) {
          const key = `${img.dataset.pokemon}-${img.dataset.version}${
            getShiny(img, img.dataset.version) ? "-shiny" : ""
          }`;
          const stored = JSON.parse(localStorage.getItem(key)) || [];
          savedState = stored[0] || false;
        }

        // Add single checkbox with proper saved state
        createSingleCheckbox(footer, savedState, (checked) => {
          if (img)
            saveCheckboxState(
              img.dataset.pokemon,
              img.dataset.version,
              getShiny(img, img.dataset.version),
              0,
              checked
            );
        });

        document
          .getElementById("checkbox-stylesheet")
          .setAttribute("href", "single_checkbox.css");
      });
    });
}

// Show only second version
if (document.getElementById("show-only-second-version")) {
  document
    .getElementById("show-only-second-version")
    .addEventListener("click", () => {
      document.querySelectorAll("li .item-footer").forEach((footer) => {
        const versionCheckboxes = footer.querySelectorAll(
          "label.version-option input[type=checkbox]"
        );
        versionCheckboxes.forEach(
          (cb) => (cb.closest("label").style.display = "none")
        );

        const li = footer.closest("li");
        li.dataset.visibleIndex = 1; // for second version
        const img = li.querySelector("img[data-pokemon]");
        let savedState = false;
        if (versionCheckboxes[1] && img) {
          const key = `${img.dataset.pokemon}-${img.dataset.version}${
            getShiny(img, img.dataset.version) ? "-shiny" : ""
          }`;
          const stored = JSON.parse(localStorage.getItem(key)) || [];
          savedState = stored[1] || false;
        }

        createSingleCheckbox(footer, savedState, (checked) => {
          if (img)
            saveCheckboxState(
              img.dataset.pokemon,
              img.dataset.version,
              getShiny(img, img.dataset.version),
              1,
              checked
            );
        });

        document
          .getElementById("checkbox-stylesheet")
          .setAttribute("href", "single_checkbox.css");
      });
    });
}

// Show both versions
if (document.getElementById("show-both-versions")) {
  document
    .getElementById("show-both-versions")
    .addEventListener("click", () => {
      document.querySelectorAll("li .item-footer").forEach((footer) => {
        // Remove any single checkbox
        const single = footer.querySelector(".single-version-checkbox");
        if (single) single.remove();

        // Show original version-option labels
        const versionCheckboxes = footer.querySelectorAll(
          "label.version-option input[type=checkbox]"
        );
        versionCheckboxes.forEach(
          (cb) => (cb.closest("label").style.display = "flex")
        );

        // Reload saved state for each checkbox
        const li = footer.closest("li");
        const visibleIndex = li.dataset.visibleIndex
          ? parseInt(li.dataset.visibleIndex)
          : 0;
        const img = li.querySelector("img[data-pokemon]");
        if (img)
          loadCheckboxState(
            img.dataset.pokemon,
            img.dataset.version,
            getShiny(img, img.dataset.version),
            Array.from(versionCheckboxes),
            visibleIndex
          );

        document
          .getElementById("checkbox-stylesheet")
          .setAttribute("href", "double_checkbox.css");
      });
    });
}

// --- Utility to pick a random Pokémon ---
function getRandomPokemon() {
  const imgs = Array.from(
    document.querySelectorAll("img[data-pokemon]")
  ).filter((img) => isVisible(img.closest("li")));
  if (!imgs.length) return null;
  return imgs[Math.floor(Math.random() * imgs.length)];
}

// --- Show random Pokémon overlay ---
document
  .getElementById("random-card-btn")
  .addEventListener("click", async () => {
    const randomPokemonImg = getRandomPokemon();
    if (!randomPokemonImg) return;

    const name = randomPokemonImg.dataset.pokemon;
    let version;
    if (
      randomPokemonImg.dataset.version === "gold" ||
      randomPokemonImg.dataset.version === "silver"
    ) {
      version = "gen2";
    } else version = randomPokemonImg.dataset.version;
    let isShiny = getShiny(randomPokemonImg, version);
    const key = `${name}-${version}-favorite`;

    const overlay = document.getElementById("random-card-overlay");
    const cardImg = document.getElementById("random-card-img");
    const favStar = document.getElementById("random-favorite-star");
    const cardName = document.getElementById("random-card-name");
    const cardCheckboxes = document.getElementById("random-card-checkboxes");
    const shinyButton = document.getElementById("toggle-random-shiny");

    // Function to update image based on shiny state
    async function updateSprite() {
      const variant = isShiny ? "front_shiny" : "front_default";

      // Use form if present
      let spriteName = name;
      if (randomPokemonImg.dataset.form) {
        if (name === "castform") {
          spriteName = `${name}-` + img.dataset.form;
        }
      }

      const spriteUrl = await fetchPokemonSprite(spriteName, version, variant);
      if (spriteUrl) cardImg.src = spriteUrl;

      setShiny(cardImg, version, isShiny);
      renderCheckboxes();
    }

    // Function to render read-only checkbox circles
    function renderCheckboxes() {
      cardCheckboxes.innerHTML = "";

      // Determine number of checkboxes for this Pokémon/version
      const li = Array.from(document.querySelectorAll(".square-list li")).find(
        (li) =>
          li.querySelector(
            `img[data-pokemon="${name}"][data-version="${version}"]`
          )
      );
      const checkboxes = li
        ? Array.from(li.querySelectorAll("input[type=checkbox]"))
        : [];

      checkboxes.forEach((checkbox, i) => {
        const box = document.createElement("div");
        box.style.width = "16px";
        box.style.height = "16px";
        box.style.borderRadius = "50%";
        box.style.margin = "2px";
        box.style.display = "inline-block";
        box.style.boxSizing = "border-box";

        const storedChecked =
          JSON.parse(
            localStorage.getItem(`${name}-${version}${isShiny ? "-shiny" : ""}`)
          ) || [];

        if (storedChecked[i]) {
          box.style.background = "gold";
          box.style.border = "2px solid #b8860b";
        } else {
          box.style.background = "transparent";
          box.style.border = "2px solid white";
        }

        cardCheckboxes.appendChild(box);
      });
    }

    await updateSprite();

    // Set name and favorite
    cardName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    favStar.classList.toggle("favorited", localStorage.getItem(key) === "true");
    favStar.onclick = () => {
      const favorited = favStar.classList.toggle("favorited");
      localStorage.setItem(key, favorited.toString());
    };

    // Shiny toggle button
    shinyButton.onclick = async () => {
      isShiny = !isShiny;
      await updateSprite();
    };

    overlay.style.display = "flex";
  });

document.getElementById("close-random-card").addEventListener("click", () => {
  document.getElementById("random-card-overlay").style.display = "none";
});

// Store original order once
document.querySelectorAll(".square-list li").forEach((li, index) => {
  li.dataset.originalIndex = index;
});

function sortPokemonList(sortValue) {
  const list = document.querySelector(".square-list");
  const items = Array.from(list.querySelectorAll("li"));

  items.sort((a, b) => {
    const aImg = a.querySelector("img[data-pokemon]");
    const bImg = b.querySelector("img[data-pokemon]");
    if (!aImg || !bImg) return 0;

    switch (sortValue) {
      case "name-asc":
        return aImg.dataset.pokemon.localeCompare(bImg.dataset.pokemon);
      case "name-desc":
        return bImg.dataset.pokemon.localeCompare(aImg.dataset.pokemon);
      case "favorite":
        const aFav =
          localStorage.getItem(
            `${aImg.dataset.pokemon}-${aImg.dataset.version}-favorite`
          ) === "true";
        const bFav =
          localStorage.getItem(
            `${bImg.dataset.pokemon}-${bImg.dataset.version}-favorite`
          ) === "true";

        // Favorites first, then preserve Pokédex order for ties
        if (bFav - aFav !== 0) return bFav - aFav;
        return a.dataset.originalIndex - b.dataset.originalIndex;

      case "pokedex":
      default:
        // Use original HTML order
        return a.dataset.originalIndex - b.dataset.originalIndex;
    }
  });

  items.forEach((li) => list.appendChild(li));
}

// Utility to mark or unmark all checkboxes for a given index (0 = first option, 1 = second)
function completePokedexForIndex(index, shiny = false, complete = true) {
  document.querySelectorAll(".square-list li").forEach((li) => {
    const img = li.querySelector("img[data-pokemon]");
    const checkboxes = Array.from(li.querySelectorAll("input[type=checkbox]"));
    if (!img) return;

    // If gold/silver, update both shiny states
    if (img.dataset.version === "gold" || img.dataset.version === "silver") {
      ["gold", "silver"].forEach((ver) => {
        saveCheckboxState(img.dataset.pokemon, ver, shiny, index, complete);
        // Visually update if shiny state matches
        if (getShiny(img, ver) === shiny && checkboxes[index]) {
          checkboxes[index].checked = complete;
        }
      });
      return;
    }

    // Normal case
    if (checkboxes[index]) {
      if (getShiny(img, img.dataset.version) === shiny) {
        checkboxes[index].checked = complete;
      }
      saveCheckboxState(
        img.dataset.pokemon,
        img.dataset.version,
        shiny,
        index,
        complete
      );
    }
  });
}

const searchBox = document.getElementById("pokemonSearch");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const showNationalOnly =
    localStorage.getItem(
      `showNationalOnly${
        document.querySelector(".square-list").dataset.version
      }`
    ) === "true";

  document.querySelectorAll(".square-list li").forEach((li) => {
    const img = li.querySelector("img[data-pokemon]");
    const name = img.dataset.pokemon.toLowerCase();
    const isNational = li.classList.contains("national");

    let matchesSearch = name.includes(query);
    let matchesFilter = showNationalOnly ? isNational : !isNational;

    li.style.display = matchesSearch && matchesFilter ? "" : "none";
  });
});

searchBox.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return; // only trigger on Enter

  const query = searchBox.value.trim().toLowerCase();
  if (!query) return;

  // Find the <li> with the matching Pokémon name
  const li = Array.from(document.querySelectorAll(".square-list li")).find(
    (li) => {
      const img = li.querySelector("img[data-pokemon]");
      return img && img.dataset.pokemon.toLowerCase() === query;
    }
  );

  if (!li) {
    alert("Pokémon not found!"); // optional feedback
    return;
  }

  // Get the image element
  const img = li.querySelector("img[data-pokemon]");
  if (!img) return;

  const name = img.dataset.pokemon;
  let version;
  if (img.dataset.version === "gold" || img.dataset.version === "silver") {
    version = "gen2";
  } else version = img.dataset.version || "gen1";
  let isShiny = getShiny(img, version);
  const key = `${name}-${version}-favorite`;

  // Grab overlay elements
  const overlay = document.getElementById("random-card-overlay");
  const cardImg = document.getElementById("random-card-img");
  const favStar = document.getElementById("random-favorite-star");
  const cardName = document.getElementById("random-card-name");
  const cardCheckboxes = document.getElementById("random-card-checkboxes");
  const shinyButton = document.getElementById("toggle-random-shiny");

  // Function to update sprite based on shiny state
  async function updateSprite() {
    const variant = isShiny ? "front_shiny" : "front_default";
    const spriteUrl = await fetchPokemonSprite(name, version, variant);
    if (spriteUrl) cardImg.src = spriteUrl;
    setShiny(cardImg, version, isShiny);
    renderCheckboxes();
  }

  // Function to render read-only checkboxes
  function renderCheckboxes() {
    cardCheckboxes.innerHTML = "";
    const liOriginal = Array.from(
      document.querySelectorAll(".square-list li")
    ).find((l) => l.querySelector(`img[data-pokemon="${name}"]`) === img);
    const checkboxes = liOriginal
      ? Array.from(liOriginal.querySelectorAll("input[type=checkbox]"))
      : [];

    checkboxes.forEach((cb, i) => {
      const box = document.createElement("div");
      box.style.width = "16px";
      box.style.height = "16px";
      box.style.borderRadius = "50%";
      box.style.margin = "2px";
      box.style.display = "inline-block";
      box.style.boxSizing = "border-box";

      const storedChecked =
        JSON.parse(
          localStorage.getItem(`${name}-${version}${isShiny ? "-shiny" : ""}`)
        ) || [];

      if (storedChecked[i]) {
        box.style.background = "gold";
        box.style.border = "2px solid #b8860b";
      } else {
        box.style.background = "transparent";
        box.style.border = "2px solid white";
      }

      cardCheckboxes.appendChild(box);
    });
  }

  await updateSprite();

  // Set name and favorite
  cardName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  favStar.classList.toggle("favorited", localStorage.getItem(key) === "true");
  favStar.onclick = () => {
    const favorited = favStar.classList.toggle("favorited");
    localStorage.setItem(key, favorited.toString());
  };

  // Shiny toggle button
  shinyButton.onclick = async () => {
    isShiny = !isShiny;
    await updateSprite();
  };

  overlay.style.display = "flex";
});

// --- NATIONAL MODE TOGGLE ---

const NATIONAL_KEY = `showNationalOnly${
  document.querySelector(".square-list").dataset.version
}`;

// Set default if missing
if (localStorage.getItem(NATIONAL_KEY) === null) {
  localStorage.setItem(NATIONAL_KEY, "false");
}

const natBtn = document.getElementById("toggle-national");
// Apply initial filter on load
applyNationalFilter();

// Button to toggle (you add this button in HTML with id="toggle-national")
natBtn?.addEventListener("click", () => {
  const current = localStorage.getItem(NATIONAL_KEY) === "true";
  localStorage.setItem(NATIONAL_KEY, (!current).toString());
  applyNationalFilter();
  location.reload(); // Reset pokemon checkboxes
});

// Core function to show/hide items
function applyNationalFilter() {
  const showNationalOnly = localStorage.getItem(NATIONAL_KEY) === "true";
  if (natBtn)
    natBtn.textContent = !showNationalOnly
      ? `${natBtn.dataset.custom ? natBtn.dataset.custom : "National"} Pokédex`
      : `${natBtn.dataset.dex} Pokédex`;

  document.querySelectorAll(".square-list li").forEach((li) => {
    const isNational = li.classList.contains("national");

    if (showNationalOnly) {
      // Show only national entries
      li.style.display = isNational ? "" : "none";
    } else {
      // Hide national entries
      li.style.display = isNational ? "none" : "";
    }
  });
}

function isVisible(li) {
  return li.style.display !== "none";
}

// --- GEN 2 IMAGE VERSION ROTATOR ---
// Rotates all images with data-version="gen2" between gold and silver sprites
function rotateGen2Images() {
  const imgs = Array.from(
    document.querySelectorAll("img[data-version='gold']")
  );
  if (!imgs.length) return;

  let currentVersion = "gold";
  setInterval(async () => {
    currentVersion = currentVersion === "gold" ? "silver" : "gold";
    for (const img of imgs) {
      const pokemon = img.dataset.pokemon;
      const variant = getShiny(img, "gold") ? "front_shiny" : "front_default";
      const spriteUrl = await fetchPokemonSprite(
        pokemon,
        currentVersion,
        variant
      );
      if (spriteUrl) img.src = spriteUrl;
      img.dataset.version = currentVersion;
    }
  }, 7000);
}

// Get .square-list's data-version, and if it's gold, start it
if (document.querySelector(".square-list")?.dataset.version === "gold")
  rotateGen2Images();

{
  // Unified initializer for all .custom-dropdown elements (including .action-dropdown)
  (function initCustomDropdowns() {
    const dropdowns = Array.from(document.querySelectorAll(".custom-dropdown"));
    if (!dropdowns.length) return;

    dropdowns.forEach((dropdown) => {
      const selected = dropdown.querySelector(".selected");
      const options = Array.from(dropdown.querySelectorAll(".options li"));
      const listEl = dropdown.querySelector(".options");

      // Toggle open/close
      selected?.addEventListener("click", (e) => {
        e.stopPropagation();
        // close any other open dropdowns first
        document
          .querySelectorAll(".custom-dropdown .options")
          .forEach((optList) => {
            if (optList !== listEl) optList.style.display = "none";
          });
        listEl.style.display =
          listEl.style.display === "inline-block" ? "none" : "inline-block";
      });

      options.forEach((opt) => {
        opt.addEventListener("click", (e) => {
          e.stopPropagation();
          const value = opt.dataset.value;
          // update label
          if (!dropdown.classList.contains("action-dropdown") && selected) {
            selected.textContent = opt.textContent + " ▼";
          }
          // close menu
          listEl.style.display = "none";

          // handle action-dropdown values vs sorting dropdown values
          if (dropdown.classList.contains("action-dropdown")) {
            switch (value) {
              case "complete-first":
                completePokedexForIndex(0, false, true);
                break;
              case "complete-second":
                completePokedexForIndex(1, false, true);
                break;
              case "complete-first-shiny":
                completePokedexForIndex(0, true, true);
                break;
              case "complete-second-shiny":
                completePokedexForIndex(1, true, true);
              case "clear-first":
                completePokedexForIndex(0, false, false);
                break;
              case "clear-second":
                completePokedexForIndex(1, false, false);
                break;
              case "clear-first-shiny":
                completePokedexForIndex(0, true, false);
                break;
              case "clear-second-shiny":
                completePokedexForIndex(1, true, false);
                break;
              // add other action handlers here if needed
            }
          } else {
            // default behavior: sorting dropdown
            sortPokemonList(value);
          }
        });
      });
    });

    // close on outside click
    document.addEventListener("click", () => {
      document
        .querySelectorAll(".custom-dropdown .options")
        .forEach((optList) => {
          optList.style.display = "none";
        });
    });
  })();
}

function rotateGenderedPokemon(pokemonName) {
  // Find all li elements with this pokemon
  const lis = Array.from(document.querySelectorAll(".square-list li")).filter(
    (li) => li.querySelector(`img[data-pokemon='${pokemonName}']`)
  );
  if (!lis.length) return;

  // Skip unsupported versions for Pikachu/Wobbuffet
  lis.forEach((li) => {
    const img = li.querySelector(`img[data-pokemon='${pokemonName}']`);
    if (!img) return;

    if (
      ["pikachu", "wobbuffet", "gyarados"].includes(pokemonName) &&
      [
        "gen1",
        "yellow",
        "gold",
        "silver",
        "crystal",
        "gen3",
        "emerald",
        "firered-leafgreen",
      ].includes(img.dataset.version)
    )
      return; // skip unsupported versions

    let currentIsFemale = false;
    const version = img.dataset.version;

    setInterval(async () => {
      currentIsFemale = !currentIsFemale;
      const isShiny = getShiny(img, version);
      let variant;
      if (isShiny) {
        variant = currentIsFemale ? "front_shiny_female" : "front_shiny";
      } else {
        variant = currentIsFemale ? "front_female" : "front_default";
      }
      let spriteUrl;
      if (img.dataset.version === "gen8") {
        spriteUrl =
          swordShieldImages[
            (
              pokemonName
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("-") + variantMap[variant]
            ).replace("-Gigantamax", "_g")
          ];
      } else if (img.dataset.version === "brilliantdiamond-shiningpearl") {
        spriteUrl =
          bdspImages[
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ];
      } else if (img.dataset.version === "pla") {
        spriteUrl =
          plaImages[
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ];
      } else if (img.dataset.version === "gen9") {
        spriteUrl =
          svImages[
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ];
      } else if (img.dataset.version === "plza") {
        spriteUrl =
          plzaImages[
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ];
      } else if (img.dataset.version === "letsgo") {
        spriteUrl =
          letsGoImages[
            pokemonName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + variantMap[variant]
          ];
      } else
        spriteUrl = await fetchPokemonSprite(pokemonName, version, variant);

      if (spriteUrl) img.src = spriteUrl;
      setShiny(img, version, isShiny);

      // Optionally update checkboxes if needed
      const checkboxes = Array.from(
        li.querySelectorAll("input[type=checkbox]")
      );
      const visibleIndex = li.dataset.visibleIndex
        ? parseInt(li.dataset.visibleIndex)
        : 0;
      loadCheckboxState(
        pokemonName,
        version,
        isShiny,
        checkboxes,
        visibleIndex
      );
    }, 3000);
  });
}

/**
 * Generic form rotator for Pokémon with multiple forms.
 * @param {Object} config - Configuration object for the rotator.
 * @param {string} config.baseName - The base data-pokemon value to search for.
 * @param {string[]} config.forms - Array of form names (suffixes).
 * @param {function} config.getSpriteUrl - Function to get the sprite URL.
 * @param {number} config.interval - Interval in ms for rotation.
 * @param {function} [config.onFormChange] - Optional callback after form change.
 */
function rotateForms({
  baseName,
  forms,
  getSpriteUrl,
  interval = 3000,
  onFormChange,
}) {
  // Find all li elements with this baseName
  const lis = Array.from(document.querySelectorAll(".square-list li")).filter(
    (li) => li.querySelector(`img[data-pokemon='${baseName}']`)
  );
  if (!lis.length) return;

  let currentFormIndex = 0;

  setInterval(async () => {
    currentFormIndex = (currentFormIndex + 1) % forms.length;
    const form = forms[currentFormIndex];

    await updateAllOfPokemon(baseName, async (img) => {
      if (!visibilityMap.get(img)) return;
      const li = img.closest("li");

      // Update form
      img.dataset.form = form;

      const isShiny = getShiny(img, img.dataset.version);
      const variant = isShiny ? "front_shiny" : "front_default";
      const spriteUrl = await getSpriteUrl(
        form,
        img.dataset.version,
        variant,
        isShiny
      );
      if (spriteUrl) img.src = spriteUrl;
      setShiny(img, img.dataset.version, isShiny);

      if (onFormChange) onFormChange(form, img, li);
    });
  }, interval);
}

function rotateAll() {
  const version = document.querySelector(".square-list").dataset.version;
  rotateGenderedPokemon("unfezant");
  rotateGenderedPokemon("frillish");
  rotateGenderedPokemon("jellicent");

  if (version !== "gen8") {
    // These has a gigantamax version that will be rotated instead
    rotateGenderedPokemon("butterfree");
    rotateGenderedPokemon("pikachu");
  }
  rotateGenderedPokemon("gyarados");

  rotateGenderedPokemon("hippopotas");
  rotateGenderedPokemon("hippowdon");
  rotateGenderedPokemon("wobbuffet");
  rotateGenderedPokemon("pyroar");
  rotateGenderedPokemon("combee");
  rotateGenderedPokemon("bidoof");
  rotateGenderedPokemon("bibarel");
  rotateGenderedPokemon("oinkologne");

  // --- Use generic rotator for all multi-form Pokémon ---

  // Darmanitan
  rotateForms({
    baseName: "darmanitan-standard",
    forms: ["standard", "zen"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`darmanitan-${form}`, version, variant),
    interval: 3000,
  });
  rotateForms({
    baseName: "darmanitan-standard-galar",
    forms: ["standard-galar", "zen-galar"],
    getSpriteUrl: (form, version, variant) =>
      swordShieldImages[
        `Darmanitan${
          form === "standard-galar" ? "-Standard-Galar" : "-Zen-Galar"
        }${variant === "front_shiny" ? "_s" : ""}`
      ],
  });

  // Shaymin
  rotateForms({
    baseName: "shaymin-land",
    forms: ["land", "sky"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`shaymin-${form}`, version, variant),
    interval: 3000,
  });

  // Castform
  rotateForms({
    baseName: "castform",
    forms: ["normal", "sunny", "rainy", "snowy"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(
        form !== "normal" ? `castform-${form}` : "castform",
        version,
        variant
      ),
    interval: 3000,
  });

  // Burmy
  rotateForms({
    baseName: "burmy",
    forms: ["plant", "sandy", "trash"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version === "brilliantdiamond-shiningpearl") {
        return bdspImages[
          `Burmy-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      } else if (version === "pla") {
        return plaImages[
          `Burmy-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      }
      if (form === "plant") {
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${isShiny ? "/shiny" : ""}/412.png`
        );
      } else {
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${
            isShiny ? "/shiny" : ""
          }/412-${form}.png`
        );
      }
    },
    interval: 3000,
  });

  if (version !== "gen4") {
    rotateForms({
      baseName: "rotom",
      forms: ["normal", "heat", "wash", "fan", "frost", "mow"],
      getSpriteUrl: (form, version, variant, isShiny) => {
        if (version === "gen8") {
          return swordShieldImages[
            `Rotom${form === "normal" ? "" : "-" + form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (variant === "front_shiny" ? "_s" : "")
          ];
        } else if (version === "brilliantdiamond-shiningpearl") {
          if (isShiny) {
            return bdspImages[`Rotom_s`]; // Shiny normal form only in BDSP
          }
          return bdspImages[
            `Rotom${form === "normal" ? "" : "-" + form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (isShiny ? "_s" : "")
          ];
        } else if (version === "gen9") {
          return svImages[
            `Rotom${form === "normal" ? "" : "-" + form}`
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") + (isShiny ? "_s" : "")
          ];
        }
        let generation = generationMap[version];
        let formSuffix = form !== "normal" ? `-${form}` : "";
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${
            generationMap2[version]
          }${isShiny ? "/shiny" : ""}/479${formSuffix}.png`
        );
      },
      interval: 3000,
    });
  }

  if (
    version !== "gen3" &&
    version !== "emerald" &&
    version !== "firered-leafgreen"
  ) {
    // Deoxys (special: uses deoxys-normal as baseName)
    rotateForms({
      baseName: "deoxys-normal",
      forms: ["normal", "attack", "defense", "speed"],
      getSpriteUrl: (form, version, variant) =>
        fetchPokemonSprite(`deoxys-${form}`, version, variant),
      interval: 2000,
    });
  } else if (version === "firered-leafgreen") {
    // Rotate attack and defense
    rotateForms({
      baseName: "deoxys-attack",
      forms: ["attack", "defense"],
      getSpriteUrl: (form, version, variant) =>
        fetchPokemonSprite(`deoxys-${form}`, version, variant),
      interval: 3000,
    });
  }

  rotateForms({
    baseName: "deerling",
    forms: ["spring", "summer", "autumn", "winter"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version === "gen9") {
        return svImages[
          `Deerling-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      }
      const generation = generationMap[version];
      const ver = generationMap2[version];
      const formSuffix = form === "spring" ? "" : `-${form}`;
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          isShiny ? "/shiny" : ""
        }/585${formSuffix}.png`
      );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "sawsbuck",
    forms: ["spring", "summer", "autumn", "winter"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version === "gen9") {
        return svImages[
          `Sawsbuck-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      }
      const generation = generationMap[version];
      const ver = generationMap2[version];
      const formSuffix = form === "spring" ? "" : `-${form}`;
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          isShiny ? "/shiny" : ""
        }/586${formSuffix}.png`
      );
    },
    interval: 3000,
  });

  // Unown (shiny always shows "a" form)
  rotateForms({
    baseName: "unown",
    forms: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version === "brilliantdiamond-shiningpearl") {
        // Can show any shiny
        return bdspImages[
          `Unown-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      } else if (version === "pla") {
        return plaImages[
          `Unown-${form.charAt(0).toUpperCase() + form.slice(1)}${
            isShiny ? "_s" : ""
          }`
        ];
      } else if (version === "firered-leafgreen") {
        // Use emerald version
        version = "emerald";
      }
      const generation = generationMap[version];
      const ver = generationMap2[version];
      // If shiny, always use "a" form
      let formKey;
      if (version === "omegaruby-alphasapphire") {
        formKey = isShiny ? "default" : form;
      } else formKey = isShiny ? "a" : form;
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${generation}/${ver}${
          isShiny ? "/shiny" : ""
        }/${formKey === "default" ? "201" : `201-${formKey}`}.png`
      );
    },
    interval: 1000,
  });

  rotateForms({
    baseName: "meloetta-aria",
    forms: ["aria", "pirouette"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`meloetta-${form}`, version, variant),
    interval: 3000,
  });

  if (version !== "gen5") {
    rotateForms({
      baseName: "tornadus-incarnate",
      forms: ["incarnate", "therian"],
      getSpriteUrl: (form, version, variant) => {
        return fetchPokemonSprite(`tornadus-${form}`, version, variant);
      },
      interval: 3000,
    });
    rotateForms({
      baseName: "thundurus-incarnate",
      forms: ["incarnate", "therian"],
      getSpriteUrl: (form, version, variant) => {
        return fetchPokemonSprite(`thundurus-${form}`, version, variant);
      },
      interval: 3000,
    });
    rotateForms({
      baseName: "landorus-incarnate",
      forms: ["incarnate", "therian"],
      getSpriteUrl: (form, version, variant) => {
        return fetchPokemonSprite(`landorus-${form}`, version, variant);
      },
      interval: 3000,
    });

    rotateForms({
      baseName: "kyurem",
      forms: ["normal", "black", "white"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/646${form !== "normal" ? `-${form}` : ""}.png`
        );
      },
      interval: 3000,
    });

    rotateForms({
      baseName: "keldeo-ordinary",
      forms: ["ordinary", "resolute"],
      getSpriteUrl: (form, version, variant) =>
        fetchPokemonSprite(`keldeo-${form}`, version, variant),
      interval: 3000,
    });
  }

  rotateForms({
    baseName: "enamorus-incarnate",
    forms: ["incarnate", "therian"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`enamorus-${form}`, version, variant),
    interval: 3000,
  });

  rotateForms({
    baseName: "shellos",
    forms: ["west", "east"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version in ["gen4", "platinum", "heartgold-soulsilver", "gen5"])
        return Promise.resolve("");
      const formSuffix = form === "west" ? "" : "-east";
      if (version === "gen8") {
        return swordShieldImages[
          `Shellos-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (variant === "front_shiny" ? "_s" : "")
        ];
      } else if (version === "brilliantdiamond-shiningpearl") {
        return bdspImages[
          `Shellos${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else if (version === "pla") {
        return plaImages[
          `Shellos${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else if (version === "gen9") {
        return svImages[
          `Shellos${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${
            isShiny ? "shiny/" : ""
          }/422${formSuffix}.png`
        );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "gastrodon",
    forms: ["west", "east"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      if (version in ["gen4", "platinum", "heartgold-soulsilver", "gen5"])
        return Promise.resolve("");
      const formSuffix = form === "west" ? "" : "-east";
      if (version === "gen8") {
        return swordShieldImages[
          `gastrodon-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (variant === "front_shiny" ? "_s" : "")
        ];
      } else if (version === "brilliantdiamond-shiningpearl") {
        return bdspImages[
          `Gastrodon${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else if (version === "pla") {
        return plaImages[
          `Gastrodon${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else if (version === "gen9") {
        return svImages[
          `Gastrodon${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}/${
            isShiny ? "shiny/" : ""
          }423${formSuffix}.png`
        );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "cherrim",
    forms: ["overcast", "sunshine"],
    getSpriteUrl: (form, version, variant, isShiny) => {
      const formSuffix = form === "overcast" ? "" : "-sunshine";
      if (version === "gen8") {
        return swordShieldImages[
          `cherrim-${form}`
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-") + (variant === "front_shiny" ? "_s" : "")
        ];
      } else if (version === "brilliantdiamond-shiningpearl") {
        return bdspImages[
          `Cherrim${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else if (version === "pla") {
        return plaImages[
          `Cherrim${
            formSuffix.charAt(0) +
            formSuffix.charAt(1).toUpperCase() +
            formSuffix.slice(2)
          }${isShiny ? "_s" : ""}`
        ];
      } else
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${
            generationMap[version]
          }/${generationMap2[version]}${
            isShiny ? "/shiny" : ""
          }/421${formSuffix}.png`
        );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "meowstic-male",
    forms: ["male", "female"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`meowstic-${form}`, version, variant),
    interval: 3000,
  });

  rotateForms({
    baseName: "aegislash-shield",
    forms: ["shield", "blade"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`aegislash-${form}`, version, variant),
    interval: 3000,
  });

  if (version !== "gen4") {
    rotateForms({
      baseName: "giratina-altered",
      forms: ["altered", "origin"],
      getSpriteUrl: (form, version, variant, isShiny) => {
        if (version === "brilliantdiamond-shiningpearl") {
          return bdspImages[
            `Giratina-${form.charAt(0).toUpperCase() + form.slice(1)}${
              isShiny ? "_s" : ""
            }`
          ];
        } else if (version === "pla") {
          return plaImages[
            `Giratina-${form.charAt(0).toUpperCase() + form.slice(1)}${
              isShiny ? "_s" : ""
            }`
          ];
        }
        const gen = generationMap[version];
        const ver = generationMap2[version];
        if (form === "altered") {
          return Promise.resolve(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
              isShiny ? "/shiny" : ""
            }/487.png`
          );
        } else {
          return Promise.resolve(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
              isShiny ? "/shiny" : ""
            }/487-origin.png`
          );
        }
      },
      interval: 3000,
    });
  }

  rotateForms({
    baseName: "furfrou",
    forms: [
      "natural",
      "heart",
      "star",
      "diamond",
      "debutante",
      "matron",
      "dandy",
      "la-reine",
      "kabuki",
      "pharaoh",
    ],
    getSpriteUrl: (form, version, variant) => {
      if (version === "plza") {
        const formKey =
          form === "natural"
            ? "Furfrou"
            : `Furfrou-${form
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("-")}${variant === "front_shiny" ? "_s" : ""}`;
        return plzaImages[formKey];
      }
      const gen = generationMap[version];
      const ver = generationMap2[version];
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
          variant === "front_shiny" ? "/shiny" : ""
        }/676-${form}.png`
      );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "vivillon",
    forms: [
      "archipelago",
      "continental",
      "elegant",
      "fancy",
      "garden",
      "high-plains",
      "icy-snow",
      "jungle",
      "marine",
      "meadow",
      "modern",
      "monsoon",
      "ocean",
      "poke-ball",
      "polar",
      "river",
      "sandstorm",
      "savanna",
      "sun",
      "tundra",
    ],
    getSpriteUrl: (form, version, variant) => {
      if (version === "gen9") {
        return svImages[
          `Vivillon-${form
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join("-")}${variant === "front_shiny" ? "_s" : ""}`
        ];
      } else if (version === "plza") {
        if (variant === "front_shiny") {
          return plzaImages["Vivillon_s"];
        } else {
          return plzaImages[
            `Vivillon-${form
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-")}`
          ];
        }
      }
      const gen = generationMap[version];
      const ver = generationMap2[version];
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
          variant === "front_shiny" ? "/shiny" : ""
        }/666-${form}.png`
      );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "xerneas",
    forms: ["active", "neutral"],
    getSpriteUrl: (form, version, variant) => {
      if (version === "plza") {
        return plzaImages[`Xerneas${variant === "front_shiny" ? "_s" : ""}`]; // No forms in PLZA
      }
      const gen = generationMap[version];
      const ver = generationMap2[version];
      if (form === "neutral") {
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/716-neutral.png`
        );
      } else {
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/716-active.png`
        );
      }
    },
    interval: 3000,
  });

  // Not in gen 4 or 5
  if (
    !["gen4", "platinum", "heartgold-soulsilver", "gen5", "gen52"].includes(
      version
    )
  ) {
    rotateForms({
      baseName: "arceus",
      forms: [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ],
      getSpriteUrl: (form, version, variant) => {
        if (version === "brilliantdiamond-shiningpearl") {
          return bdspImages[
            `Arceus-${form.charAt(0).toUpperCase() + form.slice(1)}${
              variant === "front_shiny" ? "_s" : ""
            }`
          ];
        } else if (version === "pla") {
          return plaImages[
            `Arceus-${form.charAt(0).toUpperCase() + form.slice(1)}${
              variant === "front_shiny" ? "_s" : ""
            }`
          ];
        }
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/493-${form}.png`
        );
      },
      interval: 1000,
    });
  } else {
    rotateForms({
      baseName: "arceus",
      forms: [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
      ],
      getSpriteUrl: (form, version, variant) => {
        if (version === "brilliantdiamond-shiningpearl") {
          return bdspImages[
            `Arceus-${form.charAt(0).toUpperCase() + form.slice(1)}${
              variant === "front_shiny" ? "_s" : ""
            }`
          ];
        } else if (version === "pla") {
          return plaImages[
            `Arceus-${form.charAt(0).toUpperCase() + form.slice(1)}${
              variant === "front_shiny" ? "_s" : ""
            }`
          ];
        }
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/493-${form}.png`
        );
      },
      interval: 1000,
    });
  }

  if (
    ![
      "gen3",
      "emerald",
      "firered-leafgreen",
      "gen4",
      "platinum",
      "heartgold-soulsilver",
      "gen5",
      "gen52",
      "brilliantdiamond-shiningpearl",
    ].includes(version)
  ) {
    rotateForms({
      baseName: "rayquaza",
      forms: ["normal", "mega"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/384${form === "mega" ? "-mega" : ""}.png`
        );
      },
      interval: 3000,
    });
  }

  if (
    ![
      "gen3",
      "emerald",
      "firered-leafgreen",
      "gen4",
      "platinum",
      "heartgold-soulsilver",
      "gen5",
      "gen52",
      "gen6",
      "brilliantdiamond-shiningpearl",
    ].includes(version)
  ) {
    rotateForms({
      baseName: "kyogre",
      forms: ["normal", "primal"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/382${form === "primal" ? "-primal" : ""}.png`
        );
      },
      interval: 3000,
    });
    rotateForms({
      baseName: "groudon",
      forms: ["normal", "primal"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/383${form === "primal" ? "-primal" : ""}.png`
        );
      },
      interval: 3000,
    });
  }

  if (version !== "gen6") {
    rotateForms({
      baseName: "hoopa",
      forms: ["normal", "unbound"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}/${
            variant === "front_shiny" ? "shiny/" : ""
          }720${form === "unbound" ? "-unbound" : ""}.png`
        );
      },
      interval: 3000,
    });
  }

  rotateForms({
    baseName: "indeedee-male",
    forms: ["male", "female"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`indeedee-${form}`, version, variant),
    interval: 3000,
  });

  if (version === "gen7") {
    // Rotate necrozma without ultra form
    rotateForms({
      baseName: "necrozma",
      forms: ["normal", "dusk", "dawn"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/800${form !== "normal" ? `-${form}` : ""}.png`
        );
      },
      interval: 3000,
    });
  } else {
    rotateForms({
      baseName: "necrozma",
      forms: ["normal", "dusk", "dawn", "ultra"],
      getSpriteUrl: (form, version, variant) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            variant === "front_shiny" ? "/shiny" : ""
          }/800${form !== "normal" ? `-${form}` : ""}.png`
        );
      },
      interval: 3000,
    });
  }

  rotateForms({
    baseName: "wishiwashi-solo",
    forms: ["solo", "school"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`wishiwashi-${form}`, version, variant),
    interval: 5000,
  });

  rotateForms({
    baseName: "ogerpon-teal",
    forms: ["teal", "wellspring", "hearthflame", "cornerstone"],
    getSpriteUrl: (form, version, variant) => {
      return svImages[
        `Ogerpon-${form.charAt(0).toUpperCase() + form.slice(1)}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "silvally",
    forms: [
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ],
    getSpriteUrl: (form, version, variant) => {
      if (version === "gen8") {
        return swordShieldImages[
          `Silvally-${form.charAt(0).toUpperCase() + form.slice(1)}${
            variant === "front_shiny" ? "_s" : ""
          }`
        ];
      }
      const gen = generationMap[version];
      const ver = generationMap2[version];
      return Promise.resolve(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
          variant === "front_shiny" ? "/shiny" : ""
        }/773${form !== "normal" ? `-${form}` : ""}.png`
      );
    },
    interval: 1000,
  });

  if (version !== "gen9") {
    rotateForms({
      baseName: "minior-red-meteor",
      forms: [
        "red-meteor",
        "orange-meteor",
        "yellow-meteor",
        "green-meteor",
        "blue-meteor",
        "indigo-meteor",
        "violet-meteor",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
      ],
      getSpriteUrl: (form, version, variant, isShiny) => {
        const gen = generationMap[version];
        const ver = generationMap2[version];
        return Promise.resolve(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/${gen}/${ver}${
            isShiny ? "/shiny" : ""
          }/774${form !== "red-meteor" ? `-${form}` : ""}.png`
        );
      },
      interval: 1000,
    });
  } else {
    rotateForms({
      baseName: "minior-meteorite",
      forms: [
        "meteorite",
        "yellow",
        "blue",
        "green",
        "orange",
        "indigo",
        "violet",
        "red",
      ],
      getSpriteUrl: (form, version, variant, isShiny) => {
        if (isShiny) {
          return svImages["Minior_s"];
        } else
          return svImages[
            `Minior-${form.charAt(0).toUpperCase() + form.slice(1)}${
              isShiny ? "_s" : ""
            }`
          ];
      },
      interval: 1000,
    });
  }
  rotateForms({
    baseName: "mimikyu-disguised",
    forms: ["disguised", "busted"],
    getSpriteUrl: (form, version, variant) =>
      fetchPokemonSprite(`mimikyu-${form}`, version, variant),
    interval: 3000,
  });
  rotateForms({
    baseName: "koraidon",
    forms: ["normal", "mount"],
    getSpriteUrl: (form, version, variant) => {
      return svImages[
        `Koraidon${form === "normal" ? "" : "-Mount"}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
  });
  rotateForms({
    baseName: "miraidon",
    forms: ["normal", "mount"],
    getSpriteUrl: (form, version, variant) => {
      return svImages[
        `Miraidon${form === "normal" ? "" : "-Mount"}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
  });
  rotateForms({
    baseName: "dudunsparce",
    forms: ["normal", "three-segment"],
    getSpriteUrl: (form, version, variant) => {
      return fetchPokemonSprite(
        `dudunsparce${form === "normal" ? "" : "-three-segment"}`,
        version,
        variant
      );
    },
    interval: 3000,
  });
  rotateForms({
    baseName: "pecharunt",
    forms: ["normal", "shell"],
    getSpriteUrl: (form, version, variant) => {
      return fetchPokemonSprite(
        `pecharunt${
          form === "normal" || variant === "front_shiny" ? "" : "-shell"
        }`,
        version,
        variant
      );
    },
    interval: 3000,
  });
  rotateForms({
    baseName: "terapagos",
    forms: ["normal", "terastal", "stellar"],
    getSpriteUrl: (form, version, variant) => {
      return svImages[
        `Terapagos${
          form === "normal"
            ? ""
            : `-${form.charAt(0).toUpperCase() + form.slice(1)}`
        }${variant === "front_shiny" ? "_s" : ""}`
      ];
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "maushold",
    forms: ["normal", "family-of-three"],
    getSpriteUrl: (form, version, variant) => {
      return fetchPokemonSprite(
        `maushold${form === "normal" ? "" : "-family-of-three"}`,
        version,
        variant
      );
    },
    interval: 3000,
  });
  rotateForms({
    baseName: "gimmighoul",
    forms: ["normal", "roaming"],
    getSpriteUrl: (form, version, variant) => {
      return fetchPokemonSprite(
        `gimmighoul${form === "normal" ? "" : "-roaming"}`,
        version,
        variant
      );
    },
    interval: 3000,
  });

  rotateForms({
    baseName: "cramorant",
    forms: ["normal", "gulping", "gorging"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Cramorant${form === "normal" ? "" : `-${form}`}${
          variant === "front_shiny" ? "_s" : ""
        }`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-")
      ];
    },
    interval: 3000,
  });
  rotateForms({
    baseName: "morpeko",
    forms: ["normal", "hangry"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Morpeko${form === "full-belly" ? "" : "-Hangry"}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
  });

  if (!["gen7", "gen6", "omegaruby-alphasapphire"].includes(version)) {
    if (version !== "plza") {
      rotateForms({
        baseName: "zygarde-50",
        forms: ["50", "complete", "10"],
        getSpriteUrl: (form, version, variant) =>
          fetchPokemonSprite(`zygarde-${form}`, version, variant),
        interval: 3000,
      });
    } else {
      rotateForms({
        baseName: "zygarde-50",
        forms: ["50", "complete", "10", "mega"],
        getSpriteUrl: (form, version, variant) => {
          return plzaImages[
            `${form === "mega" ? "Mega-z" : "Z"}ygarde${
              form === "mega" ? "" : `-${form}`
            }${variant === "front_shiny" ? "_s" : ""}`
          ];
        },
        interval: 3000,
      });
    }
  }

  rotateForms({
    baseName: "zacian",
    forms: ["hero", "crowned"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Zacian${form === "crowned" ? "-Crowned" : ""}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
  });
  rotateForms({
    baseName: "zamazenta",
    forms: ["hero", "crowned"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Zamazenta${form === "crowned" ? "-Crowned" : ""}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
  });

  rotateForms({
    baseName: "eiscue-ice",
    forms: ["ice", "no-ice"],
    getSpriteUrl: (form, version, variant) =>
      swordShieldImages[
        `Eiscue-${form}${variant === "front_shiny" ? "_s" : ""}`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-")
      ],
    interval: 5000,
  });

  rotateForms({
    baseName: "calyrex",
    forms: ["normal", "ice", "shadow"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Calyrex${form === "normal" ? "" : `-${form}`}${
          variant === "front_shiny" ? "_s" : ""
        }`
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("-")
      ];
    },
    interval: 5000,
  });

  rotateForms({
    baseName: "zarude",
    forms: ["normal", "dada"],
    getSpriteUrl: (form, version, variant) => {
      return swordShieldImages[
        `Zarude${form === "dada" ? "-Dada" : ""}${
          variant === "front_shiny" ? "_s" : ""
        }`
      ];
    },
    interval: 3000,
  });

  if (version === "pla") {
    // Dialga/Palkia origin forms
    rotateForms({
      baseName: "dialga",
      forms: ["normal", "origin"],
      getSpriteUrl: (form, version, variant) => {
        return plaImages[
          `Dialga${form === "origin" ? "-Origin" : ""}${
            variant === "front_shiny" ? "_s" : ""
          }`
        ];
      },
      interval: 3000,
    });
    rotateForms({
      baseName: "palkia",
      forms: ["normal", "origin"],
      getSpriteUrl: (form, version, variant) => {
        return plaImages[
          `Palkia${form === "origin" ? "-Origin" : ""}${
            variant === "front_shiny" ? "_s" : ""
          }`
        ];
      },
      interval: 3000,
    });
  }

  // If the .square-list's version is gen8, then rotate gigantamax forms for all applicable Pokémon. Uses gigantamaxForms list
  const squareList = document.querySelector(".square-list");
  if (squareList && squareList.dataset.version === "gen8") {
    gigantamaxForms.forEach((gmaxForm) => {
      rotateForms({
        baseName: gmaxForm.toLowerCase(),
        forms: ["normal", "gigantamax"],
        getSpriteUrl: (form, version, variant) => {
          // We know it's gen 8, so use swordShieldImages
          if (gmaxForm.startsWith("Toxtricity") && form === "gigantamax") {
            gmaxFormFixed = gmaxForm.split("-")[0]; // Remove form suffix for Toxtricity, since both share the same gmax sprite
          } else {
            gmaxFormFixed = gmaxForm;
          }
          const key = (
            gmaxFormFixed
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("-") +
            (form === "gigantamax" ? "-Gigantamax" : "") +
            (variant === "front_shiny" ? "_s" : "")
          ).replace("-Gigantamax", "_g");
          return Promise.resolve(swordShieldImages[key] || "");
        },
        interval: 5000,
      });
    });
  }
}

// --- Add event listeners for mega stone toggle ---
document.querySelectorAll(".item-extension img").forEach((img) => {
  img.addEventListener("click", function () {
    const li = img.closest("li");
    let lowerName = li.querySelector(".item-header").textContent.toLowerCase();
    const megaStone = img.alt;
    const stoneIdx = img.dataset.stoneIndex || 0;
    const extKey = `mega-ext-${
      li.querySelector(".tilt-wrapper img").dataset.version
    }-${lowerName}-${stoneIdx}`;
    const megaImgUrl = getMegaStoneImgUrl(
      megaStone,
      li.querySelector(".tilt-wrapper img").dataset.version
    );

    // Load → toggle → save
    const current = localStorage.getItem(extKey) || "circle";
    const newState = current === "stone" ? "circle" : "stone";
    localStorage.setItem(extKey, newState);
    if (lowerName === "floette (black)") lowerName = "floette-eternal";
    if (lowerName === "zygarde") lowerName = "zygarde-50";

    // Apply to ALL list items (multi-version support)
    (async () => {
      await updateAllOfPokemon(lowerName, async (pokeImg) => {
        const pokeLi = pokeImg.closest("li");
        if (!pokeLi) return;

        const extImg = pokeLi.querySelector(
          `.item-extension img[data-stone-index="${stoneIdx}"]`
        );

        if (!extImg) return;

        // Choose the proper image
        extImg.src = newState === "stone" ? megaImgUrl : "circle.png";
      });
    })();
  });

  if (window.matchMedia("pointer: coarse").matches) {
    let pressTimer = null;
    const longPressTime = 500; // ms

    img.addEventListener("touchstart", (e) => {
      pressTimer = setTimeout(() => {
        mobileMegaClick(e);
      }, longPressTime);
    });

    img.addEventListener("touchend", () => clearTimeout(pressTimer));
    img.addEventListener("touchcancel", () => clearTimeout(pressTimer));
    img.addEventListener("touchmove", () => clearTimeout(pressTimer));

    function mobileMegaClick(e) {
      megaRightClick(e, img);
    }
  }

  // Add right-click handler for Mega form toggle
  img.addEventListener("contextmenu", async (e) => {
    await megaRightClick(e, img);
  });
});

async function megaRightClick(e, img) {
  e.preventDefault();
  const li = img.closest("li");
  const lowerName = li.querySelector(".item-header").textContent.toLowerCase();
  if (lowerName === "zygarde") return;
  const megaStone = img.alt;
  const version = li.querySelector("img[data-pokemon]").dataset.version;
  const isShiny = getShiny(li.querySelector("img[data-pokemon]"), version);

  // Only act if mega extension is present (in either map)
  if (
    !megaMap[lowerName] &&
    !megaStoneMap[lowerName] &&
    !legendsStones[lowerName]
  )
    return;

  await updateAllOfPokemon(lowerName, async (pokeImg) => {
    const isMegaActive = pokeImg.dataset.mega === "true";
    if (!isMegaActive) {
      // Switch to Mega form
      let megaName = lowerName;
      if (lowerName === "charizard") {
        megaName = megaStone.toLowerCase().includes("x")
          ? "charizard-mega-x"
          : "charizard-mega-y";
      } else if (lowerName === "mewtwo") {
        megaName = megaStone.toLowerCase().includes("x")
          ? "mewtwo-mega-x"
          : "mewtwo-mega-y";
      } else {
        megaName = `${lowerName}-mega`;
      }
      const variant = isShiny ? "front_shiny" : "front_default";
      let spriteUrl;
      if (version !== "letsgo") {
        if (version === "plza") {
          // Use PLZA image, Mega-chandelure or Mega-charizard-X
          parts = megaName.split("-");
          spriteUrl =
            plzaImages[
              "Mega-" +
                parts[0] +
                (parts[2] ? `-${parts[2].toUpperCase()}` : "") +
                (isShiny ? "_s" : "")
            ];
        } else spriteUrl = await fetchPokemonSprite(megaName, version, variant);
      } else {
        // Use ultra sun/moon image
        spriteUrl = await fetchPokemonSprite(
          megaName,
          "ultra-sun-ultra-moon",
          variant
        );
      }
      if (spriteUrl) pokeImg.src = spriteUrl;
      pokeImg.dataset.mega = "true";
      pokeImg.dataset.megaStone = megaStone;
      localStorage.setItem(`${lowerName}-mega-active-${version}`, "true");
      localStorage.setItem(`${lowerName}-mega-stone-${version}`, megaStone);
    } else {
      // Switch back to normal form
      const variant = isShiny ? "front_shiny" : "front_default";
      const spriteUrl = await fetchPokemonSprite(lowerName, version, variant);
      if (spriteUrl) pokeImg.src = spriteUrl;
      pokeImg.dataset.mega = "false";
      pokeImg.dataset.megaStone = "";
      localStorage.setItem(`${lowerName}-mega-active-${version}`, "false");
      localStorage.setItem(`${lowerName}-mega-stone-${version}`, "");
    }
  });
}

async function updateAllOfPokemon(pokemonName, updater) {
  const imgs = document.querySelectorAll(`img[data-pokemon="${pokemonName}"]`);
  for (const img of imgs) {
    await updater(img);
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((reg) => console.log("Service Worker registered:", reg))
      .catch((err) => console.log("Service Worker failed:", err));
  });
}

document.addEventListener("click", (e) => {
  document.querySelectorAll(".pokelist-dropdown.open").forEach((dd) => {
    if (!dd.contains(e.target)) {
      dd.classList.remove("open");
    }
  });
});
