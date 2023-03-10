import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import GalleryFirstGrid from "../components/GalleryComponents/GalleryFirstGrid/GalleryFirstGrid";
import GalleryHero from "../components/GalleryComponents/GalleryHero/GalleryHero";
import GalleryLink from "../components/GalleryComponents/GalleryLink/GalleryLink";
import GallerySecondGrid from "../components/GalleryComponents/GallerySecondGrid/GallerySecondGrid";
const Gallery = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Gallery - River Rafting</title>
      </Helmet>
      <GalleryHero />
      <GalleryFirstGrid />
      <GalleryLink />
      <GallerySecondGrid />
    </>
  );
};

export default Gallery;
