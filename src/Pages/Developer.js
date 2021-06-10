import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        width: 500,
        alignItems: 'end'
    }
  }));

const Developer = () => {
    const classes = useStyles();

    return (
        <div
        className={classes.root}
        >
           Developer
        </div>
    );
}

export default Developer;
