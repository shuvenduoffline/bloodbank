import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Button from "@material-ui/core/Button";
import { getBloodStatus } from "../util/Util";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//  [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ]
export default function BasicTable({ data, verifyBottle }) {
  const classes = useStyles();

  const deliverBottle = (id, group) => {
    window.location =
      process.env.PUBLIC_URL + "/#" + "/deliver/" + id + "/" + group;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>HealthCare Name</TableCell>
            <TableCell>HealthCare Type</TableCell>
            <TableCell>Contact Person</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Agency Address</TableCell>
            <TableCell>Pincode</TableCell>

            <TableCell>NoBottlesDemanded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, id) => (
            <TableRow key={id}>
              <TableCell>{id + 1}</TableCell>
              <TableCell>{row.agencyName}</TableCell>
              <TableCell>{row.agencyType}</TableCell>
              <TableCell>{row.contactPerson}</TableCell>
              <TableCell>{row.contactNo}</TableCell>
              <TableCell>{row.agencyAddress}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell>{row.NoBottlesDemanded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
