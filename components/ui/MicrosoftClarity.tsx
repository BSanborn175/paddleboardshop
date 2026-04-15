'use client';

import Script from 'next/script';

interface MicrosoftClarityProps {
  clarityId: string;
}

/**
 * MicrosoftClarity
 * ────────────────
 * Loads the Clarity heatmap + session recording script globally.
 *
 * Clarity auto-tracks:
 *   • Click heatmaps (which elements get clicked most)
 *   • Scroll depth maps (how far users scroll)
 *   • Session recordings (replay individual user sessions)
 *   • Rage clicks / dead clicks / quick backs
 *   • JavaScript errors in session context
 *
 * Only injected in production (controlled in layout.tsx via NODE_ENV guard).
 * Uses beforeInteractive-level priority via afterInteractive for best
 * data completeness without blocking page render.
 *
 * Get your Clarity ID from: clarity.microsoft.com → your project → Setup
 */
export default function MicrosoftClarity({ clarityId }: MicrosoftClarityProps) {
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
