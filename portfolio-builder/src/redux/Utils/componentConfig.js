import { Layers, SportsMartialArts, ThreeDRotation } from "@mui/icons-material";
import { Stack } from "@mui/material";

const config = {
  root: [
    {
      caption: "Body Section",
      icon: Layers,
      component: {
        componentJSX: Stack,
      },
    },
    {
      caption: "Hero Section",
      icon: SportsMartialArts,
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
