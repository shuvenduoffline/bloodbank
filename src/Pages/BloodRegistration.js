import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LogoImage from '../assets/blood_donation2.svg'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
      },
      leftDiv : {
         width: '100%',
         alignItems : 'center',
         height: '90vh'
      },
      rightDiv : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        height: '60vh'
      }
  }));

const BloodRegistration = () => {

    const classes = useStyles();
    const [donarName,setDonarName] = useState('')
    const [donarPhone,setDonarPhone] = useState('')
    const [bloodGroup,setBloodGroup] = useState('')
    const [bloodQuality,setQloodQuality] = useState('')
    const [remarks,setRemarks] = useState('')

    const isValid = donarName && donarPhone && bloodGroup && bloodQuality && remarks

    console.log(donarName + ' phone : '+ donarPhone + ' bloodgr: '+ bloodGroup + ' qua: '+bloodQuality + ' rem: '+ remarks)
    
    return (
        <div className={classes.root}
        >
           <div className={classes.leftDiv}>
            <img src={LogoImage} width='100%' height='100%' alt='Blood Donation Pic' />
           </div>
           <div className={classes.rightDiv}>
           <form className={classes.rightDiv} autoComplete="off">
               
                    <TextField
                        required
                        id="name"
                        label="Donar Name"
                        variant="outlined"
                        value={donarName}
                        onChange={e => setDonarName(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="phone"
                        label="Phone Number"
                        variant="outlined"
                        value={donarPhone}
                        onChange={e => setDonarPhone(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="bloodgroup"
                        label="Blood Group"
                        variant="outlined"
                        value={bloodGroup}
                        onChange={e => setBloodGroup(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="quality"
                        label="Blood Quality"
                        variant="outlined"
                        value={bloodQuality}
                        onChange={e => setQloodQuality(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="remarks"
                        label="Remarks"
                        variant="outlined"
                        value={remarks}
                        onChange={e => setRemarks(e.currentTarget.value)}
                    />

            <Button variant="contained" color="primary" type="submit" disabled={!isValid}>
                Register Blood
            </Button>
            </form>
           </div>
        </div>
    );
}

export default BloodRegistration;