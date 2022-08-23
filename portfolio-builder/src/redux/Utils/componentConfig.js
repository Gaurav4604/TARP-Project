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
          borderStyle: "solid",
        },
        styleConfig: {
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          height: styleSheet.height,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
        },
        root: true,
        components: [],
      },
    },
    {
      caption: "Body",
      icon: Layers,
      component: {
        componentJSX: Frame,
        componentType: "MuiStack",
        stylesToSetOnMount: {
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
        },
        styleConfig: {
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          height: styleSheet.height,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
        },
        root: true,
        components: [],
      },
    },
    {
      caption: "Contact",
      icon: ContactPhone,
      component: {
        componentJSX: Frame,
        componentType: "MuiStack",
        stylesToSetOnMount: {
          width: "100vw",
          height: "100vh",
          backgroundColor: "green",
        },
        styleConfig: {
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          height: styleSheet.height,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
        },
        root: true,
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
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          height: styleSheet.height,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
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
