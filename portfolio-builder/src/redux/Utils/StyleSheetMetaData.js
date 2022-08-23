const styleSheet = {
  backgroundColor: {
    type: "Color",
  },
  color: {
    type: "Color",
  },
  borderRadius: {
    type: "Unit",
    min: 0,
    max: 50,
    step: 1,
    unit: "%",
  },
  width: {
    type: "Unit",
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  height: {
    type: "Unit",
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  padding: {
    type: "Unit",
    min: 0,
    max: 10,
    step: 1,
    unit: "rem",
  },
  margin: {
    type: "Unit",
    min: 0,
    max: 10,
    step: 1,
    unit: "rem",
  },
};

export default styleSheet;
