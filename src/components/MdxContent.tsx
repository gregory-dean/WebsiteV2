import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectImage } from "@/components/ProjectImage";

type MdxContentProps = {
  source: string;
};

function MdxImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  if (!src) return null;
  return <ProjectImage src={src} alt={alt ?? ""} variant="body" />;
}

const components = {
  img: MdxImage,
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-site prose-lg max-w-none font-serif">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
