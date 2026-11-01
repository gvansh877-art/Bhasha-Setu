import type { ClassLevel, SubjectId } from "./store";

/**
 * UI metadata only — topic ideas, subject names, section labels.
 * All real teaching content comes from the FastAPI backend via bhashaApi.ts
 */

export const TOPIC_IDEAS: Record<SubjectId, Record<ClassLevel, string[]>> = {
  math: {
    1: ["1 से 5 तक गिनती", "आकार पहचानो", "छोटा-बड़ा"],
    2: ["जोड़", "10 तक गिनती", "पैटर्न"],
    3: ["जोड़ — समूह में", "घटाव", "पैसों का लेन-देन"],
    4: ["गुणा", "आधा और दोगुना", "समय पढ़ना"],
    5: ["भाग — बराबर बाँटना", "माप: मीटर और लीटर", "आँकड़े"],
  },
  language: {
    1: ["स्वर अक्षर", "मेरा नाम", "बालगीत"],
    2: ["मात्रा — आ और इ", "सरल वाक्य", "लोककथा"],
    3: ["शब्द बनाना", "चित्र वर्णन", "कविता: मेरा गाँव"],
    4: ["संज्ञा", "कहानी का क्रम", "अनुच्छेद लेखन"],
    5: ["विशेषण", "संवाद लेखन", "जनजातीय लोककथा"],
  },
  evs: {
    1: ["मेरा शरीर", "घर के जानवर", "साफ़ पानी"],
    2: ["पेड़ और पत्तियाँ", "मेरा परिवार", "मौसम"],
    3: ["पेड़-पौधे", "पशु-पक्षी", "गाँव का बाज़ार"],
    4: ["खाद्य फसलें", "जल का स्रोत", "पक्षियों का घोंसला"],
    5: ["वन और वन्यजीव", "बीज से पौधा", "हमारा जिला"],
  },
};

export function topicIdeas(subject: SubjectId, classLevel: ClassLevel): string[] {
  return TOPIC_IDEAS[subject][classLevel];
}

export const SUBJECT_API_NAME: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export const SUBJECT_HINDI: Record<SubjectId, string> = {
  math: "गणित",
  language: "भाषा",
  evs: "पर्यावरण अध्ययन",
};

export const LESSON_SECTIONS = [
  { key: "learningObjective", label: "Learning Objective", hindi: "सीखने का उद्देश्य" },
  { key: "simpleExplanation", label: "Simple Explanation", hindi: "सरल व्याख्या" },
  { key: "classroomActivity", label: "Classroom Activity", hindi: "कक्षा गतिविधि" },
  { key: "practiceQuestions", label: "Practice Questions", hindi: "अभ्यास प्रश्न" },
  { key: "shortAssessment", label: "Short Assessment", hindi: "लघु मूल्यांकन" },
] as const;

export type LessonSectionKey = (typeof LESSON_SECTIONS)[number]["key"];
