import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menusItem : {
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bolder'
    }
  }));

const NavItem = ({name, path, onClickMenu}) => {

    const classes = useStyles();
    return (
        <div className={classes.menusItem}
        onClick={() => onClickMenu(path)}
        >
            {name}
        </div>
    );
}

export default NavItem;
