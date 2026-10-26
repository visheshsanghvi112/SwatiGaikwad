# Swati Gaikwad — Premium Personal Portfolio Website

A complete, high-craft, editorial single-page personal portfolio website for **Swati Gaikwad**, based in Mumbai, Maharashtra, India.

This project unites two complementary dimensions of her professional identity:
1. **Real Estate Professional**: An experienced sourcing, pre-sales, and transaction closing manager across major Mumbai developments (Palladian Partners, Ayodhya Construction, Suraj Developer, Godrej, Lodha, Piramal, Avighna, Omkar).
2. **Content Creator & Personal Brand**: An authentic, visual showcase of her real Instagram content and reels ([@its_swatified](https://www.instagram.com/its_swatified/)), highlighting lifestyle, salon experiences, festive traditions, and styling inspiration.

---

## 🎨 Visual Identity & Design System

- **Editorial Palette**: Warm Ivory (`#FAF7F2`, `#FDFCF9`), Charcoal (`#121315`, `#18191B`), Muted Sage/Olive (`#5A6956`), and Restrained Terracotta / Copper (`#B85D43`).
- **Typography**: 
  - Headings: **Cormorant Garamond** (Google Fonts editorial serif)
  - Body & UI: **Plus Jakarta Sans** (clean, crisp modern sans-serif)
- **Design Craft**: Asymmetric editorial layout, prominent authentic photography, subtle architectural detailing, soft shadows, responsive mobile navigation drawer, and interactive modal inspection for media items.

---

## 📁 Project Structure

```
swati-gaikwad-portfolio/
├── index.html                   # HTML entry with SEO, OpenGraph & Google Fonts
├── public/
│   ├── favicon.svg              # Custom SG monogram favicon
│   └── assets/                  # Authentic portraits, reel covers & architectural images
│       ├── swati_portrait_hero.jpg
│       ├── swati_avatar_300.jpg
│       ├── swati_avatar.jpg
│       ├── swati_reel_DW_YzPbDLK0.jpg
│       ├── swati_reel_DdtNDvWucVX.jpg
│       ├── swati_reel_DDrLHAYP6RO.jpg
│       ├── swati_reel_DYXQxcYJjMa.jpg
│       ├── swati_reel_Dc6QXtGzTU3.jpg
│       ├── swati_post_DaUaDB1kpPU.jpg
│       ├── swati_reel_DeEOg9KP0uV.jpg
│       ├── swati_reel_DaPNbLVIL5R.jpg
│       └── real_estate_architecture.jpg
├── src/
│   ├── App.tsx                  # Root application integrating all sections
│   ├── index.css                # Custom CSS design system, typography & tokens
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred header with mobile drawer
│   │   ├── Hero.tsx             # Editorial opening screen with authentic portrait & CTAs
│   │   ├── About.tsx            # Professional introduction & relationship philosophy
│   │   ├── Pathways.tsx         # Dual pathways: Real Estate & Creator Space
│   │   ├── Timeline.tsx         # Verified vertical career timeline
│   │   ├── Skills.tsx           # Real estate capabilities & strengths (no arbitrary bars)
│   │   ├── MediaGallery.tsx     # Filterable Instagram reels & photo showcase
│   │   ├── MediaModal.tsx       # Interactive accessible detail modal for reels
│   │   ├── Education.tsx        # Minimalist academic qualifications
│   │   ├── Personality.tsx      # Personal interests & multilingual communication
│   │   ├── Contact.tsx          # Direct contact tiles, WhatsApp & message composer
│   │   ├── Footer.tsx           # Editorial footer with dynamic year & back-to-top
│   │   └── InstagramIcon.tsx    # Clean SVG Instagram icon
│   └── data/
│       ├── portfolioData.ts     # Core biographical, career, and education data
│       └── mediaData.ts         # Single editable configuration for Instagram items
```

---

## 🛠️ How to Maintain & Update Content

### Adding or Updating Instagram Reels (`src/data/mediaData.ts`)
To add a new reel or photo, add an entry to the `INSTAGRAM_MEDIA_ITEMS` array:

```typescript
{
  id: "media-9",
  code: "YOUR_REEL_CODE",
  title: "Reel Title",
  caption: "Exact Instagram caption text...",
  type: "reel", // or "post"
  category: "beauty", // "beauty" | "fashion" | "lifestyle" | "festive"
  categoryLabel: "Salon & Beauty",
  instagramUrl: "https://www.instagram.com/reel/YOUR_REEL_CODE/",
  thumbnailUrl: "/assets/your_new_image.jpg",
  aspectRatio: "9:16",
  tag: "Collaboration",
  likes: "New Feature"
}
```

### Updating Career or Education (`src/data/portfolioData.ts`)
All company names, dates, responsibilities, phone numbers, and degree entries are organized in `src/data/portfolioData.ts` for clean single-point updates.

---

## 🚀 Running the Website Locally

1. Open a terminal and navigate to the project directory:
   ```bash
   cd /Users/vishesh/Downloads/swati-gaikwad-portfolio
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5180` in your web browser.

3. To build for production deployment:
   ```bash
   npm run build
   ```
   The production-ready output will be in the `dist/` directory.
