import React from "react";
import Story from "../../Story/Story";
import exclamation from "../../../assets/images/exclamation.png";

const FAQStory = () => {
  return (
    <div>
      <Story
        img={exclamation}
        title={"A NOTE ABOUT SAFETY"}
        text1={
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur maximus, lacus sed condimentum porttitor, odio mauris euismod urna, eu porttitor velit lectus et nisl."
        }
        text2={
          "Cras rhoncus tellus in risus elementum condimentum. Vivamus nulla eros, lobortis id fermentum a, blandit vel neque. Duis sit amet tempus ex, sed dignissim turpis. Aenean mollis elit lectus, eget suscipit orci lobortis id. Nam malesuada quam eget nisl finibus, id hendrerit augue mattis. Fusce elementum mollis mauris, sit amet consequat sem ornare in. Etiam ultrices quam in scelerisque cursus."
        }
        text3={
          "Donec et lorem magna. Nunc eu urna mattis, vestibulum est id, varius neque. Nulla venenatis, sapien vel eleifend placerat, urna lacus fringilla diam, sed fringilla enim mauris sit amet odio."
        }
      />
    </div>
  );
};

export default FAQStory;
