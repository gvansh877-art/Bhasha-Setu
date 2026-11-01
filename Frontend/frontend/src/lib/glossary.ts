export type GlossaryEntry = {
  hindi: string;
  santhali: string;
  roman: string;
  meaning: string;
  tags: SubjectTag[];
};

export type SubjectTag = "math" | "language" | "evs" | "core";

/**
 * Offline prototype dictionary (sample).
 * Real classroom use requires validation by a Santhali (Ol Chiki) language expert.
 */
export const GLOSSARY: GlossaryEntry[] = [
  { hindi: "पानी", santhali: "ᱫᱟᱜ", roman: "dag", meaning: "water", tags: ["evs", "core"] },
  { hindi: "माँ", santhali: "ᱟᱭᱳ", roman: "ayo", meaning: "mother", tags: ["evs", "core"] },
  { hindi: "पिता", santhali: "ᱵᱟᱵᱟ", roman: "baba", meaning: "father", tags: ["evs", "core"] },
  { hindi: "हाथ", santhali: "ᱛᱤ", roman: "ti", meaning: "hand", tags: ["evs"] },
  { hindi: "आँख", santhali: "ᱢᱮᱫ", roman: "med", meaning: "eye", tags: ["evs"] },
  { hindi: "पेड़", santhali: "ᱫᱟᱨᱮ", roman: "dare", meaning: "tree", tags: ["evs"] },
  { hindi: "जंगल", santhali: "ᱵᱤᱨ", roman: "bir", meaning: "forest", tags: ["evs"] },
  { hindi: "गाँव", santhali: "ᱟᱹᱛᱩ", roman: "atu", meaning: "village", tags: ["evs", "core"] },
  { hindi: "घर", santhali: "ᱚᱲᱟᱜ", roman: "orag", meaning: "house", tags: ["evs", "core"] },
  { hindi: "मिट्टी", santhali: "ᱦᱟᱥᱟ", roman: "hasa", meaning: "soil", tags: ["evs"] },
  { hindi: "आकाश", santhali: "ᱥᱮᱨᱢᱟ", roman: "serma", meaning: "sky", tags: ["evs"] },
  { hindi: "चाँद", santhali: "ᱪᱟᱸᱫᱚ", roman: "chando", meaning: "moon", tags: ["evs"] },
  { hindi: "सूरज", santhali: "ᱥᱤᱝᱜᱤ", roman: "singi", meaning: "sun", tags: ["evs"] },
  { hindi: "बड़ा", santhali: "ᱢᱟᱨᱟᱝ", roman: "marang", meaning: "big", tags: ["core"] },
  { hindi: "छोटा", santhali: "ᱦᱩᱰᱤᱧ", roman: "hudin", meaning: "small", tags: ["math", "core"] },
  { hindi: "एक", santhali: "ᱢᱤᱫ", roman: "mit", meaning: "one", tags: ["math", "core"] },
  { hindi: "दो", santhali: "ᱵᱟᱨ", roman: "bar", meaning: "two", tags: ["math", "core"] },
  { hindi: "तीन", santhali: "ᱯᱮ", roman: "pe", meaning: "three", tags: ["math", "core"] },
  { hindi: "चार", santhali: "ᱯᱳᱱ", roman: "pon", meaning: "four", tags: ["math"] },
  { hindi: "पाँच", santhali: "ᱢᱚᱬᱮ", roman: "mone", meaning: "five", tags: ["math"] },
  { hindi: "किताब", santhali: "ᱯᱩᱛᱷᱤ", roman: "puthi", meaning: "book", tags: ["language", "core"] },
  { hindi: "कहानी", santhali: "ᱠᱟᱹᱦᱱᱤ", roman: "kahni", meaning: "story", tags: ["language"] },
  { hindi: "अक्षर", santhali: "ᱪᱤᱠᱤ", roman: "chiki", meaning: "letter / script", tags: ["language"] },
  { hindi: "शिक्षक", santhali: "ᱢᱟᱪᱮᱫ", roman: "mached", meaning: "teacher", tags: ["language", "core"] },
  { hindi: "विद्यार्थी", santhali: "ᱯᱟᱹᱴᱷᱣᱟᱹ", roman: "pathwa", meaning: "student", tags: ["language"] },
  { hindi: "अच्छा", santhali: "ᱵᱷᱟᱞ", roman: "bhal", meaning: "good", tags: ["core"] },
  { hindi: "खाना", santhali: "ᱡᱚᱢ", roman: "jom", meaning: "to eat", tags: ["evs"] },
  { hindi: "पीना", santhali: "ᱧᱩ", roman: "nu", meaning: "to drink", tags: ["evs"] },
  { hindi: "जाना", santhali: "ᱥᱮᱱ", roman: "sen", meaning: "to go", tags: ["core"] },
  { hindi: "रास्ता", santhali: "ᱰᱟᱦᱟᱨ", roman: "dahar", meaning: "road", tags: ["evs"] },
];

const INDEX = new Map<string, GlossaryEntry>();
GLOSSARY.forEach((entry) => INDEX.set(entry.hindi, entry));

export function lookup(word: string): GlossaryEntry | undefined {
  const clean = word.replace(/[।,.!?;:"'()]/g, "").trim();
  if (!clean) return undefined;
  return INDEX.get(clean) ?? INDEX.get(clean.replace(/(ो|े|ी|ा|ु)$/u, ""));
}

export function glossaryForSubject(subject: "math" | "language" | "evs", limit = 6) {
  const primary = GLOSSARY.filter((e) => e.tags.includes(subject));
  const core = GLOSSARY.filter((e) => !primary.includes(e) && e.tags.includes("core"));
  return [...primary, ...core].slice(0, limit);
}

export type Token = {
  text: string;
  entry?: GlossaryEntry;
  trailing?: string;
};

/** Word-level prototype translation: matched tokens map to Ol Chiki, rest stay Hindi. */
export function translateLine(line: string): Token[] {
  return line.split(/(\s+)/).map((chunk) => {
    if (!chunk.trim()) return { text: chunk };
    const entry = lookup(chunk);
    const trailingMatch = chunk.match(/[।,.!?;:]+$/u);
    return {
      text: entry ? entry.santhali : chunk,
      entry,
      trailing: trailingMatch ? trailingMatch[0] : undefined,
    };
  });
}

export function coverageRatio(lines: string[]): number {
  const all = lines.flatMap((l) => translateLine(l));
  const words = all.filter((t) => t.text.trim());
  if (!words.length) return 0;
  const matched = words.filter((t) => t.entry).length;
  return Math.round((matched / words.length) * 100);
}
