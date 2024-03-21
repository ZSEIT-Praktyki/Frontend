import { API } from "@utils/assets/constants/routes";
import { useState } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

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

  function onPrev() {
    setThumbnail((p) => ({ ...p, index: p.index + 1 }));
  }

  function onNext() {
    setThumbnail((p) => ({ ...p, index: p.index - 1 }));
  }

  return (
    <article className="mt-5">
      <img
        className="w-full rounded-lg  object-contain pointer-events-none" // disable image dragging and zooming
        style={{ maxHeight: "50rem" }}
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt="preview"
      />
      {images.length > 0 && (
        <div className="flex w-full overflow-hidden sm:overflow-hidden gap-5 mt-5 mx-5">
          {images.map(({ filename, photo_id }) => (
            <button
              onClick={() => setThumbnail((p) => ({ ...p, filename }))}
              key={photo_id}
            >
              <img
                style={{
                  transform: `translateX(${(256 + 8) * thumbnail.index}px)`,
                }}
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
