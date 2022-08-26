import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import ButtonDetails from "../ButtonDetails/ButtonDetails";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const rows = [
  {
    email: "ngrundy0@ow.ly",
    type: false,
    date: "22-08-2022",
    state: true,
  },
  {
    email: "rvoules1@hugedomains.com",
    type: false,
    date: "12-02-2022",
    state: false,
  },
  {
    email: "cadnam2@booking.com",
    type: true,
    date: "10-12-2021",
    state: true,
  },
  {
    email: "ocarriage3@europa.eu",
    type: true,
    date: "24-03-2022",
    state: true,
  },
  {
    email: "sbrennenstuhl4@is.gd",
    type: true,
    date: "14-08-2022",
    state: true,
  },
  {
    email: "dgildersleaves5@joomla.org",
    type: false,
    date: "21-05-2022",
    state: true,
  },
  {
    email: "jbenedek6@t.co",
    type: false,
    date: "01-07-2022",
    state: false,
  },
  {
    email: "mrosander7@homestead.com",
    type: true,
    date: "18-10-2021",
    state: true,
  },
  {
    email: "gparr8@xrea.com",
    type: false,
    date: "30-09-2021",
    state: false,
  },
  {
    email: "nfenlon9@xrea.com",
    type: false,
    date: "11-08-2022",
    state: false,
  },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 700 }}>
              Correo Electrónico
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Tipo
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Fecha
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Estado
            </TableCell>
            <TableCell style={{ fontWeight: 700 }} align="center">
              Detalles
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow
              key={row.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="center">
                {row.type ? "Reclamo" : "Queja"}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                {row.state ? "Resuelto" : "Pendiente"}
              </TableCell>
              <TableCell align="center">
                <ButtonDetails />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "Todos", value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "Filas por página",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
