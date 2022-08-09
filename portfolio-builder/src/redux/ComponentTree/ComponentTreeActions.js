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
            components = [
              {
                className: componentClassName,
                componentJSX,
                nodeIndex: 0,
                id: componentClassName,
              },
              ...components,
            ];
          }
          break;
        case 2:
          if (!stack["contact-section"]) {
            stack["contact-section"] = true;
            components = [
              ...components,
              {
                className: componentClassName,
                componentJSX,
                nodeIndex: 0,
                id: componentClassName,
              },
            ];
          }
          break;
        default:
          switch (components.length) {
            case 0:
              components.push({
                className: componentClassName,
                id: idExtensionGenerator(),
                componentJSX,
                nodeIndex: 0,
              });
              break;
            default:
              if (components[components.length - 1].id === constants[2]) {
                switch (components.length) {
                  case 1:
                    components.splice(0, 0, {
                      className: componentClassName,
                      id: idExtensionGenerator(),
                      componentJSX,
                      nodeIndex: 0,
                    });
                    break;
                  default:
                    const start = components.slice(0, components.length - 1);
                    const end = components.slice(
                      components.length - 1,
                      components.length
                    );
                    components = [
                      ...start,
                      {
                        className: componentClassName,
                        id: idExtensionGenerator(),
                        componentJSX,
                        nodeIndex: 0,
                      },
                      ...end,
                    ];
                    break;
                }
              } else {
                components.push({
                  className: componentClassName,
                  id: idExtensionGenerator(),
                  componentJSX,
                  nodeIndex: 0,
                });
              }
              break;
          }
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
