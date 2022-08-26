import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { connect, useDispatch } from "react-redux";
import { setThemeValue } from "../../redux/Theme/themeActions";
import { toggleContextMenu } from "../../redux/Utils/UtilsActions";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const Box = (props) => {
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const ThreeDFrame = ({
  className,
  id,
  src,
  stylesToSetOnMount = {},
  setThemeValue,
  ...props
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    for (let entry of Object.entries(stylesToSetOnMount)) {
      setThemeValue({
        className,
        id,
        value: {
          unit: "",
          property: entry[0],
          value: entry[1],
        },
      });
    }
  }, [className, id, setThemeValue, stylesToSetOnMount]);

  return (
    <Stack
      sx={{ overflow: "hidden" }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
          toggleContextMenu(true, false, {
            id: e.currentTarget.id,
            className: e.currentTarget.className
              .split(" ")
              .slice(0, -1)
              .join(" "),
          })
        );
      }}
      className={className}
      id={id}
      {...props}
    >
      <Canvas>
        <ambientLight />
        <CameraController />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Stack>
  );
};

export default connect(null, { setThemeValue })(ThreeDFrame);
