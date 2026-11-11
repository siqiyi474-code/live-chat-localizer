# Live Chat Localizer

A content-design prototype: a simulated multilingual livestream chat (Chinese, English, Spanish) where every comment is **localized, not just translated**, plus a host console that turns viewer questions into suggested replies in the viewer's own language.

> Concept, localization rules, slang glossary, tone tags and all copy: **Yi Siqi**.
> Prototype built with Claude Code (AI-assisted development).
> The chat is simulated. It is not connected to any real platform.

## What it shows

- **Literal vs localized.** Toggle *Machine literal* to see what word-for-word MT shows a viewer (`no cap` → 没有帽子, `666` → 666), then switch back to the localized chat.
- **Viewer language.** The same stream seen by a Chinese, English or Spanish viewer.
- **Inspector.** For each comment: literal output, localized output, tone/intent tag, glossary hits and the one-line reason behind the decision.
- **Host console.** Questions, purchase requests and greetings surface first, translated for the host, with a ready reply in the viewer's language. Toxic comments get a moderation suggestion instead of a softer translation.
- **UI strings check.** Every live-room label is measured against its slot width per language; overflowing strings (mostly Spanish) fall back to a shorter alternative, live in the room.
- **Live LLM mode (optional).** Type any comment; comments are batched every 1.5 s and localized by an LLM using the same rules and glossary. Works with any OpenAI-compatible API (DeepSeek, Qwen…) or Anthropic. Without a key, the pre-localized script always plays.

## Run it

Open `index.html` in a browser. No install, no server, no external requests (it loads nothing from CDNs, so it also works inside mainland China).

`python build.py` produces `dist/live-chat-localizer.html`, a single self-contained file that can be emailed or attached.

Add `?all` to the URL to load the whole chat at once (useful for screenshots).

## Where the decisions live

| File | What it holds |
|---|---|
| `siqi/localization.js` | Adaptation rules, slang glossary, tone tags, LLM system prompt, UI microcopy with slot widths |
| `siqi/stream-script.js` | The simulated chat with literal and localized versions and the reasoning for each |
| `index.html` | The app (UI and logic only, no content decisions) |
