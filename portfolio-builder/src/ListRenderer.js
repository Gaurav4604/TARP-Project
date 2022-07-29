import React from "react";
import { connect } from "react-redux";

const componentTreeRenderer = (components) => {
  return components.map(({ componentJSX, id, className }) => {
    if (componentJSX) {
      return React.createElement(componentJSX, {
        className,
        key: `${className} + ${id}`,
        id,
      });
    } else return undefined;
  });
};

const ListRenderer = ({ components }) => {
  return componentTreeRenderer(components);
};

const mapStateToProps = ({ componentTree }) => {
  const { components } = componentTree;
  return {
    components,
  };
};

export default connect(mapStateToProps)(ListRenderer);
