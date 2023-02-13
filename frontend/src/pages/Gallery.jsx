import React from "react";
import { Helmet } from "react-helmet";
import GalleryFirstGrid from "../components/GalleryComponents/GalleryFirstGrid/GalleryFirstGrid";
import GalleryHero from "../components/GalleryComponents/GalleryHero/GalleryHero";
import GalleryLink from "../components/GalleryComponents/GalleryLink/GalleryLink";
import GallerySecondGrid from "../components/GalleryComponents/GallerySecondGrid/GallerySecondGrid";
const Gallery = () => {
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
