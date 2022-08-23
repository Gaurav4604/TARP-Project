import { jsonTreeSearch } from "../ComponentTree/ComponentTreeActions";
import types from "./types";

export const setThemeValue = ({ id, className, value = {} }) => {
  return (dispatch, getState) => {
    const section = getState().componentTree[className.split(" ")[0]];
    const component =
      className.split(" ")[0] === "body"
        ? jsonTreeSearch({ components: section, id, className })
        : jsonTreeSearch({ components: [{ ...section }], id, className });

    let payload = {
      componentType: "",
      componentPackage: {
        style: {},
        props: {},
      },
    };

    const { variants } = getState().theme.components[component.componentType];
    const variantIndex = variants.findIndex(
      (variant) =>
        Object.keys(variant).includes("props") &&
        variant.props.className === className &&
        variant.props.id === id
    );

    payload.componentType = component.componentType;

    if (variantIndex !== -1) {
      payload.componentPackage.style = {
        ...variants[variantIndex].style,
      };
      payload.componentPackage.style[
        value.property
      ] = `${value.value}${value.unit}`;
      payload.componentPackage.props = {
        className,
        id,
      };

      variants[variantIndex] = payload.componentPackage;

      const componentPackage = {};
      componentPackage[payload.componentType] = {
        variants,
      };

      dispatch({
        type: types.ADD_COMPONENT_THEME,
        payload: componentPackage,
      });
    } else {
      payload.componentPackage.style[
        value.property
      ] = `${value.value}${value.unit}`;
      payload.componentPackage.props = {
        className,
        id,
      };
      variants.push(payload.componentPackage);

      const componentPackage = {};
      componentPackage[payload.componentType] = {
        variants,
      };

      dispatch({
        type: types.ADD_COMPONENT_THEME,
        payload: componentPackage,
      });
    }
  };
};
