import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "fourthiary";
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Button({
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant, size })} />;
}

const buttonVariants = cva("text-center rounded-full", {
  variants: {
    variant: {
      primary:
        "bg-green-600 hover:bg-green-700 active:bg-primary-active text-white",
      secondary:
        "bg-green-200 text-green-700 border border-green-600 hover:bg-green-300",
      tertiary:
        "bg-orange-100 hover:bg-orange-200 border border-amber-900 text-amber-700",
      fourthiary:
        "bg-amber-600 hover:bg-amber-700 border border-amber-900 text-white",
    },
    size: {
      sm: "text-[10px] w-[68px] h-[28px]",
      md: "text-[12px] w-[80px] h-[34px]",
      lg: "text-[14px] w-[120px] h-[42px]",
      xl: "text-[18px] w-[148px] h-[52px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
