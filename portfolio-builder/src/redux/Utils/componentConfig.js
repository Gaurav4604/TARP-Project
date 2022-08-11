import { Layers, SportsMartialArts, ThreeDRotation } from "@mui/icons-material";
import { Stack } from "@mui/material";

const config = {
  frames: [
    {
      caption: "Hero Section",
      icon: SportsMartialArts,
      component: {
        componentJSX: Stack,
      },
    },
    {
      caption: "Body Section",
      icon: Layers,
      component: {
        componentJSX: Stack,
      },
    },
    {
      caption: "Contact Section",
      icon: ThreeDRotation,
      component: {
        componentJSX: Stack,
      },
    },
  ],
};

export default config;
