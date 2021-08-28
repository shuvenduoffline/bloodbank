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
import { getBloodStatus, getBlooodGroup } from "../util/Util";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
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
            <TableCell>Blood ID</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Donor</TableCell>
            <TableCell>Donor Age</TableCell>
            <TableCell>Medical Details</TableCell>
            <TableCell>Donor Contact No</TableCell>
            <TableCell>Agency</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{getBlooodGroup(row.bloodGroup)}</TableCell>
              <TableCell>{row.Quality}</TableCell>
              <TableCell>{row.Donar}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.md}</TableCell>
              <TableCell>{row.ph}</TableCell>
              <TableCell>{row.agency}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>{getBloodStatus(row.status)}</TableCell>
              <TableCell>
                {row.status == 2 ? (
                  <AssignmentTurnedInIcon style={{ cursor: "pointer" }} />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    // href="#contained-buttons"
                    onClick={() =>
                      row.status == 0
                        ? verifyBottle(row.id)
                        : deliverBottle(row.id, row.bloodGroup)
                    }
                  >
                    {row.status == 0 ? "Verify" : "Deliver"}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
