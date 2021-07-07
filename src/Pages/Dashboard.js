import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashBoardSVG from '../assets/dashboard.svg';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        padding: 30,
        alignItems: 'end',
        flex: 2
    },
    left : {
        flex : 1,
        padding: 50
    },
    right : {
        flex : 1
    },
    imgSVG : {
        width: 600,
        height: 600
    },
    card : {
        minWidth: 500,
        marginTop: 30
    }
  }));

const Dashboard = ({account}) => {
    const classes = useStyles();

    return (
        <div
        className={classes.root}
        >
           <div className={classes.left}>
           <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Total Agency Registered
                                        </Typography>
                                        <Typography variant="h3" component="h2">
                                         100
                                        </Typography>
                                    </CardContent>       
                </Card>
           <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Total Agency Registered
                                        </Typography>
                                        <Typography variant="h3" component="h2">
                                         100
                                        </Typography>
                                    </CardContent>       
                </Card>
           <Card className={classes.card}>
                    <CardContent>  
                                        <Typography variant="h5" component="h2">
                                         Total Agency Registered
                                        </Typography>
                                        <Typography variant="h3" component="h2">
                                         100
                                        </Typography>
                                    </CardContent>       
                </Card>
           </div>
           <div className={classes.right}>
                    <img src={DashBoardSVG} className={classes.imgSVG} />
           </div>
        </div>
    );
}

export default Dashboard;
