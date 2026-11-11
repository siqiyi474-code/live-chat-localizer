/* ============================================================
   LOCALIZATION CONFIG  ·  本地化配置  ·  owned by Siqi
   ------------------------------------------------------------
   This file is the "brain" of the demo. Everything a content
   designer decides lives here: slang glossary, adaptation rules,
   tone tags, the LLM system prompt and the UI microcopy.
   Edit freely. Save, then reload index.html to see the change.
   DRAFT: every entry below is a proposal for Siqi to review.
   ============================================================ */

window.LOC = {};

/* ---------- 1. Languages ---------- */
LOC.languages = {
  zh: { name: "中文", label: "Chinese (Simplified)" },
  en: { name: "English", label: "English (global)" },
  es: { name: "Español", label: "Spanish (neutral, LatAm-friendly)" }
};

/* ---------- 2. Tone / intent tags ----------
   Each comment gets exactly one tag. The host console uses the
   tag to decide what to surface (questions and requests first). */
LOC.tones = {
  hype:      { label: "Hype",      zh: "起哄", color: "#ff3b5c", hostPriority: 0 },
  affection: { label: "Affection", zh: "喜爱", color: "#ff7ab8", hostPriority: 0 },
  joke:      { label: "Joke",      zh: "玩梗", color: "#ffb020", hostPriority: 0 },
  greeting:  { label: "Greeting",  zh: "打招呼", color: "#25c2a0", hostPriority: 1 },
  question:  { label: "Question",  zh: "提问", color: "#3d8bff", hostPriority: 2 },
  request:   { label: "Request",   zh: "请求", color: "#8a63ff", hostPriority: 2 },
  negative:  { label: "Negative",  zh: "差评", color: "#9aa0a6", hostPriority: 0 },
  toxic:     { label: "Toxic",     zh: "攻击", color: "#5f6368", hostPriority: 3 }
};

/* ---------- 3. Adaptation rules ----------
   Short, testable rules. They are shown in the demo and injected
   into the LLM prompt, so write them as instructions. */
LOC.rules = [
  { id: "R1", title: "Translate the function, not the words",
    text: "Chat slang is a speech act (cheering, teasing, asking). Render what the viewer is DOING, using the target chat's own convention for that act." },
  { id: "R2", title: "Never ship a literal that misfires",
    text: "If a literal translation is meaningless or carries a wrong association in the target culture (e.g. 666 reads as 'devil' to Western viewers), adapt it." },
  { id: "R3", title: "Keep the register, not the politeness",
    text: "Casual stays casual, rude stays rude. Localization must not sanitize; moderation is a separate tag, not a softer translation." },
  { id: "R4", title: "Community address is not family",
    text: "家人们 / 宝宝们 / chat / gente are ways a crowd addresses itself. Map to the target crowd's word (y'all, chat, gente), never 'family members'." },
  { id: "R5", title: "Don't over-localize plain text",
    text: "If a sentence is already neutral and clear, a faithful translation is the best localization. Adapt only where something would be lost." },
  { id: "R6", title: "Proper nouns and food names",
    text: "Keep established names (Changsha, stinky tofu / tofu apestoso, 臭豆腐). Add a 2-4 word gloss only if a viewer would not understand." },
  { id: "R7", title: "Emoji and laughter are localized too",
    text: "哈哈哈 / 笑死 ↔ lmao / lol ↔ jajaja / XD. Match length and intensity, keep emoji unless their meaning differs by region." },
  { id: "R8", title: "Surface commerce and questions to the host",
    text: "求链接, 'drop the link', '¿dónde lo compro?' are purchase intent. Tag as Request so the host console can answer them in the viewer's language." }
];

/* ---------- 4. Slang glossary ----------
   term: as it appears in chat · lang: source language
   meaning: what it really means (for the reviewer)
   zh/en/es: the preferred localized equivalent per language
   why: the decision, in one line — this is portfolio material  */
