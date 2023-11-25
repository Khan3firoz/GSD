import { pallete } from "./Theme";

export const styles = {
  flexDRS: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDC: {
    display: "flex",
    flexDirection: "column",
  },
  buttonMain: {
    backgroundColor: pallete.parimayBlue,
    color: pallete.primaryWhite,
    textTransform: "none",
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  imagesBox: {
    width: "100%", // Responsive width
    maxWidth: 600, // Maximum width
    height: "auto", // Maintain aspect ratio
  },
};
