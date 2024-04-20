import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgb(240, 245, 250)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function HoldingTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME OF THE HOLDINGS</StyledTableCell>
            <StyledTableCell>TICKER</StyledTableCell>
            <StyledTableCell>AVERAGE PRICE</StyledTableCell>
            <StyledTableCell>MARKET PRICE</StyledTableCell>
            <StyledTableCell>LAST CHANGE PERCENTAGE</StyledTableCell>
            <StyledTableCell>MARKET VALUE IN BASE CCV</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.ticker}</StyledTableCell>
              <StyledTableCell>{row.avg_price}</StyledTableCell>
              <StyledTableCell>{row.market_price}</StyledTableCell>
              <StyledTableCell
                style={{ color: +row.latest_chg_pct < 0 && "red" }}>
                {row.latest_chg_pct}
              </StyledTableCell>
              <StyledTableCell>{row.market_value_ccy}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
