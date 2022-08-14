import { Layers, SportsMartialArts, ThreeDRotation } from "@mui/icons-material";
import Frame from "../../components/frames/Frame";
import { Grid, Stack } from "@mui/material";

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
                borderRadius: "1rem",
                height: "100%",
                bgcolor: "blue",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            components: [
              {
                componentJSX: Grid,
                dataProps: {
                  sx: {
                    width: "50%",
                    height: "50%",
                    backgroundColor: "rgb(0, 255, 0)",
                  },
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
