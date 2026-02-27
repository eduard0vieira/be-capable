import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "white";
}

export default function Logo({ className = "", width = 140, height = 68, variant = "default" }: LogoProps) {
  const src = variant === "white" ? "/be_capable_white.svg" : "/be_capable.svg";
  return (
    <Image
      src={src}
      alt="Be.Capable"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
