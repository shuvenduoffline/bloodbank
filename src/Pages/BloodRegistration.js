import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container : {
        margin: 2
    }
  }));

const BloodRegistration = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}
        >
            Blood Registration
        </div>
    );
}

export default BloodRegistration;