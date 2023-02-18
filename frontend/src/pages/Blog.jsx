import React from "react";
import { Helmet } from "react-helmet";
import BlogCards from "../components/BlogComponents/BlogCards/BlogCards";
import { BlogHero } from "../components/BlogComponents/BlogHero/BlogHero";
const Blog = () => {
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
