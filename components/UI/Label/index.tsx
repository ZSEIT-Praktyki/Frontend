interface LabelProps {
  htmlFor?: string;
  text: string;
  error?: boolean;
}

export default function Label({
  error = false,
  text,
  htmlFor = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`pl-2 text-white font-medium ${error && "text-rose-600"}`}
    >
      {text}
    </label>
  );
}
