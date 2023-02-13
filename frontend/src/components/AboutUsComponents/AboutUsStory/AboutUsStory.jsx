import React from "react";
import parking from "../../../assets/images/parking.png";
import Story from "../../Story/Story";
const AboutUsStory = () => {
  return (
    <Story
      img={parking}
      title={"OUR STORY"}
      text1={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum fermentum fermentum. In nulla sem, gravida a feugiat in, maximus id orci. Donec nec sagittis ipsum, sit amet venenatis orci. Donec bibendum pulvinar dapibus. Duis ac dui accumsan, finibus erat sagittis, mollis nulla. Cras ac interdum lacus. Morbi at ante aliquet, faucibus purus quis, pretium justo."
      }
      text2={
        "Aenean orci tellus, volutpat vitae lacinia lobortis, dignissim sit amet ex. Duis facilisis hendrerit nisi, vel gravida magna dapibus id. Donec quam mauris, aliquam vitae laoreet ac, auctor a lorem. Maecenas a sagittis justo, vel dictum tortor. Suspendisse malesuada facilisis dignissim."
      }
      text3={
        "Praesent suscipit aliquam convallis. In quis ultricies neque. Sed quis mi mattis, faucibus ante mollis, tincidunt turpis. Praesent sit amet nisi nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida feugiat lectus, sed venenatis eros. Nulla facilisi. Sed aliquam dui ipsum, vitae interdum augue sodales et. Ut sit amet convallis velit. Nunc vitae scelerisque turpis."
      }
    />
  );
};

export default AboutUsStory;
