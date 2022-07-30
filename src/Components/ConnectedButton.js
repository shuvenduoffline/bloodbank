import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menusItem: {
    cursor: "pointer",
    color: "white",
    fontWeight: "bolder",
    "&:hover": {
      color: "#f5f5f5",
      scale: 1.02,
    },
    borderRadius : 10,
    border : '1px solid white',
    padding : 5,
    marginLeft : 10
  },
}));

const ConnectedButton = ({ name, checkAndConnectToWallet }) => {
  const classes = useStyles();
  console.log(checkAndConnectToWallet)
  return (
    <div className={classes.menusItem} onClick={() => checkAndConnectToWallet()}>
      {name}
    </div>
  );
};

export default ConnectedButton;
