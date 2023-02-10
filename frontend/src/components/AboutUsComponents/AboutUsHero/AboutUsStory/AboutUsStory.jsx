import React from "react";
import "./aboutUsStory.scss";
import parking from "../../../../assets/images/parking.png";
const AboutUsStory = () => {
  return (
    <div className="about-us-story ">
      <div className="logo">
        <img src={parking} alt="logo" />
      </div>
      <div className="story-title">
        <h1>OUR STORY</h1>
      </div>
      <div className="story-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          vestibulum fermentum fermentum. In nulla sem, gravida a feugiat in,
          maximus id orci. Donec nec sagittis ipsum, sit amet venenatis orci.
          Donec bibendum pulvinar dapibus. Duis ac dui accumsan, finibus erat
          sagittis, mollis nulla. Cras ac interdum lacus. Morbi at ante aliquet,
          faucibus purus quis, pretium justo.
        </p>
        <p>
          Aenean orci tellus, volutpat vitae lacinia lobortis, dignissim sit
          amet ex. Duis facilisis hendrerit nisi, vel gravida magna dapibus id.
          Donec quam mauris, aliquam vitae laoreet ac, auctor a lorem. Maecenas
          a sagittis justo, vel dictum tortor. Suspendisse malesuada facilisis
          dignissim.
        </p>
        <p>
          Praesent suscipit aliquam convallis. In quis ultricies neque. Sed quis
          mi mattis, faucibus ante mollis, tincidunt turpis. Praesent sit amet
          nisi nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur gravida feugiat lectus, sed
          venenatis eros. Nulla facilisi. Sed aliquam dui ipsum, vitae interdum
          augue sodales et. Ut sit amet convallis velit. Nunc vitae scelerisque
          turpis.
        </p>
      </div>
    </div>
  );
};

export default AboutUsStory;
