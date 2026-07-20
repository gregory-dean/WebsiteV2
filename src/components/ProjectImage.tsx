import Image from "next/image";

type ProjectImageVariant = "thumb" | "cover" | "body";

type ProjectImageProps = {
  src: string;
  alt: string;
  variant: ProjectImageVariant;
  priority?: boolean;
};

const variantClass: Record<ProjectImageVariant, string> = {
  thumb: "relative size-20 shrink-0 overflow-hidden sm:size-24",
  cover: "relative aspect-[3/2] w-full overflow-hidden",
  body: "relative aspect-[3/2] w-full overflow-hidden",
};

export function ProjectImage({
  src,
  alt,
  variant,
  priority = false,
}: ProjectImageProps) {
  return (
    <div className={variantClass[variant]}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes={
          variant === "thumb"
            ? "96px"
            : "(max-width: 768px) 100vw, 768px"
        }
      />
    </div>
  );
}
