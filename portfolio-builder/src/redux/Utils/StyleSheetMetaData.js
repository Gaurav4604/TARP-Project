const styleSheet = {
  backgroundColor: {
    type: "Color",
  },
  color: {
    type: "Color",
  },
  borderRadius: {
    type: "Unit",
    range: [0, ...Array.from({ length: 50 }, (_, i) => i + 1)],
    unit: "%",
  },
  width: {
    type: "Unit",
    range: [0, ...Array.from({ length: 100 }, (_, i) => i + 1)],
    unit: "%",
  },
  height: {
    type: "Unit",
    range: [0, ...Array.from({ length: 100 }, (_, i) => i + 1)],
    unit: "%",
  },
  padding: {
    type: "Unit",
    range: [0, ...Array.from({ length: 10 }, (_, i) => i + 1)],
    unit: "rem",
  },
  margin: {
    type: "Unit",
    range: [0, ...Array.from({ length: 10 }, (_, i) => i + 1)],
    unit: "rem",
  },
};

export default styleSheet;
