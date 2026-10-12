# Rani Mahal Hotel — Luxury Heritage Hotel & Suites Website

A boutique hotel web application built for **Rani Mahal Hotel**, showcasing Rajputana architectural grandeur, signature royal suites, fine heritage dining, banquets, and direct concierge enquiry flows.

---

## 1. Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Routing**: [React Router 7](https://reactrouter.com/) (Multi-page architecture)
- **Animations**: [GSAP](https://gsap.com/) for entrance animations and reveals
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector SVGs
- **Typography**: Google Fonts:
  - **Headings & Display**: *Cormorant Garamond* (Editorial Serif)
  - **Interface & Body**: *Manrope* (Contemporary Sans-Serif)
- **Palette**:
  - Charcoal: `#252824`
  - Warm Ivory: `#F7F4EE`
  - Muted Gold: `#C69A63`
  - Sand: `#E9E1D5`
  - Body Text: `#252525`

---

## 2. Project Architecture & Directory Structure

```
"D:\Projects\Rani mahal hotel"
├── index.html                   # HTML entry point with Google Fonts preconnects
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4
├── src/
│   ├── assets/                  # Logos and local assets
│   ├── types/
│   │   └── index.ts             # Strongly typed data models (HotelConfig, Room, Venue, etc.)
│   ├── data/                    # Centralized configuration & content
│   │   ├── hotel.ts             # Hotel contact, address, announcement, WhatsApp & phone
│   │   ├── rooms.ts             # Royal suites, amenities, pricing, galleries
│   │   ├── dining.ts            # Restaurant menus, hours, highlights
│   │   ├── venues.ts            # Banquets, ballrooms, lawns
│   │   ├── gallery.ts           # Visual archives with categories
│   │   ├── amenities.ts         # Icon-backed hotel amenities
│   │   └── navigation.ts        # Header & mobile navigation items
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Reusable button with gold, dark, ghost variants
│   │   │   ├── Container.tsx    # Responsive grid container
│   │   │   ├── SectionHeading.tsx # Editorial serif section headers with gold eyebrows
│   │   │   ├── SocialIcons.tsx  # Optimized SVG social icons
│   │   │   └── WhatsAppFloating.tsx # Floating direct WhatsApp enquiry widget
│   │   ├── layout/
│   │   │   ├── UtilityBar.tsx   # Top contact info, announcement & social links
│   │   │   ├── Navbar.tsx       # Transparent-to-dark on-scroll header
│   │   │   ├── MobileMenu.tsx   # Accessible mobile navigation drawer
│   │   │   └── Footer.tsx       # Royal footer with address, rooms, and links
│   │   └── sections/
│   │       ├── HeroSection.tsx      # Fullscreen cinematic hero with GSAP reveal
│   │       ├── AmenitiesSection.tsx # Dark amenities strip
│   │       ├── AboutSection.tsx     # Editorial 2-column introduction
│   │       ├── BookingBanner.tsx    # Call-to-action banner with direct phone link
│   │       ├── RoomsSection.tsx     # Uniform cards with room details & enquiry
│   │       ├── RestaurantSection.tsx# Split-screen restaurant & dining schedule
│   │       ├── VenuesSection.tsx    # Ballrooms, lawns, and celebrations
│   │       ├── GallerySection.tsx   # Photo grid with modal lightbox & keyboard controls
│   │       ├── LocationSection.tsx  # Map, coordinates, and distances
│   │       └── ContactSection.tsx   # Client-validated reservation enquiry form
│   ├── pages/
│   │   ├── HomePage.tsx         # Full landing experience
│   │   ├── AboutPage.tsx        # History, timeline, values
│   │   ├── RoomsPage.tsx        # Complete room catalog
│   │   ├── RoomDetailPage.tsx   # Dynamic suite detail (`/rooms/:slug`)
│   │   ├── RestaurantPage.tsx   # Dining menus, schedules
│   │   ├── VenuesPage.tsx       # Weddings & conference venues
│   │   ├── GalleryPage.tsx      # Filterable image gallery with lightbox
│   │   ├── ContactPage.tsx      # Concierge enquiry & coordinates
│   │   └── NotFoundPage.tsx     # 404 chamber not found page
│   ├── App.tsx                  # App layout & React Router configuration
│   ├── main.tsx                 # React DOM mount point
│   └── index.css                # Tailwind CSS v4 theme tokens & base styles
```

---

## 3. Installation & Local Development

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Steps:
```bash
# Navigate to the project directory
cd "D:\Projects\Rani mahal hotel"

# Install dependencies (already installed)
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` to view the website in your browser.

### Production Build:
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## 4. How to Configure & Brand the Hotel

All hotel content is completely centralized in `src/data/`:

1. **Hotel Information & Contact Details**:
   - Edit [`src/data/hotel.ts`](file:///D:/Projects/Rani%20mahal%20hotel/src/data/hotel.ts)
   - Update telephone number, email, address, WhatsApp number, and announcement message.
2. **Room Categories & Rates**:
   - Edit [`src/data/rooms.ts`](file:///D:/Projects/Rani%20mahal%20hotel/src/data/rooms.ts)
   - Add, edit, or adjust pricing, amenities, capacities, and photography.
3. **Dining & Menu**:
   - Edit [`src/data/dining.ts`](file:///D:/Projects/Rani%20mahal%20hotel/src/data/dining.ts)
   - Update meal schedules, cuisine descriptions, and tasting menus.
4. **Venues**:
   - Edit [`src/data/venues.ts`](file:///D:/Projects/Rani%20mahal%20hotel/src/data/venues.ts)
5. **Gallery**:
   - Edit [`src/data/gallery.ts`](file:///D:/Projects/Rani%20mahal%20hotel/src/data/gallery.ts)
   - Place custom hotel photographs in `public/` or supply WebP URLs.

---

## 5. Deployment Guidelines

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel` or connect via GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. For single-page app routing on Vercel, ensure a `vercel.json` rewrites all requests to `/index.html`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying to Netlify
1. Connect repository or run `npx netlify-cli deploy --prod`.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `public/_redirects` file with `/* /index.html 200` to support client-side routing.

---

## 6. Next Steps & Future Backend Integration Points

- **Enquiry Dispatch / Email Delivery**: The frontend currently validates and simulates direct enquiry submissions with instant client confirmation and WhatsApp fallback. Wire up Formspree, Resend, EmailJS, or an Express API endpoint in [`src/components/sections/ContactSection.tsx`](file:///D:/Projects/Rani%20mahal%20hotel/src/components/sections/ContactSection.tsx).
- **Payment / Booking Engine**: For real-time room availability, connect an PMS/channel manager API (e.g., Staah, Cloudbeds, or custom Node.js + MongoDB backend).
- **Custom Brand Photography**: Replace Unsplash royalty-free placeholder images with the hotel's high-resolution photography.
