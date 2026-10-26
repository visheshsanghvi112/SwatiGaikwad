export interface InstagramMediaItem {
  id: string;
  code: string;
  title: string;
  caption: string;
  type: 'reel' | 'post' | 'property';
  category: 'all' | 'reels' | 'fashion' | 'festive' | 'realestate';
  categoryLabel: string;
  instagramUrl: string;
  thumbnailUrl: string;
  aspectRatio: '9:16' | '1:1' | '16:9';
  tag: string;
  likes?: string;
  date?: string;
  author: string;
  authorHandle: string;
}

export const INSTAGRAM_CATEGORIES = [
  { id: 'all', label: 'All Highlights' },
  { id: 'reels', label: 'Verified Reels' },
  { id: 'fashion', label: 'Style & Hauls' },
  { id: 'festive', label: 'Festive & Culture' },
  { id: 'realestate', label: 'Luxury Real Estate' },
] as const;

export const INSTAGRAM_MEDIA_ITEMS: InstagramMediaItem[] = [
  {
    id: "media-1",
    code: "DWEXttyCGRl",
    title: "Maratha 🚩✨ | Gudi Padwa Festive Elegance",
    caption: "Maratha🚩✨ Capturing authentic cultural moments and festive celebrations in Mumbai. Timeless Maharashtrian heritage with traditional zardozi, bugadi jewelry, and celebratory warmth. #gudipadwa2026 #trendingpost #marathi",
    type: "post",
    category: "festive",
    categoryLabel: "Festive & Culture",
    instagramUrl: "https://www.instagram.com/p/DWEXttyCGRl/",
    thumbnailUrl: "/assets/swati_post_DWEXttyCGRl.jpg",
    aspectRatio: "1:1",
    tag: "Festive Portrait",
    likes: "557+ Likes · 116 Comments",
    date: "March 19, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-2",
    code: "DWI2gcQiK2y",
    title: "Girgaon Shobhayatra Bullet Ride | Cultural Pride",
    caption: "Kudos to the Photographer ✨🫶🏼 Riding through Mumbai's historic Girgaon streets on a marigold-adorned Royal Enfield Bullet during Gudi Padwa celebrations. Joy, energy, and community spirit! #girgaon #gudipadwaspecial💫♥️ #explore #trendingreels #reels",
    type: "reel",
    category: "festive",
    categoryLabel: "Festive & Culture",
    instagramUrl: "https://www.instagram.com/reel/DWI2gcQiK2y/",
    thumbnailUrl: "/assets/swati_post_DWI2gcQiK2y.jpg",
    aspectRatio: "9:16",
    tag: "Mumbai Traditions",
    likes: "287+ Likes · 16 Comments",
    date: "March 21, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-3",
    code: "DevpTwjhC6A",
    title: "Opulent Velvet Twirl | Luxury Architectural Evening",
    caption: "My Mom says: Acha karogi to acha hi milega ✨ Embracing elegance and timeless ballroom style in a royal velvet gown with golden zari borders. Confidence, grace, and festive celebrations. #trendingreels #reels #explore #explorepage #instagram",
    type: "reel",
    category: "fashion",
    categoryLabel: "Style & Hauls",
    instagramUrl: "https://www.instagram.com/reel/DevpTwjhC6A/",
    thumbnailUrl: "/assets/swati_post_DevpTwjhC6A.jpg",
    aspectRatio: "9:16",
    tag: "Evening Elegance",
    likes: "176+ Likes · 26 Comments",
    date: "October 20, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-4",
    code: "DedxWkFOfvO",
    title: "Beauty Brand Collab | Tee Ess Official Campaign",
    caption: "Tell me, girlies: blue eyeliner or pretty lips—which one are you choosing? 💙💋 Pretty looks with Tee Ess! 💗💅🏻 Styling and beauty curation for festive & wedding seasons. #trendingreels #explore #explorepage #expression #instagram",
    type: "reel",
    category: "fashion",
    categoryLabel: "Style & Hauls",
    instagramUrl: "https://www.instagram.com/reel/DedxWkFOfvO/",
    thumbnailUrl: "/assets/swati_post_DedxWkFOfvO.jpg",
    aspectRatio: "9:16",
    tag: "Brand Collab",
    likes: "69+ Likes · 4 Comments",
    date: "October 13, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-5",
    code: "Dbctz-IuI8m",
    title: "Dot & Key Skincare Curation | Summer Lip Balm Review",
    caption: "Comment down ur fav shade❤️ Sharing authentic beauty essentials with SPF 50+ hydration. Relatable skincare reviews and honest beauty tips for everyday glam. #trendingreels #reels #explore #explorepage #contentcreator",
    type: "reel",
    category: "fashion",
    categoryLabel: "Style & Hauls",
    instagramUrl: "https://www.instagram.com/reel/Dbctz-IuI8m/",
    thumbnailUrl: "/assets/swati_reel_Dbctz-IuI8m.jpg",
    aspectRatio: "9:16",
    tag: "Skincare & Beauty",
    likes: "Verified Collab",
    date: "July 31, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-6",
    code: "Dcp4P2phWx-",
    title: "Little Moments of Pure Joy | Fresh Rose Bouquet",
    caption: "How does the child in me feel when he brings fresh blooms 💐✨ Celebrating spontaneous smiles, sincere affection, and warm memories with my community. #trendingreels #reels #explore #explorepage #expression",
    type: "reel",
    category: "reels",
    categoryLabel: "Verified Reel",
    instagramUrl: "https://www.instagram.com/reel/Dcp4P2phWx-/",
    thumbnailUrl: "/assets/swati_reel_Dcp4P2phWx-.jpg",
    aspectRatio: "9:16",
    tag: "Lifestyle Moment",
    likes: "Authentic Reel",
    date: "August 29, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-7",
    code: "DWGLmNMAeXp",
    title: "Media Interview & Festive Energy | Mumbai Spotlight",
    caption: "If yapping was a job, I could do it anytime, anywhere! 🎤✨ Live on-camera interaction during Mumbai's festive celebrations, connecting with people and bringing vibrant conversational energy. #gudipadwa2026 #trendingreels #explore #reels #explorepage",
    type: "reel",
    category: "reels",
    categoryLabel: "Verified Reel",
    instagramUrl: "https://www.instagram.com/reel/DWGLmNMAeXp/",
    thumbnailUrl: "/assets/swati_post_DWGLmNMAeXp.jpg",
    aspectRatio: "9:16",
    tag: "Live Media",
    likes: "419+ Likes · 35 Comments",
    date: "March 19, 2026",
    author: "Swati Gaikwad",
    authorHandle: "@its_swatified"
  },
  {
    id: "media-8",
    code: "re-south-mumbai",
    title: "South Mumbai Luxury Architectural Sourcing",
    caption: "Strategic property walkthrough and sourcing across premier high-rise developments in Worli and Lower Parel. Curating bespoke residences for high-net-worth buyers, evaluating floorplans, light corridors, and project credentials across Lodha, Godrej, and Piramal portfolios.",
    type: "property",
    category: "realestate",
    categoryLabel: "Luxury Real Estate",
    instagramUrl: "https://www.instagram.com/its_swatified/",
    thumbnailUrl: "/assets/real_estate_architecture.jpg",
    aspectRatio: "1:1",
    tag: "Property Sourcing",
    likes: "Pre-Sales & Closings",
    date: "Palladian Partners Portfolio",
    author: "Swati Gaikwad",
    authorHandle: "Sourcing & Closing Manager"
  },
  {
    id: "media-9",
    code: "re-terrace-residences",
    title: "Sky Villas & Panoramic Terrace Residences",
    caption: "Advising prospective investors and families on ultra-luxury configurations with sea-facing decks and private clubhouses. Guiding clients through requirement diagnosis, developer negotiation, and transparent title closure.",
    type: "property",
    category: "realestate",
    categoryLabel: "Luxury Real Estate",
    instagramUrl: "https://www.instagram.com/its_swatified/",
    thumbnailUrl: "/assets/luxury_property_terrace.jpg",
    aspectRatio: "1:1",
    tag: "High-End Closures",
    likes: "Client Advisory",
    date: "Mumbai Corridors",
    author: "Swati Gaikwad",
    authorHandle: "Sourcing & Closing Manager"
  }
];
