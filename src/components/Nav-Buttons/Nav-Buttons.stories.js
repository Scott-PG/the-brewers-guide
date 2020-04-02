import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import PageCounter from "./PageCounter/PageCounter";
import BkButton from "./BkButton/BkButton";
import FwdButton from "./FwdButton/FwdButton";
import MiniFwdButton from "./MiniFwdButton/MiniFwdButton";
import MiniBkButton from "./MiniBkButton/MiniBkButton";
import ListNav from "./ListNav/ListNav";
import MiniListNav from "./MiniListNav/MiniListNav";

storiesOf("PageCounter", module)
  .addDecorator(StoryRouter())
  .add("PageCounter", () => (
    <PageCounter startValue={1} max={20} linkPath="/beers/" />
  ));

storiesOf("Back Button", module)
  .addDecorator(StoryRouter())
  .add("BkButton", () => <BkButton linkNumber="22" linkPath="/beers/" />);

storiesOf("Forward Button", module)
  .addDecorator(StoryRouter())
  .add("FwdButton", () => <FwdButton linkNumber="22" linkPath="/beers/" />);

storiesOf("Mini Forward Button", module)
  .addDecorator(StoryRouter())
  .add("MiniFwdButton", () => (
    <MiniFwdButton linkNumber="22" linkPath="/beers/" />
  ));

storiesOf("Mini Back Button", module)
  .addDecorator(StoryRouter())
  .add("MiniBkButton", () => (
    <MiniBkButton linkNumber="22" linkPath="/beers/" />
  ));

storiesOf("List Nav", module)
  .addDecorator(StoryRouter())
  .add("ListNav", () => (
    <ListNav currentPage={2} lastPage={23} linkPath="/beers/" />
  ));

storiesOf("MiniList Nav", module)
  .addDecorator(StoryRouter())
  .add("MiniListNav", () => (
    <MiniListNav currentPage={2} lastPage={23} linkPath="/beers/" />
  ));
