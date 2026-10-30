import Image from "next/image";
import { getPhoto } from "@/lib/photos";

export function ProjectVisual({ slug }: { slug: string }) {
  const photo = getPhoto(slug);

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
      className="object-cover transition duration-500 group-hover:scale-[1.03]"
    />
  );
}

export function PhotoFrame({
  slug,
  className = "",
  priority = false,
}: {
  slug: string;
  className?: string;
  priority?: boolean;
}) {
  const photo = getPhoto(slug);

  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-[1.35rem] shadow-[0_22px_50px_-24px_rgba(22,20,18,0.55)] ring-1 ring-ink/10 ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 280px, 45vw"
        className="object-cover"
      />
    </div>
  );
}
