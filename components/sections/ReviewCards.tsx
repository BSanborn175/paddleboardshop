import { boards } from '@/lib/boards';
import ReviewCard from '@/components/ui/ReviewCard';
import SectionLayout from '@/components/ui/SectionLayout';

export default function ReviewCards() {
  return (
    <SectionLayout
      id="reviews"
      eyebrow="In-Depth Analysis"
      heading={<>Full <span className="gradient-text">iSUP Reviews</span></>}
      subtitle="Every board scored on Rigidity, Portability, and Weight Capacity — the metrics that actually matter when you're spending four figures on your setup."
      divider
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {boards.map((board, i) => (
          <ReviewCard
            key={board.id}
            board={board}
            featured={i === 0}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
