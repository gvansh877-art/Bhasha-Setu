# BHASHA SETU — Frontend + Backend Integration Report

**Date:** 2026-09-14 (Asia/Kolkata)
**Backend:** FastAPI source of truth — ZIP latest backend
**Frontend:** React + Vite + Tailwind, preserved UI, added real backend wiring + audio + animations

---

## 1. Environment Variable

- `VITE_API_BASE_URL` — base URL for FastAPI backend
  - Default: `http://127.0.0.1:8000`
  - Set in `.env` at frontend root
  - No secrets in frontend (no GEMINI_API_KEY, no SHUNYALABS_API_KEY)

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Centralized in `src/services/bhashaApi.ts` via `getApiBaseUrl()`.

---

## 2. Endpoints Connected (Real Backend)

All via `src/services/bhashaApi.ts` — centralized fetch layer with ApiError handling.

| Method | Path | Used In | Request | Response |
|--------|------|---------|---------|----------|
| GET | `/api/health` | TopBar, Hero, Dashboard banner | — | `{status, service, version, supported_languages}` |
| GET | `/api/speech/status` | Hero, TranslationStudio, LanguageIndicator | — | `{service, status, supported_languages, audio_format, message}` |
| POST | `/api/translation/translate` | TranslationStudio text tab | `{text, source_language:"hindi", target_language:"santhali"}` | `{hindi_text, santhali_text, audio_base64, audio_content_type}` |
| POST | `/api/speech/voice-translate` | TranslationStudio voice tab | multipart `file` (webm/wav/mp3/m4a) | `{hindi_text, santhali_text, audio_base64, audio_content_type}` |
| POST | `/api/speech/text-to-speech` | TranslationStudio TTS regen | `{text}` | blob `audio/mpeg` |
| POST | `/api/lesson/generate` | LessonGenerator | `{class_level:"Class 1", subject:"Mathematics", topic}` | `{class_level, subject, topic, hindi_lesson, santhali_lesson, audio_base64}` |
| POST | `/api/worksheet/generate` | WorksheetGenerator | `{class_level, subject, topic, number_of_questions:5}` | `{hindi_worksheet: [{question, answer}], santhali_worksheet: same, audio_base64}` |
| POST | `/api/flashcard/generate` | FlashcardGenerator | `{class_level, subject, topic, number_of_cards:5}` | `{hindi_flashcards: [{front, back}], santhali_flashcards: [{front, back, audio_base64}]}` |

**Error handling:**
- 400 validation → friendly Hindi message + field hint
- 503 service unavailable → "सेवा उपलब्ध नहीं है..." + retry suggestion
- Network failure → "नेटवर्क समस्या..."
- Timeout → "समय समाप्त..."
- Never raw stack traces.

---

## 3. Audio Features Implemented (Real Only — No Fake)

### Decoding
- Base64 → Blob via `atob` → `Uint8Array` → `Blob` → `URL.createObjectURL`
- Blob TTS via `response.blob()` → `URL.createObjectURL`
- Cleanup via `revokeObjectUrl` on unmount / effect cleanup
- `src/lib/audio.ts` — `base64ToBlob`, `base64ToObjectUrl`, `blobToObjectUrl`, `revokeObjectUrl`

### Players
- `AudioPlayer` — full player: play/pause, progress bar, seek, time, waveform animation, loading/error/disabled, compact mode
- `AudioButton` — small round button for per-card / inline use: sm/md/lg
- Both use `AudioManagerProvider` to prevent simultaneous playback leaks — playing one pauses others

### Where Audio Appears
- **TranslationStudio**
  - Text translation: result shows Santhali text + AudioPlayer with base64 MP3
  - Voice translation: result shows hindi_text (transcribed) + santhali_text + AudioPlayer
  - TTS on demand: "🔊 Santhali सुनें" button that calls `/api/speech/text-to-speech` → blob → AudioButton
  - Recording: MediaRecorder flow with MicWave animation, timer, audio preview before upload
- **LessonGenerator**
  - Result: Hindi/Santhali tabs + top AudioPlayer for `audio_base64` (Santhali lesson combined)
- **WorksheetGenerator**
  - Result: Hindi/Santhali worksheet tabs + AudioPlayer for combined audio
- **FlashcardGenerator**
  - Result: bilingual toggle + per-card `AudioButton` with `audio_base64` from `santhali_flashcards[i]`, plus top AudioPlayer for first card
- **Dashboard / Hero / Footer / Cards**
  - Audio badges: "Audio • MP3 • Real AI" chips, waveform indicators
  - No fake audio anywhere — if backend returns no audio, shows "Audio unavailable" disabled state

### Speech / Voice
- `useVoiceTranslation` — MediaRecorder, getUserMedia, timer, blob creation, multipart upload to `/api/speech/voice-translate`
- Formats: webm, wav, mp3, m4a accepted (browser MediaRecorder default webm)
- Loading state: "Processing voice..." with waveform

