import { API } from "@utils/assets/constants/routes";
import clsx from "clsx";
import { useState } from "react";

interface SliderProps {
  images: ListingImagesProps[];
}

const notFound =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg";

export default function Slider({ images }: SliderProps) {
  const [thumbnail, setThumbnail] = useState({
    filename: images[0]?.filename,
    index: 0,
  });

  return (
    <article className="w-full flex flex-col md:flex-row p-5 gap-5">
      <img
        className="w-full object-cover pointer-events-none rounded-md" // disable image dragging and zooming
        style={{ maxHeight: "75vh" }}
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt="Main listing photo"
      />
      {images.length > 0 && (
        <div className="flex flex-row md:flex-col ">
          {images.map(({ filename, photo_id }) => (
            <button
              onClick={() => setThumbnail((p) => ({ ...p, filename }))}
              key={photo_id}
              className="mb-5"
            >
              <img
                alt="preview variant photos"
                className={clsx(
                  "mr-2 rounded last:mr-0 max-h-24 w-32 pointer-events-none object-cover transition border-2 border-transparent",
                  {
                    "border-purple-800": thumbnail.filename === filename,
                  }
                )}
                src={`${API}/listings/images/${filename}`}
              />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
