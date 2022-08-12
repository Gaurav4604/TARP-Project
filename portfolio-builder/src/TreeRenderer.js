import React from "react";
import { connect } from "react-redux";

const componentTreeRenderer = (components) => {
  return components.map((component) => {
    const {
      componentJSX,
      id = "",
      className = "",
      dataProps = {},
      components = [],
    } = component;

    if (componentJSX) {
      return React.createElement(componentJSX, {
        className,
        key: `${className} + ${id}`,
        id,
        children: componentTreeRenderer(components),
        ...dataProps,
      });
    } else return undefined;
  });
};

const TreeRenderer = ({ components }) => {
  return componentTreeRenderer(components);
};

const mapStateToProps = ({ componentTree }) => {
  const { components } = componentTree;
  return {
    components,
  };
};

export default connect(mapStateToProps)(TreeRenderer);
