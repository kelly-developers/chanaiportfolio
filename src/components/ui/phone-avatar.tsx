// src/components/ui/phone-avatar.tsx

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const phoneAvatarVariants = cva(
  "relative flex shrink-0 overflow-hidden shadow-lg",
  {
    variants: {
      model: {
        iphone: "border-8 border-gray-800 rounded-[2.5rem]",
        android: "border-4 border-gray-900 rounded-xl",
        pixel: "border-4 border-gray-700 rounded-[0.5rem]",
        basic: "border-2 border-border rounded-lg",
      },
      size: {
        sm: "h-32 w-20",
        md: "h-48 w-32",
        lg: "h-64 w-40",
        xl: "h-[500px] w-[280px]", // ✅ NEW XL size
      },
      notch: {
        true: "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-gray-800",
      },
    },
    compoundVariants: [
      {
        model: "iphone",
        notch: true,
        className: "before:w-16 before:h-5 before:rounded-b-md",
      },
      {
        model: "android",
        notch: true,
        className: "before:w-12 before:h-2 before:rounded-b-sm",
      },
      {
        model: "pixel",
        notch: true,
        className: "before:w-8 before:h-1 before:rounded-b-xs",
      },
    ],
    defaultVariants: {
      model: "iphone",
      size: "md",
      notch: true,
    },
  }
);

interface PhoneAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof phoneAvatarVariants> {
  screenReflection?: boolean;
  virtualButtons?: boolean;
}

const PhoneAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  PhoneAvatarProps
>(
  (
    {
      className,
      model,
      size,
      notch,
      screenReflection = false,
      virtualButtons = false,
      ...props
    },
    ref
  ) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        phoneAvatarVariants({ model, size, notch, className }),
        screenReflection &&
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:pointer-events-none",
        virtualButtons &&
          "[&_.virtual-button]:absolute [&_.virtual-button]:bottom-2 [&_.virtual-button]:h-1 [&_.virtual-button]:bg-gray-800 [&_.virtual-button]:rounded-full"
      )}
      {...props}
    >
      {props.children}
      {virtualButtons && (
        <>
          <span className="virtual-button w-16 left-1/2 -translate-x-1/2" />
          <span className="virtual-button w-8 right-4" />
        </>
      )}
    </AvatarPrimitive.Root>
  )
);
PhoneAvatar.displayName = "PhoneAvatar";

const PhoneAvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("object-cover w-full h-full", className)}
    {...props}
  />
));
PhoneAvatarImage.displayName = "PhoneAvatarImage";

const PhoneAvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
));
PhoneAvatarFallback.displayName = "PhoneAvatarFallback";

export {
  PhoneAvatar,
  PhoneAvatarImage,
  PhoneAvatarFallback,
  type PhoneAvatarProps,
};
