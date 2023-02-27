import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogCards from "../components/BlogComponents/BlogCards/BlogCards";
import { BlogHero } from "../components/BlogComponents/BlogHero/BlogHero";
const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog - River Rafting</title>
      </Helmet>
      <BlogHero />
      <BlogCards />
    </>
  );
};

export default Blog;
