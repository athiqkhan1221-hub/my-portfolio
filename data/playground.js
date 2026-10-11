/**
 * Creative Playground experiments data for Athiq Khan.
 * Covers AI video generation, video editing experiments, and visual concepts.
 * Placeholders are explicitly labeled so Athiq can easily drop in his real MP4/WebM files and cover photos.
 */

export const playgroundCategories = [
  "All Experiments",
  "AI Video Generation",
  "Product Video Concepts",
  "Cinematic Experiments",
  "Video Editing",
  "Prompt Studies"
];

export const playgroundItems = [
  {
    id: "cinematic-dune-scifi",
    title: "Cinematic Sci-Fi Environment Study",
    category: "Cinematic Experiments",
    type: "AI Video",
    aspectRatio: "16:9",
    thumbnail: "/images/playground-scifi.svg",
    videoUrl: null, // [EDITABLE: Add path to your .mp4 or .webm in /public/videos/]
    caption:
      "Exploration of volumetric atmosphere, dusk planetary lighting, and slow drone camera movement using text-to-video diffusion.",
    promptSnippet:
      "A cinematic wide angle tracking shot of a futuristic research station in an obsidian desert, dust haze, anamorphic 35mm lens, atmospheric dusk light --ar 16:9",
    tools: ["AI Video Diffusion", "Prompt Engineering"],
    tags: ["Atmosphere", "16:9 Widescreen", "Lighting Study"],
    notes: "Focused on reducing high-frequency jitter during slow horizontal pans."
  },
  {
    id: "product-sneaker-spot",
    title: "Minimalist Footwear Product Commercial",
    category: "Product Video Concepts",
    type: "AI Ad Concept",
    aspectRatio: "9:16",
    thumbnail: "/images/playground-product.svg",
    videoUrl: null, // [EDITABLE: Add video path when available]
    caption:
      "Vertical social commercial concept showcasing rapid product rotations, studio softbox illumination, and dynamic color grading.",
    promptSnippet:
      "Minimalist monochrome athletic sneaker rotating smoothly suspended in mid-air, studio rim lighting, matte dark backdrop, crisp 4k product commercial --ar 9:16",
    tools: ["AI Video Generation", "Video Editing"],
    tags: ["Product Concept", "9:16 Reel", "Lighting"],
    notes: "Crafted for high-energy mobile vertical reels with synchronized typography."
  },
  {
    id: "urban-cyber-transit",
    title: "Cybernetic Metro Transition Sequence",
    category: "AI Video Generation",
    type: "Visual Experiment",
    aspectRatio: "16:9",
    thumbnail: "/images/playground-transit.svg",
    videoUrl: null, // [EDITABLE]
    caption:
      "Fast-paced hyperlapse experiment passing through rain-slicked neon street corridors into an underground railway station.",
    promptSnippet:
      "First person camera hyperlapse moving rapidly through rain-soaked neon Tokyo alley into illuminated train platform, reflection in puddles, cinematic motion blur --ar 16:9",
    tools: ["AI Video Generation", "Post Pacing"],
    tags: ["Hyperlapse", "Motion Blur", "Editorial"],
    notes: "Testing velocity ramp transitions between generative clips."
  },
  {
    id: "rhythm-cut-montage",
    title: "Dynamic Beat-Sync Action Montage",
    category: "Video Editing",
    type: "Video Editing",
    aspectRatio: "16:9",
    thumbnail: "/images/playground-editing.svg",
    videoUrl: null, // [EDITABLE]
    caption:
      "A precision timeline editing study: aligning micro-cuts, sound design hits, and speed ramps to an electronic audio rhythm.",
    promptSnippet: "Non-generative project: Manual editing timeline alignment and audio synchronization.",
    tools: ["Video Editing Software", "Sound Design"],
    tags: ["Timeline Pacing", "Audio Sync", "Color Grade"],
    notes: "Experimenting with 8-frame cuts to build tension without causing visual fatigue."
  },
  {
    id: "prompt-persona-matrix",
    title: "Structured LLM Prompting Matrix",
    category: "Prompt Studies",
    type: "Prompt Engineering",
    aspectRatio: "4:3",
    thumbnail: "/images/playground-prompt.svg",
    videoUrl: null,
    caption:
      "A systematic evaluation sheet comparing zero-shot versus delimited few-shot personas for technical documentation extraction.",
    promptSnippet:
      "System: You are an objective technical editor. Adhere strictly to Markdown tables. Input Delimiters: ```raw_notes```. Constraint: Output zero speculation.",
    tools: ["Prompt Engineering", "Evaluation Matrix"],
    tags: ["System Instructions", "Zero-Shot vs Few-Shot", "Benchmarking"],
    notes: "Demonstrates an 85% drop in format hallucinations using explicit markdown delimiters."
  },
  {
    id: "beverage-macro-splash",
    title: "Macro Liquid Dynamics Simulation",
    category: "Product Video Concepts",
    type: "AI Ad Concept",
    aspectRatio: "9:16",
    thumbnail: "/images/playground-splash.svg",
    videoUrl: null,
    caption:
      "High-speed macro capture concept of sparkling citrus water splash with glass refraction and effervescent bubbles.",
    promptSnippet:
      "Ultra slow motion 1000fps macro shot of cold citrus splash around frosted glass, crystal water droplets, natural condensation, bright sunlight --ar 9:16",
    tools: ["AI Video Diffusion", "Color Grading"],
    tags: ["Slow Motion", "Macro Lens", "Beverage Ad"],
    notes: "Testing fluid physics simulation accuracy in generative models."
  }
];
