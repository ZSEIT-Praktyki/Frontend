import { API } from "@utils/assets/constants/routes";
import { useRef, useState } from "react";

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
    <article className="p-2 mt-5 relative">
      <img
        className="w-full rounded max-h-96"
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt=""
      />

      <button
        onClick={onPrev}
        className="absolute bottom-10 -left-2 bg-purple-900 p-2 rounded-full z-10 hidden sm:block"
      >
        <BsFillArrowLeftCircleFill color="white" />
      </button>
      <button
        onClick={onNext}
        className="absolute bottom-10 -right-2 bg-purple-900 p-2 rounded-full z-10 hidden sm:block"
      >
        <BsFillArrowRightCircleFill color="white" />
      </button>

      {images.length !== 0 && (
        <div className="pt-2 flex overflow-scroll cursor-pointer sm:overflow-hidden h-24 mb-2">
          {images.map(({ filename, photo_id }) => (
            <img
              style={{
                transform: `translateX(${100 * thumbnail.index}px)`,
              }}
              onClick={() => setThumbnail((p) => ({ ...p, filename }))}
              key={photo_id}
              className="pr-2 rounded last:pr-0"
              src={`${API}/listings/images/${filename}`}
            />
          ))}
        </div>
      )}
    </article>
  );
}

