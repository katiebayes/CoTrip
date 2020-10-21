import React from "react";
import { storiesOf } from "@storybook/react";
import BookATrip from ".";
import Banner__pink from "assets/images/Banner__pink.png";

storiesOf("Pages/BookATrip", module).add("Default", () => (
  <BookATrip background={Banner__pink} />
));
