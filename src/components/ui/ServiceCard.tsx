import Link from "next/link";
import { Button } from "./Button";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export function ServiceCard({
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 sm:p-7 ${
        featured
          ? "border-primary/40 bg-white shadow-sm"
          : "border-border bg-white"
      }`}
    >
      {featured ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Primary service
        </p>
      ) : null}
      <h3 className="text-xl text-charcoal">
        <Link href={href} className="hover:text-primary-dark">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-medium leading-relaxed">{description}</p>
      <div className="mt-6">
        <Button href={href} variant="outline" size="sm">
          Learn more
        </Button>
      </div>
    </article>
  );
}
