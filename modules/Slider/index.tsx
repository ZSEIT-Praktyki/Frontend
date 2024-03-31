import { API } from "@utils/assets/constants/routes";
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
    <article className="mt-5 w-full">
      <img
        className="w-full object-contain pointer-events-none" // disable image dragging and zooming
        style={{ maxHeight: "50rem" }}
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt="preview"
      />
      {images.length > 0 && (
        <div className="flex w-fulloverflow-auto gap-5 mt-5 mx-5">
          {images.map(({ filename, photo_id }) => (
            <button
              onClick={() => setThumbnail((p) => ({ ...p, filename }))}
              key={photo_id}
            >
              <img
                alt="preview variant photos"
                className="mr-2 rounded last:mr-0 max-h-36 w-64 pointer-events-none object-cover transition border-2 border-zinc-600 hover:border-purple-600"
                src={`${API}/listings/images/${filename}`}
              />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
