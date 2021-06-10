import React from 'react';
import NavItem from '../Components/NavItem'
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
    const classes = useStyles();

    const navigateToPath = path => {
        window.location = path;
      }


    return (
        <div
        className={classes.menus}
        >
            <NavItem name={'Home'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'Blood Registration'} onClickMenu={navigateToPath} path={'/registration'}/>
            <NavItem name={'Developer'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'About Us'} onClickMenu={navigateToPath} path={'/home'}/>
        </div>
    );
}

export default Navigations;
