# Website clarity pass

September 9, 2026. Reviewed the homepage, Meet George, Plan a visit, and all six plant categories.

## What was getting in the way

- Catalog introductions, category buttons, an availability banner, and search instructions pushed the plants too far down the page. This was a hierarchy problem. Availability is now one sentence, and other categories use a native disclosure.
- The homepage and About repeated George’s introduction and channel story. The homepage now offers a short introduction; Meet George carries the fuller story and videos.
- Plant descriptions repeated promotional language and broad growing claims. All 84 entries now emphasize useful differences such as flavor, size, growing habit, or use. Names, route slugs, plant IDs, fruiting data, and individual WhatsApp inquiries remain.
- Category names differed between navigation, headings, and search. Display names now come from the catalog data, and the header uses “Meet George.”
- The shared visit section and footer repeated several slogans. These are shorter, with the appointment requirement and direct contact options still visible.

## Copy reduction

Plant descriptions fell from 1,715 to 952 words, a 44% reduction.

Rendered main-page text, with disclosures closed:

| Page | Before | After |
| --- | ---: | ---: |
| Home | 280 | 158 |
| Meet George | 304 | 137 |
| Plan a visit | 85 | 70 |
| Mangoes | 610 | 328 |
| Avocados | 414 | 233 |
| Fruit trees | 653 | 385 |
| Berries, nuts & spices | 495 | 294 |
| Citrus trees | 232 | 120 |
| Indian plants & flowers | 324 | 166 |

## Verification

Browser review covered phone, tablet, and desktop widths, including 320px and 1440px. Checked headings, horizontal overflow, image loading, navigation, category disclosure, case-insensitive search, empty results, filter reset on category changes, FAQ expansion, and plant-specific WhatsApp destinations. Clearing an empty search returns focus to the search field. Build, TypeScript, lint, and whitespace checks pass.

George’s original images are preserved, with CSS framing only. No ordering, inventory, or contact feature was removed. Changes remain local for review.
