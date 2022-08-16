import types from "./types";

const jsonTreeSearch = ({ components = [], id, className }) => {
  for (let i = 0; i < components.length; i++) {
    if (components[i].id === id && components[i].className === className)
      return components[i];
    else if (components[i].components && components[i].components.length) {
      const result = jsonTreeSearch({
        components: components[i].components,
        id,
        className,
      });
      if (result) return result;
    }
  }
};

const idExtensionGenerator = () => {
  return new Date().valueOf().toString();
};

export const addComponentV2 = (component) => {
  return (dispatch, getState) => {
    const { className, root } = component;
    const tree = getState().componentTree;

    const componentPackage = {
      className,
      id: idExtensionGenerator().toString(),
      components: [],
      ...component,
    };

    //! check if component is a root
    //* hero/body/contact (roots)
    if (root) {
      // check the root type
      if (
        ["intro", "contact"].includes(className) &&
        tree[className] === null
      ) {
        const payload = {};
        payload[className] = { ...componentPackage };
        dispatch({
          type: types.ADD_COMPONENT,
          payload,
        });
      } else {
        const { body } = tree;
        dispatch({
          type: types.ADD_COMPONENT,
          payload: {
            body: [...body, { ...componentPackage }],
          },
        });
      }
    } else {
      //! identify the stack group, the component belongs to
      //* hero/body/contact
      const { metadata } = getState().utils.contextMenu;
      const rootName = metadata.className.split(" ")[0];
      const treeGroup = tree[rootName];
      if (["intro", "contact"].includes(rootName)) {
        let parent = jsonTreeSearch({
          components: [{ ...treeGroup }],
          className: metadata.className,
          id: metadata.id,
        });

        parent = {
          ...parent,
          components: [
            ...parent.components,
            {
              ...componentPackage,
              className: `${metadata.className} ${componentPackage.className}`,
              parentRef: {
                className: metadata.className,
                id: metadata.id,
              },
            },
          ],
        };

        if (!parent.hasOwnProperty("parentRef")) {
          const payload = {};
          payload[metadata.className] = parent;
          dispatch({
            type: types.ADD_COMPONENT,
            payload,
          });
        } else {
          let tempParent = { ...parent };
          let nodeIndexList = [];
          while (tempParent.hasOwnProperty("parentRef")) {
            let comparator = { ...tempParent };
            tempParent = jsonTreeSearch({
              components: [{ ...treeGroup }],
              id: tempParent.parentRef.id,
              className: tempParent.parentRef.className,
            });
            nodeIndexList.push(
              tempParent.components.findIndex(
                (component) =>
                  component.id === comparator.id &&
                  component.className === comparator.className
              )
            );
          }
          let reverseTree = { ...parent };

          nodeIndexList.forEach((index) => {
            const components = jsonTreeSearch({
              components: [{ ...treeGroup }],
              id: reverseTree.parentRef.id,
              className: reverseTree.parentRef.className,
            }).components;
            components[index] = { ...reverseTree };

            reverseTree = {
              ...jsonTreeSearch({
                components: [{ ...treeGroup }],
                id: reverseTree.parentRef.id,
                className: reverseTree.parentRef.className,
              }),
              components: [...components],
            };
          });

          const payload = {};
          payload[metadata.className] = reverseTree;
          dispatch({
            type: types.ADD_COMPONENT,
            payload,
          });
        }
      } else {
        let parent = jsonTreeSearch({
          components: treeGroup,
          id: metadata.id,
          className: metadata.className,
        });

        parent = {
          ...parent,
          components: [
            ...parent.components,
            {
              ...componentPackage,
              className: `${metadata.className} ${componentPackage.className}`,
              parentRef: {
                className: metadata.className,
                id: metadata.id,
              },
            },
          ],
        };

        if (parent.hasOwnProperty("parentRef")) {
          let tempParent = { ...parent };
          let nodeIndexList = [];
          while (tempParent.hasOwnProperty("parentRef")) {
            let comparator = { ...tempParent };
            tempParent = jsonTreeSearch({
              components: [...treeGroup],
              id: tempParent.parentRef.id,
              className: tempParent.parentRef.className,
            });
            nodeIndexList.push(
              tempParent.components.findIndex(
                (component) =>
                  component.id === comparator.id &&
                  component.className === comparator.className
              )
            );
          }
          let reverseTree = { ...parent };
          nodeIndexList.forEach((index) => {
            const components = jsonTreeSearch({
              components: [...treeGroup],
              id: reverseTree.parentRef.id,
              className: reverseTree.parentRef.className,
            }).components;
            components[index] = { ...reverseTree };

            reverseTree = {
              ...jsonTreeSearch({
                components: [...treeGroup],
                id: reverseTree.parentRef.id,
                className: reverseTree.parentRef.className,
              }),
              components: [...components],
            };
          });

          const rootNodeIndex = treeGroup.findIndex(
            (component) =>
              component.id === parent.id &&
              component.className === parent.className
          );
          let updatedTreeGroup = [...treeGroup];
          updatedTreeGroup[rootNodeIndex] = parent;
          dispatch({
            type: types.ADD_COMPONENT,
            payload: {
              body: updatedTreeGroup,
            },
          });
        } else {
          const rootNodeIndex = treeGroup.findIndex(
            (component) =>
              component.id === parent.id &&
              component.className === parent.className
          );
          let updatedTreeGroup = [...treeGroup];
          updatedTreeGroup[rootNodeIndex] = parent;
          dispatch({
            type: types.ADD_COMPONENT,
            payload: {
              body: updatedTreeGroup,
            },
          });
        }
      }
    }
  };
};
