import { cn } from "@/lib/utils";
import { Icon as Iconify } from "@iconify-icon/react";
import { type ComponentProps } from "react";

type IconProps = ComponentProps<typeof Iconify>;

export default function Icon({ className, size, ...props }: IconProps) {
  return (
    <Iconify
      width={size ?? props.width ?? 24}
      height={size ?? props.height ?? 24}
      //@ts-expect-error only class is needed due to it being a web component.
      class={cn("block", className)}
      {...props}
    />
  );
}
