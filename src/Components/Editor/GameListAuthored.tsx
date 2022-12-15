import React, { type FC, type ReactElement, useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box
} from "@mui/material";
import { saveGameInfo } from "../../types/global";
import { DataGrid, GridColDef, GridValueGetterParams, GridValueFormatterParams } from '@mui/x-data-grid';
import axios from "axios";
import moment from "moment";

const AuthoredListPopup: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [gamesAuthored, setGamesAuthored] = useState<saveGameInfo[] | null>(null)
  const hasMounted = useRef<boolean>(false);
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const getPublicGame = async () => {
    await axios
      .get("https://tokyo-noire-server-development.herokuapp.com/test")
      .then((response) => {
        setGamesAuthored(response.data);
      });
  };

  useEffect(() => {
    if (!hasMounted.current && !gamesAuthored) {
      getPublicGame();
      hasMounted.current = true;
    }
  }, [hasMounted]);

console.log(gamesAuthored);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'titleOfGame',
    headerName: 'Case Name',
    width: 150,
    editable: true,
  },
  {
    field: 'dateCreated',
    headerName: 'Created On',
    type: 'date',
    width: 150,
    valueFormatter: (params: GridValueGetterParams) => 
     moment(params?.value).format("DD/MM/YYYY hh:mm A"),

  },
  {
    field: 'dateUpdated',
    headerName: 'Last Modified',
    type: 'date',
    width: 150,
    valueFormatter: (params: GridValueGetterParams) => 
    moment(params?.value).format("DD/MM/YYYY hh:mm A")
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


  return (
    <div className="w-full h-full mt-5 overflow-x-auto flexCenterDiv">
        <p className="self-center p-5 text-xl text-center uppercase font-heading">Welcome USERNAME</p>
        <DialogContent>
          <p className="text-center font-body1">
          &quot;Is there a mystery afoot that you&apos;re itching for others to solve?&quot;
          </p>
          </DialogContent>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
};

export default AuthoredListPopup;
