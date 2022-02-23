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
    <article className="mt-5">
      <img
        className="w-full rounded-lg bg-gray-800 max-h-96 object-contain"
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt=""
      />

      <section className="flex justify-between bg-gray-800 p-10 mt-5 mb-5 w-full rounded-lg">
        <button
          onClick={onPrev}
          className="bg-purple-900 p-2 rounded-full z-10"
        >
          <BsFillArrowLeftCircleFill color="white" />
        </button>
        <div className="flex overflow-scroll sm:overflow-hidden">
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
        <button
          onClick={onNext}
          className="bg-purple-900 p-2 rounded-full z-10 hidden sm:block"
        >
          <BsFillArrowRightCircleFill color="white" />
        </button>
      </section>
    </article>
  );
}
