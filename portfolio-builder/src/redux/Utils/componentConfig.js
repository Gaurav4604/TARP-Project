import {
  ContactPhone,
  FilterFrames,
  Layers,
  SportsMartialArts,
  TextIncrease,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import Frame from "../../components/blocks/Frame";

const config = {
  root: [
    {
      caption: "Intro",
      icon: SportsMartialArts,
      component: {
        componentJSX: Frame,
        styleAccess: {
          backgroundColor: "Color",
          borderRadius: "Unit",
          width: "Unit",
          height: "Unit",
        },
        root: true,
        components: [],
      },
    },
    {
      caption: "Body",
      icon: Layers,
      component: {
        root: true,
        componentJSX: Frame,
        components: [],
      },
    },
    {
      caption: "Contact",
      icon: ContactPhone,
      component: {
        root: true,
        componentJSX: Frame,
        components: [],
      },
    },
  ],
  blocks: [
    {
      caption: "Frame",
      icon: FilterFrames,
      component: {
        root: false,
        componentJSX: Frame,
        components: [],
      },
    },
    {
      caption: "Text",
      icon: TextIncrease,
      component: {
        root: false,
        componentJSX: Typography,
        dataProps: {
          children: "Hello There",
        },
        components: [],
      },
    },
  ],
};

export default config;
