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
        className="w-full rounded-lg bg-gray-800 object-contain"
        style={{ maxHeight: "36rem" }}
        src={
          images[0]?.filename
            ? `${API}/listings/images/${thumbnail.filename}`
            : notFound
        }
        alt="preview"
      />
      {images.length > 0 && (
        <section className="flex justify-between items-center bg-gray-800 pl-10 pr-10 pt-3 pb-3 mt-5 w-full rounded-lg">
          <button
            name="previous image"
            onClick={onPrev}
            className="bg-purple-900 p-2 mr-10 rounded-full z-10 h-8"
          >
            <BsFillArrowLeftCircleFill color="white" />
          </button>
          <div className="flex overflow-hidden sm:overflow-hidden items-center justify-center w-full">
            {images.map(({ filename, photo_id }) => (
              <img
                style={{
                  transform: `translateX(${100 * thumbnail.index}px)`,
                }}
                alt="preview variant photos"
                onClick={() => setThumbnail((p) => ({ ...p, filename }))}
                key={photo_id}
                className="mr-2 rounded last:mr-0 max-h-36 transition border-2 border-zinc-600 hover:border-purple-600"
                src={`${API}/listings/images/${filename}`}
              />
            ))}
          </div>
          <button
            name="next image"
            onClick={onNext}
            className="bg-purple-900 p-2 ml-10 rounded-full z-10 h-8"
          >
            <BsFillArrowRightCircleFill color="white" />
          </button>
        </section>
      )}
    </article>
  );
}
