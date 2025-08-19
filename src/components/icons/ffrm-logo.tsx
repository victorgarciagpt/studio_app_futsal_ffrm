import type { SVGProps } from "react";
import Image from "next/image";

export function FfrmLogo(props: SVGProps<SVGSVGElement>) {
  // The className is passed down to control size, etc.
  // The 'alt' prop is important for accessibility.
  return (
    <Image
      src="https://i.imgur.com/ir9706D.png"
      alt="FFRM Logo"
      width={100}
      height={100}
      className={props.className}
      // Allow passing other props like style, etc.
      {...props}
    />
  );
}
