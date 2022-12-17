import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  useContext
} from "react";
import { Box } from "@mui/material";
import { saveGameInfo } from "../../types/global";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridRowParams,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment";
import PublishIcon from '@mui/icons-material/Publish';

const GameListAuthored: FC = (): ReactElement => {

  const columns: GridColDef[] = [
    {
      field: "titleOfGame",
      headerName: "Case Name",
      minWidth: 300,
      flex: 1,
    },

    {
      field: "isPrivate",
      headerName: "Visibility",
      type: "boolean",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      minWidth: 100,
      flex: 2,
    },
    {
      field: "isPublished",
      headerName: "Published",
      type: "boolean",
      sortable: true,
      minWidth: 100,
      flex: 3,
    },
    {
      field: "dateCreated",
      headerName: "Created On",
      type: "date",
      minWidth: 150,
      sortable: true,
      flex: 4,
      valueFormatter: (params: GridValueFormatterParams) =>
        `${moment(params?.value).format("DD/MM/YYYY hh:mm A")}`,
    },
    {
      field: "dateUpdated",
      headerName: "Last Modified",
      type: "date",
      minWidth: 150,
      sortable: true,
      flex: 5,
      valueFormatter: (params: GridValueFormatterParams) =>
        `${moment(params?.value).format("DD/MM/YYYY hh:mm A")}`,
    },
    {
      minWidth: 200,
      field: "actions",
      type: "actions",
      flex: 6,
      /* @ts-ignore */
      getActions: (params) => [
        <GridActionsCellItem key="1" icon={<ModeEditIcon />} label="Edit" />,
        <GridActionsCellItem key="2" icon={<PublishIcon />} label="Publish" />,
        <GridActionsCellItem key="3" icon={<VisibilityIcon />} label="Visibility" />,
        <GridActionsCellItem key="4" icon={<DeleteIcon />} label="Delete" />,
      ],
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <Box sx={{ height: 400}}
  justifyContent="center"
  alignItems="center">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
      </>
  );
};

export default GameListAuthored;
