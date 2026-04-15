import { MapPin, Sunrise } from 'lucide-react';
import SectionLayout from '@/components/ui/SectionLayout';

const COMING_SOON_REGIONS = [
  {
    id: 'florida',
    name: 'Florida',
    tagline: 'Gulf & Atlantic Launches',
    detail: 'Jupiter Inlet · Cocoa Beach · Naples Bay · Tampa Bay Flatwater',
    launchLabel: 'Launching Q2 2026',
    color: 'rgba(0,201,177,0.12)',
    accent: 'var(--color-glacier-teal)',
  },
  {
    id: 'carolina',
    name: 'The Carolinas',
    tagline: 'Coastal & Lake Destinations',
    detail: 'Outer Banks · Lake Norman · Charleston Waterway · Lake Wylie',
    launchLabel: 'Launching Q2 2026',
    color: 'rgba(56,189,248,0.12)',
    accent: 'var(--color-sky-glow)',
  },
  {
    id: 'pacific-northwest',
    name: 'Pacific Northwest',
    tagline: 'Puget Sound & River Systems',
    detail: 'Puget Sound · Columbia River Gorge · Crater Lake Area · Hood Canal',
    launchLabel: 'Coming Q3 2026',
    color: 'rgba(255,255,255,0.04)',
    accent: 'var(--color-text-muted)',
  },
];

export default function Locations() {
  return (
    <SectionLayout
      id="locations"
      divider
      eyebrow={<><MapPin className="w-3 h-3 inline mr-1" />Launch Directory — Coming Soon</>}
      heading={<>Find Your <span className="gradient-text">Perfect Launch</span></>}
      subtitle="Our curated directory of the best iSUP launch spots, flatwater paddling routes, and beginner-friendly beaches — launching Q2 2026."
      ambient={
        <div
          className="orb w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'rgba(56, 189, 248, 0.04)' }}
          aria-hidden="true"
        />
      }
    >

        {/* Region cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {COMING_SOON_REGIONS.map((region) => (
            <div
              key={region.id}
              className="glass-card p-8 flex flex-col gap-6 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                style={{ background: region.color }}
              >
                <Sunrise className="w-6 h-6" style={{ color: region.accent }} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {region.name}
                </h3>
                <p className="text-sm font-semibold" style={{ color: region.accent }}>
                  {region.tagline}
                </p>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">
                {region.detail}
              </p>

              <span className="inline-block mt-auto mx-auto text-xs font-semibold px-4 py-2 rounded-full border border-white/10 text-text-muted">
                {region.launchLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Get Notified card */}
        <div className="mt-20 flex justify-center">
          <div className="glass-card p-10 md:p-12 max-w-2xl w-full text-center">
            <MapPin
              className="w-8 h-8 mx-auto mb-4"
              style={{ color: 'var(--color-glacier-teal)' }}
            />
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Get Notified at Launch
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Be first to access the Florida &amp; Carolina directories when they go
              live. We&apos;ll also send our paddle-board buying checklist as a thank-you.
            </p>
            <a
              href="mailto:hello@paddleboardshop.com?subject=Locations%20Launch%20Notification"
              id="locations-notify-cta"
              className="btn-teal"
            >
              Notify Me at Launch
            </a>
          </div>
        </div>

    </SectionLayout>
  );
}
