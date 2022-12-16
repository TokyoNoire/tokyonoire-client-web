// @ts-nocheck
import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef
} from "react";
import { useRouter } from "next/router";
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
  GridRowId
} from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment";
import PublishIcon from '@mui/icons-material/Publish';

// const rowss = [
//   { id: 1, isPublished: true, isPrivate:false },
//   { id: 2, isPublished: false, isPrivate:true},
//   { id: 3, isPublished: true, isPrivate:false },
//   { id: 4, isPublished: false, isPrivate:true},
//   { id: 5, isPublished: true, isPrivate:false},
//   { id: 6, isPublished: false, isPrivate:true},
//   { id: 7, isPublished: true, isPrivate:false },
//   { id: 8, isPublished: false, isPrivate:true},
//   { id: 9, isPublished: true, isPrivate:false },
// ];

interface props {
  listOfGamesByAuthor: [] | null;
}

const GameListAuthored: FC = (props: props): ReactElement => {
  const { listOfGamesByAuthor } = props;
  const router = useRouter();
  const [rows, setRows] = React.useState<[]>(listOfGamesByAuthor);

  
  useEffect(() => {
    setRows(listOfGamesByAuthor);
  }, []) 

  const handleEdit = (id:string) => {
    console.log(id)
  //   router.push({
  //     pathname: `/editor/${id}`,
  // });
  };

  console.log(rows)
  const deleteStory = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row._id !== id));
        console.log("triggered")
      });
    },
    [],
  );

  const handleDelete = async (id: string) => {
    await axios
      .delete(
        `https://tokyo-noire-server-development.herokuapp.com/editor/${id}}`
      )
      .then((response) => setListOfGamesByAuthor(response.data));
  };

  const toggleVisibility = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
        row._id === id ? { ...row, isPublished: !row.isPublished } : row,
        ),
      );
    },
    [],
  );

  const togglePrivacy = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
        row._id === id ? { ...row, isPrivate: !row.isPrivate } : row,
        ),
      );
    },
    [],
  );

  const columns: GridColDef[] = [
    {
      field: "titleOfGame",
      headerName: "Case Name",
      minWidth: 300,
      flex: 1,
    },
    
    {
      field: "isPublished",
      headerName: "Published",
      type: "boolean",
      minWidth: 100,
      flex: 3,
    },
    {
      field: "isPrivate",
      headerName: "Visibility",
      type: "boolean",
      minWidth: 100,
      flex: 2,
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
    
      getActions: (params) => [
        <GridActionsCellItem key="1" icon={<ModeEditIcon />} onClick={handleEdit(params.id)} label="Edit" />,
        <GridActionsCellItem key="2" icon={<PublishIcon />} onClick={togglePrivacy(params.id)} label="Publish" />,
        <GridActionsCellItem key="3" icon={<VisibilityIcon />} onClick={toggleVisibility(params.id)} label="Visibility" />,
        <GridActionsCellItem key="4" icon={<DeleteIcon />}  onClick={deleteStory(params.id)} label="Delete" />,
      ],
    },
  ];




  return (
    <>

  
      <Box sx={{ height: 400}}
  justifyContent="center"
  alignItems="center">
        <DataGrid
          rows={rows}
          getRowId={(row) => row._id}
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
