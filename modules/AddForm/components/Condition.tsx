import Label from "@components/UI/Label";

interface ConditionProps {
  onChange: (text: string) => void;
  value: string;
}

export default function Condition({ onChange, value }: ConditionProps) {
  return (
    <section className="mt-4 ">
      <Label text="Product's condition*" />

      <div className="p-2">
        {["New", "Used", "Well"].map((text, index) => (
          <button
            onClick={() => onChange(text)}
            key={`${text}.${index}`}
            className={`bg-zinc-950 rounded-md p-3 mb-2 hover:border-purple-900 text-white text-left border-2 ${
              value === text ? "border-purple-600" : "border-zinc-900"
            }`}
          >
            <h2 className="font-medium text-xl mb-2">{text}</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nobis eius error amet quasi odio iure, harum asperiores culpa in
              perspiciatis fuga repellendus
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
