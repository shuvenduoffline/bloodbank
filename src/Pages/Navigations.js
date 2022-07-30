import React from "react";
import NavItem from "../Components/NavItem";
import { makeStyles } from "@material-ui/core/styles";
import ConnectedButton from "../Components/ConnectedButton";

const useStyles = makeStyles((theme) => ({
  menus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    // width: 600,
    alignItems: "end",
  },
}));

const Navigations = ({ isOwner = false, checkAndConnectToWallet, account }) => {
  const classes = useStyles();

  const navigateToPath = (path) => {
    // if(path === '/about'){
    //     window.location = 'https://github.com/shuvenduoffline'
    // }else{
    // }
    window.location = process.env.PUBLIC_URL + "/#" + path;
  };

  return (
    <div className={classes.menus}>
      <NavItem name={"Home"} onClickMenu={navigateToPath} path={"/"} />
      <NavItem
        name={"Blood Registration"}
        onClickMenu={navigateToPath}
        path={"/registration"}
      />
      {isOwner && (
        <NavItem
          name={"Collection"}
          onClickMenu={navigateToPath}
          path={"/collection"}
        />
      )}
      <NavItem
        name={"Agency"}
        onClickMenu={navigateToPath}
        path={"/addagency"}
      />

      {isOwner && (
        <NavItem
          name={"Distribution"}
          onClickMenu={navigateToPath}
          path={"/distribution"}
        />
      )}
      <NavItem
        name={"Statistics"}
        onClickMenu={navigateToPath}
        path={"/stats"}
      />

      <NavItem name={"About Us"} onClickMenu={navigateToPath} path={"/about"} />

      <ConnectedButton name={ account  === "" ? "Connect Wallet" : account} checkAndConnectToWallet={account  === "" ? checkAndConnectToWallet : () => {}}/>
    </div>
  );
};

export default Navigations;
