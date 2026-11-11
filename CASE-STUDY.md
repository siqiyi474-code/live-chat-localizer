# Case study template · Live Chat Localizer

> Draft structure for Siqi's portfolio page (1–2 pages). Replace everything in [brackets]. Keep it short: recruiters skim.

## Localizing a global livestream chat

**Role:** Content designer & localization lead (concept, rules, glossary, copy, prompt design). Prototype built with Claude Code.
**Languages:** Chinese · English · Spanish
**Demo:** [link] · [QR code]

### 1. The problem
A livestream from Changsha draws viewers from China, the US and Latin America. Machine translation makes the chat *readable* but not *understandable*: slang, memes and chat rituals either break (`no cap` → 没有帽子 "no hat") or carry the wrong meaning (`666` reads as "the devil" to Western viewers). The host can't tell a question from a joke in a language they don't speak.

### 2. My approach
[2–3 sentences in your own words. Suggested angle: chat slang is a speech act. I translate what the viewer is *doing* (cheering, teasing, asking, buying) using the target chat's own convention.]

Eight adaptation rules, for example:
- **Translate the function, not the words.**
- **Keep the register, don't sanitize.** Rude stays rude; moderation is a separate decision.
- **Don't over-localize.** If the literal works, keep it.
[Pick the 3 rules you believe in most.]

### 3. Before / after
| Viewer wrote | Machine literal | Localized | Why |
|---|---|---|---|
| what does it smell like? no cap | 它实际上闻起来像什么？没有帽子 | 说真的，到底是什么味儿？ | "no cap" = for real |
| 666666 | 666666 | LET'S GOOO 🔥 | 666 = "devil" in the West |
| 家人们谁懂啊 看饿了 | Family members who understands… | Y'all… why am I suddenly starving 😭 | community address, not relatives |
| Qué crack la señora del puesto | 摊位的女士真是个裂缝 | 摊主阿姨太牛了 | crack = ace; señora → 阿姨 |
[Choose your 4–6 strongest examples from siqi/stream-script.js.]

### 4. Beyond the chat
- **Host console:** questions and purchase intent (求链接 / drop the link) surface with a suggested reply in the viewer's language.
- **Multilingual layout check:** UI labels measured per language; "Unirse al club de fans" overflows a 96 px button → "Club de fans".
- **LLM workflow:** the same rules and glossary feed the system prompt, so the model follows my localization decisions instead of generic MT.

### 5. What I learned / next steps
[2–3 bullets in your own words. Ideas: where the LLM still fails and needed a rule; adding Arabic for RTL layout; measuring which localized comments get more replies.]
