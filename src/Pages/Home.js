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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import {BLOOD_BANK_ADDRESS,BLOOD_BANK_ABI} from '../SmartContractConfig.js'
import {getBlooodGroup} from '../util/Util';



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
    },
    container : {display : 'flex', flexDirection: 'row', margin: 20, padding: 20, width: '100%'},
    leftDiv :  { display: 'flex', flexDirection: 'column', alignItems : 'center', justifyContent: 'flex-start', width : '40%'},
    rightDiv : { width : '60%' , height : '100%'},
    heading : {margin : 2, color: 'white'},
    details : {color : 'white'},
    card: {
        minWidth: 500,
        marginTop: 30
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));

const Home = ({account}) => {

    const classes = useStyles();
    const [bottleId, setBottleId] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [bloodDetails, setBloodDetails] = React.useState();
    const [message,setMessage] = React.useState('');


    // {
    //     BloodBottleId : 125,
    //     DonerName : 'Shuvendu Dhal',
    //     DonerAge : 25,
    //     DonerMedicalDetails : 'Very Good',
    //     DonerContactNo : '8158090295',
    //     BloodGroup : 'O+',
    //     Quality : 'Good',
    //     Remarks : 'Very Very Good'
    // }

    console.log('Account Home : ', account);
    //get blood details
    const getBloodDetails = (bottleId) => {
        console.log('Getting blood details' , bottleId)
        if(bottleId != null && !isNaN(bottleId)){
            setBloodDetails(null);
            setError(null);
            setMessage('')
            const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
            bloodBankContract.defaultAccount = account;
            bloodBankContract.methods.getbloodBottleData(bottleId)
            .call()
            .then(blockBloodDetails => {
                console.log(blockBloodDetails);
                setBloodDetails(blockBloodDetails);
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
        }
    }

    const verifyBottle = (bottleId) => {
        console.log('Verifying blood details' , bottleId)
        if(bottleId != null){
            const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
            bloodBankContract.defaultAccount = account;
            bloodBankContract.methods.verifyBloodBottle(bottleId)
            .send({
                from: account
            })
            .then(blockBloodDetails => {
                console.log(blockBloodDetails);
                setBloodDetails({...bloodDetails, Status : '1'})
                setMessage("Blood Bottle Verified!")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
        }
    }

    const markDeliveredBottle = (bottleId) => {
        console.log('Delivering blood details' , bottleId)
        if(bottleId != null){
            const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
            bloodBankContract.defaultAccount = account;
            bloodBankContract.methods.DeliverBloodBottle(bottleId)
            .send({
                from: account
            })
            .then(blockBloodDetails => {
                console.log(blockBloodDetails);
                setBloodDetails({...bloodDetails, Status : '2'})
                setMessage("Blood Bottle Marked Delivered!")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });
        }
    }



    return (
        <div className={classes.container}>
            <div className={classes.leftDiv}>
                <h2 className={classes.heading}>Blood Bank</h2>
                <p className={classes.details}>New Generations Blood Bank powered by decentralize blockchain solution. Build on Ethereum Network. Blood Collection to Blood Verification, Distribution all done with fully decentralized system. </p>
                <Paper  className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Blood Details With Blood Id"
                        inputProps={{ 'aria-label': 'Search Blood Details With Blood Id' }}
                        onChange={e => setBottleId(e.currentTarget.value)}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={() => getBloodDetails(bottleId)}>
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {error && <p>{error}</p>}
                {message && <Alert style={{margin: 10}} severity="success">{message}</Alert>}
                            {bloodDetails && <Card className={classes.card}>
                                    <CardContent>
                                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Word of the Day
                                        </Typography> */}
                                        <Typography variant="h5" component="h2">
                                         Blood Id : {bloodDetails.BloodBottleId}
                                        </Typography>
                                        {/* <Typography color="textSecondary">
                                        adjective
                                        </Typography> */}
                                        <Typography variant="body2" component="p">
                                        Doner Name : {window.web3.utils.toAscii(bloodDetails.DonerName)}
                                        <br />
                                        Age : {bloodDetails.DonerAge}
                                        <br />
                                        Medical Details : {window.web3.utils.toAscii(bloodDetails.DonerMedicalDetails)}
                                        <br />
                                        Phone Number : {bloodDetails.DonerContactNo}
                                        <br />
                                        Blood Group : {getBlooodGroup(bloodDetails.BloodGroup)}
                                        <br />
                                        Blood Quality : {window.web3.utils.toAscii(bloodDetails.Quality)}
                                        <br />
                                        Remarks : {window.web3.utils.toAscii(bloodDetails.Remarks)}
                                        <br />
                                        Status : {bloodDetails.Status === '1' ? 'Verified' : bloodDetails.Status === '2' ? 'Delivered' : 'New'}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        {bloodDetails.Status === '0' ? <Button onClick={() => verifyBottle(bottleId)}>Verify</Button> : bloodDetails.Status === '1' ? <Button onClick={() => markDeliveredBottle(bottleId)}>Mark Delivered</Button> : null}
                                    </CardActions> */}
                </Card>}
            </div>
            <div  className={classes.rightDiv}>
                <img src={LogoImage} width='100%' height='100%' />
            </div>
        </div>
    );
}

export default Home;
