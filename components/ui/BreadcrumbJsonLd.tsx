/**
 * BreadcrumbJsonLd
 *
 * Renders a hidden <script type="application/ld+json"> with BreadcrumbList
 * schema to match the visual breadcrumb nav present on every guide/review page.
 *
 * Usage:
 *   <BreadcrumbJsonLd items={[
 *     { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
 *     { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
 *     { name: 'Best Touring Paddle Boards' },   // ← current page: no `item`
 *   ]} />
 *
 * The last item should omit `item` (the current page URL is implied).
 */

interface BreadcrumbItem {
  /** Display name shown in the breadcrumb trail */
  name: string;
  /**
   * Absolute URL for this crumb.
   * Omit for the final (current-page) item — Google treats it as the page URL.
   */
  item?: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
