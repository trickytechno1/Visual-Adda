export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  caseStudy: {
    heroTag: string;
    description: string;
    problem: string;
    research: string;
    wireframes: string;
    brandStrategy: string;
    visualIdentity: {
      colors: { name: string; hex: string }[];
      typography: { title: string; desc: string }[];
    };
    motion: string;
    development: string;
    results: { label: string; value: string }[];
    galleryImages: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'cybernetic-realities',
    title: 'Cybernetic Realities',
    subtitle: 'Immersive CGI World-Building & Realtime Rendering',
    category: 'CGI',
    client: 'Aether Nexus Group',
    year: '2026',
    imageUrl: 'https://picsum.photos/seed/cyber/1200/800',
    videoUrl: 'https://www.youtube.com/embed/vQDgWrLdn4I',
    caseStudy: {
      heroTag: 'Next-Gen CGI & 3D Environment Creation',
      description: 'A groundbreaking cinematic hyper-realistic walk-through designed to introduce futuristic architecture and spatial experiences to global audiences.',
      problem: 'Aether Nexus required an ultra-premium spatial demonstration for their carbon-neutral city plan, but traditional architectural renders lacked emotional resonance and immersive interactive depth.',
      research: 'Our team studied speculative brutalist layouts, cybernetic ecosystem bio-structures, and real-world natural lighting patterns in order to draft an emotionally captivating virtual simulation.',
      wireframes: 'We drafted intricate spatial layouts, mapping cinematic camera pathways, viewer sightlines, and physical focal points to construct the perfect immersive structural flow.',
      brandStrategy: 'Positioning Aether Nexus as an architectural pioneer at the intersection of bio-sustainability and extreme luxury, redefining modern urban luxury.',
      visualIdentity: {
        colors: [
          { name: 'Quantum Purple', hex: '#7000FF' },
          { name: 'Core Orange', hex: '#FF5A00' },
          { name: 'Onyx Depth', hex: '#050505' },
          { name: 'Solis Gold', hex: '#FFB800' }
        ],
        typography: [
          { title: 'Space Grotesk', desc: 'Display typography representing structural precision' },
          { title: 'Inter Regular', desc: 'Sleek, legible content prose for maximum accessibility' }
        ]
      },
      motion: 'Implemented 60fps slow-motion flythroughs, dynamic particle streams flowing with solar wind patterns, and physics-driven interactive spatial shifts.',
      development: 'Developed a custom real-time spatial runtime leveraging React Three Fiber and WebGL shaders, achieving 90fps interactive performance on high-end desktop nodes.',
      results: [
        { label: 'Investor Funding Secured', value: '$85M+' },
        { label: 'Interactive Walkthrough Plays', value: '1.4M' },
        { label: 'Global Media Press Coverage', value: '45+' }
      ],
      galleryImages: [
        'https://picsum.photos/seed/cyber1/800/600',
        'https://picsum.photos/seed/cyber2/800/600',
        'https://picsum.photos/seed/cyber3/800/600'
      ]
    }
  },
  {
    id: 'lumina-brand',
    title: 'Lumina Spatial Brand',
    subtitle: 'Generative Visual Strategy & Web Interactions',
    category: 'Branding',
    client: 'Lumina Labs Inc.',
    year: '2025',
    imageUrl: 'https://picsum.photos/seed/lumina/1200/800',
    caseStudy: {
      heroTag: 'Generative Brand System & Web Interaction Design',
      description: 'An AI-infused brand overhaul and high-conversion web platform designed to highlight Lumina’s breakthrough optical computing tech.',
      problem: 'Lumina Labs had highly advanced hardware but struggled to explain the abstract concept of optical light computing to mainstream developers and strategic enterprise buyers.',
      research: 'We discovered that developers are heavily visual thinkers. We mapped out physical prism beams, optical spectrums, and real-world chromatic aberrations to define the core brand motif.',
      wireframes: 'Crafted dynamic web interfaces with physics-based mockups, where users can interact with digital light beams on screen to unlock specific product pages.',
      brandStrategy: 'Establishing the core positioning: "Computing at the Speed of Light." Infused high-end Editorial aesthetic layout paired with bold Swiss typography.',
      visualIdentity: {
        colors: [
          { name: 'Optic Neon Pink', hex: '#D000FF' },
          { name: 'Solar Orange', hex: '#FF5A00' },
          { name: 'Spectrum Blue', hex: '#00D1FF' },
          { name: 'Absolute Dark', hex: '#050505' }
        ],
        typography: [
          { title: 'Clash Display', desc: 'Futuristic geometric display letterforms' },
          { title: 'JetBrains Mono', desc: 'Developer-aligned tech data specifications font' }
        ]
      },
      motion: 'Created organic color fluid transitions, dynamic drag-to-refract interactive widgets, and clean CSS-grid hover card expansions.',
      development: 'Programmed using Next.js 15, custom Tailwind styles, and Framer Motion spring setups to provide instant micro-responses.',
      results: [
        { label: 'Conversion Rate Increase', value: '+142%' },
        { label: 'Enterprise Demos Scheduled', value: '12K+' },
        { label: 'Awwwards Honors', value: '3x' }
      ],
      galleryImages: [
        'https://picsum.photos/seed/lumina1/800/600',
        'https://picsum.photos/seed/lumina2/800/600',
        'https://picsum.photos/seed/lumina3/800/600'
      ]
    }
  },
  {
    id: 'kinetic-gravity',
    title: 'Kinetic Gravity AV',
    subtitle: 'Motivational Cinematic scripted AV Production',
    category: 'Motion',
    client: 'Gravity Athletics Corp',
    year: '2026',
    imageUrl: 'https://picsum.photos/seed/gravity/1200/800',
    caseStudy: {
      heroTag: 'High-Impact Motivational Scripted AV & VFX',
      description: 'An emotionally charged, story-driven cinematic sports brand launching campaign combining ultra-sleek VFX with raw human determination stories.',
      problem: 'Gravity Athletics was entering a highly competitive performance gear market and needed a powerful campaign video to instantly build extreme brand equity and cult status.',
      research: 'Conducted behavioral panels and found that modern athletes respond to physical truth over clinical metrics. Focused story on failure, recovery, and momentum.',
      wireframes: 'Created frame-by-frame storyboard layouts, pacing the sound design with key visual frame shifts, ensuring maximum dopamine response.',
      brandStrategy: 'Developing the campaign positioning: "Defy Your Inner Mass." Deeply visceral, dark, premium, editorial brand representation.',
      visualIdentity: {
        colors: [
          { name: 'Force Gold', hex: '#FFB800' },
          { name: 'Deep Purple', hex: '#5000C0' },
          { name: 'Pure White', hex: '#FFFFFF' },
          { name: 'Vapour Gray', hex: '#1C1C24' }
        ],
        typography: [
          { title: 'Satoshi Bold', desc: 'Sharp, elegant display headings with deep tracking' },
          { title: 'Inter Light', desc: 'Minimal body text highlighting pure clarity' }
        ]
      },
      motion: 'Dynamic velocity-ramped video edits, customized glitch transitions, audio-synchronized visual flashes, and particle-based trailing lines.',
      development: 'Produced in 8K Red Cine, final interactive web elements integrated using performance-tuned React Video frames with lazy caching.',
      results: [
        { label: 'Total Campaign Video Views', value: '42M' },
        { label: 'Social Engagement Rate', value: '18.4%' },
        { label: 'Direct Product Pre-orders', value: '$4.2M' }
      ],
      galleryImages: [
        'https://picsum.photos/seed/grav1/800/600',
        'https://picsum.photos/seed/grav2/800/600',
        'https://picsum.photos/seed/grav3/800/600'
      ]
    }
  },
  {
    id: 'metaverse-walkthroughs',
    title: 'Vesper Luxury walk-throughs',
    subtitle: 'High-End Architectural Walkthroughs & Walk-Through Content',
    category: '3D',
    client: 'Vesper Estates',
    year: '2026',
    imageUrl: 'https://picsum.photos/seed/estate/1200/800',
    caseStudy: {
      heroTag: 'Ultra-Luxury Experiential Walkthrough Design',
      description: 'A bespoke virtual touring system built for private residential islands, showcasing elite architectural layout details.',
      problem: 'Elite international buyers could not travel to view multi-million dollar island estates, stalling the primary sales cycle.',
      research: 'We found that high-net-worth individuals prioritize physical material fidelity (e.g., marble gloss, wood grain) and lighting angles over layout blue-prints.',
      wireframes: 'Engineered a highly simplified spatial controller interface, optimized for tablet-based browsing and frictionless panoramic swipes.',
      brandStrategy: 'Visual focus on absolute exclusivity, soft luxurious layouts, generous white space, and warm editorial contrast.',
      visualIdentity: {
        colors: [
          { name: 'Vesper Bronze', hex: '#C5A059' },
          { name: 'Sable Black', hex: '#0C0C0E' },
          { name: 'Alabaster Light', hex: '#F5F5F7' }
        ],
        typography: [
          { title: 'Playfair Display', desc: 'Serif sophistication for classical elegance' },
          { title: 'Inter Regular', desc: 'Clean geometric structure' }
        ]
      },
      motion: 'Cinematic inertia panning, light reflection simulations, and smooth 1-second crossfades between architectural viewpoints.',
      development: 'Developed on a fast WebGL engine, optimized to run fully native in high-fidelity on standard Safari mobile screens without lagging.',
      results: [
        { label: 'Estates Sold Fully Virtually', value: '14 Units' },
        { label: 'Total Transaction Volume', value: '$180M+' },
        { label: 'Avg Customer Tour Duration', value: '22 Mins' }
      ],
      galleryImages: [
        'https://picsum.photos/seed/vesper1/800/600',
        'https://picsum.photos/seed/vesper2/800/600',
        'https://picsum.photos/seed/vesper3/800/600'
      ]
    }
  },
  {
    id: 'ai-synthetics',
    title: 'Synthetic Dreams AI',
    subtitle: 'Interactive AI Content & Creative Consulting',
    category: 'AI',
    client: 'Hologram Inc.',
    year: '2025',
    imageUrl: 'https://picsum.photos/seed/dream/1200/800',
    caseStudy: {
      heroTag: 'AI-Generated Experiential Visual Art Direction',
      description: 'An avant-garde experimental campaign using specialized neural visual networks to generate dreamscapes responding to real-time bio-data.',
      problem: 'Hologram Inc. needed to showcase their new biological feedback band but traditional marketing felt too standard for a sci-fi device.',
      research: 'We realized that visualizing a user’s mental calmness in real-time as beautiful generative landscapes provides an instantaneous emotional "ah-ha" moment.',
      wireframes: 'Created a modular biological dashboard showing biometric waves morphing into beautiful procedural landscapes in a high-contrast web canvas.',
      brandStrategy: 'Positioned the device as an artistic portal to one’s subconscious mind, merging neuroscience with high fashion art.',
      visualIdentity: {
        colors: [
          { name: 'Neural Violet', hex: '#7000FF' },
          { name: 'Bio Orange', hex: '#FF5A00' },
          { name: 'Void Black', hex: '#050505' }
        ],
        typography: [
          { title: 'Satoshi Bold', desc: 'Modern geometric sans font with tech vibe' },
          { title: 'Space Mono', desc: 'Raw experimental terminal numbers layout' }
        ]
      },
      motion: 'Fluid liquid morphing layouts, biological wave animations, responsive web elements that expand on click with bouncy spring physics.',
      development: 'Next.js 15 route systems combined with real-time bio-data emulation and deep canvas rendering, running at 60fps.',
      results: [
        { label: 'Viral Social Impressions', value: '88M+' },
        { label: 'Product Signups Raised', value: '350%' },
        { label: 'Design Museum Exhibition', value: 'London' }
      ],
      galleryImages: [
        'https://picsum.photos/seed/synth1/800/600',
        'https://picsum.photos/seed/synth2/800/600',
        'https://picsum.photos/seed/synth3/800/600'
      ]
    }
  }
];
