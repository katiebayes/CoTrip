import React from "react";
import { storiesOf } from "@storybook/react";
import GroupCard from "./GroupCard";
import picture1 from "../../assets/images/card_small1.png";
import picture2 from "../../assets/images/card_small2.png";
import picture3 from "../../assets/images/card_small3.png";

storiesOf("Layout/Cards/GroupCard", module)
  .add("Default", () => (
    <GroupCard name="Group Name" members="# of " location="Location, State" picture={picture3} />
  ))
  .add("Example", () => (
    <GroupCard name="DIY with your kids" members="98" location="Boston, MA" picture={picture1} />
  ))
  .add("Example with long name", () => (
    <GroupCard
      name="Moms traveling to Hawaii"
      members="5"
      location="Chicago, IL"
      picture={picture2}
    />
  ));
