import { Layers, SportsMartialArts, ThreeDRotation } from "@mui/icons-material";
import Frame from "../../components/frames/Frame";
import { Stack, Typography } from "@mui/material";

const config = {
  frames: [
    {
      caption: "Hero Section",
      icon: SportsMartialArts,
      component: {
        componentJSX: Frame,
        dataProps: {
          sx: {
            bgcolor: "purple",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        components: [
          {
            componentJSX: Frame,
            dataProps: {
              sx: {
                width: "50%",
                border: "1rem solid black",
                height: "100%",
                bgcolor: "blue",
              },
            },
            components: [
              {
                componentJSX: Typography,
                dataProps: {
                  children: "Hi I am Hero Section",
                },
              },
            ],
          },
        ],
      },
    },
    {
      caption: "Body Section",
      icon: Layers,
      component: {
        componentJSX: Frame,
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
