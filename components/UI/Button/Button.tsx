import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

const buttonVariants = {
  primary:
    "border-purple-900 bg-purple-900 hover:bg-purple-800 active:bg-purple-700",
  secondary:
    "border-indigo-900 bg-indigo-900 hover:bg-indigo-800 active:bg-indigo-600",
  outlined: "border-teal-500 text-black hover:bg-teal-500 hover:text-white",
  outlinedPrimary:
    "border-purple-600 text-purple-400 font-medium hover:bg-purple-500 hover:text-white",
  warning: "bg-amber-700 hover:bg-amber-600 active:bg-amber-500",
  error: "bg-red-700 hover:bg-red-800",
  ok: "bg-green-600 hover:bg-green-700 border-green-600",
  text: "text-gray-900 hover:bg-gray-200",
  fire: "p-3 px-4 transition text-white bg-gradient-to-r from-pink-600 to-red-600 rounded !border-0",
};

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | ReactNode;
  variants?: keyof typeof buttonVariants;
  classes?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variants = "primary",
  classes,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`border-2 py-2 px-4 text-white rounded-md m-2 transition flex items-center justify-center ${
        classes ?? ""
      } ${buttonVariants[variants]} ${
        disabled ? "opacity-25 disabled:bg-gray-500" : ""
      }
     
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
