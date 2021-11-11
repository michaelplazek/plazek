export const isSmall = size => size === "small";
export const isActive = ({ isCurrent, isPartiallyCurrent, href }) => {
  const show =
    (isPartiallyCurrent && href !== "/") || (isCurrent && href === "/");
  return show
    ? {
        style: {
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
        },
      }
    : {};
};

export const getImageStyle = size => {
  switch (size) {
    case "small":
      return { width: "200px", height: "200px" };
    case "medium-small":
      return { width: "100px", height: "100px" };
    case "medium":
      return { width: "150px", height: "150px" };
    case "large":
      return { width: "150px", height: "150px" };
    default:
      return { width: "150px", height: "150px" };
  }
};
