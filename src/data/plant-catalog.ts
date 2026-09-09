export type PlantVariety = {
  id: string;
  name: string;
  description: string;
  season?: string;
  photo?: string;
  photoAlt?: string;
};

export type PlantCategory = {
  slug: string;
  name: string;
  intro: string;
  icon: string;
  varieties: PlantVariety[];
};

export const plantCategories: PlantCategory[] = [
  {
    slug: "mangoes",
    name: "Mangoes",
    intro:
      "Explore Alphonso, Kesar, and other mango varieties at Tes Farms in Central Florida. Ask George about availability and sizes.",
    icon: "\u{1F96D}",
    varieties: [
      {
        id: "alphonso",
        name: "Alphonso",
        season: "Midseason",
        description:
          "Rich, creamy flesh with a sweet, aromatic flavor. An Indian favorite.",
      },
      {
        id: "super-alphonso",
        name: "Super Alphonso",
        season: "Midseason",
        description:
          "A vigorous Alphonso selection with larger fruit and the familiar sweet flavor.",
      },
      {
        id: "kesar",
        name: "Kesar",
        season: "Midseason",
        description:
          "Saffron-colored flesh with a sweet, slightly tart flavor. A Gujarat favorite.",
      },
      {
        id: "kent",
        name: "Kent",
        season: "Late season",
        description:
          "Large fruit with very little fiber. Best eaten before it becomes overly ripe.",
      },
      {
        id: "neelum",
        name: "Neelum",
        season: "Late season",
        description:
          "A South Indian mango with firm, fiberless flesh and a sweet fragrance.",
      },
      {
        id: "valencia-pride",
        name: "Valencia Pride",
        season: "Midseason",
        description:
          "A large shade tree with elongated, fiberless fruit. Best with room to grow.",
      },
      {
        id: "nam-doc-mai",
        name: "Nam Doc Mai",
        season: "Early to midseason",
        description:
          "A semi-dwarf Thai mango suited to containers. Fiberless fruit, eaten green or ripe.",
      },
      {
        id: "glenn",
        name: "Glenn",
        season: "Midseason",
        description:
          "Mild, sweet, nearly fiberless fruit that turns yellow at the base when ripe.",
      },
      {
        id: "pickering",
        name: "Pickering",
        season: "Midseason",
        description:
          "A compact mango for containers and small yards. Can be maintained around six feet.",
      },
      {
        id: "cogshall",
        name: "Cogshall",
        season: "Midseason",
        description:
          "A slow-growing, compact mango suited to patio containers and small yards.",
      },
      {
        id: "carrie",
        name: "Carrie",
        season: "Midseason",
        description:
          "A compact grower with rich, sweet, aromatic fruit and no fiber.",
      },
      {
        id: "coconut-cream",
        name: "Coconut Cream",
        season: "Midseason",
        description:
          "Large, juicy, fiberless fruit with a creamy coconut-mango flavor.",
      },
      {
        id: "haden",
        name: "Haden",
        season: "Midseason",
        description:
          "A Florida classic with yellow fruit, a crimson blush, and good flavor.",
      },
      {
        id: "dot",
        name: "Dot",
        season: "Midseason",
        description:
          "Nearly fiberless, oblong fruit averaging around 20 ounces.",
      },
      {
        id: "lemon-zest",
        name: "Lemon Zest",
        season: "Early season",
        description:
          "Sweet citrus flavor from one of the earlier-fruiting mango varieties.",
      },
      {
        id: "tommy-atkins",
        name: "Tommy Atkins",
        season: "Early season",
        description: "Colorful fruit known for keeping well in storage.",
      },
      {
        id: "multi-graft",
        name: "Multi Graft",
        season: "Various",
        description:
          "Three to five mango varieties grafted onto one tree, saving space in the yard.",
      },
    ],
  },
  {
    slug: "avocados",
    name: "Avocados",
    intro:
      "Compare avocado varieties, flavors, and fruiting seasons at Tes Farms in Central Florida.",
    icon: "\u{1F951}",
    varieties: [
      {
        id: "brogdon",
        name: "Brogdon",
        season: "Jul\u2013Aug",
        description:
          "Purple-skinned fruit with buttery yellow flesh, typically 14 to 24 ounces.",
      },
      {
        id: "choquette",
        name: "Choquette",
        season: "Dec\u2013Mar",
        description:
          "Very large fruit, 20 to 40 ounces, with glossy green skin and creamy flesh.",
      },
      {
        id: "monroe",
        name: "Monroe",
        season: "Nov\u2013Jan",
        description:
          "Large fruit from an abundant producer and established Florida variety.",
      },
      {
        id: "day",
        name: "Day",
        season: "Sep\u2013Oct",
        description:
          "Suited to containers, with medium fruit and a buttery, sweet taste.",
      },
      {
        id: "lula",
        name: "Lula",
        season: "Dec\u2013Mar",
        description:
          "Large, pear-shaped fruit with a mild flavor. A good choice for guacamole.",
      },
      {
        id: "winter-mexican",
        name: "Winter Mexican",
        season: "Nov\u2013Jan",
        description:
          "Small, dark-skinned fruit with a rich, nutty flavor similar to Hass.",
      },
      {
        id: "mexicola",
        name: "Mexicola",
        season: "Jul",
        description:
          "A compact tree with thin, black-skinned fruit weighing 6 to 12 ounces.",
      },
      {
        id: "hall",
        name: "Hall",
        season: "Oct\u2013Nov",
        description:
          "Large, juicy fruit with nuttier, firmer flesh than Choquette.",
      },
      {
        id: "simmonds",
        name: "Simmonds",
        season: "Jul\u2013Sep",
        description:
          "An established Florida avocado known for early fruit and good eating quality.",
      },
      {
        id: "oro-negro",
        name: "Oro Negro",
        season: "Dec\u2013Jan",
        description:
          "Dark-skinned fruit with rich, buttery flesh and a creamy texture.",
      },
      {
        id: "super-hass",
        name: "Super Hass",
        season: "Sep\u2013Oct",
        description:
          "Rich, nutty fruit with textured black skin. Individual fruit can exceed a pound.",
      },
      {
        id: "nishikawa",
        name: "Nishikawa",
        season: "Nov\u2013Dec",
        description:
          "A Hawaiian variety with large, oval fruit and rich, creamy flesh.",
      },
    ],
  },
  {
    slug: "fruit-trees",
    name: "Fruit trees",
    intro:
      "Explore guava, lychee, jackfruit, chikoo, and other tropical fruit trees at Tes Farms.",
    icon: "\u{1F333}",
    varieties: [
      {
        id: "dragon-fruit",
        name: "Dragon Fruit",
        description:
          "A climbing cactus with pink or white-fleshed fruit. Needs a trellis or support.",
      },
      {
        id: "lychee",
        name: "Lychee",
        description:
          "Sweet, floral fruit with translucent flesh inside a rough red shell.",
      },
      {
        id: "longan",
        name: "Longan",
        description:
          "A lychee relative with honey-sweet flesh and a subtle smoky flavor.",
      },
      {
        id: "guava",
        name: "Guava",
        description:
          "Fragrant fruit for eating fresh, making juice, or cooking into jam.",
      },
      {
        id: "papaya",
        name: "Papaya",
        description:
          "A fast-growing tropical with sweet orange flesh. Needs a warm, sheltered spot.",
      },
      {
        id: "pomegranate",
        name: "Pomegranate",
        description:
          "Tangy, jewel-like seeds from a heat-loving, drought-tolerant plant.",
      },
      {
        id: "jackfruit",
        name: "Jackfruit",
        description:
          "Large fruit with sweet, pineapple-like segments. Needs space in a larger yard.",
      },
      {
        id: "sapodilla",
        name: "Sapodilla (Chikoo)",
        description:
          "Known as chikoo, with soft brown flesh and a brown-sugar sweetness.",
      },
      {
        id: "fig",
        name: "Fig",
        description:
          "Sweet, jammy fruit, with varieties selected for Florida’s humid climate.",
      },
      {
        id: "starfruit",
        name: "Starfruit (Carambola)",
        description:
          "Crisp, juicy, tangy-sweet fruit that forms a star when sliced.",
      },
      {
        id: "banana",
        name: "Banana",
        description:
          "Fast-growing tropical plants, with several varieties suited to Florida.",
      },
      {
        id: "passion-fruit",
        name: "Passion Fruit",
        description:
          "A vigorous vine with tangy, aromatic fruit for juices and desserts. Needs a trellis.",
      },
      {
        id: "soursop",
        name: "Soursop",
        description:
          "Large green fruit with creamy, tangy-sweet flesh, popular in juices and smoothies.",
      },
      {
        id: "sugar-apple",
        name: "Sugar Apple",
        description:
          "Sweet, custard-like flesh in segments, each surrounding a seed.",
      },
      {
        id: "atemoya",
        name: "Atemoya",
        description:
          "A sugar apple–cherimoya hybrid with creamy, vanilla-scented flesh and fewer seeds.",
      },
      {
        id: "mamey-sapote",
        name: "Mamey Sapote",
        description:
          "Salmon-colored flesh with notes of sweet potato, pumpkin, and almond.",
      },
      {
        id: "black-sapote",
        name: "Black Sapote",
        description:
          "The chocolate pudding fruit: dark, creamy flesh with a mild, sweet flavor.",
      },
      {
        id: "canistel",
        name: "Canistel (Egg Fruit)",
        description:
          "Dense, yellow-orange flesh with a texture and flavor like sweet potato custard.",
      },
      {
        id: "persimmon",
        name: "Persimmon",
        description:
          "Honey-sweet fruit, with both astringent and non-astringent varieties in the collection.",
      },
      {
        id: "loquat",
        name: "Loquat",
        description:
          "Small, sweet-tart yellow fruit that ripens in spring on an evergreen tree.",
      },
      {
        id: "grapes",
        name: "Grapes",
        description:
          "Muscadine and bunch grapes suited to Florida, for fresh eating or preserves.",
      },
      {
        id: "pineapple",
        name: "Pineapple",
        description:
          "A low-growing tropical with sweet, fragrant fruit. Easy to maintain.",
      },
      {
        id: "jujube",
        name: "Jujube",
        description:
          "Chinese date: crisp like an apple when fresh, chewy like a date when dried.",
      },
      {
        id: "wax-jambu",
        name: "Wax Jambu",
        description:
          "Bell-shaped fruit with a light sweetness and a crisp, refreshing crunch.",
      },
    ],
  },
  {
    slug: "berries-nuts-spices",
    name: "Berries, nuts & spices",
    intro:
      "Find turmeric, ginger, black pepper, berries, and nut trees for your garden at Tes Farms.",
    icon: "\u{1F33F}",
    varieties: [
      {
        id: "barbados-cherry",
        name: "Barbados Cherry (Acerola)",
        description:
          "A compact bush with small, tangy cherries. Also known as acerola.",
      },
      {
        id: "mulberry",
        name: "Mulberry",
        description:
          "Sweet, blackberry-like fruit from a fast-growing shade tree.",
      },
      {
        id: "blackberry",
        name: "Blackberry",
        description:
          "Thornless varieties for Florida, with sweet berries for fresh eating and baking.",
      },
      {
        id: "jaboticaba",
        name: "Jaboticaba",
        description:
          "Sweet, grape-like fruit grows directly on the trunk. A slow-growing tree.",
      },
      {
        id: "miracle-fruit",
        name: "Miracle Fruit",
        description:
          "Small red berries that temporarily make sour foods taste sweet.",
      },
      {
        id: "gooseberry",
        name: "Gooseberry",
        description:
          "Tart berries for pies, jams, or fresh eating, grown on compact bushes.",
      },
      {
        id: "macadamia",
        name: "Macadamia",
        description:
          "Buttery nuts from an evergreen tree. Takes several years to begin bearing.",
      },
      {
        id: "cashew",
        name: "Cashew",
        description:
          "A tropical tree producing cashew nuts and juicy cashew apples. Needs protection from frost.",
      },
      {
        id: "coconut",
        name: "Coconut",
        description:
          "A tropical palm grown for coconut water and flesh. Discuss cold protection with George.",
      },
      {
        id: "turmeric",
        name: "Turmeric",
        description:
          "Fresh haldi for cooking. Plant the rhizomes in spring and harvest the roots in fall.",
      },
      {
        id: "ginger",
        name: "Ginger",
        description:
          "Fresh adrak for the kitchen. Grows in partial shade, including under fruit trees.",
      },
      {
        id: "black-pepper",
        name: "Black Pepper",
        description:
          "A tropical spice vine for a trellis in a humid, shaded spot.",
      },
      {
        id: "moringa",
        name: "Moringa (Drumstick)",
        description:
          "Fast-growing drumstick tree with edible leaves, pods, and flowers.",
      },
      {
        id: "tamarind",
        name: "Tamarind",
        description:
          "A shade tree with sweet-sour pods used in South Indian cooking.",
      },
      {
        id: "allspice",
        name: "Allspice",
        description:
          "Fragrant leaves and berries with notes of cinnamon, nutmeg, and clove.",
      },
      {
        id: "cacao",
        name: "Cacao",
        description:
          "Colorful pods holding cocoa beans grow on the trunk. Needs a sheltered, humid spot.",
      },
      {
        id: "coffee",
        name: "Coffee",
        description:
          "A shade-loving shrub with fragrant white flowers, followed by red coffee cherries.",
      },
    ],
  },
  {
    slug: "citrus-trees",
    name: "Citrus trees",
    intro:
      "Browse lemons, limes, oranges, and other citrus trees at Tes Farms in Central Florida.",
    icon: "\u{1F34A}",
    varieties: [
      {
        id: "orange",
        name: "Orange (Navel / Valencia)",
        description:
          "Navel oranges for fresh eating; Valencia oranges for juicing.",
      },
      {
        id: "grapefruit",
        name: "Grapefruit",
        description:
          "Large, tangy-sweet citrus, including Ruby Red and Marsh varieties.",
      },
      {
        id: "tangerine",
        name: "Tangerine",
        description:
          "Sweet, easy-peel citrus, with several varieties suited to Central Florida.",
      },
      {
        id: "lemon",
        name: "Lemon (Meyer)",
        description:
          "Fragrant, sweeter lemons from a tree that grows well in containers.",
      },
      {
        id: "lime",
        name: "Lime (Key / Persian)",
        description:
          "Key limes for pies and drinks; Persian limes for everyday cooking.",
      },
      {
        id: "kumquat",
        name: "Kumquat",
        description:
          "Small citrus eaten whole, with sweet skin and tart flesh.",
      },
    ],
  },
  {
    slug: "exotic-indian-plants",
    name: "Indian plants & flowers",
    intro:
      "Find curry leaf, jasmine, parijat, tulsi, and other Indian plants at Tes Farms in Central Florida.",
    icon: "\u{1F3E1}",
    varieties: [
      {
        id: "curry-leaf",
        name: "Curry Leaf",
        description:
          "Fresh kadi patta for tadka, rasam, and chutney, straight from your garden.",
      },
      {
        id: "jasmine-mysore",
        name: "Jasmine (Mysore Mallige)",
        description:
          "Small, intensely fragrant white flowers for garlands, puja, or the garden.",
      },
      {
        id: "jasmine-grand-duke",
        name: "Jasmine (Grand Duke)",
        description:
          "Full, rose-like blooms with a strong fragrance. Suited to containers or garden beds.",
      },
      {
        id: "parijat",
        name: "Parijat (Night Jasmine)",
        description:
          "Fragrant white flowers with orange stems that bloom at night and fall by morning.",
      },
      {
        id: "neem",
        name: "Neem",
        description: "A fast-growing shade tree familiar in Indian gardens.",
      },
      {
        id: "tulsi",
        name: "Tulsi (Holy Basil)",
        description:
          "Aromatic holy basil for tea, cooking, and daily worship. Includes Rama and Krishna varieties.",
      },
      {
        id: "amla",
        name: "Amla (Indian Gooseberry)",
        description:
          "Tart Indian gooseberries for pickles, chutneys, and preserves.",
      },
      {
        id: "betel-leaf",
        name: "Betel Leaf (Paan)",
        description:
          "A climbing vine with heart-shaped paan leaves. Prefers a humid, shaded spot.",
      },
    ],
  },
];

/** Helper to find a category by slug */
export function getCategoryBySlug(slug: string): PlantCategory | undefined {
  return plantCategories.find((c) => c.slug === slug);
}

/** All valid category slugs for static generation */
export function getAllCategorySlugs(): string[] {
  return plantCategories.map((c) => c.slug);
}
