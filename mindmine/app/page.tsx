"use client";

import Link from "next/dist/client/link";
import { useRef, useState } from "react";

const AUDIO_FILE = "/audio/Spiral.mp3";

const basePhrases = [
  "wait", "waiting list", "support", "no support", "assessment", "diagnosis",
  "referral", "follow-up", "discharged", "resources", "funding", "capacity",
  "service pressures", "evidence-based", "outcome measures", "care plan",
  "intervention", "therapy", "monitoring", "not eligible", "threshold not met",
  "referred elsewhere", "insufficient evidence", "come back later",
  "triage", "case closed", "review in six months", "limited sessions",
  "not enough staff", "system backlog", "clinical pathway",

  "just focus", "apply yourself", "pay attention", "sit still",
  "stop interrupting", "lazy", "potential", "organisation", "discipline",
  "motivation", "productivity", "concentration", "deadlines", "why can’t you",
  "try harder", "you’re not trying", "careless mistakes", "too distracted",
  "always late", "poor time management", "just make a list",

  "calm down", "stop worrying", "relax", "breathe", "don’t panic",
  "overthinking", "it’s all in your head", "you’re overreacting", "anxiety",
  "panic attack", "spiralling", "too much", "dramatic", "irrational",
  "nothing is wrong", "you’re fine", "stop being scared",

  "cheer up", "think positive", "low mood", "burnout", "depression",
  "hopelessness", "fatigue", "isolation", "get out more",
  "everyone feels sad sometimes", "snap out of it", "be grateful",
  "you have so much to be happy about", "low motivation", "withdrawn",

  "make eye contact", "too sensitive", "rude", "high functioning",
  "low functioning", "masking", "meltdown", "shutdown", "special interests",
  "social skills", "sensory issues", "routine", "stimming", "autism",
  "neurodivergent", "different brain", "not normal", "attention seeking",
  "difficult child", "challenging child", "poor behaviour", "lack of empathy",
  "doesn’t listen", "too literal", "awkward", "obsessive",

  "they’ll grow out of it", "have you tried", "be patient", "school refusal",
  "concerns noted", "what’s wrong with them", "parent training",
  "home strategies", "behaviour", "normal", "abnormal", "compliance",
  "challenging behaviour", "needs support", "too protective",
  "you need to be stricter", "you need to do more", "bad parenting",
  "mother’s instinct", "keep pushing", "fight for support",

  "listen", "cope", "understood", "misunderstood", "seen", "unseen", "heard",
  "ignored", "belonging", "identity", "connection", "loneliness",
  "acceptance", "understanding", "hope", "help", "please listen",
  "complex needs", "vulnerable", "resilient", "gifted", "difficult",
  "challenging", "needs assessment", "risk", "safeguarding", "clinical notes",
];

const phrases = Array.from({ length: 1600 }, (_, index) => {
  const text = basePhrases[index % basePhrases.length];

  return {
    text,
    quote: index % 5 === 0 || text.includes(" "),
    size:
      index % 89 === 0
        ? "text-6xl md:text-8xl"
        : index % 47 === 0
          ? "text-5xl md:text-7xl"
          : index % 23 === 0
            ? "text-4xl md:text-6xl"
            : index % 11 === 0
              ? "text-3xl md:text-5xl"
              : index % 5 === 0
                ? "text-xl md:text-3xl"
                : index % 3 === 0
                  ? "text-base md:text-2xl"
                  : "text-xs md:text-xl",
    weight:
      index % 37 === 0
        ? "font-black"
        : index % 11 === 0
          ? "font-bold"
          : index % 4 === 0
            ? "font-semibold"
            : "font-medium",
    opacity:
      index % 97 === 0
        ? "opacity-95"
        : index % 41 === 0
          ? "opacity-75"
          : index % 17 === 0
            ? "opacity-50"
            : index % 7 === 0
              ? "opacity-30"
              : index % 3 === 0
                ? "opacity-15"
                : "opacity-10",
    font:
      index % 13 === 0
        ? "font-serif"
        : index % 7 === 0
          ? "font-mono"
          : "font-sans",
    delay: `${(index % 40) * 0.06}s`,
  };
});

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.15;

    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
      return;
    }

    try {
      await audioRef.current.play();
      setSoundOn(true);
    } catch {
      setSoundOn(false);
    }
  };

  return (
    <main className="bg-black text-white">
      <audio ref={audioRef} loop preload="auto">
        <source src={AUDIO_FILE} type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleSound}
        className="fixed right-5 top-5 z-50 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-400 backdrop-blur transition hover:border-white/50 hover:text-white"
      >
        {soundOn ? "Sound Off" : "Sound On"}
      </button>

      <section
        className="relative min-h-[500vh] overflow-hidden bg-black px-2 py-3 md:px-5"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.55) 82%, rgba(0,0,0,0.15) 93%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.55) 82%, rgba(0,0,0,0.15) 93%, transparent 100%)",
        }}
      >
        <div className="flex flex-wrap content-start items-center gap-x-1 gap-y-0 md:gap-x-2 md:gap-y-1">
          {phrases.map((phrase, index) => (
            <span
              key={`${phrase.text}-${index}`}
              className={`
                animate-float cursor-default select-none whitespace-nowrap
                leading-none tracking-tighter text-neutral-300 transition-all duration-500
                hover:z-50 hover:scale-125 hover:text-white hover:opacity-100
                ${phrase.size} ${phrase.weight} ${phrase.opacity} ${phrase.font}
              `}
              style={{
                animationDelay: phrase.delay,
              }}
            >
              {phrase.quote ? `“${phrase.text}”` : phrase.text}
            </span>
          ))}
        </div>
      </section>

      <section className="flex min-h-[140vh] flex-col items-center justify-center bg-black px-6 text-center">
        <h1 className="text-6xl font-semibold tracking-tight md:text-9xl">
          and then?
        </h1>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
        <Link
          href="/research"
          className="group mb-6 inline-flex items-center gap-3 text-3xl font-medium tracking-wide text-white transition hover:opacity-70 md:text-5xl"
        >
          <span>#MindMine</span>

        <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
         →
        </span>
        </Link>

        <a
          href="mailto:mindmine@aheadstudio.net"
          className="text-sm text-neutral-500 transition hover:text-white md:text-base"
        >
          mindmine@aheadstudio.net
        </a>
      </section>
    </main>
  );
}