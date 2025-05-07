import React from "react";
import "./Gallery.css";
import GalleryItem from "./components/GalleryItem";

// Temp data
const data = [
  {
    id: 1,
    media: "/pins/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/pins/pin2.jpeg",
    width: 1260,
    height: 1400,
  },

  {
    id: 3,
    media: "/pins/pin3.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: "/pins/pin4.jpeg",
    width: 1260,
    height: 1000,
  },

  {
    id: 5,
    media: "/pins/pin5.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 6,
    media: "/pins/pin6.jpeg",
    width: 1260,
    height: 1400,
  },

  {
    id: 7,
    media: "/pins/pin7.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 8,
    media: "/pins/pin8.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 9,
    media: "/pins/pin9.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 10,
    media: "/pins/pin10.jpeg",
    width: 1260,
    height: 1000,
  },

  {
    id: 11,
    media: "/pins/pin11.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: "/pins/pin12.jpeg",
    width: 1260,
    height: 1400,
  },

  {
    id: 13,
    media: "/pins/pin13.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 14,
    media: "/pins/pin14.jpeg",
    width: 1260,
    height: 1000,
  },
];

const Gallery = () => {
  return (
    <div className='gallery'>
      {data.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Gallery;
