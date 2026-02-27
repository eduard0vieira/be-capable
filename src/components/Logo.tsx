import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 140, height = 68 }: LogoProps) {
  return (
    <Image
      src="/be_capable.svg"
      alt="Be.Capable"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
