import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import UserService from "./services";

import * as S from "./styles";

export function Users() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await UserService.getAllUsers();
        setRows(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <S.text>Name</S.text>
            </TableCell>
            <TableCell align="right">
              <S.text>Username</S.text>
            </TableCell>
            <TableCell align="right">
              <S.text>Email</S.text>
            </TableCell>
            <TableCell align="right">
              <S.text>Phone</S.text>
            </TableCell>
            <TableCell align="right">
              <S.text>WebSite</S.text>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <S.text>{row.name}</S.text>
              </TableCell>
              <TableCell align="right">
                <S.text>{row.username}</S.text>
              </TableCell>
              <TableCell align="right">
                <S.text>{row.email}</S.text>
              </TableCell>
              <TableCell align="right">
                <S.text>{row.phone}</S.text>
              </TableCell>
              <TableCell align="right">
                <S.text>{row.website}</S.text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
