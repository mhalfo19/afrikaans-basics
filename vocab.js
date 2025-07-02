const vocabCategories = [
  { id: "greetings", name: "Greetings & Introductions" },
  { id: "numbers", name: "Numbers" },
  { id: "days", name: "Days & Months" },
  { id: "pronouns", name: "Pronouns" },
  { id: "colors", name: "Colors" },
  { id: "family", name: "Family" },
  { id: "body", name: "Body Parts" },
  { id: "food", name: "Food & Drink" },
  { id: "house", name: "Household" },
  { id: "animals", name: "Animals" },
  { id: "nature", name: "Nature & Weather" },
  { id: "transport", name: "Transportation" },
  { id: "directions", name: "Directions" },
  { id: "school", name: "School & Learning" },
  { id: "emotions", name: "Emotions" },
  { id: "adjectives", name: "Adjectives & Opposites" }
];

const vocabWords = {
  greetings: [
    { af: "hallo", en: "hello" },
    { af: "totsiens", en: "goodbye" },
    { af: "hoe gaan dit?", en: "how are you?" },
    { af: "baie dankie", en: "thank you very much" },
    { af: "my naam is...", en: "my name is..." }
  ],
  numbers: [
    { af: "een", en: "one" }, { af: "twee", en: "two" }, { af: "drie", en: "three" },
    { af: "vier", en: "four" }, { af: "vyf", en: "five" }, { af: "ses", en: "six" },
    { af: "sewe", en: "seven" }, { af: "agt", en: "eight" }, { af: "nege", en: "nine" },
    { af: "tien", en: "ten" }, { af: "elf", en: "eleven" }, { af: "twaalf", en: "twelve" },
    { af: "dertien", en: "thirteen" }, { af: "veertien", en: "fourteen" }, { af: "vyftien", en: "fifteen" },
    { af: "sestien", en: "sixteen" }, { af: "sewentien", en: "seventeen" }, { af: "agttien", en: "eighteen" },
    { af: "negentien", en: "nineteen" }, { af: "twintig", en: "twenty" }
  ],
  days: [
    { af: "maandag", en: "monday" }, { af: "dinsdag", en: "tuesday" },
    { af: "woensdag", en: "wednesday" }, { af: "donderdag", en: "thursday" },
    { af: "vrydag", en: "friday" }, { af: "saterdag", en: "saturday" },
    { af: "sondag", en: "sunday" },
    { af: "januarie", en: "january" }, { af: "februarie", en: "february" },
    { af: "maart", en: "march" }, { af: "april", en: "april" },
    { af: "mei", en: "may" }, { af: "junie", en: "june" },
    { af: "julie", en: "july" }, { af: "augustus", en: "august" },
    { af: "september", en: "september" }, { af: "oktober", en: "october" },
    { af: "november", en: "november" }, { af: "desember", en: "december" }
  ],
  pronouns: [
    { af: "ek", en: "I" }, { af: "jy", en: "you (singular)" },
    { af: "hy", en: "he" }, { af: "sy", en: "she" },
    { af: "ons", en: "we" }, { af: "julle", en: "you (plural)" },
    { af: "hulle", en: "they" }
  ],
  colors: [
    { af: "rooi", en: "red" }, { af: "oranje", en: "orange" },
    { af: "geel", en: "yellow" }, { af: "groen", en: "green" },
    { af: "blou", en: "blue" }, { af: "indigo", en: "indigo" },
    { af: "pers", en: "purple" }
  ],
  family: [
    { af: "ma", en: "mom" }, { af: "pa", en: "dad" },
    { af: "boetie", en: "brother" }, { af: "sussie", en: "sister" },
    { af: "ouma", en: "grandmother" }, { af: "oupa", en: "grandfather" },
    { af: "tannie", en: "aunt" }, { af: "oom", en: "uncle" }
  ],
  body: [
    { af: "kop", en: "head" }, { af: "oog", en: "eye" },
    { af: "oor", en: "ear" }, { af: "neus", en: "nose" },
    { af: "mond", en: "mouth" }, { af: "hand", en: "hand" },
    { af: "voet", en: "foot" }
  ],
  food: [
    { af: "appel", en: "apple" }, { af: "brood", en: "bread" },
    { af: "melk", en: "milk" }, { af: "kaas", en: "cheese" },
    { af: "eier", en: "egg" }, { af: "vleis", en: "meat" },
    { af: "rys", en: "rice" }, { af: "sout", en: "salt" }
  ],
  house: [
    { af: "deur", en: "door" }, { af: "venster", en: "window" },
    { af: "kombuis", en: "kitchen" }, { af: "badkamer", en: "bathroom" },
    { af: "stoel", en: "chair" }, { af: "tafel", en: "table" },
    { af: "bed", en: "bed" }
  ],
  animals: [
    { af: "hond", en: "dog" }, { af: "kat", en: "cat" },
    { af: "vogel", en: "bird" }, { af: "olifant", en: "elephant" },
    { af: "perd", en: "horse" }, { af: "skaap", en: "sheep" }
  ],
  nature: [
    { af: "boom", en: "tree" }, { af: "rivier", en: "river" },
    { af: "berg", en: "mountain" }, { af: "son", en: "sun" },
    { af: "maan", en: "moon" }, { af: "ster", en: "star" }
  ],
  transport: [
    { af: "motor", en: "car" }, { af: "bus", en: "bus" },
    { af: "fiets", en: "bicycle" }, { af: "trein", en: "train" },
    { af: "vliegtuig", en: "airplane" }
  ],
  directions: [
    { af: "links", en: "left" }, { af: "regs", en: "right" },
    { af: "vooruit", en: "forward" }, { af: "agtertoe", en: "backward" }
  ],
  school: [
    { af: "boek", en: "book" }, { af: "pen", en: "pen" },
    { af: "potlood", en: "pencil" }, { af: "bord", en: "board" },
    { af: "tas", en: "bag" }
  ],
  emotions: [
    { af: "bly", en: "happy" }, { af: "hartseer", en: "sad" },
    { af: "kwaad", en: "angry" }, { af: "bang", en: "scared" }
  ],
  adjectives: [
    { af: "groot", en: "big" }, { af: "klein", en: "small" },
    { af: "vinnig", en: "fast" }, { af: "stadig", en: "slow" },
    { af: "warm", en: "hot" }, { af: "koud", en: "cold" }
  ]
};
