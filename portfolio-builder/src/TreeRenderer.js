import React from "react";
import { connect } from "react-redux";

const componentTreeRenderer = (components) => {
  //TODO change renderer to work according to new tree logic
  return components.map((component) => {
    if (component !== null) {
      const {
        componentJSX = "",
        id = "",
        stylesToSetOnMount = {},
        className = "",
        dataProps = {},
        components = [],
      } = component;
      if (componentJSX) {
        return React.createElement(componentJSX, {
          className,
          key: `${id}`,
          stylesToSetOnMount,
          id,
          children: componentTreeRenderer(components),
          ...dataProps,
        });
      } else return undefined;
    } else return undefined;
  });
};

const TreeRenderer = ({ components }) => {
  return componentTreeRenderer(components);
};

const mapStateToProps = ({ componentTree }) => {
  const { intro, body, contact } = componentTree;
  return {
    components: [intro, ...body, contact],
  };
};

export default connect(mapStateToProps)(TreeRenderer);
