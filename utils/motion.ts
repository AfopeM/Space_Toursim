export const tabVariant = (type: string) => ({
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
  hidden: {
    x: type === "img" ? 0 : 50,
    scale: type === "content" ? 1 : 0,
    opacity: 0,
  },
  hover: {
    scale: type === "img" ? 1.05 : 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
});