---

## 4. Files Modified / Created

### Modified (preserve UI, add backend)
- `src/components/TopBar.tsx` — logo png, health polling `getBackendHealth` every 30s, online/offline badge
- `src/components/Footer.tsx` — logo png + collage jpg low-opacity, Real Backend Audio badges
- `src/components/dashboard/Hero.tsx` — full rewrite: logo, health + speech status polling, GradientOrbs, FloatingParticles, audio chips, waveform, parallax collage preserved
- `src/components/dashboard/FeatureCards.tsx` — audio descriptors, FloatingParticles, Audio badges, wave animations, meta Audio/Per-card Audio
- `src/components/dashboard/LanguageIndicator.tsx` — speech status fetch, audio flow visual, wave bars, Real Backend messaging
- `src/pages/Dashboard.tsx` — BackendBanner with health check, logo, FlowStrip audio descriptors
- `src/pages/LessonGenerator.tsx` — ToolHeader index "Bilingual + Audio", meta badges class+Audio
- `src/pages/WorksheetGenerator.tsx` — ToolHeader Audio, meta Audio MP3 badge
- `src/pages/FlashcardGenerator.tsx` — Per-card Audio meta
- `src/lib/lesson.ts` — removed old `LessonContent` import, now only topic ideas metadata
- `src/components/ui/AudioPlayer.tsx` — rewrite with AudioManager integration, single-play guard, base64 + blob support
- `src/App.tsx` — wrapped with `AudioManagerProvider`
- `src/index.css` — already had keyframes for translate-particle, float-leaf, pulse-glow, border-rotate, audio-pulse, reveal-up, wave-bar (preserved)

### Created New
- `src/services/bhashaApi.ts` — centralized service layer: all endpoints, ApiError, TEACHER_MESSAGES, getApiBaseUrl, helpers
- `src/lib/audio.ts` — base64/blob ↔ ObjectURL utils
- `src/lib/audioManager.tsx` — context to prevent simultaneous playback, register/unregister/play
- `src/lib/useTranslation.ts` — translateText + textToSpeech blob
- `src/lib/useVoiceTranslation.ts` — MediaRecorder + translateVoice multipart + getSpeechStatus
- `src/lib/useLessonGeneration.ts` — generateLesson via bhashaApi, maps SubjectId/ClassLevel
- `src/lib/useWorksheetGeneration.ts` — generateWorksheet number_of_questions
- `src/lib/useFlashcardGeneration.ts` — generateFlashcards number_of_cards
- `src/components/ui/Animations.tsx` — FloatingParticles, TranslationFlow, GradientOrbs, MicWave, PageEntrance, AnimatedBorder
- `src/components/lesson/LessonLoader.tsx` — 5 stages Hindi→Santhali+TTS, progress segments, wave bars, logo pulse
- `src/components/lesson/LessonResult.tsx` — Hindi/Santhali tabs + AudioPlayer
- `src/components/lesson/LessonStates.tsx` — bilingual+audio empty/error, logo, particles, docs /api/lesson/generate
- `src/components/worksheet/WorksheetStates.tsx` — logo, OrbitRing, FloatingParticles, GradientOrbs, LOAD_STAGES real backend, error hints
- `src/components/worksheet/WorksheetResult.tsx` — bilingual tabs + AudioPlayer
- `src/components/flashcard/FlashcardStates.tsx` — logo, particles, orbs, per-card audio messaging
- `src/components/flashcard/FlashcardResult.tsx` — bilingual toggle, flip, per-card AudioButton + top AudioPlayer
- `.env` — VITE_API_BASE_URL default
- `INTEGRATION.md` — this file

### Unused Legacy (kept for compatibility, not imported)
- `src/services/api.ts`, `flashcard.ts`, `worksheet.ts`, `schema.ts` — old schema, no longer used by new hooks

---

## 5. Premium Animations (on top of existing UI)

All performant: CSS transform/opacity, `prefers-reduced-motion` respected via existing `index.css` media query.

- Page entrance: opacity + translateY, `PageEntrance` wrapper (not yet applied everywhere but available)
- Reveal: intersection observer based `Reveal` component, from bottom/scale, delay stagger
- Particles: `FloatingParticles` — random dots floating up, low opacity, in Hero/Footer/EmptyStates
- Parallax: Hero collage with `translateY` based on scroll
- GradientOrbs: blurred orbs pulsing with `animate-glow`
- Glowing border: `AnimatedBorder` with rotating conic gradient
- Tilt: `useTilt` hook on FeatureCards — 3D tilt on mouse move, uses CSS vars `--mx --my`
- Magnetic buttons: scale + shadow on hover, shine animation
- Translation-flow: `TranslationFlow` — dot moving left→right along line, for translating state
- Waveform: mic waveform `MicWave` — 5 bars with wave-bar keyframe, plus wave in AudioPlayer
- Flip: flashcard 3D flip via `rotateY`, backface hidden
- Contextual loaders:
  - Translating... → TranslationFlow particle + gradient text
  - Generating lesson/worksheet/flashcards → LessonLoader with stages, OrbitRing, wave bars
  - Processing voice → MicWave + timer + pulse-ring
