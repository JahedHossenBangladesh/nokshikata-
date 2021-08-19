import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    // background-color  red
    backgroundColor: "black",
    "& a": {
      color: "white",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
});
export default useStyle;