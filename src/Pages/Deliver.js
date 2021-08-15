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
import { useParams } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
    height: "80vh",
  },
}));

const Deliver = ({ account }) => {
  const classes = useStyles();
  const params = useParams();
  const [message, setMessage] = useState("");
  const [PatientName, setPatientName] = useState("");
  const [PatientAge, setPatientAge] = useState("");
  const [PatientMedicalDetails, setPatientMedicalDetails] = useState("");
  const [PatientContactNo, setPatientContactNo] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [agnecyIndex, setAgencyIndex] = useState(0);
  const [healthCares, setHealthCares] = useState([]);

  const isValid =
    PatientName &&
    PatientAge &&
    PatientMedicalDetails &&
    Remarks &&
    Doctor &&
    healthCares &&
    PatientAge &&
    PatientName.length > 2 &&
    !isNaN(PatientContactNo) &&
    PatientContactNo.length === 10 &&
    !isNaN(PatientAge);

  const markDeliverInBlock = () => {
    if (isValid) {
      console.log("Making delivery Blood");
      const bloodBankContract = new window.web3.eth.Contract(
        BLOOD_BANK_ABI,
        BLOOD_BANK_ADDRESS
      );
      bloodBankContract.defaultAccount = account;

      // _Remarks:
      // _PatientName:
      // _PatientAge:
      // _PatientMedicalDetails:
      // _PatientContactNo:
      // _doctorDetails:
      // _DateDemanded:
      // _DateProvided:
      // _healthCareAgencyindex:

      let publishDate = new Date().toLocaleDateString(); //web3.utils.fromAscii(docName)
      //convert to better use
      publishDate = window.web3.utils.fromAscii(publishDate);

      try {
        bloodBankContract.methods
          .DeliverBloodBottle(
            params.id,
            params.gp,
            window.web3.utils.fromAscii(Remarks),
            window.web3.utils.fromAscii(PatientName),
            PatientAge,
            window.web3.utils.fromAscii(PatientMedicalDetails),
            PatientContactNo,
            Doctor,
            publishDate,
            publishDate,
            agnecyIndex
          )
          .send({
            from: account,
          });

        setMessage("Blood Delivered Successfully!\nView it on Etherscan!");

        setTimeout(() => {
          window.location = process.env.PUBLIC_URL + "/#" + "/";
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => getHealthCareList(), [account]);

  const getHealthCareList = () => {
    if (!account) return;

    const bloodBankContract = new window.web3.eth.Contract(
      BLOOD_BANK_ABI,
      BLOOD_BANK_ADDRESS
    );

    bloodBankContract.defaultAccount = account;

    bloodBankContract.methods
      .HealthCareAgencyList(0)
      .call()
      .then((blockBloodDetails) => {
        const bd_data = blockBloodDetails
          .filter((bd) => bd.pincode !== "0")
          .map((bd, index) => ({
            agencyType: bd.agencyType,
            agencyName: bd.agencyName,
            contactPerson: bd.contactPerson,
            contactNo: bd.contactNo,
            agencyAddress: bd.agencyAddress,
            pincode: bd.pincode,
          }));

        setHealthCares(bd_data);
        console.log(blockBloodDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onAgencySelect = (id) => {
    if (id == -1) {
      window.location = process.env.PUBLIC_URL + "/#" + "/addhealthcare";
    } else {
      setAgencyIndex(id);
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
        <h3>Blood Delivery, Bottle Id : {params.id}</h3>
        {account === CONTRACT_OWNER && (
          <form className={classes.rightDiv} autoComplete="off">
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              value={PatientName}
              onChange={(e) => setPatientName(e.currentTarget.value)}
            />

            <TextField
              required
              id="age"
              label="Age"
              variant="outlined"
              value={PatientAge}
              onChange={(e) => setPatientAge(e.currentTarget.value)}
            />
            <TextField
              required
              id="mdc"
              label="Medical Details"
              variant="outlined"
              value={PatientMedicalDetails}
              onChange={(e) => setPatientMedicalDetails(e.currentTarget.value)}
            />
            <TextField
              required
              id="Contact_Number"
              label="Contact Number"
              variant="outlined"
              value={PatientContactNo}
              onChange={(e) => setPatientContactNo(e.currentTarget.value)}
            />

            <TextField
              required
              id="doctor_name"
              label="Doctor Name"
              variant="outlined"
              value={Doctor}
              onChange={(e) => setDoctor(e.currentTarget.value)}
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Health Care
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={agnecyIndex}
                onChange={(e) => {
                  onAgencySelect(e.target.value);
                }}
                label="Health Care"
              >
                {healthCares?.map((hd, index) => (
                  <MenuItem value={index}>
                    {hd.agencyName +
                      ", " +
                      hd.agencyType +
                      ", " +
                      hd.contactPerson +
                      ", " +
                      hd.contactNo +
                      ", " +
                      hd.agencyAddress +
                      ", " +
                      hd.pincode}
                  </MenuItem>
                ))}

                <MenuItem value={-1}>{"Add New"}</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="remarks"
              label="Remarks"
              variant="outlined"
              value={Remarks}
              onChange={(e) => setRemarks(e.currentTarget.value)}
            />

            <Button
              variant="contained"
              color="primary"
              disabled={!isValid}
              onClick={() => markDeliverInBlock()}
            >
              Deliver Bottle
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Deliver;
