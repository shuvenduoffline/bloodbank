import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LogoImage from '../assets/blood_donation2.svg'
import Button from '@material-ui/core/Button';
import {BLOOD_BANK_ADDRESS,BLOOD_BANK_ABI} from '../SmartContractConfig.js'
import Alert from '@material-ui/lab/Alert';
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
        height: '80vh'
      }
  }));

const BloodRegistration = ({account}) => {

    const classes = useStyles();
    const [donarName,setDonarName] = useState('')
    const [donarPhone,setDonarPhone] = useState('')
    const [bloodGroup,setBloodGroup] = useState('')
    const [bloodQuality,setQloodQuality] = useState('')
    const [remarks,setRemarks] = useState('')
    const [medicalDetails,setMedicalDetails] = useState('')
    const [age,setage] = useState('')
    const [bottleId,setBottleId] = useState('')
    const [message,setMessage] = useState('')

    const isValid = donarName && donarPhone && bloodGroup && bloodQuality && remarks && medicalDetails && age && bottleId


    const regiterBlood = () => {
        if(isValid){        
        let publishDate = new Date().toLocaleDateString(); //web3.utils.fromAscii(docName)
         //convert to better use
         publishDate = window.web3.utils.fromAscii(publishDate);
         const _bloodGroup = window.web3.utils.fromAscii(bloodGroup);
         const _bloodQuality = window.web3.utils.fromAscii(bloodQuality);
         const _remarks = window.web3.utils.fromAscii(remarks);
         const _donarName = window.web3.utils.fromAscii(donarName);
         const _medicalDetails = window.web3.utils.fromAscii(medicalDetails);

         console.log("Adding Blood");
         const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
         bloodBankContract.defaultAccount = account;
 
         try{
             bloodBankContract.methods.setBloodDetails(
                 _bloodGroup,
                 _bloodQuality,
                 _remarks,
                 _donarName,
                age,
                _medicalDetails,
                donarPhone,
                bottleId,
                publishDate,
                publishDate
             )
             .send({
                 from: account
             })
 
             setMessage('Blood Registered Successfully!\nView it on Etherscan!');
 
             setTimeout(()=> {
                 window.location = process.env.PUBLIC_URL + '/#'+ '/';
             },2000)
 
         }catch(error){
             console.log(error)
         }
        }
     }
    
    return (
        <div className={classes.root}
        >
           <div className={classes.leftDiv}>
            <img src={LogoImage} width='100%' height='100%' alt='Blood Donation Pic' />
           </div>
           <div className={classes.rightDiv}>
           {message && <Alert style={{margin: 10}} severity="success">{message}</Alert>}
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
                        id="medical"
                        label="Medical Details"
                        variant="outlined"
                        value={medicalDetails}
                        onChange={e => setMedicalDetails(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="age"
                        label="Age"
                        variant="outlined"
                        value={age}
                        onChange={e => setage(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="bottleId"
                        label="Bottle Id"
                        variant="outlined"
                        value={bottleId}
                        onChange={e => setBottleId(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="remarks"
                        label="Remarks"
                        variant="outlined"
                        value={remarks}
                        onChange={e => setRemarks(e.currentTarget.value)}
                    />

            <Button variant="contained" color="primary" disabled={!isValid} onClick={() => regiterBlood()}>
                Register Blood
            </Button>
            </form>
           </div>
        </div>
    );
}

export default BloodRegistration;