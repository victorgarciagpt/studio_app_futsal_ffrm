import type { SVGProps } from "react";

export function FfrmLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      {...props}
    >
      <rect width="100" height="100" fill="hsl(var(--primary))" rx="12" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="hsl(var(--primary-foreground))"
        fontSize="24"
        fontWeight="bold"
        className="font-headline"
      >
        FFRM
      </text>
    </svg>
  );
}
