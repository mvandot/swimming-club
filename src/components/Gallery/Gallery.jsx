import React from "react";
import images from '../../data/gallery.json';
import { getImageUrl } from "../../utils";

export const Gallery = () => {
  return (
    <section id="gallery" className="mt-15 mx-5 bg-gray-50 p-10">
        <h2 className="text-3xl text-center text-gray-800 mb-10">We're having fun</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, id) => {
          return (
            <div key={id}>
              <img
                className="h-auto max-w-full relative hover:scale-110 duration-300"
                src={getImageUrl("gallery", image.imageSrc)}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
