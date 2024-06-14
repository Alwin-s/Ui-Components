import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

const inputVariants = cva("rounded text-center", {
  variants: {
    variant: {
      primary: "bg-gray-100 border border-gray-300 text-black",
      secondary: "bg-gray-200 border border-gray-400 text-black",
      tertiary: "bg-white border border-gray-500 text-gray-700",
      fourthiary: "bg-gray-50   text-start border-gray-600 text-gray-800",
    },
    size: {
      sm: "text-[10px] w-[100px] h-[28px] p-1",
      md: "text-[12px] w-[240px] h-[34px] p-2",
      lg: "text-[14px] w-[180px] h-[42px] p-3",
      xl: "text-[13px] w-[300px] h-[34px] p-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default function Input({
  variant = "primary",
  ...props
}: InputProps) {
  return (
    <div className="relative flex items-center">
      <i className="fa-solid fa-magnifying-glass absolute left-3 text-gray-500"></i>
      <input
        {...props}
        className={`${inputVariants({ variant })} pl-10 w-[50%]`}
      />
    </div>
  );
}
