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
    value: any;
    text: string;
  }[];
}

export default function Select({
  error = false,
  label,
  options = [],
  classes,
  ...rest
}: SelectProps) {
  return (
    <div className="flex flex-col w-full">
      {label !== undefined && (
        <Label text={label} error={error} htmlFor={label} />
      )}
      <select
        className={`bg-zinc-950 border-2 mt-2 border-zinc-600 p-2 m-2 text-white rounded ${
          error && "border-rose-600"
        } ${classes}`}
        {...rest}
      >
        {options.map(({ text, value }) => (
          <option key={value} value={value} className="p-2">
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
