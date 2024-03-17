import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classes?: string;
  error?: boolean;
  label?: string;
  name?: string;
  errorText?: string;
  containerStyle?: string;
}

export default function Input({
  classes,
  error,
  label,
  name,
  errorText,
  containerStyle,
  ...rest
}: InputProps) {
  return (
    <div className={"flex flex-col w-full " + containerStyle ?? ""}>
      {label !== undefined && (
        <label
          htmlFor={name ?? ""}
          className={`pl-2 mb-2 text-gray-300 font-medium ${
            error && "text-rose-600"
          }`}
        >
          {label}
        </label>
      )}
      <input
        className={`border-2 text-white ${
          !!label && "!mt-0"
        } bg-zinc-950 border-zinc-800 w-auto m-2 p-2 rounded outline-0 transition hover:border-purple-600 focus:border-purple-800 focus:text-purple-800 ${
          !!error && "!border-rose-600"
        } ${classes}`}
        {...rest}
      />
      {errorText && error && <p className="pl-2 text-rose-600">{errorText}</p>}
    </div>
  );
}
