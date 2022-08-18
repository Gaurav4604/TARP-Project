import { jsonTreeSearch } from "../ComponentTree/ComponentTreeActions";
import types from "./types";

export const setThemeValue = ({ id, className, value = {} }) => {
  return (dispatch, getState) => {
    const section = getState().componentTree[className.split(" ")[0]];
    const component =
      className.split(" ")[0] === "body"
        ? jsonTreeSearch({ components: section, id, className })
        : jsonTreeSearch({ components: [...section], id, className });

    let payload = {
      style: {},
    };

    const { variants } = getState().theme.components[component.componentType];
    const variantIndex = variants.findIndex(
      (variant) =>
        variant.props.className === className && variant.props.id === id
    );
    if (variantIndex !== -1) {
      payload.style = {
        ...variants[variantIndex].style,
      };
      payload.style[value.property] = `${value.value}${value.unit}`;
    } else {
      payload.props = {
        className,
        id,
      };
      payload.style[value.property] = `${value.value}${value.unit}`;
      dispatch({
        type: types.ADD_COMPONENT_THEME,
        payload,
      });
    }
  };
};