- Logo usage: logo png in TopBar, Hero, Footer, Loaders, EmptyStates — not stretched, object-cover, strategic placement
- Collage: jharkhand-collage.jpg in Hero parallax + Footer low-opacity bg + EmptyStates mask — earthy palette maintained

---

## 6. Run Commands

```bash
# 1. Backend (separate terminal, from backend ZIP)
cd /path/to/backend
pip install -r requirements.txt
# set GEMINI_API_KEY and SHUNYALABS_API_KEY in backend .env
uvicorn main:app --reload --host 127.0.0.1 --port 8000

# 2. Frontend
cd /home/user/frontend
npm install
# .env already contains VITE_API_BASE_URL=http://127.0.0.1:8000
npm run dev
# open http://localhost:5173

# Build verification (required)
VITE_API_BASE_URL=http://127.0.0.1:8000 npm run build
# output dist/index.html single file (vite-plugin-singlefile)

# Preview prod build
npm run preview
```

---

## 7. Integration Steps

1. Extract backend ZIP, install deps, set `GEMINI_API_KEY` + `SHUNYALABS_API_KEY`, run uvicorn on 8000
2. Clone/copy this frontend, `npm install`, ensure `.env` points to backend
3. Run `npm run dev`, check TopBar health badge turns Online • Audio
4. Test flow:
   - TranslationStudio → type Hindi → Translate → see Santhali + AudioPlayer → Play
   - TranslationStudio → Voice tab → Allow mic → Record → Stop → Translate → see transcription + Santhali + Audio
   - TranslationStudio → TTS button → blob audio plays
   - LessonGenerator → pick class/subject/topic → Generate → see bilingual tabs + AudioPlayer
   - WorksheetGenerator → Generate → bilingual worksheet + Audio
   - FlashcardGenerator → Generate → flip cards, per-card AudioButton plays
5. Test error paths: stop backend → see offline badges, friendly 503/network messages, retry buttons
6. Build → `npm run build` should succeed (74 modules, singlefile output)

---

## 8. Limitations & Unsupported Features

- **Language direction:** Backend AI prompt is Hindi→Santhali only. Frontend labels accurately reflect this. Santhali→Hindi not supported by backend, so not offered.
- **Audio format:** Backend returns MP3 base64 for most endpoints, blob MP3 for TTS. No WAV/OGG alternatives. Frontend handles both.
- **Voice translation:** Requires backend STT service; if `GET /api/speech/status` returns unavailable, Voice tab shows warning but still allows attempt. Browser MediaRecorder needs HTTPS or localhost; file upload fallback not implemented.
- **Lesson/worksheet/flashcard count:** Backend fixed to number_of_questions/cards param, frontend sends 5. No custom count UI (to keep existing design).
- **Authentication:** No auth in backend, so none in frontend.
- **Offline:** No service worker; "Offline-ready draft" label in cards is legacy UI text, not real offline support.
- **Large audio:** Base64 audio can be large (30-90s per flashcard set). No streaming, full blob in memory, ObjectURL revoked on unmount.
- **Reduced motion:** Respects `prefers-reduced-motion` via CSS, but some JS animations (tilt, parallax) still run at low cost — could be disabled further if needed.
- **Legacy services:** `src/services/api.ts` etc still exist but unused; could be deleted after full QA.

---

## 9. Cultural Polish

- Logo: `src/assets/bhasha-setu-logo.png` used in TopBar (8x8 rounded), Hero (7x7 + 12x12), Footer (9x9), Loaders (pulse), EmptyStates (orbit)
- Collage: `src/assets/jharkhand-collage.jpg` used as Hero parallax right panel, Footer low-opacity bg, EmptyStates mask
- Palette: ochre, clay, leaf, ink, paper — earthy Jharkhand tones preserved
- Motifs: SohraiTile, SohraiBand, tribal dot patterns via CSS, Ol Chiki script display

---

## 10. Verification Checklist

- [x] No fake data/audio — all from real backend
- [x] Centralized bhashaApi.ts, no scattered fetch
- [x] VITE_API_BASE_URL default 127.0.0.1:8000
- [x] No secrets in frontend
- [x] AudioPlayer decodes base64 + blob, play/pause/replay/loading/error/disabled, cleanup
- [x] Single-audio guard via AudioManagerProvider
- [x] Health polling 30s, speech status, 400/503/network/audio error handling
- [x] Loading states with contextual animations
- [x] Preserved navigation/cards/typography/spacing/user flow
- [x] Premium animations layered, performant, reduced-motion supported
- [x] Logo + collage used strategically, not stretched
- [x] Build succeeds: `VITE_API_BASE_URL=http://127.0.0.1:8000 npm run build`

