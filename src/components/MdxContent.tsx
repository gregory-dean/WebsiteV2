import { MDXRemote } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-site prose-lg max-w-none font-serif">
      <MDXRemote source={source} />
    </div>
  );
}
