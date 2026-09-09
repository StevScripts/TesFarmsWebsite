---
name: Tes Farms LLC
register: brand
---

# Tes Farms website design

## Direction

The September 2026 redesign uses the visual language of a neighborhood fruit stand: generous, sturdy lettering, papaya-colored signage, close views of familiar plants, and direct conversation with the grower. The user explicitly requested a departure from the previous beige, green, small-type site.

Physical scene: an older gardener opens a neighbor's recommendation on a phone in a sunny Florida backyard, looking for familiar plant names and a number to call. Light backgrounds, large text, strong contrast, and visible contact links suit that setting.

Voice words: sunlit, neighborly, sturdy. The reference is produce-crate lettering and a family nursery's painted sign, rather than a luxury magazine or a corporate garden center. Use a full palette with named roles. Papaya carries the homepage and contact introductions; deep plum anchors text and the visit section; leaf green belongs to the jasmine feature; citrus lime appears sparingly in photo-link hover states. Avoid repeated cards, decorative icons, glass effects, gradients, and stock portraits.

## Typography

- Bricolage Grotesque: wordmark and headings. Selected from Google Fonts for the compact, unevenly rounded letterforms that feel like friendly sign lettering. The reflex choices Fraunces, Playfair Display, and DM Sans were rejected.
- Source Sans 3: body copy, navigation, controls. Retained for its readable open forms.
- Fonts are served locally by Next's font system, with sans-serif fallbacks and swap behavior.
- Display: fluid 66–114px on desktop; 61–106px on phones, with purposeful line breaks.
- Section headings: 36–62px. Plant names: 24–29px. Body: 18–21px. Interior page titles use 38–48px on phones.
- Labels and navigation may be 14–17px; touch targets remain at least 44px.
- No italic display copy, mono labels, tiny tracked kickers, or em dashes in new copy.

## Color tokens

All authored interface colors use OKLCH in `src/app/globals.css`.

| Token        | Value                 | Role                                           |
| ------------ | --------------------- | ---------------------------------------------- |
| paper        | oklch(0.977 0.01 80)  | Main surface and light text                    |
| ink          | oklch(0.275 0.044 17) | Text, primary buttons, visit panel             |
| muted        | oklch(0.47 0.028 28)  | Supporting text                                |
| papaya       | oklch(0.795 0.12 53)  | Hero, contact introduction, dark-panel actions |
| papaya-light | oklch(0.922 0.054 62) | Story surface, notices, hover feedback         |
| leaf         | oklch(0.32 0.055 150) | Jasmine feature and season labels              |
| lime         | oklch(0.87 0.115 116) | Photo-link hover feedback               |
| line         | oklch(0.81 0.02 62)   | Dividers                                       |

The browser theme-color metadata uses a hex approximation because it is browser chrome, not a CSS surface.

## Composition

The home page opens with a two-column composition: a papaya headline panel and an edge-to-edge photograph of George in his garden. A quiet service-area strip follows. The plant directory uses six generous linked rows beside a jasmine photograph; it is not a card grid. A short personal introduction with George’s guava photo and an appointment invitation finish the page. The fuller story and YouTube community belong on Meet George.

Preserve the existing routes: home, about, contact, and all six plant categories. The header uses direct links instead of a hover-only dropdown. Mobile navigation is an inline disclosure with expanded state, Escape dismissal, and focus returned to the toggle. The phone number stays visible.

Category pages lead quickly into a searchable list. Each plant gets a short description focused on flavor, size, use, or growing habit, plus the existing fruiting-season data and a plant-specific WhatsApp inquiry link. Availability, sizes, and prices are explained once above the list. Other categories sit in a native disclosure labeled “Browse other plants”; All plants still returns to the homepage directory. Filtering is case-insensitive and includes an announced result count and a clear empty state. Switching categories resets the filter and disclosure.

Copy should be short enough to scan without reducing the type size. Use one useful sentence for most plant descriptions, a brief introduction on the homepage, and two short paragraphs for George’s story. Avoid repeated slogans, decorative badges, counts beside every homepage category, and introductions that restate a heading. The shared visit section uses “Visit the nursery,” the appointment requirement, and direct contact links.

Contact uses direct phone and WhatsApp links. FAQs use native details/summary disclosures. No contact form, cart, online checkout, fabricated reviews, new availability claims, or fabricated address.

## Imagery

The hero and owner introduction use George’s real Instagram post images. His profile portrait appears on Home and Contact, and About includes two linked YouTube video previews. Preserve the original files and use CSS for framing, without altering his face. Sources and verified personal details are recorded in `docs/george-sources.md` and `public/images/CREDITS.md`. The remaining stock jasmine photograph is representative botanical imagery, not a claim about nursery stock. Never invent quotes or life history to make the page feel personal. Keep subscriber counts out of hero-metric blocks; the verified 49K count appears once, on About, linked to his channel.

Next Image provides responsive sizing, reserved layout space, and lazy loading below the fold. Preload only the leading image. Alt text describes what is visible without naming an unverified cultivar.

## Behavior and accessibility

- All pages are server-rendered except the mobile header and catalog filtering controls.
- Content is immediately visible; no scroll-reveal dependency or entrance animation.
- Hover effects use color and small transforms with an exponential ease-out curve.
- Respect prefers-reduced-motion, including anchor scrolling.
- Visible focus outlines, semantic landmarks, one H1 per page, real links, and a skip-to-content link.
- Main breakpoint: 760px. At smaller sizes, multi-column sections stack, navigation becomes a disclosure, and catalog rows remain readable.
- The sticky header carries contact access without a floating bubble obscuring page content.
