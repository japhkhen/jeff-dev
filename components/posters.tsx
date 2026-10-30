const weave =
  "repeating-linear-gradient(90deg,#0e6b3f 0 10px,#e2b15a 10px 16px,#a34b32 16px 24px,#161412 24px 30px,#f6f1e6 30px 36px)";

function ClayPoster() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#f6f1e6] p-[7cqw] text-[#1c1612]">
      <div className="flex items-center justify-between text-[2.6cqw] font-semibold uppercase tracking-[0.22em] text-[#a34b32]">
        <span>Identity</span>
        <span>Osu</span>
      </div>
      <div>
        <p className="font-display text-[15cqw] leading-[0.82] tracking-tight text-[#a34b32]">
          Clay
          <br />& Loom
        </p>
        <div className="mt-[5cqw] h-[3.2cqw] w-full" style={{ backgroundImage: weave }} />
        <p className="mt-[4cqw] text-[2.8cqw] font-medium uppercase tracking-[0.2em] text-[#5c574f]">
          Ceramics and woven cloth
        </p>
      </div>
    </div>
  );
}

function OsuPoster() {
  const dishes = [
    ["Grilled tilapia", "85"],
    ["Jollof & chicken", "55"],
    ["Kontomire stew", "45"],
  ];

  return (
    <div className="flex h-full flex-col bg-[#f7f1e4] text-[#161412]">
      <div className="flex flex-[1.35] flex-col justify-end bg-[#0e6b3f] px-[7cqw] pb-[5cqw] text-[#f3efe6]">
        <p className="text-[2.6cqw] font-semibold uppercase tracking-[0.26em] text-[#d7c39a]">
          Menu poster
        </p>
        <p className="font-display text-[22cqw] leading-[0.78] tracking-tight">Osu</p>
        <p className="-mt-[1cqw] font-display text-[9cqw] leading-none">Table</p>
      </div>
      <ul className="flex flex-1 flex-col justify-center gap-[2.4cqw] px-[7cqw]">
        {dishes.map(([dish, price]) => (
          <li key={dish} className="flex items-baseline justify-between gap-[3cqw] text-[3.1cqw]">
            <span>{dish}</span>
            <span className="font-medium text-[#0e6b3f]">GH₵ {price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlackStarPoster() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#10241c] p-[7cqw] text-[#f3efe6]">
      <div className="flex items-center justify-between text-[2.6cqw] font-semibold uppercase tracking-[0.24em] text-[#d7c39a]">
        <span>Accra</span>
        <span>10K</span>
      </div>
      <svg viewBox="0 0 24 24" className="h-[16cqw] w-[16cqw] fill-[#d7c39a]" aria-hidden="true">
        <polygon points="12,1.5 14.9,8.6 22.2,9.1 16.9,14 18.6,21.5 12,17.6 5.4,21.5 7.1,14 1.8,9.1 9.1,8.6" />
      </svg>
      <div>
        <p className="font-display text-[12.5cqw] leading-[0.82] tracking-tight">
          Black
          <br />
          Star
          <br />
          Run
        </p>
        <p className="mt-[4cqw] text-[2.7cqw] font-medium uppercase tracking-[0.18em] text-[#d7c39a]">
          Independence weekend
        </p>
      </div>
    </div>
  );
}

function AuntiePoster() {
  return (
    <div className="flex h-full bg-[#e2b15a] p-[4.5cqw]">
      <div className="flex w-full flex-col items-center justify-center border-[1.5cqw] border-[#8c2f2f] bg-[#fffaf3] px-[5cqw] text-center text-[#8c2f2f]">
        <p className="text-[2.8cqw] font-semibold uppercase tracking-[0.28em]">Kaneshie</p>
        <p className="mt-[3cqw] font-display text-[6.4cqw] leading-none">Auntie Ama</p>
        <p className="mt-[2cqw] font-display text-[14cqw] leading-[0.8] tracking-tight">Waakye</p>
        <div className="mt-[4cqw] h-[1.3cqw] w-[26cqw] bg-[#e2b15a]" />
        <p className="mt-[3.5cqw] text-[2.8cqw] font-semibold uppercase tracking-[0.16em]">
          Shito · Egg · Gari
        </p>
      </div>
    </div>
  );
}

function SikaPoster() {
  return (
    <div className="flex h-full flex-col justify-between bg-[#f4efe6] p-[7cqw] text-[#12352a]">
      <p className="text-[2.6cqw] font-semibold uppercase tracking-[0.22em] text-[#0e6b3f]">
        Mark
      </p>
      <div className="relative size-[28cqw]" aria-hidden="true">
        <div className="absolute inset-0 rounded-full border-[1.1cqw] border-[#0e6b3f]" />
        <div className="absolute inset-[18%] rounded-full bg-[#0e6b3f]" />
        <div className="absolute inset-[40%] rounded-full bg-[#e2b15a]" />
      </div>
      <div>
        <p className="font-display text-[13cqw] leading-[0.82] tracking-tight">
          Sika
          <br />
          Circle
        </p>
        <p className="mt-[3.5cqw] text-[2.8cqw] font-medium uppercase tracking-[0.18em] text-[#5c574f]">
          Savings · Kumasi
        </p>
      </div>
    </div>
  );
}

function GreenMilePoster() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#0e6b3f] p-[7cqw] text-[#f3efe6]">
      <div className="absolute -right-[4cqw] top-[16cqw] size-[36cqw] rounded-full bg-[#083d24]" aria-hidden="true" />
      <div className="absolute right-[8cqw] top-[24cqw] size-[16cqw] rounded-[46%] bg-[#e7f2ea]" aria-hidden="true" />
      <p className="relative text-[2.6cqw] font-semibold uppercase tracking-[0.24em] text-[#d7c39a]">
        Eastern Region
      </p>
      <p className="relative font-display text-[14cqw] leading-[0.8] tracking-tight">
        Green
        <br />
        Mile
      </p>
      <p className="relative text-[3.4cqw] font-semibold uppercase tracking-[0.28em]">Farms</p>
    </div>
  );
}

const posters: Record<string, () => React.ReactElement> = {
  "sika-circle": SikaPoster,
  "clay-and-loom": ClayPoster,
  "osu-table": OsuPoster,
  "green-mile": GreenMilePoster,
  "black-star-run": BlackStarPoster,
  "auntie-ama": AuntiePoster,
};

export function Poster({ slug }: { slug: string }) {
  const Art = posters[slug] ?? ClayPoster;
  return (
    <div className="@container absolute inset-0" aria-hidden="true">
      <Art />
    </div>
  );
}

export function PosterFrame({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-[1.35rem] shadow-[0_22px_50px_-24px_rgba(22,20,18,0.55)] ring-1 ring-ink/10 ${className}`}
    >
      <Poster slug={slug} />
    </div>
  );
}

export function StudioMark() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 flex aspect-[16/9] flex-col justify-between rounded-[1.75rem] bg-ink p-6 text-paper sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7c39a]">
          Primary mark
        </p>
        <p className="font-display text-7xl leading-none tracking-tight sm:text-8xl">JD</p>
      </div>
      <div className="flex aspect-square flex-col justify-between rounded-[1.5rem] bg-pine p-5 text-paper">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7c39a]">On pine</p>
        <p className="font-display text-5xl leading-none">JD</p>
      </div>
      <div className="flex aspect-square flex-col justify-between rounded-[1.5rem] bg-clay p-5 text-paper">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/80">On clay</p>
        <p className="font-display text-5xl leading-none">JD</p>
      </div>
      <div className="col-span-2 flex items-end justify-between rounded-[1.5rem] bg-card p-5 ring-1 ring-line">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Wordmark</p>
          <p className="mt-2 font-display text-4xl leading-none tracking-tight">Jeff Dev</p>
        </div>
        <p className="max-w-36 text-right text-xs leading-relaxed text-muted">
          Graphic design studio, East Legon
        </p>
      </div>
    </div>
  );
}
