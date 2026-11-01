import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ROUTES, navigate } from "./router";

export const CLASSES = [1, 2, 3, 4, 5] as const;
export type ClassLevel = (typeof CLASSES)[number];

export type SubjectId = "math" | "language" | "evs";

export type Subject = {
  id: SubjectId;
  label: string;
  hindi: string;
  blurb: string;
};

export const SUBJECTS: Subject[] = [
  {
    id: "math",
    label: "Mathematics",
    hindi: "गणित",
    blurb: "गिनती, जोड़-घटाव, आकार",
  },
  {
    id: "language",
    label: "Language",
    hindi: "भाषा",
    blurb: "वर्ण, कहानी, कविता",
  },
  {
    id: "evs",
    label: "EVS",
    hindi: "पर्यावरण अध्ययन",
    blurb: "पेड़-पौधे, जीव-जन्तु, पानी",
  },
];

export const MOTHER_TONGUE = {
  name: "Santhali",
  script: "ᱥᱟᱱᱛᱟᱲᱤ",
  scriptName: "Ol Chiki",
  source: "Hindi",
  sourceScript: "हिन्दी",
  region: "Jharkhand",
} as const;

type TeachingState = {
  classLevel: ClassLevel;
  setClassLevel: (value: ClassLevel) => void;
  subject: SubjectId;
  setSubject: (value: SubjectId) => void;
  subjectMeta: Subject;
  pendingSourceText: string;
  openTranslationStudio: (text: string) => void;
  consumeHandoff: () => string;
};

const TeachingContext = createContext<TeachingState | null>(null);

const STORAGE_KEY = "bhasha-setu:teaching-context";

export function TeachingProvider({ children }: { children: ReactNode }) {
  const [classLevel, setClassLevel] = useState<ClassLevel>(3);
  const [subject, setSubject] = useState<SubjectId>("evs");
  const [pendingSourceText, setPendingSourceText] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { classLevel?: number; subject?: SubjectId };
      if (parsed.classLevel && CLASSES.includes(parsed.classLevel as ClassLevel)) {
        setClassLevel(parsed.classLevel as ClassLevel);
      }
      if (parsed.subject && SUBJECTS.some((s) => s.id === parsed.subject)) {
        setSubject(parsed.subject);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ classLevel, subject }));
    } catch {
      /* ignore */
    }
  }, [classLevel, subject]);

  const subjectMeta = useMemo(
    () => SUBJECTS.find((s) => s.id === subject) ?? SUBJECTS[0],
    [subject],
  );

  const openTranslationStudio = useCallback((text: string) => {
    setPendingSourceText(text);
    navigate(ROUTES.translationStudio);
  }, []);

  const consumeHandoff = useCallback(() => {
    const text = pendingSourceText;
    setPendingSourceText("");
    return text;
  }, [pendingSourceText]);

  const value: TeachingState = {
    classLevel,
    setClassLevel,
    subject,
    setSubject,
    subjectMeta,
    pendingSourceText,
    openTranslationStudio,
    consumeHandoff,
  };

  return <TeachingContext.Provider value={value}>{children}</TeachingContext.Provider>;
}

export function useTeaching(): TeachingState {
  const ctx = useContext(TeachingContext);
  if (!ctx) throw new Error("useTeaching must be used inside TeachingProvider");
  return ctx;
}
