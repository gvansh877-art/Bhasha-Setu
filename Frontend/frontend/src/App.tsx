import { useEffect, useMemo, useState } from "react";
import { TeachingProvider } from "@/lib/store";
import { AudioManagerProvider } from "@/lib/audioManager";
import { useRoute } from "@/lib/router";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/pages/Dashboard";
import { LessonGenerator } from "@/pages/LessonGenerator";
import { TranslationStudio } from "@/pages/TranslationStudio";
import { WorksheetGenerator } from "@/pages/WorksheetGenerator";
import { FlashcardGenerator } from "@/pages/FlashcardGenerator";

function PageSwitch() {
  const path = useRoute();
  const [rendered, setRendered] = useState(path);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (path === rendered) return;
    setVisible(false);
    const timer = window.setTimeout(() => {
      setRendered(path);
      window.scrollTo({ top: 0, behavior: "auto" });
      setVisible(true);
    }, 190);
    return () => window.clearTimeout(timer);
  }, [path, rendered]);

  const page = useMemo(() => {
    switch (rendered) {
      case "/lesson-generator":
        return <LessonGenerator />;
      case "/translation-studio":
        return <TranslationStudio />;
      case "/worksheet-generator":
        return <WorksheetGenerator />;
      case "/flashcard-generator":
        return <FlashcardGenerator />;
      default:
        return <Dashboard />;
    }
  }, [rendered]);

  return (
    <div className="transition-opacity duration-200 ease-out" style={{ opacity: visible ? 1 : 0 }}>
      {page}
    </div>
  );
}

export default function App() {
  return (
    <TeachingProvider>
      <AudioManagerProvider>
        <div className="min-h-screen bg-paper font-sans antialiased selection:bg-ochre/30">
          <TopBar />
          <PageSwitch />
          <Footer />
        </div>
      </AudioManagerProvider>
    </TeachingProvider>
  );
}
