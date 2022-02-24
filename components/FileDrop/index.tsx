import { ChangeEvent, useState } from "react";

interface FileDropProps {
  files: File[];
  setState: (files: File[]) => void;
}

export default function FileDrop({ files, setState }: FileDropProps) {
  const [images, setImages] = useState<any[]>([]);

  function onFilesAppend(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setImages((p) => [...p, URL.createObjectURL(event.target.files![0])]);
      setState([...files, event.target.files![0]]);
    }
  }

  return (
    <main className="w-full h-full flex flex-col">
      <section className="w-full p-4">
        <input
          type="file"
          onChange={onFilesAppend}
          className="text-white font-medium bg-gray-800 p-2 rounded w-full"
        />
      </section>
      <section className="w-full flex overflow-hidden h-52">
        {images.map((value, index) => (
          <img
            key={`${value}.${index}`}
            src={value}
            alt="preview"
            className={`h-52 rounded-md select-none ml-2`}
          />
        ))}
      </section>
      <p className="text-white p-2 font-medium text-left">
        Images: {images.length}/9
      </p>
    </main>
  );
}
