import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import Label from "../Label";

interface SelectProps
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "className"
  > {
  classes?: string;
  error?: boolean;
  label?: string;
  options: {
    value: string;
    text: string;
  }[];
}

export default function Select({
  error = false,
  label,
  options = [],
  ...rest
}: SelectProps) {
  return (
    <div className="flex flex-col w-full">
      {label !== undefined && (
        <Label text={label} error={error} htmlFor={label} />
      )}
      <select
        className={`bg-gray-900 border-2 border-zinc-600 p-2 m-2 text-white rounded mt-0 ${
          error && "border-rose-600"
        }`}
        {...rest}
      >
        {options.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
