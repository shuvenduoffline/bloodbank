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

import Table from "../Components/Table";

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

const Collection = ({ account }) => {
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

  const gotoLeft = () => {
    if (page > 1) {
      loadData(page - 1);
      setPage(page - 1);
    }
  };
  const gotoRight = () => {
    if (data.length === 10) {
      loadData(page + 1);
      setPage(page + 1);
    }
  };

  React.useEffect(() => loadData(1), [account]);

  const loadData = (page) => {
    console.log("Getting blood details", page);
    console.log("Account Details ", account);

    if (page != null && !isNaN(page)) {
      const bloodBankContract = new window.web3.eth.Contract(
        BLOOD_BANK_ABI,
        BLOOD_BANK_ADDRESS
      );

      bloodBankContract.defaultAccount = account;

      bloodBankContract.methods
        .getBloodBottleList(10 * (page - 1))
        .call()
        .then((blockBloodDetails) => {
          const bd_data = blockBloodDetails
            .filter(
              (bd) => bd.agency !== "0x0000000000000000000000000000000000000000"
            )
            .map((bd) => ({
              id: bd.BloodBottleId,
              bloodGroup: bd.BloodGroup,
              Quality: window.web3.utils.toAscii(bd.Quality),
              Donar: window.web3.utils.toAscii(bd.DonerName),
              age: bd.DonerAge,
              md: window.web3.utils.toAscii(bd.DonerMedicalDetails),
              ph: bd.DonerContactNo,
              agency: bd.agency,
              created: window.web3.utils.toAscii(bd.DateCreated),
              status: bd.Status,
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
      <Table data={data} verifyBottle={verifyBottle} />
      <div className={classes.page}>
        <p onClick={() => gotoLeft()}>{" << "}</p>
        <h3>{page}</h3>
        <p onClick={() => gotoRight()}>{" >> "}</p>
      </div>
    </div>
  );
};

export default Collection;
