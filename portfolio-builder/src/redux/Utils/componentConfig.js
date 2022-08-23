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
        stylesToSetOnMount: {
          width: "100vw",
          height: "100vh",
          backgroundColor: "blue",
        },
        styleConfig: {
          margin: styleSheet.margin,
          padding: styleSheet.padding,
          width: styleSheet.width,
          height: styleSheet.height,
          borderRadius: styleSheet.borderRadius,
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
      component: {
        componentType: "MuiStack",
        styleConfig: {
          margin: styleSheet.margin,
          padding: styleSheet.padding,
          width: styleSheet.width,
          height: styleSheet.height,
          borderRadius: styleSheet.borderRadius,
        },
        stylesToSetOnMount: {
          width: "20vw",
          height: "20vh",
          backgroundColor: "yellow",
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