LOC.glossary = [
  { term: "666", lang: "zh", meaning: "溜 (smooth/skilled): applause for a good move",
    en: "LET'S GOOO / insane", es: "¡Vamooos! / qué nivel",
    why: "Digits alone mean nothing abroad and 666 = 'devil' in the West (R2)." },
  { term: "awsl", lang: "zh", meaning: "啊我死了 'ah I'm dead (of cuteness)'",
    en: "I'm screaming 😭 / I can't", es: "me muero 😭",
    why: "Same hyperbole exists in both targets, so keep the 'dying' image (R1)." },
  { term: "yyds", lang: "zh", meaning: "永远的神 'eternal god', the best ever",
    en: "the GOAT 🐐", es: "lo más / el mejor de la historia",
    why: "GOAT is the exact English chat equivalent, emoji included." },
  { term: "前排", lang: "zh", meaning: "front row: claiming to be early",
    en: "first!", es: "¡primero!", zh: "前排",
    why: "Every chat has a 'first' ritual; use the target's ritual word." },
  { term: "家人们", lang: "zh", meaning: "streamer community addressing itself",
    en: "y'all / chat", es: "gente",
    why: "R4: never 'family members'." },
  { term: "破防", lang: "zh", meaning: "'defense broken' (gaming) → emotionally hit",
    en: "this hit me / I'm not okay", es: "esto me ha tocado",
    why: "The gaming metaphor is lost abroad; keep the emotion." },
  { term: "求链接", lang: "zh", meaning: "'begging for the link': wants to buy",
    en: "drop the link pls", es: "pasa el enlace porfa",
    why: "Purchase intent → tag Request (R8)." },
  { term: "绝绝子", lang: "zh", meaning: "absolutely amazing (hyperbolic)",
    en: "this is everything", es: "una pasada",
    why: "Trendy hyperbole ↔ trendy hyperbole." },
  { term: "no cap", lang: "en", meaning: "no lie, for real",
    zh: "说真的 / 不骗你", es: "en serio",
    why: "MT renders it as 没有帽子 ('no hat'), a classic failure." },
  { term: "bussin", lang: "en", meaning: "(food) really good",
    zh: "太香了", es: "buenísimo",
    why: "Food slang → food word: 香 keeps the 'smell/taste' sense." },
  { term: "it's giving", lang: "en", meaning: "it has the vibe of …",
    zh: "……既视感 / 满满的……感", es: "esto es puro …",
    why: "Grammar-breaking slang; MT produces 它正在给 ('it is giving')." },
  { term: "L", lang: "en", meaning: "loss: bad, failure",
    zh: "差评 / 拉了", es: "malísimo",
    why: "Keep the negativity (R3)." },
  { term: "W", lang: "en", meaning: "win: great",
    zh: "赢麻了 / 牛", es: "top",
    why: "Single letter is opaque outside English chat." },
  { term: "ratio", lang: "en", meaning: "'your post got fewer likes than replies': dunking",
    zh: "（嘲讽）", es: "(burla)",
    why: "Harassment marker → tag Toxic for moderation, don't explain the meme." },
  { term: "fell off", lang: "en", meaning: "no longer relevant",
    zh: "过气了", es: "ya no eres nadie",
    why: "Exact Chinese equivalent exists." },
  { term: "crack", lang: "es", meaning: "an ace, a legend (Spain & LatAm)",
    en: "legend", zh: "太牛了 / 大神",
    why: "MT may output 裂缝 ('a crack in a wall')." },
  { term: "jajaja", lang: "es", meaning: "laughter",
    en: "lmao", zh: "哈哈哈",
    why: "R7: laughter has a spelling per language." },
  { term: "XD", lang: "es", meaning: "laughing face",
    en: "lol", zh: "笑死",
    why: "Widely used in Spanish chat, dated in English chat." },
  { term: "señora", lang: "es", meaning: "lady (polite)",
    en: "auntie (affectionate) / the lady", zh: "阿姨",
    why: "For a food-stall owner, 阿姨 is the natural Chinese address." }
];

/* ---------- 5. LLM system prompt (live mode) ----------
   {{RULES}}, {{GLOSSARY}} and {{TARGETS}} are filled in by the app. */
LOC.systemPrompt = `You are the localization layer of a global livestream chat on a short-video platform.
The host is streaming live from a night market in Changsha, China, cooking Changsha stinky tofu (臭豆腐).
Viewers comment in Chinese, English and Spanish.

For EACH comment you receive, return:
- "tone": one of hype, affection, joke, greeting, question, request, negative, toxic
- for each target language in {{TARGETS}} that differs from the comment's language:
    "literal": what a word-for-word machine translation would output (keep its mistakes, it is shown as a contrast)
    "localized": what a native viewer of that language would naturally write in a live chat
- "note": ONE short sentence in English explaining the key adaptation decision, or "" if none was needed
- "reply": only if tone is question, request or greeting: a short, warm suggested reply for the host,
    with "text" in the commenter's language and "zh" in Chinese for the host to understand it

Adaptation rules (follow strictly):
{{RULES}}

Preferred slang equivalents:
{{GLOSSARY}}

Output ONLY a JSON array, one object per comment, same order, with keys:
id, lang, tone, out (object keyed by language code with {literal, localized}), note, reply (or null).
Keep "localized" chat-length: never more than ~1.3x the original.`;

/* ---------- 6. UI microcopy for the live room ----------
   maxPx = width of the button/slot in the design (px at 13px font).
   The demo measures each string and flags overflow.
   alt = Siqi's shorter fallback when the main string overflows. */
LOC.uiStrings = [
  { key: "follow",        maxPx: 64,  zh: "关注",       en: "Follow",          es: "Seguir" },
  { key: "share",         maxPx: 64,  zh: "分享",       en: "Share",           es: "Compartir" },
  { key: "send_gift",     maxPx: 56,  zh: "送出",       en: "Send",            es: "Enviar" },
  { key: "join_fan_club", maxPx: 96,  zh: "加入粉丝团", en: "Join fan club",   es: "Unirse al club de fans", alt: { es: "Club de fans" } },
  { key: "gift_finger_heart", maxPx: 80, zh: "比心",    en: "Finger Heart",    es: "Corazón con los dedos", alt: { es: "Corazoncito" } },
  { key: "gift_rose",     maxPx: 80,  zh: "玫瑰",       en: "Rose",            es: "Rosa" },
  { key: "tap_translate", maxPx: 110, zh: "点击查看翻译", en: "Tap to translate", es: "Toca para traducir", alt: { es: "Traducir" } },
  { key: "live_ended",    maxPx: 130, zh: "直播已结束", en: "LIVE has ended",  es: "El directo ha terminado", alt: { es: "Directo finalizado" } },
  { key: "viewers",       maxPx: 110,  zh: "{n} 人在看", en: "{n} watching",   es: "{n} viendo" }
];
