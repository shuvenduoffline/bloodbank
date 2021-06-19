import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LogoImage from '../assets/add_agency.svg'
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {BLOOD_BANK_ADDRESS,BLOOD_BANK_ABI} from '../SmartContractConfig.js'

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
         height: '90vh',
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

const AddAgency = ({account}) => {

    // agency.agencyType=_agencyType;
    // agency.agencyName = _agencyName;
    // agency.addressID = _addressID;
    // agency.contact_Person = _contact_Person;
    // agency.contact_No = _contact_No;
    // agency.address_Line1 = _address_Line1;
    // agency.address_Line2 =_address_Line2;
    // agency.pincode =_pincode;

    const classes = useStyles();
    const [agencyType,setAgencyType] = useState('')
    const [agencyName,setAgencyName] = useState('')
    const [addressID,setAddressID] = useState('')
    const [contact_Person,setContact_Person] = useState('')
    const [contact_No,setContact_No] = useState('')
    const [address_Line1,setAddress_Line1] = useState('')
    const [pincode,setPincode] = useState('')
    const [message,setMessage] = useState('')

    const isValid = agencyType && agencyName && addressID && contact_Person && contact_No && address_Line1 && pincode

    console.log('add agency : '+ account)

    const addAgencyToBlockChain = () => {
       if(isValid){        
        //    let publishDate = new Date().toLocaleDateString(); //web3.utils.fromAscii(docName)
        // //convert to better use
        // publishDate = window.web3.utils.fromAscii(publishDate);
        // const _bloodGroup = window.web3.utils.fromAscii(bloodG);
        // const doc_id = window.web3.utils.fromAscii(docID);
        console.log("Adding Agecy");
        const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
        bloodBankContract.defaultAccount = account;

        try{
            bloodBankContract.methods.addAgency(
                agencyType,
                agencyName,
                addressID,
                contact_Person,
                contact_No,
                address_Line1,
                pincode
            )
            .send({
                from: account
            })

            setMessage('Added Agency Details Successfully!\nView it on Etherscan!');

            setTimeout(()=> {
                window.location = '/';
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
            <img src={LogoImage} width='60%' height='60%' alt='Blood Donation Pic' style={{marginTop : 30}} />
           </div>
           <div className={classes.rightDiv}>
           {message && <Alert style={{margin: 10}} severity="success">{message}</Alert>}
           <form className={classes.rightDiv} autoComplete="off">
               
                    <TextField
                        required
                        id="name"
                        label="Agency Name"
                        variant="outlined"
                        value={agencyName}
                        onChange={e => setAgencyName(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="agencytype"
                        label="Agency Type"
                        variant="outlined"
                        value={agencyType}
                        onChange={e => setAgencyType(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="agency_address"
                        label="Agency Address"
                        variant="outlined"
                        value={addressID}
                        onChange={e => setAddressID(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="contact_person"
                        label="Contact Person"
                        variant="outlined"
                        value={contact_Person}
                        onChange={e => setContact_Person(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="contact_number"
                        label="Contact Number"
                        variant="outlined"
                        value={contact_No}
                        onChange={e => setContact_No(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="agency_address"
                        label="Address"
                        variant="outlined"
                        value={address_Line1}
                        onChange={e => setAddress_Line1(e.currentTarget.value)}
                    />
                    <TextField
                        required
                        id="agency_pincode"
                        label="Pincode"
                        variant="outlined"
                        value={pincode}
                        onChange={e => setPincode(e.currentTarget.value)}
                    />

            <Button variant="contained" color="primary" disabled={!isValid} onClick={() => addAgencyToBlockChain()}>
                Add Agency
            </Button>
            </form>
           </div>
        </div>
    );
}

export default AddAgency;