import types from "./types";

// const jsonTreeSearch = (components = [], id) => {
//   for (let i = 0; i < components.length; i++) {
//     if (components[i].id === id) return components[i];
//     else if (components[i].components && components[i].components.length) {
//       const result = jsonTreeSearch(components[i].components, id);
//       if (result) return result;
//     }
//   }
// };

const idExtensionGenerator = () => {
  return new Date().valueOf().toString();
};

export const addComponent = (component) => {
  return (dispatch, getState) => {
    const constants = ["hero-section", "body-section", "contact-section"];

    let { componentJSX, componentClassName } = component;
    let { components, stack } = getState().componentTree;

    if (constants.includes(componentClassName)) {
      switch (constants.indexOf(componentClassName)) {
        case 0:
          if (!stack["hero-section"]) {
            stack["hero-section"] = true;
            components.push({
              className: componentClassName,
              componentJSX,
              nodeIndex: 0,
              id: null,
            });
          }
          break;
        case 2:
          if (!stack["contact-section"]) {
            stack["contact-section"] = true;
            components.splice(components.length - 1, 0, {
              className: componentClassName,
              componentJSX,
              nodeIndex: 0,
              id: null,
            });
          }
          break;
        default:
          components.splice(components.length - 2, 0, {
            className: componentClassName,
            id: idExtensionGenerator(),
            componentJSX,
            nodeIndex: 0,
          });
          break;
      }
    }

    dispatch({
      type: types.ADD_COMPONENT,
      payload: {
        components: [...components],
        stack,
      },
    });
  };
};
