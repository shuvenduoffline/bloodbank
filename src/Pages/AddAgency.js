import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LogoImage from '../assets/agency_doctor.svg'
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {BLOOD_BANK_ADDRESS,BLOOD_BANK_ABI, CONTRACT_OWNER} from '../SmartContractConfig.js'

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
      },
      card: {
        minWidth: 500,
        marginTop: 30,
        minHeight: 250
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
    const [agencyData,setAgencyData] = useState('')
    const [showAddAgency,setShowAddAgency] = useState(false)



    const isValid = agencyType && agencyName && addressID && contact_Person && contact_No && address_Line1 && pincode
    && agencyType.length > 2 && agencyName.length > 2 && addressID.length > 5 && contact_Person.length > 2 && !isNaN(contact_No)
    && contact_No.length === 10 && address_Line1.length > 2 && !isNaN(pincode) && pincode.length === 6 && window.web3 && window.web3.utils.isAddress(addressID)

    

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
                window.location = process.env.PUBLIC_URL + '/#' + '/';
            },2000)

        }catch(error){
            console.log(error)
        }
       }
    }

    React.useEffect(() => {
        loadAgencyDetails(account)
    },[account])

    const loadAgencyDetails =async (acc) => {
        console.log('Acc : '+acc)
        if(acc){
            try{
                const bloodBankContract = new window.web3.eth.Contract(BLOOD_BANK_ABI, BLOOD_BANK_ADDRESS)
                bloodBankContract.defaultAccount = acc;
                bloodBankContract.methods.getAgencyData(
                   acc
                )
                .call()
                .then(agencyData => {
                    console.log(agencyData)
                   setAgencyData(agencyData)
                })
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
           {account === CONTRACT_OWNER && showAddAgency ? <form className={classes.rightDiv} autoComplete="off">
               
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
                    {addressID && window.web3 && !window.web3.utils.isAddress(addressID) &&  <p>Not a valid address!</p>}
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
            </form> : <Card className={classes.card}>
                                    <CardContent>
                                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Word of the Day
                                        </Typography> */}
                                        <Typography variant="h5" component="h2">
                                         Agency Name : {agencyData.agencyName}
                                        </Typography>
                                       
                                        <Typography variant="body2" component="p">
                                        Agency Type : {agencyData.agencyType}
                                        <br />
                                        Address  : {agencyData.addressID}
                                        <br />
                                        Contact Person : {agencyData.contactPerson}
                                        <br />
                                        Contact Number : {agencyData.contactNo}
                                        <br />
                                        Agency Address : {agencyData.agencyAddress}
                                        <br />
                                        Pincode : {agencyData.pincode}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                       {account === CONTRACT_OWNER && <Button onClick={() => setShowAddAgency(true)}>Add Agency</Button> }
                                    </CardActions>
                </Card>}
           </div>
        </div>
    );

//     addressID: "0x1142F4720cE7CCDA94E3aa2FD563Af2A371110Cd"
// ​
// agencyAddress: "Rajabazar, Kolkata"
// ​
// agencyName: "Vein Care"
// ​
// agencyType: "Blood Center"
// ​
// contactNo: "1234567899"
// ​
// contactPerson: "Shuvendu Dhal"
// ​
// length: 7
// ​
// pincode: "700009"
}

export default AddAgency;