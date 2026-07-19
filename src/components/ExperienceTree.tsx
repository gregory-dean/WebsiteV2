import type { ExperienceNode } from "@/data/experience";

type ExperienceTreeProps = {
  items: ExperienceNode[];
};

function ChildRow({ node }: { node: ExperienceNode }) {
  return (
    <li className="relative pb-5 last:pb-0">
      <span
        className="absolute -left-[21px] top-2 z-10 h-1.5 w-1.5 rounded-full bg-ink"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h4 className="font-display text-lg font-semibold leading-[1.15] tracking-tight text-ink pb-0.5">
            {node.title}
          </h4>
          {node.org ? (
            <p className="mt-0.5 font-sans text-sm text-muted">{node.org}</p>
          ) : null}
        </div>
        <p className="shrink-0 font-sans text-sm text-muted">{node.period}</p>
      </div>
      {node.summary ? (
        <p className="mt-2 max-w-2xl font-sans text-base leading-relaxed text-muted">
          {node.summary}
        </p>
      ) : null}
    </li>
  );
}

function RootNode({ node }: { node: ExperienceNode }) {
  const hasChildren = Boolean(node.children?.length);

  return (
    <li className="mb-12 last:mb-0">
      <div className="relative flex gap-4">
        <div className="relative flex w-3 shrink-0 justify-center">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-ink"
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold leading-[1.15] tracking-tight text-ink pb-0.5 md:text-2xl">
                {node.title}
              </h3>
              {node.org ? (
                <p className="mt-0.5 font-sans text-sm text-muted">{node.org}</p>
              ) : null}
            </div>
            <p className="shrink-0 font-sans text-sm text-muted">{node.period}</p>
          </div>
          {node.summary ? (
            <p className="mt-2 max-w-2xl font-sans text-base leading-relaxed text-muted">
              {node.summary}
            </p>
          ) : null}
        </div>
      </div>

      {hasChildren ? (
        <ul className="ml-[5px] mt-6 border-l border-rule pl-8">
          {node.children!.map((child) => (
            <ChildRow key={child.id} node={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function ExperienceTree({ items }: ExperienceTreeProps) {
  return (
    <ul>
      {items.map((node) => (
        <RootNode key={node.id} node={node} />
      ))}
    </ul>
  );
}
