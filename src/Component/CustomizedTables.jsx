import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { AppContext } from "../App";
import { IconButton } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { cartDAta, setCArtData, setNotification } = useContext(AppContext);
  const state = useContext(AppContext);
  console.log("state", state);
  const handleDelete = (itemId) => {
    const newCart = cartDAta.filter((item) => item.id !== itemId);
    setCArtData(newCart);

    setNotification((prev) => prev - 1);
  };

  const totalSum = cartDAta.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // console.log("Total Price:", totalSum);
  // console.log("data ..... ", cartDAta);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, mt: "5%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="right">Item Price</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell align="center">Multi Items price</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartDAta.map((item) => (
            <StyledTableRow key={item.id}>
              
              <StyledTableCell component="th" scope="item">
                <img
                  src={item.img}
                  alt=""
                  style={{ width: "150px", height: "100px" }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">{item.disription}</StyledTableCell>
              <StyledTableCell align="right">{item.price}$</StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                {item.price * item.quantity}$
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => handleDelete(item.id)} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}

        {cartDAta.length === 0 ? ( <h1 style={{textAlign:'center'}}> Product Not Found </h1>) :(
            <StyledTableRow>
              <StyledTableCell colSpan={3} />
              <StyledTableCell
                colSpan={2}
                sx={{ backgroundColor: "#1976d2", color: "white" }}
              >
                <b>Subtotal: </b>
              </StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{ backgroundColor: "#1976d2", color: "white", }}
              >
                <b>{totalSum}$ </b>

              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
