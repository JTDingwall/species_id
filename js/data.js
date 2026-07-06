// Species data for Bamfield, BC intertidal zone
// Images sourced from Wikimedia Commons (CC-BY-SA or public domain)

const SPECIES_DATA = [
  // === 1-25: Original species ===
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
  },

  // === 26-75: New species ===
  // -- Mollusca: Bivalves --
  {
    id: 26,
    commonName: "Pacific Oyster",
    latinName: "Magallana gigas",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Ostreida",
    habitat: "Mid to low intertidal",
    description: "An introduced species now common on the Pacific coast. Has a rough, irregular shell up to 25 cm long. A key aquaculture species, also found wild on rocks and mudflats.",
    identificationTips: [
      "Large, irregular shell with fluted or wavy edges",
      "Rough exterior with layered, scaly ridges",
      "White to grey shell, sometimes with purple patches inside"
    ],
    imageUrl: "images/species-26.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#d3d9e0"
  },
  {
    id: 27,
    commonName: "Olympia Oyster",
    latinName: "Ostrea lurida",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Ostreida",
    habitat: "Low intertidal",
    description: "The only native oyster species on the Pacific coast of North America. Small (up to 6 cm), with a rounded shell. Important for habitat restoration efforts.",
    identificationTips: [
      "Small, round to oval shell, rarely over 6 cm",
      "Greenish-grey to purplish-brown shell",
      "Found attached to rocks or in oyster beds in sheltered areas"
    ],
    imageUrl: "images/species-27.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#8b9c7e"
  },
  {
    id: 28,
    commonName: "Jingle Shell",
    latinName: "Pododesmus macrochisma",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Pectinida",
    habitat: "Low intertidal",
    description: "An unusual clam that cements itself permanently to rocks or shells. The thin, irregular shell is translucent and produces a jingling sound when shaken. Also called a 'rock oyster'.",
    identificationTips: [
      "Thin, translucent, irregular shell cemented to hard surfaces",
      "Greenish-grey with a silvery, pearly interior",
      "Shell makes a jingling sound when several are shaken together"
    ],
    imageUrl: "images/species-28.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#a9c9b8"
  },
  {
    id: 29,
    commonName: "Rock Scallop",
    latinName: "Crassadoma gigantea",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Pectinida",
    habitat: "Low intertidal",
    description: "A large scallop that cements itself to rocks at a young age. The upper valve is sculpted with coarse ridges, often encrusted with sponges and barnacles. Aggressively snaps its shell when disturbed.",
    identificationTips: [
      "Large scallop shell cemented to rocks with one valve visible",
      "Heavy radial ridges with spines on the upper valve",
      "Numerous eyes along the mantle edge (visible when open)"
    ],
    imageUrl: "images/species-29.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#c9a96e"
  },
  {
    id: 30,
    commonName: "Bent-nose Macoma",
    latinName: "Macoma nasuta",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Cardiida",
    habitat: "Low intertidal",
    description: "A common tellinid clam with a distinctive bent or twisted shell tip. Buried in muddy sand, it uses long, separate siphons to vacuum surface detritus.",
    identificationTips: [
      "Oval shell with a distinct bent or twisted tip at the posterior end",
      "White to cream shell with a thin, fragile feel",
      "Shell surface is smooth with fine concentric lines"
    ],
    imageUrl: "images/species-30.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#efe0d0"
  },

  // -- Mollusca: Gastropods --
  {
    id: 31,
    commonName: "Opalescent Nudibranch",
    latinName: "Hermissenda crassicornis",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A brilliantly colored nudibranch with orange and blue-tipped cerata. Up to 8 cm long. Feeds on hydroids and can incorporate their stinging cells into its own cerata for defense.",
    identificationTips: [
      "Translucent white body with bright orange cerata tipped in blue",
      "White stripe along the back with an orange line on each side",
      "Two large rhinophores (sensory tentacles) on the head"
    ],
    imageUrl: "images/species-31.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#ff6b35"
  },
  {
    id: 32,
    commonName: "Sea Lemon",
    latinName: "Doris montereyensis",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A common dorid nudibranch with a lemon-yellow body covered in small tubercles and dark spots. Feeds on encrusting sponges. Up to 15 cm long.",
    identificationTips: [
      "Lemon-yellow oval body with small bumps (tubercles)",
      "Dark spots scattered across the back",
      "Feathery gill plume at the rear (rhinophores at the front)"
    ],
    imageUrl: "images/species-32.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#f0c040"
  },
  {
    id: 33,
    commonName: "Frosted Nudibranch",
    latinName: "Dirona albolineata",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A distinctive nudibranch with large, flattened cerata edged in bright white. The body is translucent grey to yellowish. Feeds on small crustaceans.",
    identificationTips: [
      "Translucent body with large leaf-like cerata",
      "Each cerata is edged with a bright white line ('frosted')",
      "Up to 15 cm long, found under rocks and on kelp"
    ],
    imageUrl: "images/species-33.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#dceef0"
  },
  {
    id: 34,
    commonName: "Hooded Nudibranch",
    latinName: "Melibe leonina",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A large, transparent nudibranch with a unique oral hood it uses like a net to catch small crustaceans. Smells like watermelon when out of water!",
    identificationTips: [
      "Translucent, gelatinous body up to 15 cm long",
      "Large rounded oral hood (like a catcher's mitt)",
      "Rows of paddle-like cerata along the back; smells distinctly fruity"
    ],
    imageUrl: "images/species-34.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#c8e8d0"
  },
  {
    id: 35,
    commonName: "Shield Limpet",
    latinName: "Lottia pelta",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Patellogastropoda",
    habitat: "High to mid intertidal",
    description: "A medium-sized limpet with a ribbed shell that varies from dark grey to brown. Has a low, broad profile. Grazes algae from rocks using its radula.",
    identificationTips: [
      "Low, broad shell with strong radial ribs",
      "Shell color varies: grey, brown, or olive with a darker apex",
      "Shell margin fits the rock contour tightly when clamped down"
    ],
    imageUrl: "images/species-35.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8b8682"
  },
  {
    id: 36,
    commonName: "Rough Limpet",
    latinName: "Lottia digitalis",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Patellogastropoda",
    habitat: "High intertidal",
    description: "A small, high-intertidal limpet with a coarse, rough shell texture. Often has digital-like ridges. Color matches the surrounding rock — excellent camouflage.",
    identificationTips: [
      "Small, rough-textured shell with a forward-tilted apex",
      "Shell has coarse ribs giving a 'fingered' (digital) appearance",
      "Dull brown to grey; found high in the splash zone"
    ],
    imageUrl: "images/species-36.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#a0988a"
  },
  {
    id: 37,
    commonName: "Frilled Dogwinkle",
    latinName: "Nucella lamellosa",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Neogastropoda",
    habitat: "Mid intertidal",
    description: "A highly variable predatory snail famous for its shell sculpture — some have dramatic frills, others are nearly smooth. Drills into barnacles and mussels using its radula.",
    identificationTips: [
      "Shell with raised spiral ridges that can form dramatic frills or be nearly smooth",
      "Grey to white to brown; often with darker bands",
      "Thick, sturdy shell up to 8 cm; feeds on barnacles and mussels"
    ],
    imageUrl: "images/species-37.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#c4bfb8"
  },
  {
    id: 38,
    commonName: "Channeled Dogwinkle",
    latinName: "Nucella canaliculata",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Neogastropoda",
    habitat: "Mid intertidal",
    description: "Similar to the frilled dogwinkle but with deeply channeled grooves between the spiral ridges. Feeds on mussels by drilling through the shell and inserting its proboscis.",
    identificationTips: [
      "Spiral ridges separated by deep, channel-like grooves",
      "Grey to yellowish shell, usually without the frills of N. lamellosa",
      "Up to 5 cm; often found on or near mussel beds"
    ],
    imageUrl: "images/species-38.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#b0a89c"
  },

  // -- Mollusca: Cephalopods --
  {
    id: 39,
    commonName: "Giant Pacific Octopus",
    latinName: "Enteroctopus dofleini",
    phylum: "Mollusca",
    class: "Cephalopoda",
    order: "Octopoda",
    habitat: "Low intertidal",
    description: "The largest octopus species in the world — arm span up to 6 m! Incredibly intelligent, it can change color and texture instantly for camouflage. Usually found in dens under rocks.",
    identificationTips: [
      "Large size; reddish-brown body that can instantly change color",
      "8 arms with two rows of suckers on each arm",
      "Bulbous head with large, expressive eyes; skin can be smooth or bumpy"
    ],
    imageUrl: "images/species-39.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#c0392b"
  },
  {
    id: 40,
    commonName: "Red Octopus",
    latinName: "Octopus rubescens",
    phylum: "Mollusca",
    class: "Cephalopoda",
    order: "Octopoda",
    habitat: "Low intertidal",
    description: "A small, reddish octopus common in tidepools. Up to 50 cm across. Can change color rapidly. Feeds on crabs, clams, and snails.",
    identificationTips: [
      "Small size (usually under 50 cm arm span); reddish coloration",
      "White spots often visible when agitated",
      "Three small 'horns' (papillae) below the eyes"
    ],
    imageUrl: "images/species-40.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e67e22"
  },

  // -- Mollusca: Chitons --
  {
    id: 41,
    commonName: "Mossy Chiton",
    latinName: "Mopalia muscosa",
    phylum: "Mollusca",
    class: "Polyplacophora",
    order: "Neoloricata",
    habitat: "Mid intertidal",
    description: "A medium-sized chiton with a thick, hairy girdle that looks like moss. The 8 shell plates are grey to brown, often eroded. Feeds on algae scraped from rocks.",
    identificationTips: [
      "Thick, hairy or 'mossy' girdle surrounding the shell plates",
      "8 grey to brown shell plates, often partially eroded",
      "Oval body up to 7 cm; found under rocks and in crevices"
    ],
    imageUrl: "images/species-41.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#6b8e4a"
  },

  // -- Arthropoda: Crustaceans --
  {
    id: 42,
    commonName: "Striped Shore Crab",
    latinName: "Pachygrapsus crassipes",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "High to mid intertidal",
    description: "A fast-moving crab with distinctive transverse ridges and stripes on its carapace. Greenish to reddish-brown. Common on rocky shores and can run quickly over rocks.",
    identificationTips: [
      "Transverse lines or ridges on the carapace",
      "Greenish to reddish-brown carapace with dark green legs",
      "Square carapace; very fast and skittish on rocks"
    ],
    imageUrl: "images/species-42.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5a7d4a"
  },
  {
    id: 43,
    commonName: "Black-clawed Crab",
    latinName: "Lophopanopeus bellus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Mid intertidal",
    description: "A small, compact crab with black-tipped claws and a bumpy carapace. Common under rocks. The carapace is mottled brown and cream for excellent camouflage.",
    identificationTips: [
      "Small, compact crab with a bumpy (tuberculate) carapace",
      "Claws are tipped in distinctive black",
      "Mottled brown and cream coloration blends with rocks"
    ],
    imageUrl: "images/species-43.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#6d5b4e"
  },
  {
    id: 44,
    commonName: "Porcelain Crab",
    latinName: "Petrolisthes eriomerus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A flat, disk-shaped crab that looks like a true crab but is actually an anomuran (closer to hermit crabs). Filter-feeds using long, feathery mouthparts. Flat claws are used for defense.",
    identificationTips: [
      "Flat, round body with large, flat claws (looks like porcelain)",
      "Long antennae constantly waving",
      "Found under rocks; sheds claws easily when threatened"
    ],
    imageUrl: "images/species-44.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#c4b5a5"
  },
  {
    id: 45,
    commonName: "Hairy Hermit Crab",
    latinName: "Pagurus hirsutiusculus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "High to mid intertidal",
    description: "A small, common hermit crab with hairy legs and claws. Lives in empty snail shells. Antennae are banded with white and brown. Very abundant in tidepools.",
    identificationTips: [
      "Hairy legs and claws — the hairiest of our common hermit crabs",
      "Banded antennae (white and brown bands)",
      "Usually found in black turban snail shells"
    ],
    imageUrl: "images/species-45.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8c7864"
  },
  {
    id: 46,
    commonName: "Graceful Kelp Crab",
    latinName: "Pugettia gracilis",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A slender, long-legged spider crab that decorates itself with bits of algae and kelp for camouflage. The carapace is roughly triangular with two rostral horns.",
    identificationTips: [
      "Long, slender legs and a triangular carapace",
      "Two pointed rostral horns between the eyes",
      "Often covered with algae, kelp, or bryozoans for camouflage"
    ],
    imageUrl: "images/species-46.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#8b7355"
  },
  {
    id: 47,
    commonName: "Northern Kelp Crab",
    latinName: "Pugettia producta",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A larger, more robust kelp crab than P. gracilis. The carapace is smooth and shield-shaped. Color varies from olive-green to deep red-brown.",
    identificationTips: [
      "Large, shield-shaped carapace with a smooth texture",
      "Color matches kelp: olive-green to reddish-brown",
      "Two rostral horns; found on kelp and eelgrass"
    ],
    imageUrl: "images/species-47.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#6b4226"
  },
  {
    id: 48,
    commonName: "Oregon Pill Bug",
    latinName: "Gnorimosphaeroma oregonensis",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Isopoda",
    habitat: "High intertidal",
    description: "A small, flat isopod that rolls into a ball when disturbed (like a terrestrial pill bug). Grey to brown, found in large numbers under rocks and in crevices.",
    identificationTips: [
      "Flattened, oval body segmented into plates; rolls into a ball when touched",
      "Grey to brown; small (up to 1 cm)",
      "7 pairs of legs; abundant under rocks in the high intertidal"
    ],
    imageUrl: "images/species-48.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8c8c7c"
  },
  {
    id: 49,
    commonName: "Coonstripe Shrimp",
    latinName: "Pandalus danae",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A common shrimp with distinctive dark stripes running along the body. Translucent with brown, red, or orange stripes. Often found in eelgrass beds and under docks.",
    identificationTips: [
      "Translucent body with dark longitudinal stripes (like a raccoon tail)",
      "Long, serrated rostrum extending forward over the eyes",
      "Frequently seen in eelgrass beds and around dock pilings"
    ],
    imageUrl: "images/species-49.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#e8c4a0"
  },
  {
    id: 50,
    commonName: "Sitka Shrimp",
    latinName: "Heptacarpus sitchensis",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A small, slender shrimp with a greenish translucent body and fine red speckles. Common in eelgrass and algae in tidepools. A graceful swimmer that moves backwards to escape.",
    identificationTips: [
      "Slender, nearly transparent greenish body with red speckles",
      "Short rostrum; small size (up to 4 cm)",
      "Often found clinging to eelgrass or algae in tidepools"
    ],
    imageUrl: "images/species-50.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#a8d4a0"
  },

  // -- Echinodermata --
  {
    id: 51,
    commonName: "Six-armed Sea Star",
    latinName: "Leptasterias hexactis",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Forcipulatida",
    habitat: "Mid intertidal",
    description: "A small sea star with usually 6 arms (sometimes 5 or 7). Broods its eggs under the body. Color is variable: grey, green, brown, or reddish. Up to 8 cm across.",
    identificationTips: [
      "Usually 6 short, stubby arms (but can have 5 or 7)",
      "Small size, rarely over 8 cm wide",
      "Mottled coloration; often found brooding eggs in winter"
    ],
    imageUrl: "images/species-51.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#8b9dc3"
  },
  {
    id: 52,
    commonName: "Mottled Sea Star",
    latinName: "Evasterias troschelii",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Forcipulatida",
    habitat: "Mid to low intertidal",
    description: "A large, 5-armed sea star with a mottled pattern of grey, brown, and orange. Arms are long and slender compared to Pisaster. Predator of bivalves and barnacles.",
    identificationTips: [
      "5 long, slender arms with a mottled, patchy color pattern",
      "Grey, olive, brown, or orange with irregular dark patches",
      "Up to 60 cm across; arms taper to a fine point"
    ],
    imageUrl: "images/species-52.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#a0aab4"
  },
  {
    id: 53,
    commonName: "Bat Star",
    latinName: "Patiria miniata",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Valvatida",
    habitat: "Low intertidal",
    description: "A distinctive sea star with webbing between its 5 short arms, giving it a bat-like or pentagonal shape. Color varies wildly: red, orange, yellow, purple, or mottled.",
    identificationTips: [
      "Webbing between short arms gives a pentagonal or bat-like shape",
      "Highly variable color: red, orange, yellow, purple, or mottled",
      "Smooth, velvety texture (no spines); up to 20 cm across"
    ],
    imageUrl: "images/species-53.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e67e22"
  },
  {
    id: 54,
    commonName: "Leather Star",
    latinName: "Dermasterias imbricata",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Valvatida",
    habitat: "Low intertidal",
    description: "A smooth, leathery sea star with a distinctive sulphur-like smell. The surface is mottled in shades of green, grey, and orange. Feeds on sponges and sea anemones.",
    identificationTips: [
      "Smooth, slippery texture — feels like wet leather",
      "Mottled greenish-grey with orange and red patches",
      "Distinctive garlic or sulphur smell when handled"
    ],
    imageUrl: "images/species-54.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#7b9e7b"
  },
  {
    id: 55,
    commonName: "Green Sea Urchin",
    latinName: "Strongylocentrotus droebachiensis",
    phylum: "Echinodermata",
    class: "Echinoidea",
    order: "Camarodonta",
    habitat: "Low intertidal",
    description: "A greenish sea urchin with shorter, denser spines than the purple urchin. Important herbivore on kelp. Test (shell) is green to brownish, often found washed ashore.",
    identificationTips: [
      "Greenish to brownish test with relatively short, dense spines",
      "Spines are green, brown, or reddish-tipped",
      "Slightly larger and rounder than the purple urchin"
    ],
    imageUrl: "images/species-55.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#5a8f4a"
  },
  {
    id: 56,
    commonName: "California Sea Cucumber",
    latinName: "Parastichopus californicus",
    phylum: "Echinodermata",
    class: "Holothuroidea",
    order: "Aspidochirotida",
    habitat: "Low intertidal",
    description: "A large, warty sea cucumber up to 50 cm long. Reddish-brown with large conical papillae (fleshy bumps). Important detritivore that recycles nutrients.",
    identificationTips: [
      "Large, reddish-brown cylindrical body with rows of large conical bumps",
      "Prominent fleshy papillae along the body",
      "Can eject internal organs (evisceration) when stressed — handle gently!"
    ],
    imageUrl: "images/species-56.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#a0522d"
  },
  {
    id: 57,
    commonName: "Burrowing Sea Cucumber",
    latinName: "Leptosynapta clarki",
    phylum: "Echinodermata",
    class: "Holothuroidea",
    order: "Apodida",
    habitat: "Low intertidal",
    description: "A thin, worm-like sea cucumber that lives buried in sand or mud. Lacks tube feet; moves using tiny anchors in its skin. Has 12 branching feeding tentacles around the mouth.",
    identificationTips: [
      "Extremely slender, worm-like body (looks unlike a typical sea cucumber)",
      "12 feathery tentacles around the mouth for feeding",
      "Translucent pinkish-white; found buried in sand with tentacles extended"
    ],
    imageUrl: "images/species-57.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8b4b8"
  },
  {
    id: 58,
    commonName: "Daisy Brittle Star",
    latinName: "Ophiopholis aculeata",
    phylum: "Echinodermata",
    class: "Ophiuroidea",
    order: "Ophiurida",
    habitat: "Low intertidal",
    description: "A small, colorful brittle star with a distinct central disk patterned like a daisy flower. Arms are long and slender, banded with red, brown, and white. Hides under rocks.",
    identificationTips: [
      "Central disk with a daisy-like pattern of radiating lines",
      "5 very long, slender, flexible arms with distinct color bands",
      "Small (disk under 2 cm); hides under rocks and in crevices"
    ],
    imageUrl: "images/species-58.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#d4a0a0"
  },

  // -- Cnidaria --
  {
    id: 59,
    commonName: "Plumose Anemone",
    latinName: "Metridium senile",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Low intertidal",
    description: "A tall, elegant anemone with numerous fine, feathery tentacles. White, cream, or orange. Can grow up to 30 cm tall. Common on dock pilings and subtidal rocks.",
    identificationTips: [
      "Tall, slender column topped with a dense plume of fine, feathery tentacles",
      "White, cream, or soft orange coloration",
      "Tentacles give it a cauliflower-like or feathery appearance"
    ],
    imageUrl: "images/species-59.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#f5e6d3"
  },
  {
    id: 60,
    commonName: "White-spotted Rose Anemone",
    latinName: "Urticina crassicornis",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Low intertidal",
    description: "A medium-sized anemone with a red, pink, or green column covered in small white spots. The tentacles are banded in red and white. Feeds on small fish and crustaceans.",
    identificationTips: [
      "Column covered in distinctive white spots (tubercles)",
      "Banded tentacles (red/pink alternating with white)",
      "Often found in crevices or attached to buried rocks"
    ],
    imageUrl: "images/species-60.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#c41e3a"
  },
  {
    id: 61,
    commonName: "Tube-dwelling Anemone",
    latinName: "Pachycerianthus fimbriatus",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Spirularia",
    habitat: "Low intertidal",
    description: "A beautiful anemone that lives in a soft, fibrous tube buried in sand or mud. Has an outer ring of long tentacles and an inner ring of shorter ones. Bioluminescent!",
    identificationTips: [
      "Two distinct rings of tentacles: outer ring is long and tapering, inner is short",
      "Tentacles are often banded in brown, cream, or purple",
      "Lives in a soft tube buried in sand; retracts completely when disturbed"
    ],
    imageUrl: "images/species-61.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#8b5e3c"
  },
  {
    id: 62,
    commonName: "Ostrich-plume Hydroid",
    latinName: "Aglaophenia latirostris",
    phylum: "Cnidaria",
    class: "Hydrozoa",
    order: "Leptothecata",
    habitat: "Low intertidal",
    description: "A fern-like colonial hydroid that looks like a miniature ostrich feather. Grows on rocks and algae. Each 'plume' consists of many tiny feeding polyps that capture plankton.",
    identificationTips: [
      "Brown or tan fern-like colonies resembling ostrich plumes",
      "Delicate, branching structure with tiny polyps along the branches",
      "Up to 10 cm tall; attached to rocks and algae"
    ],
    imageUrl: "images/species-62.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#b08d5c"
  },
  {
    id: 63,
    commonName: "Water Jellyfish",
    latinName: "Aequorea victoria",
    phylum: "Cnidaria",
    class: "Hydrozoa",
    order: "Leptothecata",
    habitat: "Low intertidal",
    description: "A nearly transparent jellyfish famous for its green fluorescent protein (GFP), which revolutionized molecular biology. Up to 10 cm diameter. Glows around the rim when disturbed.",
    identificationTips: [
      "Almost completely transparent, saucer-shaped bell",
      "Faint blue-green bioluminescent glow around the margin",
      "Numerous fine radial canals visible through the bell"
    ],
    imageUrl: "images/species-63.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#b0e0e6"
  },

  // -- Porifera (Sponges) --
  {
    id: 64,
    commonName: "Breadcrumb Sponge",
    latinName: "Halichondria panicea",
    phylum: "Porifera",
    class: "Demospongiae",
    order: "Suberitida",
    habitat: "Low intertidal",
    description: "A common encrusting sponge that forms lobed, cushion-like masses on the undersides of rocks. Yellowish-green to beige. The surface is covered in small volcano-shaped oscula (excurrent openings).",
    identificationTips: [
      "Crumb-like or lobed encrusting mass, yellowish-green to beige",
      "Small volcano-shaped openings (oscula) scattered across the surface",
      "Soft and compressible texture; smells strongly of iodine"
    ],
    imageUrl: "images/species-64.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#c8b878"
  },
  {
    id: 65,
    commonName: "Purple Encrusting Sponge",
    latinName: "Haliclona permollis",
    phylum: "Porifera",
    class: "Demospongiae",
    order: "Haplosclerida",
    habitat: "Low intertidal",
    description: "A thin, encrusting sponge that forms a smooth purple or lavender sheet on rocks and pilings. Often found in shaded areas. Has a soft, velvety texture.",
    identificationTips: [
      "Thin, smooth purple to lavender crust on rocks and pilings",
      "Small oscula (pores) evenly distributed across the surface",
      "Soft and velvety to the touch; found in shaded or under-rock areas"
    ],
    imageUrl: "images/species-65.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#9966cc"
  },

  // -- Bryozoa --
  {
    id: 66,
    commonName: "Lacy Bryozoan",
    latinName: "Membranipora membranacea",
    phylum: "Bryozoa",
    class: "Gymnolaemata",
    order: "Cheilostomatida",
    habitat: "Low intertidal",
    description: "A colonial animal that forms white, lacy crusts on kelp blades and rocks. Each tiny box in the lace houses a microscopic animal (zooid) that filters food with its crown of tentacles.",
    identificationTips: [
      "White, lacy or honeycomb-like crust on kelp blades",
      "Each tiny rectangular cell houses one zooid",
      "Forms extensive, spreading colonies; looks like delicate lace"
    ],
    imageUrl: "images/species-66.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8ecef"
  },

  // -- Chordata: Tunicates --
  {
    id: 67,
    commonName: "Pacific Sea Squirt",
    latinName: "Ciona savignyi",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Phlebobranchia",
    habitat: "Low intertidal",
    description: "A solitary tunicate with a soft, translucent body. Has two siphons at the top, one for inhaling water and one for exhaling. Filters plankton from seawater. Often found on docks.",
    identificationTips: [
      "Soft, translucent, gelatinous body attached at the base",
      "Two prominent siphons at the top (incurrent and excurrent)",
      "Up to 10 cm tall; often in clusters on floating docks or pilings"
    ],
    imageUrl: "images/species-67.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e0d8b0"
  },
  {
    id: 68,
    commonName: "Stalked Tunicate",
    latinName: "Styela montereyensis",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Stolidobranchia",
    habitat: "Low intertidal",
    description: "A solitary tunicate with a tough, leathery brown body on top of a long stalk. Looks like a tiny brown bottle on a stick. Up to 25 cm tall; common on rocks and pilings.",
    identificationTips: [
      "Elongated, wrinkled brown body on a distinct stalk",
      "Two siphons with red or orange tips at the top of the body",
      "Leathery, tough texture; solitary, not in clusters"
    ],
    imageUrl: "images/species-68.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#5c4033"
  },
  {
    id: 69,
    commonName: "Orange Social Tunicate",
    latinName: "Metandrocarpa taylori",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Stolidobranchia",
    habitat: "Low intertidal",
    description: "A colonial tunicate that forms bright orange clusters of small, rounded zooids. Each zooid is about 5 mm across. Common on the undersides of rocks.",
    identificationTips: [
      "Small, rounded orange zooids in clusters or sheets",
      "Each zooid has a tiny incurrent siphon visible as a dot",
      "Bright orange to red-orange; covers rock undersides"
    ],
    imageUrl: "images/species-69.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#ff6600"
  },
  {
    id: 70,
    commonName: "Lightbulb Tunicate",
    latinName: "Clavelina huntsmani",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Aplousobranchia",
    habitat: "Low intertidal",
    description: "A colonial tunicate whose transparent zooids look like tiny lightbulbs. Each has a clear outer tunic with visible internal organs. Found in clusters on rocks and docks.",
    identificationTips: [
      "Transparent, lightbulb-shaped zooids in small clusters",
      "Internal organs visible through the clear tunic",
      "Small size (each zooid about 2-3 cm); attached to hard surfaces"
    ],
    imageUrl: "images/species-70.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#d0f0e0"
  },

  // -- Annelida (Segmented Worms) --
  {
    id: 71,
    commonName: "Calcareous Tube Worm",
    latinName: "Serpula columbiana",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Sabellida",
    habitat: "Low intertidal",
    description: "A tube-building worm that secretes a hard, white calcareous tube on rocks and shells. Extends a beautiful fan of red, pink, or orange tentacles to filter feed.",
    identificationTips: [
      "Hard, twisted white calcareous tube attached to rocks or shells",
      "Bright red, pink, or orange fan of tentacles when extended",
      "Tube is permanent; worm retracts completely when disturbed"
    ],
    imageUrl: "images/species-71.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#ff4444"
  },
  {
    id: 72,
    commonName: "Sandcastle Worm",
    latinName: "Phragmatopoma californica",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Sabellida",
    habitat: "Mid intertidal",
    description: "A colonial tube worm that builds honeycomb-like colonies from cemented sand grains. Colonies can cover large areas of rock. The dark, bristly tentacles are used to capture plankton.",
    identificationTips: [
      "Colonies of sand-grain tubes forming a honeycomb pattern on rocks",
      "Tubes are made of cemented sand, giving a rough, brown appearance",
      "Dark purple to black feeding tentacles extended when submerged"
    ],
    imageUrl: "images/species-72.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8b7355"
  },
  {
    id: 73,
    commonName: "Scale Worm",
    latinName: "Halosydna brevisetosa",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Phyllodocida",
    habitat: "Low intertidal",
    description: "A flat, oval worm covered by overlapping scales (elytra) that look like armor plates. Found under rocks, often with brittle stars. Can grow up to 5 cm long.",
    identificationTips: [
      "Flat, oval body covered with 18 pairs of overlapping scales (elytra)",
      "Scales are grey to brown; body underneath is pale",
      "Found under rocks, often in association with other invertebrates"
    ],
    imageUrl: "images/species-73.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#9e9e8e"
  },
  {
    id: 74,
    commonName: "Plume Worm",
    latinName: "Schizobranchia insignis",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Sabellida",
    habitat: "Low intertidal",
    description: "A large tube-dwelling worm with a spectacular spiraled crown of feathery radioles. The crown is orange, red, or maroon and can be over 5 cm across. Common on dock floats.",
    identificationTips: [
      "Large, spiraled crown of feathery tentacles (radioles) in orange-red",
      "Lives in a soft, flexible tube attached to hard surfaces",
      "Radioles have numerous side branches giving a feathery appearance"
    ],
    imageUrl: "images/species-74.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e85d3a"
  },

  // -- Nemertea & Platyhelminthes --
  {
    id: 75,
    commonName: "Green Ribbon Worm",
    latinName: "Emplectonema gracile",
    phylum: "Nemertea",
    class: "Hoplonemertea",
    order: "Monostilifera",
    habitat: "Mid intertidal",
    description: "A long, thin, bright green worm that can extend to over 30 cm. Moves by gliding on a trail of mucus. Has an eversible proboscis used to capture prey. Common under rocks.",
    identificationTips: [
      "Bright emerald green, extremely long and slender (like a ribbon)",
      "Smooth, shiny body with no segments or bristles",
      "Found under rocks; glides smoothly on a mucus trail"
    ],
    imageUrl: "images/species-75.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY (illustration)",
    color: "#22aa44"
  },

  // === 76-125: Nearshore fish + additional invertebrates ===
  // -- Nearshore Fish --
  {
    id: 76,
    commonName: "Tidepool Sculpin",
    latinName: "Oligocottus maculosus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "High to mid intertidal",
    description: "The most common intertidal fish in the Northeast Pacific. A small, cryptic sculpin that blends perfectly with rocks. Can survive out of water for hours in moist tidepools by breathing air directly.",
    identificationTips: [
      "Small (up to 9 cm) with mottled brown, grey, and green coloration",
      "Large fan-like pectoral fins, no scales",
      "Often seen resting on the bottom of tidepools, perfectly camouflaged"
    ],
    imageUrl: "images/species-76.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8b7d6b"
  },
  {
    id: 77,
    commonName: "Penpoint Gunnel",
    latinName: "Apodichthys flavidus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Low intertidal",
    description: "An eel-like fish that hides under rocks and in algae. Bright green to olive in color, with a distinctive dark spot at the base of the tail fin. Can breathe air and survive out of water temporarily.",
    identificationTips: [
      "Long, slender eel-like body up to 45 cm",
      "Bright green to olive coloration with a dark spot at tail base",
      "Sharp, spine-like anal fin ray ('pen point') near the vent"
    ],
    imageUrl: "images/species-77.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#4a8c3f"
  },
  {
    id: 78,
    commonName: "Crescent Gunnel",
    latinName: "Pholis laeta",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid intertidal",
    description: "A small, brightly colored gunnel with distinctive crescent-shaped markings below the eyes. Yellow-green to brown body with dark vertical bars. Common under rocks at low tide.",
    identificationTips: [
      "Crescent-shaped dark mark beneath each eye — key ID feature",
      "Yellow-green to brown with dark vertical bars or saddles",
      "Up to 25 cm; eel-like body with small pectoral fins"
    ],
    imageUrl: "images/species-78.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#c4a43e"
  },
  {
    id: 79,
    commonName: "Padded Sculpin",
    latinName: "Artedius fenestralis",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid to low intertidal",
    description: "A medium-sized sculpin with a knobby, bumpy head and prominent cirri (tiny skin flaps). Its wide mouth and flattened head give it a frog-like appearance when viewed from above.",
    identificationTips: [
      "Bumpy, knobby head with cirri (skin flaps) above the eyes",
      "Mottled brown, tan, and grey — excellent camouflage on rocks",
      "Large pectoral fins; body up to 12 cm"
    ],
    imageUrl: "images/species-79.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#9e8e7c"
  },
  {
    id: 80,
    commonName: "Pacific Staghorn Sculpin",
    latinName: "Leptocottus armatus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Low intertidal",
    description: "A large sculpin with distinctive antler-like preopercular spines. Can grow up to 45 cm. Tolerates a wide range of salinities and is common in estuaries and tidepools.",
    identificationTips: [
      "Large, 3-pronged 'antler' spine on each cheek (preoperculum)",
      "Mottled olive-grey, brown, and cream coloration",
      "Body can be very large (up to 45 cm); fans out pectorals on substrate"
    ],
    imageUrl: "images/species-80.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#7a7a5c"
  },
  {
    id: 81,
    commonName: "Saddleback Gunnel",
    latinName: "Pholis ornata",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid intertidal",
    description: "A brightly patterned gunnel with distinctive saddle-like dark bands across the back. The bands alternate with lighter orange or yellow spaces. Found under rocks at low tide.",
    identificationTips: [
      "Dark saddle-shaped bands across the back (alternating with light bands)",
      "Orange to olive-green body, up to 25 cm",
      "Eel-like; often found coiled under rocks in the intertidal"
    ],
    imageUrl: "images/species-81.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#d4956b"
  },
  {
    id: 82,
    commonName: "High Cockscomb",
    latinName: "Anoplarchus purpurescens",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid intertidal",
    description: "A prickleback with a distinctive fleshy crest (cockscomb) on top of the head. Body color ranges from purple to olive-brown. Extremely slippery — hard to catch!",
    identificationTips: [
      "Fleshy crest or 'cockscomb' ridge on top of the head",
      "Purplish-brown to olive body, up to 25 cm",
      "Long dorsal fin and anal fin running most of the body length"
    ],
    imageUrl: "images/species-82.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#6b3a7d"
  },
  {
    id: 83,
    commonName: "Bay Pipefish",
    latinName: "Syngnathus leptorhynchus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Syngnathiformes",
    habitat: "Low intertidal",
    description: "A slender, pencil-thin relative of seahorses. Hides in eelgrass and algae. Males carry eggs in a brood pouch. The snout is a long tube used to suck up tiny crustaceans.",
    identificationTips: [
      "Very long, thin body (like a straightened seahorse) up to 30 cm",
      "Tube-like snout with a tiny mouth at the tip",
      "Green to brown; found in eelgrass beds and algae"
    ],
    imageUrl: "images/species-83.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#6b8e4a"
  },
  {
    id: 84,
    commonName: "Kelp Greenling",
    latinName: "Hexagrammos decagrammus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Low intertidal",
    description: "A medium-sized fish with distinctive blue or blue-green flesh (yes, the meat is blue!). Males and females have different color patterns. Males are dark with blue spots, females are speckled.",
    identificationTips: [
      "Blue or turquoise spots on the head and body (males)",
      "Females are brownish with orange or red speckles",
      "5 lateral lines on each side; cirrus (small flap) above each eye"
    ],
    imageUrl: "images/species-84.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#3b7dd8"
  },
  {
    id: 85,
    commonName: "Black Prickleback",
    latinName: "Xiphister atropurpureus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid intertidal",
    description: "A dark, eel-like fish with a long dorsal fin running the length of the body. Deep brown to nearly black in color. Very slippery and hard to catch — moves like a snake through rocks and algae.",
    identificationTips: [
      "Very dark coloration: deep brown to almost black",
      "Long, eel-like body up to 30 cm",
      "Dorsal and anal fins run nearly the full body length"
    ],
    imageUrl: "images/species-85.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#1a1a2e"
  },
  {
    id: 86,
    commonName: "Rock Prickleback",
    latinName: "Xiphister mucosus",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Mid intertidal",
    description: "A lighter-colored relative of the black prickleback, with a distinctive yellowish-olive body and dark stripes along the side. Found under rocks in the mid-intertidal zone.",
    identificationTips: [
      "Olive-green to yellowish body with dark horizontal stripes",
      "Three dark lines radiating from each eye",
      "Long, eel-like body up to 55 cm; very slippery!"
    ],
    imageUrl: "images/species-86.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#7a8e4c"
  },
  {
    id: 87,
    commonName: "Mosshead Warbonnet",
    latinName: "Chirolophis nugator",
    phylum: "Chordata",
    class: "Actinopterygii",
    order: "Scorpaeniformes",
    habitat: "Low intertidal",
    description: "One of the most ornate intertidal fish, with a spectacular crown of branched cirri on the head. The body is brown with lighter mottling. Hides in crevices and under ledges.",
    identificationTips: [
      "Elaborate crown of branched cirri (fleshy tendrils) on the head — looks like a mossy headdress",
      "Brown body with cream or white mottling",
      "Up to 20 cm; compressed, elongated body"
    ],
    imageUrl: "images/species-87.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5c4033"
  },

  // -- Additional Echinodermata --
  {
    id: 88,
    commonName: "Sand Dollar",
    latinName: "Dendraster excentricus",
    phylum: "Echinodermata",
    class: "Echinoidea",
    order: "Clypeasteroida",
    habitat: "Low intertidal",
    description: "A flat, disk-shaped urchin that lives partially buried in sand. Covered in short, velvety spines used for locomotion and feeding. The characteristic 'flower' pattern on the test is visible after the spines fall off.",
    identificationTips: [
      "Flat, round disk shape with a 5-petaled flower pattern on the upper surface",
      "Grey to purple-brown when alive (spines attached); white skeleton when dead",
      "Found in sandy areas; often in dense beds"
    ],
    imageUrl: "images/species-88.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#d4c4b0"
  },
  {
    id: 89,
    commonName: "Sun Star",
    latinName: "Solaster stimpsoni",
    phylum: "Echinodermata",
    class: "Asteroidea",
    order: "Valvatida",
    habitat: "Low intertidal",
    description: "A striking sea star with 8-12 long, slender arms and a blue-grey to orange body with a darker stripe down each arm. Feeds primarily on sea cucumbers.",
    identificationTips: [
      "8-12 long, tapering arms with a darker stripe down the center of each",
      "Blue-grey, purple, or orange-red with banded arms",
      "Up to 50 cm across; smooth texture"
    ],
    imageUrl: "images/species-89.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5b7cb5"
  },
  {
    id: 90,
    commonName: "Slender Sea Star",
    latinName: "Amphiodia occidentalis",
    phylum: "Echinodermata",
    class: "Ophiuroidea",
    order: "Ophiurida",
    habitat: "Low intertidal",
    description: "A small brittle star that lives buried in sand, extending only its arm tips to feed. The arms are extremely long and flexible, up to 10x the disk diameter. The disk is only about 1 cm across.",
    identificationTips: [
      "Tiny central disk (about 1 cm) with extremely long, slender arms (up to 10 cm)",
      "Arms are grey to pale brown; disk is greyish",
      "Found buried in sand; arm tips visible at the surface feeding"
    ],
    imageUrl: "images/species-90.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#c4b8a8"
  },

  // -- Additional Cnidaria --
  {
    id: 91,
    commonName: "Orange Cup Coral",
    latinName: "Balanophyllia elegans",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Scleractinia",
    habitat: "Low intertidal",
    description: "The only true stony coral common in the intertidal zone of the Pacific Northwest. A solitary coral with a bright orange polyp surrounded by clear, tapering tentacles. Lives attached to rocks.",
    identificationTips: [
      "Bright orange solitary polyp about 1-2 cm across",
      "Transparent, tapering tentacles in a ring around the central mouth",
      "Attached to rocks; often found in caves and under ledges"
    ],
    imageUrl: "images/species-91.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#ff6600"
  },
  {
    id: 92,
    commonName: "Swimming Anemone",
    latinName: "Stomphia coccinea",
    phylum: "Cnidaria",
    class: "Anthozoa",
    order: "Actiniaria",
    habitat: "Low intertidal",
    description: "A small anemone that can actively swim by thrashing its body when threatened by predatory sea stars. The column is pale pink to red with white stripes. Attached to rocks subtidally.",
    identificationTips: [
      "Swims by vigorously contracting and bending its body — unique among local anemones",
      "Pale pink to red column with fine white stripes",
      "Up to 5 cm; often on rocks near sand"
    ],
    imageUrl: "images/species-92.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8a0a0"
  },
  {
    id: 93,
    commonName: "Red Sea Urchin",
    latinName: "Mesocentrotus franciscanus",
    phylum: "Echinodermata",
    class: "Echinoidea",
    order: "Camarodonta",
    habitat: "Low intertidal",
    description: "The largest sea urchin on the Pacific coast, with a test up to 18 cm across and long, sharp spines up to 8 cm. Brick-red to dark maroon. Commercially harvested for uni (gonads).",
    identificationTips: [
      "Very large size (test up to 18 cm) with long, sharp spines (up to 8 cm)",
      "Brick-red to dark maroon coloration",
      "Spines are longer and more widely spaced than purple or green urchins"
    ],
    imageUrl: "images/species-93.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#cc3333"
  },

  // -- Additional Mollusca: Bivalves --
  {
    id: 94,
    commonName: "Horse Clam",
    latinName: "Tresus capax",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Venerida",
    habitat: "Low intertidal",
    description: "A very large, deep-burrowing clam with a massive, gapping shell. The siphon tips are covered in a leathery brown skin. Can weigh over 2 kg! Important food species for coastal peoples.",
    identificationTips: [
      "Very large shell (up to 20 cm) with a wide gape at one end",
      "Large, leathery brown siphon visible when buried (cannot fully retract)",
      "Shell is chalky white with a brown periostracum (outer skin)"
    ],
    imageUrl: "images/species-94.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#f0e8d8"
  },
  {
    id: 95,
    commonName: "Softshell Clam",
    latinName: "Mya arenaria",
    phylum: "Mollusca",
    class: "Bivalvia",
    order: "Myida",
    habitat: "Low intertidal",
    description: "An introduced species now common in muddy bays. Has a thin, fragile shell with a large spoon-shaped chondrophore (internal hinge shelf). The elongated siphon cannot fully retract.",
    identificationTips: [
      "Thin, fragile white shell that gapes at both ends",
      "Large, spoon-shaped chondrophore in the left valve hinge",
      "Long, fused siphon that stays partially extended"
    ],
    imageUrl: "images/species-95.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8ddd0"
  },

  // -- Additional Mollusca: Gastropods --
  {
    id: 96,
    commonName: "Leafy Hornmouth",
    latinName: "Ceratostoma foliatum",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Neogastropoda",
    habitat: "Low intertidal",
    description: "A predatory snail with a spectacular shell featuring three prominent, leaf-like frills (varices) spaced around the shell. White to pale brown. Drills into barnacles and bivalves.",
    identificationTips: [
      "Three large, wing-like or leaf-like frills on the shell (varices)",
      "White to cream shell with a pointed spire",
      "Tooth-like ridge on the inside of the outer lip"
    ],
    imageUrl: "images/species-96.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#f5f0e8"
  },
  {
    id: 97,
    commonName: "White-lined Dirona",
    latinName: "Dirona picta",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A colorful nudibranch with bright orange cerata tipped in white. Unlike the frosted nudibranch (D. albolineata), this species has orange cerata with white tips and more body color.",
    identificationTips: [
      "Bright orange cerata with white tips — more colorful than D. albolineata",
      "Translucent white to pinkish body",
      "Up to 8 cm; found on hydroids and bryozoans"
    ],
    imageUrl: "images/species-97.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#ff8844"
  },
  {
    id: 98,
    commonName: "Clown Nudibranch",
    latinName: "Triopha catalinae",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A stunning nudibranch with a translucent white body covered in bright orange-tipped cerata. The rhinophores and gill plume are also bright orange. One of the most photogenic tidepool animals on the Pacific coast.",
    identificationTips: [
      "Translucent white body with numerous orange-tipped cerata (looks like it's decorated with orange candy)",
      "Bright orange rhinophores and gill plume",
      "Up to 7 cm; feeds on bryozoans"
    ],
    imageUrl: "images/species-98.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#ff8844"
  },
  {
    id: 99,
    commonName: "Shaggy Mouse Nudibranch",
    latinName: "Aeolidia papillosa",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A large, shaggy-looking nudibranch covered in dense, flattened cerata that make it look like a fuzzy grey or brown mouse. Feeds on anemones. Up to 10 cm long.",
    identificationTips: [
      "Covered in dense, grey-brown cerata — looks furry like a mouse",
      "Can grow quite large (up to 10 cm)",
      "Often found near or on sea anemones — its primary prey"
    ],
    imageUrl: "images/species-99.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#9c8c7c"
  },
  {
    id: 100,
    commonName: "Red Sponge Nudibranch",
    latinName: "Rostanga pulchra",
    phylum: "Mollusca",
    class: "Gastropoda",
    order: "Nudibranchia",
    habitat: "Low intertidal",
    description: "A small, bright red-orange dorid nudibranch that feeds exclusively on red encrusting sponges. Its color perfectly matches its food source — excellent camouflage. Up to 2 cm long.",
    identificationTips: [
      "Bright red-orange coloration that matches red encrusting sponge",
      "Small size (up to 2 cm) with a rounded, oval body",
      "Camouflaged on its prey; look for the gill plume at the rear"
    ],
    imageUrl: "images/species-100.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e65c3a"
  },

  // -- Additional Arthropoda --
  {
    id: 101,
    commonName: "Oregon Cancer Crab",
    latinName: "Cancer oregonensis",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A small cancer crab (up to 5 cm carapace width) with a smooth, purplish-brown carapace. The claws are tipped in black. Found under rocks in the low intertidal and shallow subtidal.",
    identificationTips: [
      "Small, purplish-brown carapace with a smooth, rounded edge",
      "Black-tipped claws; sharp, tooth-like serrations on carapace edge",
      "Similar to juvenile red rock crab but stays much smaller"
    ],
    imageUrl: "images/species-101.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#7a4a6e"
  },
  {
    id: 102,
    commonName: "Hairy Cancer Crab",
    latinName: "Cancer harrissoni",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A small cancer crab with a carapace covered in fine hairs, giving it a velvety appearance. Reddish-brown with a smooth carapace edge. The legs are also hairy.",
    identificationTips: [
      "Fine hairs covering the carapace and legs — velvety appearance",
      "Reddish-brown coloration with a smooth carapace margin",
      "Small (carapace up to 4 cm); black-tipped claws"
    ],
    imageUrl: "images/species-102.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8c5240"
  },
  {
    id: 103,
    commonName: "Flat Porcelain Crab",
    latinName: "Petrolisthes cinctipes",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Mid intertidal",
    description: "A flat, wide porcelain crab with large claws and longer antennae than P. eriomerus. The carapace is smooth and the claws are disproportionately large. Common under rocks in the mid-intertidal.",
    identificationTips: [
      "Very flat body with wide, rounded carapace and large, flat claws",
      "Reddish-brown to grey; claws may have orange-red spots",
      "Longer carpus (wrist segment) than P. eriomerus"
    ],
    imageUrl: "images/species-103.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#c4926a"
  },
  {
    id: 104,
    commonName: "Long-horned Decorator Crab",
    latinName: "Chorilia longipes",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A spider crab with long, slender legs and two long rostral horns. Actively decorates itself with sponges, hydroids, and algae for camouflage. The carapace is teardrop-shaped.",
    identificationTips: [
      "Two long, diverging rostral horns between the eyes",
      "Long, slender legs; often covered in attached organisms",
      "Teardrop-shaped carapace; up to 4 cm carapace width"
    ],
    imageUrl: "images/species-104.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#d4886b"
  },
  {
    id: 105,
    commonName: "Smooth Brown Hermit Crab",
    latinName: "Pagurus granosimanus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Mid intertidal",
    habitat: "Mid intertidal",
    description: "A common hermit crab with a smooth, dark olive to brown body and bright blue specks on the legs. The claws are smooth (not hairy like P. hirsutiusculus). Often found in larger shells.",
    identificationTips: [
      "Smooth claws and legs (compare with hairy hermit crab)",
      "Bright blue specks or dots on the walking legs",
      "Antennae are solid dark (not banded like the hairy hermit)"
    ],
    imageUrl: "images/species-105.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5c6e4e"
  },

  // -- Additional Annelida --
  {
    id: 106,
    commonName: "Bloodworm",
    latinName: "Glycera americana",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Phyllodocida",
    habitat: "Low intertidal",
    description: "A large, pink to red segmented worm with a fearsome eversible proboscis tipped with four black jaws. Burrows in sand and mud. Can deliver a painful bite — handle with care!",
    identificationTips: [
      "Bright pink to red body with many segments, up to 30 cm long",
      "Eversible proboscis with four black, hook-like jaws",
      "Buried in sand/mud; often used as fishing bait"
    ],
    imageUrl: "images/species-106.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8525a"
  },
  {
    id: 107,
    commonName: "Pacific Lugworm",
    latinName: "Abarenicola pacifica",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Capitellida",
    habitat: "Low intertidal",
    description: "A thick, dark brown worm that lives in U-shaped burrows in sand. Its feeding creates the characteristic coiled fecal castings on the sand surface. Important for aerating and cycling nutrients in sediments.",
    identificationTips: [
      "Look for coiled, squiggly sand castings on the mud/sand surface",
      "Thick, dark brown-red body with bristly middle segments and smooth tail",
      "Lives in U-shaped burrow; rarely seen except castings"
    ],
    imageUrl: "images/species-107.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5c3a2e"
  },
  {
    id: 108,
    commonName: "Spaghetti Worm",
    latinName: "Thelepus crispus",
    phylum: "Annelida",
    class: "Polychaeta",
    order: "Terebellida",
    habitat: "Low intertidal",
    description: "A tube-dwelling worm that extends numerous long, thin, white feeding tentacles over the substrate to collect food particles. The tentacles look like a plate of spilled spaghetti. Body hidden in a tube under rocks.",
    identificationTips: [
      "Many long, white, spaghetti-like tentacles extending from a hidden tube",
      "Tentacles are highly mobile and constantly probing the surface",
      "Orange to red body hidden under rocks or in crevices"
    ],
    imageUrl: "images/species-108.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#f0d8b0"
  },

  // -- Additional Tunicates --
  {
    id: 109,
    commonName: "Sea Peach",
    latinName: "Halocynthia aurantium",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Stolidobranchia",
    habitat: "Low intertidal",
    habitat: "Low intertidal",
    description: "A solitary tunicate shaped like a peach, with a tough, orange to red rough outer tunic. Attached to rocks by a small stalk. The two siphons are prominent and often have a dark rim.",
    identificationTips: [
      "Round, peach-shaped body with a rough, orange to red surface",
      "Two prominent siphons with dark orange or red rims",
      "Up to 10 cm; often found among mussels and barnacles"
    ],
    imageUrl: "images/species-109.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e67e22"
  },
  {
    id: 110,
    commonName: "Sea Pork",
    latinName: "Aplidium californicum",
    phylum: "Chordata",
    class: "Ascidiacea",
    order: "Aplousobranchia",
    habitat: "Low intertidal",
    description: "A compound tunicate that forms large, blob-like colonies that look like slabs of fatty meat (hence the name 'sea pork'). The colony is firm but gelatinous. Individual zooids are embedded in a common tunic.",
    identificationTips: [
      "Large, irregular, blob-like encrusting colony, pinkish-tan to orange",
      "Firm but gelatinous texture; individual zooids visible as small pores",
      "Often found on dock pilings and subtidal rocks"
    ],
    imageUrl: "images/species-110.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#d4a498"
  },

  // -- Additional Cnidaria --
  {
    id: 111,
    commonName: "Lion's Mane Jellyfish",
    latinName: "Cyanea capillata",
    phylum: "Cnidaria",
    class: "Scyphozoa",
    order: "Semaeostomeae",
    habitat: "Low intertidal",
    description: "The largest jellyfish species in the world — the bell can reach 2 m across with tentacles trailing up to 30 m! Smaller specimens wash into tidepools. The bell is orange to red with 8 clusters of tentacles.",
    identificationTips: [
      "Large, saucer-shaped orange to deep red bell",
      "8 clusters of many fine, hair-like tentacles hanging from the bell margin",
      "Smaller specimens common in tidepools; tentacles can still sting!"
    ],
    imageUrl: "images/species-111.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#e85d3a"
  },
  {
    id: 112,
    commonName: "Moon Jelly",
    latinName: "Aurelia labiata",
    phylum: "Cnidaria",
    class: "Scyphozoa",
    order: "Semaeostomeae",
    habitat: "Low intertidal",
    description: "A common jellyfish with a transparent, saucer-shaped bell and four horseshoe-shaped gonads visible through the bell. The margin has short, fringe-like tentacles. Mild sting to humans.",
    identificationTips: [
      "Four purple or white horseshoe-shaped gonads visible through the transparent bell",
      "Bell is flat and saucer-like, up to 40 cm across",
      "Short fringe of tentacles around the bell margin"
    ],
    imageUrl: "images/species-112.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#d0c8e8"
  },
  {
    id: 113,
    commonName: "Spotted Jellyfish",
    latinName: "Phacellophora camtschatica",
    phylum: "Cnidaria",
    class: "Scyphozoa",
    order: "Semaeostomeae",
    habitat: "Low intertidal",
    description: "A large, beautiful jellyfish with a translucent bell covered in white spots. Often called the 'egg-yolk jelly' due to the yellowish center. The tentacles are arranged in 16 clusters below the bell.",
    identificationTips: [
      "Translucent bell covered in conspicuous white spots",
      "Yellowish-orange central gonads that look like an egg yolk",
      "16 clusters of tentacles; up to 60 cm bell diameter"
    ],
    imageUrl: "images/species-113.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#e8e0a0"
  },

  // -- Porifera: More Sponges --
  {
    id: 114,
    commonName: "Red Encrusting Sponge",
    latinName: "Clathria pennata",
    phylum: "Porifera",
    class: "Demospongiae",
    order: "Poecilosclerida",
    habitat: "Low intertidal",
    description: "A bright red to orange encrusting sponge that forms thin sheets on rocks and pilings. The surface is rough with small oscula scattered across. Common in shaded areas.",
    identificationTips: [
      "Bright red to orange encrusting sheet on rocks or pilings",
      "Surface is rough or velvety with scattered oscula (pores)",
      "Often found under ledges, in caves, or on vertical rock faces"
    ],
    imageUrl: "images/species-114.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#cc4444"
  },
  {
    id: 115,
    commonName: "Yellow Boring Sponge",
    latinName: "Cliona celata",
    phylum: "Porifera",
    class: "Demospongiae",
    order: "Clionaida",
    habitat: "Low intertidal",
    description: "A sponge that bores into mollusk shells, creating a honeycomb of tunnels. The visible part is a bright sulphur-yellow, lobed mass. Weakens and can kill oysters and other bivalves.",
    identificationTips: [
      "Bright sulphur-yellow lobed or encrusting mass on shells",
      "Tiny holes visible on infested shells where the sponge has bored in",
      "Feels firm and slightly rough; has a distinctive smell"
    ],
    imageUrl: "images/species-115.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e8d44d"
  },

  // -- Algae/Seaweed (Macroalgae) --
  {
    id: 116,
    commonName: "Sea Lettuce",
    latinName: "Ulva lactuca",
    phylum: "Chlorophyta",
    class: "Ulvophyceae",
    order: "Ulvales",
    habitat: "High to mid intertidal",
    description: "A bright green, sheet-like alga that looks exactly like translucent lettuce leaves. Only 2 cells thick! Grows rapidly in nutrient-rich water and is an important food source for many grazers.",
    identificationTips: [
      "Bright grass-green, translucent sheets with ruffled edges",
      "Very thin (only 2 cell layers thick); tears easily",
      "Often found in tidepools and on rocks in the high intertidal"
    ],
    imageUrl: "images/species-116.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#44dd44"
  },
  {
    id: 117,
    commonName: "Turkish Towel",
    latinName: "Chondracanthus exasperatus",
    phylum: "Rhodophyta",
    class: "Florideophyceae",
    order: "Gigartinales",
    habitat: "Low intertidal",
    description: "A large, thick red alga with a bumpy, textured surface that feels exactly like a rough towel. Deep red to purplish-brown. Can grow up to 1 m long. Used historically for scrubbing.",
    identificationTips: [
      "Thick, leathery red blade covered in small bumps (papillae)",
      "Dark red to purplish-brown; feels rough and bumpy like a towel",
      "Single large blade, often with irregular edges"
    ],
    imageUrl: "images/species-117.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8b2040"
  },
  {
    id: 118,
    commonName: "Rockweed",
    latinName: "Fucus distichus",
    phylum: "Ochrophyta",
    class: "Phaeophyceae",
    order: "Fucales",
    habitat: "High to mid intertidal",
    description: "The dominant brown alga of the high intertidal zone. Has a flattened, forking thallus with swollen, jelly-filled reproductive tips (receptacles). Each receptacle contains conceptacles that release gametes.",
    identificationTips: [
      "Flattened, olive-brown branching thallus with forked tips",
      "Swollen, yellowish-orange tips (receptacles) when reproductive",
      "Forms dense mats in the high intertidal; has a midrib"
    ],
    imageUrl: "images/species-118.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#6b8e3a"
  },
  {
    id: 119,
    commonName: "Bull Kelp",
    latinName: "Nereocystis luetkeana",
    phylum: "Ochrophyta",
    class: "Phaeophyceae",
    order: "Laminariales",
    habitat: "Low intertidal",
    description: "An iconic canopy-forming kelp that can grow up to 30 m long. Has a long, hollow stipe ending in a large, spherical float (pneumatocyst) from which the blades grow. Forms vast underwater forests.",
    identificationTips: [
      "Long, smooth, hollow stipe ending in a large, round float (up to 15 cm)",
      "Numerous long, ruffled blades grow from the top of the float",
      "Olive-brown to dark brown; found subtidally but washes into tidepools"
    ],
    imageUrl: "images/species-119.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#5c7a2e"
  },
  {
    id: 120,
    commonName: "Sea Sac",
    latinName: "Halosaccion glandiforme",
    phylum: "Rhodophyta",
    class: "Florideophyceae",
    order: "Palmariales",
    habitat: "Mid intertidal",
    description: "A distinctive red alga that forms hollow, water-filled sacs. When squeezed, the sac squirts water — kids love this! The sacs are filled with seawater, which prevents desiccation at low tide.",
    identificationTips: [
      "Hollow, oblong, water-filled sacs (like tiny water balloons)",
      "Reddish-purple to brownish; up to 15 cm long",
      "Squirts water when squeezed; found attached to rocks in the mid-intertidal"
    ],
    imageUrl: "images/species-120.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#a03050"
  },
  {
    id: 121,
    commonName: "Coralline Algae",
    latinName: "Corallina officinalis",
    phylum: "Rhodophyta",
    class: "Florideophyceae",
    order: "Corallinales",
    habitat: "Mid intertidal",
    description: "A pink, feathery-looking red alga that deposits calcium carbonate in its cell walls, making it hard and crunchy to the touch. Grows in dense tufts on rocks. The pink pigment helps protect against UV radiation.",
    identificationTips: [
      "Pink to lavender, feathery branches with a hard, crunchy texture",
      "Jointed appearance — alternating calcified segments and flexible nodes",
      "Forms dense tufts on rock surfaces; bleached white when dead"
    ],
    imageUrl: "images/species-121.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#e890a0"
  },
  {
    id: 122,
    commonName: "Dead Man's Fingers",
    latinName: "Codium fragile",
    phylum: "Chlorophyta",
    class: "Ulvophyceae",
    order: "Bryopsidales",
    habitat: "Low intertidal",
    description: "A dark green, spongy alga with thick, finger-like branches that look like swollen, fuzzy fingers. The texture is like wet felt. An invasive species in some areas, originally from the Pacific Northwest.",
    identificationTips: [
      "Thick, finger-like, dark green branches with a spongy, felt-like texture",
      "Looks like a clump of green fingers or a fuzzy green sponge",
      "Attached to rocks or shells; up to 30 cm tall"
    ],
    imageUrl: "images/species-122.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#2d6b2d"
  },

  // -- Additional Arthropod-like / Misc --
  {
    id: 123,
    commonName: "Tidepool Copepod",
    latinName: "Tigriopus californicus",
    phylum: "Arthropoda",
    class: "Hexanauplia",
    order: "Harpacticoida",
    habitat: "High intertidal",
    description: "A tiny (about 1 mm) bright red-orange crustacean that swarms in high-intertidal splash pools. Extremely abundant — turns the water orange in high densities. Tolerates extreme temperature and salinity changes.",
    identificationTips: [
      "Tiny (1 mm), bright orange-red, jerky swimming motion",
      "Swarms in huge numbers in splash-zone pools",
      "Makes the water look orange or reddish when present in large numbers"
    ],
    imageUrl: "images/species-123.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#ff6644"
  },
  {
    id: 124,
    commonName: "Masking Crab",
    latinName: "Loxorhynchus crispatus",
    phylum: "Arthropoda",
    class: "Malacostraca",
    order: "Decapoda",
    habitat: "Low intertidal",
    description: "A master of disguise — this spider crab actively decorates itself with algae, sponges, and bryozoans using hooked setae on its carapace. The decorations make it nearly invisible in its environment.",
    identificationTips: [
      "Almost always covered in algae, sponges, or bryozoans — looks like a moving patch of debris",
      "Teardrop-shaped carapace with hooked bristles for attaching decorations",
      "Long, slender legs; juveniles are especially well-camouflaged"
    ],
    imageUrl: "images/species-124.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY",
    color: "#8c8c6c"
  },
  {
    id: 125,
    commonName: "Giant Barnacle",
    latinName: "Balanus nubilus",
    phylum: "Arthropoda",
    class: "Thecostraca",
    order: "Balanomorpha",
    habitat: "Low intertidal",
    description: "The largest barnacle on the Pacific coast, reaching up to 10 cm diameter and 15 cm height. The shell is heavily ridged and grey-white. These giants filter-feed on plankton and are a favorite food of sea stars.",
    identificationTips: [
      "Very large (up to 10 cm diameter) volcano-shaped shell with heavy ridges",
      "Grey-white shell with a large opening at the top",
      "Solitary or in small clusters; mostly subtidal but found low intertidal"
    ],
    imageUrl: "images/species-125.jpg",
    imageCredit: "Photo: Wikimedia Commons CC-BY-SA",
    color: "#d0cfc8"
  }
];
