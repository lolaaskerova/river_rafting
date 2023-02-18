import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import "./blogCards.scss";
import corporate from "../../../assets/images/corporateTour.jpg";
import camping from "../../../assets/images/camping.jpg";
import secondModal from "../../../assets/images/secondmodal4.jpg";
import firstModal from "../../../assets/images/firstmodal2.jpg";
import firstModal2 from "../../../assets/images/firstmodal1.jpg";
import hero from "../../../assets/images/blogHero.jpg";
const BlogCards = () => {
  return (
    <div className="container blog-card-items">
      <div className="row">
        <BlogCard
          image={corporate}
          title={"Our Essential Rafting Tips"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis nulla non mauris fermentum, eu condimentum ligula rutrum.In tristique lobortis metus quis pretium Vestibulum consectetur mi vel tellus aliquam, vitae luctus augue finibus. Nunc faucibus, nibh scelerisque imperdiet ullamcorper, est augue fermentum turpis, in consectetur nunc ligula et neque. Nunc gravida massa auctor quam sagittis mollis. Cras aliquet lectus quis maximus euismod."
          }
          time={"April 20, 2017"}
        />
        <BlogCard
          image={camping}
          title={"Top Camping Destinations Reviewed"}
          text={
            "Mauris id sapien nec neque luctus consequat quis sed tellus. Phasellus blandit eros at justo rutrum, vel posuere sapien volutpat. Ut facilisis nulla at est ornare, vitae pharetra lectus hendrerit. Pellentesque sit amet vulputate ligula. Nullam suscipit hendrerit metus, et blandit tellus fermentum ut. Aenean leo quam, hendrerit nec ante in, malesuada pellentesque mauris. Aliquam lectus sapien, dapibus eu sodales imperdiet, pretium in turpis."
          }
          time={"April 15, 2017"}
        />
        <BlogCard
          image={secondModal}
          title={"Multi-Day vs Single-Day Rafting Trips"}
          text={
            "Quisque erat dui, semper eget arcu et, convallis laoreet nunc. Maecenas bibendum porttitor augue, in vestibulum est lacinia vitae. Nulla varius dapibus ipsum, non fermentum enim placerat eget. Etiam leo nisi, aliquam sit amet dui fermentum, commodo rutrum arcu. Donec fermentum scelerisque facilisis."
          }
          time={"April 10, 2017"}
        />
        <BlogCard
          image={firstModal}
          title={"Our Guide Answers Your Top Questions"}
          text={
            "Duis porttitor accumsan orci, a imperdiet sapien semper quis. Cras libero justo, consectetur sit amet ligula id, maximus faucibus nulla. Aliquam eros ipsum, blandit non risus id, pellentesque tincidunt enim. Nam egestas ornare molestie. Vestibulum posuere efficitur erat, vel consectetur lorem euismod molestie. Duis a efficitur lacus. Suspendisse elementum at risus id sodales. Donec accumsan non sem quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          }
          time={"April 2, 2017"}
        />
        <BlogCard
          image={firstModal2}
          title={"Amazing Bucket List Adventure Ideas"}
          text={
            "Proin bibendum mauris sit amet nulla lacinia varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ut malesuada risus, quis fringilla metus. Suspendisse fringilla at lorem et tempus. Phasellus mattis nisl sit amet neque hendrerit, eu vulputate libero sollicitudin. Fusce condimentum maximus dolor. Praesent diam risus, sollicitudin sit amet blandit non, tempor sit amet elit. Nam ac enim dolor."
          }
          time={"March 30, 2017"}
        />
        <BlogCard
          image={hero}
          title={"Planning Your Canoeing Adventure"}
          text={
            "Proin bibendum mauris sit amet nulla lacinia varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ut malesuada risus, quis fringilla metus. Suspendisse fringilla at lorem et tempus. Phasellus mattis nisl sit amet neque hendrerit, eu vulputate libero sollicitudin. Fusce condimentum maximus dolor. Praesent diam risus, sollicitudin sit amet blandit non, tempor sit amet elit. Nam ac enim dolor."
          }
          time={"March 20, 2017"}
        />
      </div>
    </div>
  );
};

export default BlogCards;
