import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";

type LogoProps = {
  href?: string;
  className?: string;
  /** Visual height in pixels for the logo image */
  height?: number;
  priority?: boolean;
  onClick?: () => void;
};

export function Logo({
  href = "/",
  className = "",
  height = 56,
  priority = false,
  onClick,
}: LogoProps) {
  const width = Math.round(height * (1536 / 1024));

  const image = (
    <Image
      src={business.logoPath}
      alt={business.name}
      width={width}
      height={height}
      priority={priority}
      className="h-auto w-auto object-contain"
      style={{ height, width: "auto" }}
    />
  );

  if (!href) {
    return <span className={className}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center ${className}`}
      onClick={onClick}
      aria-label={`${business.name} home`}
    >
      {image}
    </Link>
  );
}
