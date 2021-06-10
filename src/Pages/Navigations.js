import React from 'react';
import NavItem from '../Components/NavItem'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    menus: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        width: 500,
        alignItems: 'end'
    }
  }));

const Navigations = () => {
    let history = useHistory();
    const classes = useStyles();

    const navigateToPath = path => {
        console.log('clc ' + path)
        history.push(path);
      }


    return (
        <div
        className={classes.menus}
        >
            <NavItem name={'Home'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'Blood Registration'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'Developer'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'About Us'} onClickMenu={navigateToPath} path={'/home'}/>
        </div>
    );
}

export default Navigations;
