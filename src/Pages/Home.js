import React from 'react';
import LogoImage from '../assets/blood_donation1.svg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';



const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      marginTop: 50
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));

const Home = () => {

    const classes = useStyles();
    return (
        <div style={{display : 'flex', flexDirection: 'row', margin: 20, padding: 20, width: '100%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems : 'center', justifyContent: 'flex-start', width : '40%'}}>
                <h2 style={{margin: 2}}>Blood Bank</h2>
                <p>New Generations Blood Bank powered by decentralize blockchain solution. Build in Ethereum Network. Blood Collect to Blood Verification, Distribution all done with fully decentralized system. </p>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Blood Details With Blood Id"
                        inputProps={{ 'aria-label': 'Search Blood Details With Blood Id' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div style={{ width : '60%' , height : '100%'}}>
                <img src={LogoImage} width='100%' height='100%' />
            </div>
        </div>
    );
}

export default Home;
