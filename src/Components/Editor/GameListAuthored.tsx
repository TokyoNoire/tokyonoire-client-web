// @ts-nocheck
import React, {
  type ReactElement,
  useState,
  useEffect,
  useContext
} from "react";
import { Box, Tooltip } from "@mui/material";
// import { saveGameInfo } from "../../types/global";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PublishIcon from '@mui/icons-material/Publish';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import FadeDiv from "../Helpers/FadeDiv";
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridActionsCellItem,
  GridRowId
} from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import AppContext from "src/AppContext.ts";
import { GameDataSchema } from "./Helpers/GameDataSchema";

interface props {
  listOfGamesByAuthor: [] | null;
  setListOfGamesByAuthor: (array: []) => void;
}

const GameListAuthored = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { setGameData, setGameModules, setGameInfoModule, setActiveModule } = value;
  const { listOfGamesByAuthor, setListOfGamesByAuthor } = props;
  const [rows, setRows] = useState<[]>(listOfGamesByAuthor);
  const [show] = useState<boolean>(true);

  useEffect(() => {
    setRows(listOfGamesByAuthor);
  }, [listOfGamesByAuthor])

  const handleEdit = async (id: GridRowId) => {
    console.log("this is the selected Id: ", id)
    await axios.get(`https://tokyo-noire-server-development.herokuapp.com/editor/${id}/edit`)
      .then(response => {
        setGameData(response.data[0]);
        setGameModules(response.data[0].gameModules);
        setGameInfoModule(response.data[0]);
        setActiveModule("stop")
      })
  }

  const handleDelete = async (id: string) => {
    if (listOfGamesByAuthor) {
      const newListOfGamesByAuthor = [...listOfGamesByAuthor]
      for (let i = 0; i < listOfGamesByAuthor.length; i++) {
        if (listOfGamesByAuthor[i]._id === id) {
          newListOfGamesByAuthor.splice(i, 1)
        }
      }
      setListOfGamesByAuthor(newListOfGamesByAuthor)
    }
    await axios
      .delete(
        `https://tokyo-noire-server-development.herokuapp.com/editor/${id}`
      )
    // .then((response) => setListOfGamesByAuthor(response.data));
  };

  const togglePublish = async (id: string) => {
    if (listOfGamesByAuthor) {
      const newListOfGamesByAuthor = [...listOfGamesByAuthor]
      for (let i = 0; i < listOfGamesByAuthor.length; i++) {
        if (newListOfGamesByAuthor[i]._id === id) {
          console.log(newListOfGamesByAuthor[i])
          newListOfGamesByAuthor[i].dateUpdated = new Date();
          newListOfGamesByAuthor[i].isPublished = !newListOfGamesByAuthor[i].isPublished;
        }
      }
      setListOfGamesByAuthor(newListOfGamesByAuthor)
    }
  }

  const toggleVisibility = async (id: string) => {
    if (listOfGamesByAuthor) {
      const newListOfGamesByAuthor = [...listOfGamesByAuthor]
      for (let i = 0; i < listOfGamesByAuthor.length; i++) {
        if (newListOfGamesByAuthor[i]._id === id) {
          console.log(newListOfGamesByAuthor[i])
          newListOfGamesByAuthor[i].dateUpdated = new Date();
          newListOfGamesByAuthor[i].isPrivate = !newListOfGamesByAuthor[i].isPrivate;
        }
      }
      setListOfGamesByAuthor(newListOfGamesByAuthor)
    }

    // await axios.patch(
    //   `https://tokyo-noire-server-development.herokuapp.com/editor/${gameData._id}`,
    //   gameData
    // ).then(res => console.log(res))
    // console.log("visibility is being triggered")
  }

  const columns: GridColDef[] = [
    {
      field: "titleOfGame",
      headerName: "Case Name",
      minWidth: 250,
      flex: 1,
    },

    {
      field: "isPublished",
      headerName: "Published",
      type: "boolean",
      minWidth: 100,
      flex: 2,
    },
    {
      field: "isPrivate",
      headerName: "Private",
      type: "boolean",
      minWidth: 100,
      flex: 3,
      renderCell: (params) => {
        return params.value
          ? (<CheckIcon fontSize="small" style={{ color: "rgba(255, 255, 255, 0.7)" }} />)
          : (<CloseIcon fontSize="small" style={{ color: "rgba(255, 255, 255, 0.5)" }} />)
      }
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
        <GridActionsCellItem
          key="1"
          icon={<Tooltip title="Edit"><ModeEditIcon /></Tooltip>}
          label="Edit"
          onClick={() => { handleEdit(params.id) }}
          component={Link}
          href={`/editor/${params.id}`}
        />,
        <GridActionsCellItem
          key="2"
          {...(
            params.row.isPublished
              ? { icon: <Tooltip title="Unpublish"><PublishIcon /></Tooltip> }
              : { icon: <Tooltip title="Publish"><SaveAltIcon /></Tooltip> }
          )}
          onClick={() => { togglePublish(params.id) }}
          label="Publish"
        />,
        <GridActionsCellItem
          key="3"
          {...(
            params.row.isPrivate
              ? { icon: <Tooltip title="Set Public"><VisibilityOffIcon /></Tooltip> }
              : { icon: <Tooltip title="Set Private"><VisibilityIcon /></Tooltip> }
          )}
          onClick={() => { toggleVisibility(params.id) }}
          label="Visibility"
        />,
        <GridActionsCellItem
          key="4"
          icon={<Tooltip title="Delete"><DeleteIcon /></Tooltip>}
          onClick={() => { handleDelete(params.id) }}
          label="Delete"
        />,
      ],
    },
  ]

  return (
    <FadeDiv show={show}>
      <Box
        sx={{ height: "auto" }}
        justifyContent="center"
        alignItems="center"
        className="scrollbar"
      >
        <DataGrid
          autoHeight={true}
          rows={rows}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: 'dateCreated',
                  sort: 'desc',
                },
              ],
            },
          }}
        />
      </Box>
    </FadeDiv>
  );
};

export default GameListAuthored;
