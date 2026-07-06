// Species data for Bamfield, BC intertidal zone
// Images sourced from Wikimedia Commons (CC-BY-SA or public domain)

const SPECIES_DATA = [
  {
    id: 1,
    commonName: "Giant Green Anemone",
    latinName: "Anthopleura xanthogrammica",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Low intertidal",
    description: "One of the largest anemones on the Pacific coast, reaching up to 25 cm in diameter. Its striking green color comes from symbiotic algae (zooxanthellae) living in its tissues.",
    identificationTips: [
      "Bright emerald green color — unmistakable when fully expanded",
      "Tentacles arranged in multiple rings around the mouth",
      "Often found in tidepools and low intertidal zones"
    ],
    imageUrl: "images/species-01.jpg",
    imageCredit: "Photo: Stan Shebs / Wikimedia Commons CC-BY-SA",
    color: "#2ecc71"
  },
  {
    id: 2,
    commonName: "Aggregating Anemone",
    latinName: "Anthopleura elegantissima",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Mid to low intertidal",
    description: "Forms large clonal colonies of genetically identical individuals that carpet rocks. The tentacle tips are pink or lavender, and the column is greenish with vertical stripes.",
    identificationTips: [
      "Found in dense clusters or 'colonies' on rocks",
      "Pink or lavender-tipped tentacles",
      "Green column with distinctive vertical stripes or lines"
    ],
    imageUrl: "images/species-02.jpg",
    imageCredit: "Photo: NOAA / Wikimedia Commons public domain",
    color: "#9b59b6"
  },
  {
    id: 3,
    commonName: "Ochre Sea Star",
    latinName: "Pisaster ochraceus",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Forcipulatida",
    habitat: "Mid to low intertidal",
    description: "A keystone predator that controls mussel populations. Typically has 5 arms and ranges from purple to orange or brown. Can grow up to 40 cm across.",
    identificationTips: [
      "Usually 5 arms with short, blunt spines in a mesh-like pattern",
      "Color varies: purple, orange, brown, or reddish",
      "Often found wrapped around mussels — its favorite prey"
    ],
    imageUrl: "images/species-03.jpg",
    imageCredit: "Photo: Ed Bierman / Wikimedia Commons CC-BY",
    color: "#e74c3c"
  },
  {
    id: 4,
    commonName: "Purple Sea Urchin",
    latinName: "Strongylocentrotus purpuratus",
    phylum: "Echinodermata",
    class: "Echinoidea",
    order: "Camarodonta",
    habitat: "Low intertidal",
    description: "A small, spiny urchin that excavates pits in bedrock using its teeth and spines. It is an important herbivore that controls kelp and algal growth.",
    identificationTips: [
      "Deep purple to almost black color with long, sharp spines",
      "Often found in rounded depressions or 'pits' in rocks",
      "Spines radiate in all directions; moves slowly on tube feet"
    ],
    imageUrl: "images/species-04.jpg",
    imageCredit: "Photo: Jacob L. / Wikimedia Commons CC-BY",
    color: "#8e44ad"
  },
  {
    id: 5,
    commonName: "California Mussel",
    latinName: "Mytilus californianus",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Mytilida",
    habitat: "Mid intertidal",
    description: "The largest mussel on the west coast, growing up to 20 cm. Forms dense beds that provide habitat for many other species. Its shell has strong radial ribs.",
    identificationTips: [
      "Large shell with prominent radiating ribs (ridges from hinge to edge)",
      "Blue-black to purplish-brown shell color",
      "Forms thick, dense beds in the mid-intertidal zone"
    ],
    imageUrl: "images/species-05.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#2c3e50"
  },
  {
    id: 6,
    commonName: "Pacific Blue Mussel",
    latinName: "Mytilus trossulus",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Mytilida",
    habitat: "High to mid intertidal",
    description: "Smaller than the California mussel, with a smooth, thinner shell. It is the most common mussel in the high intertidal zone and an important food species.",
    identificationTips: [
      "Smaller and smoother shell than California mussel (no strong ribs)",
      "Shiny blue-black shell with a thin, sharp edge",
      "Found higher up on rocks than California mussels"
    ],
    imageUrl: "images/species-06.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#34495e"
  },
  {
    id: 7,
    commonName: "Black Turban Snail",
    latinName: "Tegula funebralis",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Trochida",
    habitat: "High to mid intertidal",
    description: "A common black snail that grazes on microalgae from rocks. Its shell is nearly smooth and dark purple-black, and the shell opening has a pearly interior.",
    identificationTips: [
      "Smooth, rounded black shell shaped like a turban",
      "Pearly white interior visible when the snail is active",
      "Often found in large groups on rocks and in crevices"
    ],
    imageUrl: "images/species-07.jpg",
    imageCredit: "Photo: Stan Shebs / Wikimedia Commons CC-BY-SA",
    color: "#1a1a2e"
  },
  {
    id: 8,
    commonName: "Gumboot Chiton",
    latinName: "Cryptochiton stelleri",
    phylum: "Mollusca",
    class: "Polyplacophora",
    order: "Neoloricata",
    habitat: "Low intertidal",
    description: "The largest chiton in the world, growing up to 33 cm! It looks like a football-sized reddish-brown blob, but has 8 small white shell plates embedded under its leathery skin.",
    identificationTips: [
      "Huge, reddish-brown leathery body — looks like a 'gumboot'",
      "8 small white shell plates visible if you gently lift the skin",
      "Feels like tough rubber; found in low intertidal and subtidal"
    ],
    imageUrl: "images/species-08.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#8b4513"
  },
  {
    id: 9,
    commonName: "Black Katy Chiton",
    latinName: "Katharina tunicata",
    phylum: "Mollusca",
    class: "Polyplacophora",
    order: "Neoloricata",
    habitat: "Mid to low intertidal",
    description: "A medium-sized chiton (up to 12 cm) with a distinctive black leathery girdle that nearly covers the shell plates. It has a narrow, oval shape.",
    identificationTips: [
      "Oval, dark black body with a leathery girdle covering most of the shell",
      "Only a narrow strip of white shell plates visible down the center back",
      "Often found under rocks and in crevices"
    ],
    imageUrl: "images/species-09.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#111111"
  },
  {
    id: 10,
    commonName: "Gooseneck Barnacle",
    latinName: "Pollicipes polymerus",
    phylum: "Arthropoda",
    class: "Thecostraca",
    order: "Scalpelliformes",
    habitat: "High intertidal",
    description: "Not a true barnacle in the traditional sense — this filter-feeder attaches to rocks via a fleshy stalk. It has a cluster of greyish plates at the top and a tough, leathery stalk.",
    identificationTips: [
      "Distinctive 'neck' (stalk) with a cluster of plates at the top",
      "Grows in dense clusters on wave-exposed rocks",
      "The stalk is dark grey-black, the plates are lighter grey"
    ],
    imageUrl: "images/species-10.jpg",
    imageCredit: "Photo: Ed Bierman / Wikimedia Commons CC-BY",
    color: "#7f8c8d"
  },
  {
    id: 11,
    commonName: "Acorn Barnacle",
    latinName: "Balanus glandula",
    phylum: "Arthropoda",
    class: "Thecostraca",
    order: "Balanomorpha",
    habitat: "High intertidal",
    description: "The most common barnacle on the Pacific coast, forming a white or grey 'crust' on rocks. Its volcano-shaped shell has a diamond-shaped opening at the top.",
    identificationTips: [
      "Small volcano-shaped white/grey shell with diamond-shaped opening",
      "Forms dense white bands on rocks in the high intertidal",
      "Tiny feathery legs extend from the opening to filter feed when submerged"
    ],
    imageUrl: "images/species-11.jpg",
    imageCredit: "Photo: National Park Service / Wikimedia Commons public domain",
    color: "#bdc3c7"
  },
  {
    id: 12,
    commonName: "Purple Shore Crab",
    latinName: "Hemigrapsus nudus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "High to mid intertidal",
    description: "A small crab (up to 5 cm carapace width) with a square-ish carapace. As the name suggests, its claws are often purple with white tips.",
    identificationTips: [
      "Purple claws with distinctive white tips",
      "Square carapace with no hairs (unlike the similar green shore crab)",
      "Eyes on stalks that can fold into sockets"
    ],
    imageUrl: "images/species-12.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#8e44ad"
  },
  {
    id: 13,
    commonName: "Green Shore Crab",
    latinName: "Hemigrapsus oregonensis",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "High to mid intertidal",
    description: "Very similar to the purple shore crab, but with greenish mottled coloration and hairy legs. It is slightly smaller and prefers muddier or more sheltered habitats.",
    identificationTips: [
      "Greenish-brown mottled carapace with hairy (fuzzy) legs",
      "Claws are usually greenish, not purple (compare with H. nudus)",
      "Prefers muddy or rocky shores in more sheltered areas"
    ],
    imageUrl: "images/species-13.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#27ae60"
  },
  {
    id: 14,
    commonName: "Red Rock Crab",
    latinName: "Cancer productus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A striking bright red crab with black-tipped claws. It can grow up to 20 cm across the carapace and is one of the larger crabs in the intertidal zone.",
    identificationTips: [
      "Bright brick-red carapace with black-tipped claws",
      "Large, oval carapace with a smooth edge",
      "Powerful claws — can pinch hard! Handle with care"
    ],
    imageUrl: "images/species-14.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#c0392b"
  },
  {
    id: 15,
    commonName: "Feather Duster Worm",
    latinName: "Eudistylia polymorpha",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Sabellida",
    habitat: "Low intertidal",
    description: "A tube-dwelling worm that extends a beautiful fan of feathery tentacles (radioles) to filter feed. The fan can be red, purple, or brown and retracts instantly when disturbed.",
    identificationTips: [
      "Feathery 'crown' of tentacles in a spiral or fan shape (red, purple, brown)",
      "Lives in a leathery tube attached to rocks or docks",
      "Retracts completely into its tube when touched or shadowed"
    ],
    imageUrl: "images/species-15.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#e74c3c"
  },
  {
    id: 16,
    commonName: "Nuttall's Cockle",
    latinName: "Clinocardium nuttallii",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Cardiida",
    habitat: "Low intertidal",
    description: "A large, heart-shaped clam with prominent radiating ribs. It is a powerful burrower and can jump using its strong foot. The shell is pale brown with darker brown bands.",
    identificationTips: [
      "Heart-shaped (cockle) shell with strong radiating ribs",
      "Pale brown with darker brown concentric bands",
      "Can 'jump' by rapidly flexing its foot when handled"
    ],
    imageUrl: "images/species-16.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#d4a574"
  },
  {
    id: 17,
    commonName: "Butter Clam",
    latinName: "Saxidomus gigantea",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Venerida",
    habitat: "Low intertidal",
    description: "A commercially important clam with a thick, heavy white shell. It burrows deep in gravel or sand and is known for its sweet flavor. Can live over 20 years.",
    identificationTips: [
      "Thick, heavy, oval white shell with concentric growth lines",
      "Hinge has a prominent 'spoon-shaped' tooth",
      "Siphon tips are split (look for a dark spot at each tip)"
    ],
    imageUrl: "images/species-17.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#ecf0f1"
  },
  {
    id: 18,
    commonName: "Littleneck Clam",
    latinName: "Leukoma staminea",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Venerida",
    habitat: "Low intertidal",
    description: "A small, hard clam with a sculpted shell covered in fine radiating ribs. It burrows in gravel and sand. A favorite food clam with a sweet, tender meat.",
    identificationTips: [
      "Small, oval shell with fine radiating ribs (looks textured)",
      "Shell color varies: white, cream, or with brown zigzag patterns",
      "Siphon tips are fused (compare to butter clam's split siphons)"
    ],
    imageUrl: "images/species-18.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#d5b895"
  },
  {
    id: 19,
    commonName: "Blood Star",
    latinName: "Henricia leviuscula",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Spinulosida",
    habitat: "Low intertidal",
    description: "A small, brightly colored sea star with 5 long, slender arms. Colors range from orange to red or purple. It has a smooth texture and feeds on sponges.",
    identificationTips: [
      "Bright orange to red-purple color with 5 slender arms",
      "Smooth surface texture (no prominent spines)",
      "Arms are round in cross-section, not flattened"
    ],
    imageUrl: "images/species-19.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#e74c3c"
  },
  {
    id: 20,
    commonName: "Red Sea Cucumber",
    latinName: "Cucumaria miniata",
    phylum: "Echinodermata",
    class: "Holothuroidea",
    order: "Dendrochirotida",
    habitat: "Low intertidal",
    description: "A bright red-orange sea cucumber with 10 large, branching feeding tentacles. It attaches to rocks and filter-feeds by extending its feathery tentacles into the current.",
    identificationTips: [
      "Bright brick-red to orange cylindrical body",
      "10 large branching tentacles that look like a tree or fern",
      "Often found on the undersides of rocks or in crevices"
    ],
    imageUrl: "images/species-20.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#e67e22"
  },
  {
    id: 21,
    commonName: "Brooding Anemone",
    latinName: "Epiactis lisbethae",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Low intertidal",
    description: "A small anemone with a unique reproductive strategy — it broods its young internally and releases fully-formed juveniles. The column is pink to red with fine white stripes.",
    identificationTips: [
      "Small size (up to 2.5 cm), often with small juveniles clustered around base",
      "Pink to reddish column with fine vertical white stripes",
      "Tentacles are translucent with a pinkish tint"
    ],
    imageUrl: "images/species-21.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#ff69b4"
  },
  {
    id: 22,
    commonName: "Thatched Barnacle",
    latinName: "Semibalanus cariosus",
    phylum: "Arthropoda",
    class: "Thecostraca",
    order: "Balanomorpha",
    habitat: "High to mid intertidal",
    description: "A large barnacle with a distinctive 'thatched' or ridged shell. It can grow up to 3 cm in diameter and has a pale grey shell with dark vertical lines between the plates.",
    identificationTips: [
      "Large barnacle with heavy vertical ridges (looks 'thatched')",
      "Shell is pale grey with dark lines between plates",
      "Has a large, triangular opening at the top"
    ],
    imageUrl: "images/species-22.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#95a5a6"
  },
  {
    id: 23,
    commonName: "Checkered Periwinkle",
    latinName: "Littorina scutulata",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Littorinimorpha",
    habitat: "High intertidal",
    description: "A small snail (up to 1.5 cm) with a checkered or spotted pattern. It is very common on rocks and in barnacle shells in the high intertidal splash zone.",
    identificationTips: [
      "Small shell with a checkered pattern of white and dark squares",
      "Sharp pointed spire with about 5-6 whorls",
      "Found high up on rocks, often hiding in barnacle shells"
    ],
    imageUrl: "images/species-23.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#7f8c8d"
  },
  {
    id: 24,
    commonName: "Sitka Periwinkle",
    latinName: "Littorina sitkana",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Littorinimorpha",
    habitat: "High intertidal",
    description: "A small, solid periwinkle with a thick shell that varies from grey to yellow-brown. It has a distinctive pattern of spiral ridges and bands.",
    identificationTips: [
      "Thicker, more solid shell than checkered periwinkle",
      "Smooth shell with fine spiral ridges (not checkered pattern)",
      "Color varies: grey, olive, yellow-brown, often with bands"
    ],
    imageUrl: "images/species-24.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#8c8c6b"
  },
  {
    id: 25,
    commonName: "Sunflower Star",
    latinName: "Pycnopodia helianthoides",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Forcipulatida",
    habitat: "Low intertidal",
    description: "The largest sea star in the world, with up to 24 arms and spanning over 1 meter! It is a voracious predator that can move surprisingly fast (over 1 m/min).",
    identificationTips: [
      "Many arms (15-24) — far more than the typical 5-armed star",
      "Color ranges from purple to orange, pink, or brown",
      "Very large (up to 1 m across) and 'fleshy' or 'puffy' appearance"
    ],
    imageUrl: "images/species-25.jpg",
    imageCredit: "Photo: Kirt L. Onthank / Wikimedia Commons CC-BY-SA",
    color: "#d4a017"
  }
];