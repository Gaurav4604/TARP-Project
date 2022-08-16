import {
  ContactPhone,
  FilterFrames,
  Layers,
  SportsMartialArts,
} from "@mui/icons-material";
import Frame from "../../components/blocks/Frame";
import { Stack } from "@mui/material";

const config = {
  root: [
    {
      caption: "Intro",
      icon: SportsMartialArts,
      component: {
        componentJSX: Frame,
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
        componentJSX: Stack,
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
  ],
};

export default config;
