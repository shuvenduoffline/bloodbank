import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LogoImage from "../assets/agency_doctor.svg";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  BLOOD_BANK_ADDRESS,
  BLOOD_BANK_ABI,
  CONTRACT_OWNER,
} from "../SmartContractConfig.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  leftDiv: {
    width: "100%",
    alignItems: "center",
    height: "90vh",
  },
  rightDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    height: "60vh",
  },
  card: {
    minWidth: 500,
    marginTop: 30,
    minHeight: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const AddHealthCare = ({ account }) => {
  const classes = useStyles();

  //   string agencyType;
  //   string agencyName;
  //   string contactPerson;
  //   uint contactNo;
  //   string agencyAddress;
  //   uint pincode;
  //   uint NoBottlesDemanded;//keeps track of total no of bottles demanded by an Agency

  const [agencyType, setAgencyType] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [contact_Person, setContact_Person] = useState("");
  const [contact_No, setContact_No] = useState("");
  const [address_Line1, setAddress_Line1] = useState("");
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const isValid =
    agencyType &&
    agencyName &&
    contact_Person &&
    contact_No &&
    address_Line1 &&
    pincode &&
    agencyType.length > 2 &&
    agencyName.length > 2 &&
    contact_Person.length > 2 &&
    !isNaN(contact_No) &&
    contact_No.length === 10 &&
    address_Line1.length > 2 &&
    !isNaN(pincode) &&
    pincode.length === 6;

  const addHealthCareAgency = () => {
    if (isValid) {
      console.log("Adding Health Care");
      const bloodBankContract = new window.web3.eth.Contract(
        BLOOD_BANK_ABI,
        BLOOD_BANK_ADDRESS
      );
      bloodBankContract.defaultAccount = account;

      //string memory  _agencyType,string memory _agencyName,
      //   string memory _contactPerson,
      //   uint _contactNo,string memory _agencyAddress,uint _pincode

      try {
        bloodBankContract.methods
          .addHealthCareAgency(
            agencyType,
            agencyName,
            contact_Person,
            contact_No,
            address_Line1,
            pincode
          )
          .send({
            from: account,
          })
          .then((id) => {
            console.log("Data : " + id);
            setMessage("Agency Registered Successfully!");
          });

        setMessage(
          "Added Health Care Details Successfully!\nView it on Etherscan!"
        );

        setTimeout(() => {
          window.location = process.env.PUBLIC_URL + "/#" + "/";
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftDiv}>
        <img
          src={LogoImage}
          width="60%"
          height="60%"
          alt="Blood Donation Pic"
          style={{ marginTop: 30 }}
        />
      </div>
      <div className={classes.rightDiv}>
        {message && (
          <Alert style={{ margin: 10 }} severity="success">
            {message}
          </Alert>
        )}
        {account === CONTRACT_OWNER && (
          <form className={classes.rightDiv} autoComplete="off">
            <TextField
              required
              id="name"
              label="Health Care Name"
              variant="outlined"
              value={agencyName}
              onChange={(e) => setAgencyName(e.currentTarget.value)}
            />
            <TextField
              required
              id="agencytype"
              label="Health Care  Type"
              variant="outlined"
              value={agencyType}
              onChange={(e) => setAgencyType(e.currentTarget.value)}
            />

            <TextField
              required
              id="contact_person"
              label="Contact Person"
              variant="outlined"
              value={contact_Person}
              onChange={(e) => setContact_Person(e.currentTarget.value)}
            />
            <TextField
              required
              id="contact_number"
              label="Contact Number"
              variant="outlined"
              value={contact_No}
              onChange={(e) => setContact_No(e.currentTarget.value)}
            />
            <TextField
              required
              id="agency_address"
              label="Address"
              variant="outlined"
              value={address_Line1}
              onChange={(e) => setAddress_Line1(e.currentTarget.value)}
            />
            <TextField
              required
              id="agency_pincode"
              label="Pincode"
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.currentTarget.value)}
            />

            <Button
              variant="contained"
              color="primary"
              disabled={!isValid}
              onClick={() => addHealthCareAgency()}
            >
              Add Health Care
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddHealthCare;
