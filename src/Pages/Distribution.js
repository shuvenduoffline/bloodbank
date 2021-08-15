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

import { getBlooodGroup } from "../util/Util";

import DistributionTable from "../Components/DistributionTable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",

    margin: 20,
    height: "90vh",
  },
  page: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    cursor: "pointer",
  },
}));

const Distribution = ({ account }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);

  // <TableCell>Blood ID</TableCell>
  // <TableCell>Blood Group</TableCell>
  // <TableCell>Quality</TableCell>
  // <TableCell>Donar</TableCell>
  // <TableCell>Donar Age</TableCell>
  // <TableCell>Medical Details</TableCell>
  // <TableCell>Donar Contact No</TableCell>
  // <TableCell>Agency</TableCell>
  // <TableCell>Created</TableCell>
  // <TableCell>Status</TableCell>
  // <TableCell>Actions</TableCell>
  //BloodBottleList

  React.useEffect(() => loadData(1), [account]);

  const loadData = (page) => {
    console.log("Getting blood Distribution details", page);
    console.log("Account Details ", account);

    if (account && page != null && !isNaN(page)) {
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
              NoBottlesDemanded: bd.NoBottlesDemanded,
            }));

          setData(bd_data);
          console.log(blockBloodDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyBottle = (id) => {
    console.log("Verifying blood details", id);
    if (id != null) {
      const bloodBankContract = new window.web3.eth.Contract(
        BLOOD_BANK_ABI,
        BLOOD_BANK_ADDRESS
      );
      bloodBankContract.defaultAccount = account;
      bloodBankContract.methods
        .verifyBloodBottle(id)
        .send({
          from: account,
        })
        .then((blockBloodDetails) => {
          console.log("Verified");
          loadData(page);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.root}>
      <DistributionTable data={data} verifyBottle={verifyBottle} />
    </div>
  );
};

export default Distribution;
