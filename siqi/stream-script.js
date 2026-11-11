/* ============================================================
   STREAM SCRIPT  ·  模拟直播弹幕  ·  owned by Siqi
   ------------------------------------------------------------
   The simulated chat, with the "before" (literal MT) and "after"
   (localized) version of every comment. This is what the demo
   plays when there is no API key, so it always works offline.
   These pairs are also the before/after examples for the
   portfolio case study. DRAFT: Siqi reviews every line.

   lang = language the viewer wrote in
   out  = one entry per OTHER language: literal vs localized
   note = the decision, in one sentence (shown in the inspector)
   reply = suggested host reply (questions, requests, greetings):
          text in the commenter's language; optional zh/en/es versions
          so every viewer sees the host's answer in their own language
   ============================================================ */

window.STREAM = {
  title: "长沙坡子街 · 现炸臭豆腐 | Changsha night market: stinky tofu LIVE",
  host: "小思在长沙",
  comments: [
    { id: 1, user: "tofu_lover88", lang: "zh", text: "前排！", tone: "hype",
      out: {
        en: { literal: "Front row!", localized: "First! 🙌" },
        es: { literal: "¡Primera fila!", localized: "¡Primero! 🙌" } },
      note: "前排 is the 'I'm early' ritual; English and Spanish chat use 'first'." },

    { id: 2, user: "jakeyy", lang: "en", text: "first 🔥", tone: "hype",
      out: {
        zh: { literal: "第一 🔥", localized: "前排🔥" },
        es: { literal: "primero 🔥", localized: "¡Primero! 🔥" } },
      note: "Same ritual in reverse: 第一 sounds like a ranking, 前排 is what Chinese chat says." },

    { id: 3, user: "湘妹子", lang: "zh", text: "666666", tone: "hype",
      out: {
        en: { literal: "666666", localized: "LET'S GOOO 🔥" },
        es: { literal: "666666", localized: "VAMOOOOS 🔥" } },
      note: "Copying the digits is meaningless abroad, and 666 reads as 'the devil' to Western viewers." },

    { id: 4, user: "lucia.mx", lang: "es", text: "jajaja qué asco pero lo quiero probar", tone: "joke",
      out: {
        en: { literal: "hahaha how disgusting but I want to try it", localized: "lmao looks gross but I NEED to try it" },
        zh: { literal: "哈哈哈多么恶心但是我想尝试它", localized: "哈哈哈看着劝退但好想尝一口" } },
      note: "恶心 sounds like an insult to the host's food; 劝退 keeps the playful 'scary but tempting' tone." },

    { id: 5, user: "momo酱", lang: "zh", text: "awsl 阿姨手速好快", tone: "affection",
      out: {
        en: { literal: "awsl auntie's hand speed is so fast", localized: "I'm screaming 😭 auntie's knife skills are insane" },
        es: { literal: "awsl la velocidad de mano de la tía es muy rápida", localized: "Me muero 😭 qué rapidez tiene la señora" } },
      note: "awsl = 啊我死了; the 'dying' hyperbole exists in both targets, so the image is kept." },

    { id: 6, user: "chris_eats", lang: "en", text: "what does it actually smell like? no cap", tone: "question",
      out: {
        zh: { literal: "它实际上闻起来像什么？没有帽子", localized: "说真的，到底是什么味儿？" },
        es: { literal: "¿a qué huele realmente? sin gorra", localized: "En serio, a qué huele de verdad?" } },
      note: "'no cap' becomes 'no hat' in MT; it means 'for real', so it moves to the front as 说真的.",
      reply: { text: "Honestly? Like strong blue cheese 😄 But it tastes crispy outside, soft inside, I promise!",
               zh: "说实话，闻着像很冲的蓝纹奶酪😄 但吃起来外脆里嫩，真不骗你！" } },

    { id: 7, user: "长沙土著", lang: "zh", text: "家人们谁懂啊 看饿了", tone: "joke",
      out: {
        en: { literal: "Family members who understands, watched until hungry", localized: "Y'all… why am I suddenly starving 😭" },
        es: { literal: "Miembros de la familia quién entiende, vi hasta tener hambre", localized: "Gente… a alguien más le ha entrado hambre? 😭" } },
      note: "家人们 is the crowd addressing itself, not relatives (rule R4)." },

    { id: 8, user: "viajera_ana", lang: "es", text: "¿Dónde está ese mercado? Quiero ir cuando viaje a China", tone: "question",
      out: {
        en: { literal: "Where is that market? I want to go when I travel to China", localized: "Where is that market? I want to go when I travel to China" },
        zh: { literal: "那个市场在哪里？我想去当我旅行到中国", localized: "这个夜市在哪儿呀？以后去中国想来打卡！" } },
      note: "English needed no adaptation (rule R5); Chinese adds 打卡, the natural verb for visiting a famous spot.",
      reply: { text: "Está en Changsha, en la calle Pozi (坡子街)! Te espero 😊",
               zh: "在长沙坡子街！欢迎来打卡～" } },

    { id: 9, user: "big_mike", lang: "en", text: "this stream is bussin fr", tone: "hype",
      out: {
        zh: { literal: "这个直播是bussin真的", localized: "这直播也太香了吧，真的" },
        es: { literal: "este stream es bussin de verdad", localized: "Este directo está buenísimo, de verdad" } },
      note: "'bussin' is food slang, so it maps to 香, which also evokes smell and taste." },

    { id: 10, user: "辣妹子", lang: "zh", text: "求链接！哪里能买到这个辣椒酱", tone: "request",
      out: {
        en: { literal: "Beg link! Where can buy this chili sauce", localized: "Drop the link pls! Where can I get that chili sauce?" },
        es: { literal: "¡Ruego enlace! Dónde puede comprar esta salsa de chile", localized: "¡Pasa el enlace porfa! ¿Dónde compro esa salsa picante?" } },
      note: "求链接 is purchase intent, so it is tagged Request and sent to the host console (rule R8).",
      reply: { text: "辣椒酱在购物车1号链接～",
               en: "The chili sauce is in my shop, item #1! 🌶️", es: "La salsa está en mi tienda, ¡producto n.º 1! 🌶️" } },

    { id: 11, user: "pablito_bcn", lang: "es", text: "Qué crack la señora del puesto 👏", tone: "affection",
      out: {
        en: { literal: "What a crack the lady of the stall 👏", localized: "The auntie at the stall is a legend 👏" },
        zh: { literal: "摊位的女士真是个裂缝 👏", localized: "摊主阿姨太牛了👏" } },
      note: "'crack' = an ace, but MT can output 裂缝 (a crack in a wall); señora becomes 阿姨, the natural address." },

    { id: 12, user: "nate.k", lang: "en", text: "L stream, I can smell it from here 🤢🤢", tone: "negative",
      out: {
        zh: { literal: "L直播，我从这里能闻到它 🤢🤢", localized: "差评，隔着屏幕都闻到了🤢🤢" },
        es: { literal: "Stream L, lo puedo oler desde aquí 🤢🤢", localized: "Directo malísimo, lo huelo desde aquí 🤢🤢" } },
      note: "The negativity is kept on purpose; localization doesn't sanitize, moderation is a separate decision (R3)." },

    { id: 13, user: "湖南小炒", lang: "zh", text: "yyds！长沙臭豆腐永远的神", tone: "hype",
      out: {
        en: { literal: "yyds! Changsha stinky tofu forever god", localized: "Changsha stinky tofu is the GOAT 🐐" },
        es: { literal: "¡yyds! Tofu apestoso de Changsha dios para siempre", localized: "¡El tofu apestoso de Changsha es lo más! 🐐" } },
      note: "yyds and GOAT are exact equivalents; the dish keeps its established name (rule R6)." },

    { id: 14, user: "sofi_uy", lang: "es", text: "XD el gato de atrás", tone: "joke",
      out: {
        en: { literal: "XD the cat of behind", localized: "lol the cat in the back" },
        zh: { literal: "XD 后面的猫", localized: "笑死，后面那只猫" } },
      note: "XD is common in Spanish chat but dated in English; each language gets its own laugh (R7)." },

    { id: 15, user: "greenplate", lang: "en", text: "is it vegan??", tone: "question",
      out: {
        zh: { literal: "它是素食主义者吗？？", localized: "这个是纯素的吗？？" },
        es: { literal: "¿¿Es vegano??", localized: "¿¿Es vegano??" } },
      note: "MT turns 'vegan' into a person (素食主义者); Spanish is fine as is.",
      reply: { text: "Great question! The tofu is plant-based, but some stalls use meat broth in the sauce. Let me ask auntie 🙏",
               zh: "好问题！豆腐本身是植物做的，但有的摊汤汁里放肉汤，我帮你问问阿姨🙏" } },

    { id: 16, user: "在伦敦的湘妹", lang: "zh", text: "破防了，想家了", tone: "affection",
      out: {
        en: { literal: "Defense broken, miss home", localized: "Okay this hit me. I miss home 🥲" },
        es: { literal: "Defensa rota, extraño casa", localized: "Vale, esto me ha tocado. Echo de menos mi casa 🥲" } },
      note: "破防 comes from gaming; the metaphor is lost abroad, so the emotion is kept instead." },

    { id: 17, user: "maya.travels", lang: "en", text: "it's giving street food heaven ✨", tone: "affection",
      out: {
        zh: { literal: "它正在给街头食物天堂 ✨", localized: "满满的街头美食天堂既视感✨" },
        es: { literal: "está dando cielo de comida callejera ✨", localized: "Esto es puro paraíso de comida callejera ✨" } },
      note: "'it's giving' breaks grammar on purpose; 既视感 is the Chinese chat structure for 'it has the vibe of'." },

    { id: 18, user: "diego_cdmx", lang: "es", text: "Saludos desde México 🇲🇽", tone: "greeting",
      out: {
        en: { literal: "Greetings from Mexico 🇲🇽", localized: "Hi from Mexico 🇲🇽" },
        zh: { literal: "来自墨西哥的问候 🇲🇽", localized: "墨西哥的朋友来打招呼啦🇲🇽" } },
      note: "来自…的问候 sounds like a postcard; live chat Chinese uses …来打招呼啦.",
      reply: { text: "¡Hola, México! Bienvenido al directo 🙌", zh: "欢迎墨西哥的朋友！" } },

    { id: 19, user: "吃辣不怕", lang: "zh", text: "阿姨能不能加辣 挑战一下", tone: "request",
      out: {
        en: { literal: "Auntie can or cannot add spicy, challenge once", localized: "Spicy challenge! Ask auntie for extra chili 🌶️" },
        es: { literal: "Tía puede o no puede añadir picante, desafiar una vez", localized: "¡Reto picante! Que la señora le eche más chile 🌶️" } },
      note: "The 能不能 structure is a friendly push, not a yes/no question; 'challenge' becomes a call to action.",
      reply: { text: "安排！马上加辣🌶️🔥",
               en: "Challenge accepted! Extra chili coming up 🌶️🔥", es: "¡Reto aceptado! Ahora mismo le echo más chile 🌶️🔥" } },

    { id: 20, user: "anon_9921", lang: "en", text: "ratio + you fell off", tone: "toxic",
      out: {
        zh: { literal: "比率 + 你掉下来了", localized: "（嘲讽）你过气了" },
        es: { literal: "proporción + te caíste", localized: "(burla) ya no eres nadie" } },
      note: "Harassment meme: translated honestly but tagged Toxic so moderation, not the translator, decides to hide it." }
  ]
};
