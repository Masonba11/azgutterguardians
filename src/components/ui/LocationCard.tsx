import Link from "next/link";
import { Button } from "./Button";

type LocationCardProps = {
  name: string;
  href: string;
  description: string;
};

export function LocationCard({ name, href, description }: LocationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-white p-6">
      <h3 className="text-2xl text-charcoal">
        <Link href={href} className="hover:text-primary-dark">
          {name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-medium">{description}</p>
      <div className="mt-6">
        <Button href={href} size="sm">
          View {name} service area
        </Button>
      </div>
    </article>
  );
}
