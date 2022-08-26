import {
  ContactPhone,
  FilterFrames,
  Image,
  Layers,
  SportsMartialArts,
  TextIncrease,
  ThreeDRotation,
  VideoCall,
} from "@mui/icons-material";
import Frame from "../../components/blocks/Frame";
import ImageFrame from "../../components/blocks/ImageFrame";
import Text from "../../components/blocks/Text";
import ThreeDFrame from "../../components/blocks/ThreeDFrame";
import VideoFrame from "../../components/blocks/VideoFrame";
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
          borderStyle: "solid",
        },
        styleConfig: {
          backgroundColor: styleSheet.backgroundColor,
          ...styleSheet.rootDimensions,
          flex: styleSheet.flex,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
        },
        root: true,
        id: "12345",
        className: "intro",
        components: [
          // {
          //   componentType: "MuiStack",
          //   dataProps: {
          //     src: "https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80",
          //   },
          //   styleConfig: {
          //     src: styleSheet.src,
          //     backgroundColor: styleSheet.backgroundColor,
          //     width: styleSheet.width,
          //     height: styleSheet.height,
          //     ...styleSheet.borders,
          //     ...styleSheet.paddings,
          //     ...styleSheet.margins,
          //   },
          //   stylesToSetOnMount: {
          //     width: "20vw",
          //     height: "20vh",
          //     backgroundColor: "yellow",
          //   },
          //   root: false,
          //   componentJSX: ImageFrame,
          //   parentRef: {
          //     id: "12345",
          //     className: "intro",
          //   },
          //   id: "123456",
          //   className: "intro imageframe",
          // },
        ],
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
        },
        styleConfig: {
          ...styleSheet.rootDimensions,
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          flex: styleSheet.flex,
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
        },
        styleConfig: {
          ...styleSheet.rootDimensions,
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          flex: styleSheet.flex,
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
      caption: "ImageFrame",
      icon: Image,
      component: {
        componentType: "MuiStack",
        dataProps: {
          src: "https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80",
        },
        styleConfig: {
          src: styleSheet.src,
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
        componentJSX: ImageFrame,
      },
    },
    {
      caption: "VideoFrame",
      icon: VideoCall,
      component: {
        componentType: "MuiStack",
        dataProps: {
          src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        styleConfig: {
          src: styleSheet.src,
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
        componentJSX: VideoFrame,
      },
    },
    {
      caption: "ThreeDFrame",
      icon: ThreeDRotation,
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
          height: "30vh",
          backgroundColor: "yellow",
        },
        root: false,
        componentJSX: ThreeDFrame,
      },
    },
    {
      caption: "Frame",
      icon: FilterFrames,
      component: {
        componentType: "MuiStack",
        styleConfig: {
          backgroundColor: styleSheet.backgroundColor,
          width: styleSheet.width,
          height: styleSheet.height,
          flex: styleSheet.flex,
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
      icon: TextIncrease,
      component: {
        componentType: "MuiTypography",
        styleConfig: {
          children: styleSheet.children,
          ...styleSheet.font,
          backgroundColor: styleSheet.backgroundColor,
          color: styleSheet.color,
          width: styleSheet.width,
          height: styleSheet.height,
          ...styleSheet.borders,
          ...styleSheet.paddings,
          ...styleSheet.margins,
        },
        root: false,
        componentJSX: Text,
        dataProps: {
          children: "Hello There",
        },
      },
    },
  ],
};

export default config;
