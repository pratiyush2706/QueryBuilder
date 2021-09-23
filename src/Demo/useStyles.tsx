import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  queryDisplayBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px 16px 24px 32px",
    background: "#5C61F0",
    marginBottom: "48px",
  },
  queryText: {
    display: "flex",
    alignItems: "flex-start",
    padding: "8px",
    // width: "762px",
    // height: "36px",
    background: "#4338CA",
    borderRadius: "4px",
    color: "#fff",
  },
}));
