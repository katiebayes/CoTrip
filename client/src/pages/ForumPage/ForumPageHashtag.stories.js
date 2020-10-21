import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPageHashtag from "./ForumPageHashtag";
import ForumPageTopic from "./ForumPageTopic";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/ForumPageHashtag", module).add("Default", () => <ForumPageHashtag background={Banner__pink} />);
storiesOf("Pages/ForumPageTopic", module).add("Default", () => <ForumPageTopic background={Banner__pink} />);
