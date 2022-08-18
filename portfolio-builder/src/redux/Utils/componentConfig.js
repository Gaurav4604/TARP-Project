import {
  ContactPhone,
  FilterFrames,
  Layers,
  SportsMartialArts,
  TextIncrease,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import Frame from "../../components/blocks/Frame";
import styleSheet from "./StyleSheetMetaData";

const config = {
  root: [
    {
      caption: "Intro",
      icon: SportsMartialArts,
      component: {
        componentJSX: Frame,
        componentType: "MuiStack",
        styleConfig: {
          margin: styleSheet.margin,
          padding: styleSheet.padding,
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
        componentType: "MuiStack",
        components: [],
      },
    },
    {
      caption: "Contact",
      icon: ContactPhone,
      component: {
        root: true,
        componentJSX: Frame,
        componentType: "MuiStack",
        components: [],
      },
    },
  ],
  blocks: [
    {
      caption: "Frame",
      icon: FilterFrames,
      componentType: "MuiStack",
      component: {
        dataProps: {
          sx: {
            borderRadius: "50%",
            width: "10rem",
            height: "10rem",
          },
        },
        root: false,
        componentJSX: Frame,
        components: [],
      },
    },
    {
      caption: "Text",
      componentType: "MuiTypography",
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
