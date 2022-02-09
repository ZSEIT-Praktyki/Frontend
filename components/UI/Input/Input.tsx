import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classes?: string;
}

export default function Input({ classes, ...rest }: InputProps) {
  return (
    <input
      className={`border-2 border-zinc-600 w-auto m-2 p-2 rounded outline-0 transition hover:border-purple-600 focus:border-purple-800 focus:text-purple-800 ${classes}`}
      {...rest}
    />
  );
}
