import { CircularProgress, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowModesModel,
} from "@mui/x-data-grid";
import Visualizer from "../../components/Visualizer";
import { useQuery } from "react-query";
import axios from "axios";
import { URL_API } from "../../../config";
import { useAuth } from "../../providers/AuthContext";


export default function Home() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [selectedRow, setSelectedRow] = useState({paciente: ''});
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const { token } = useAuth();

  const anamneses = useQuery(
    ["anamneses", selectedRow?.paciente],
    () => {
      if (!selectedRow) return;
      return axios.get(`${URL_API}/anamneses/${selectedRow.paciente}`).then((response) => response.data);
    },
    {
      enabled: !!selectedRow.paciente,
      retry: 3,
      refetchOnWindowFocus: true,
    }
  );

  const { data, isLoading, error } = useQuery(
    "pacientes",
    () => {
      return axios.get(`${URL_API}/anamneses/pacientes/${token}`).then((response) => response.data);
    },
    {
      retry: 3,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getColumnWidth = (percentage: number) => {
    return windowWidth * percentage;
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "paciente",
      headerName: "Nome do Paciente",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "data",
      headerName: "Data de cadastro",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams<any, string>) => {
        const date = new Date(params?.value??0);
        return date.toLocaleDateString("pt-BR")
        },
    },
  ];

  const adjustedColumns = columns.map((col) => ({
    ...col,
    flex: getColumnWidth(col.flex ?? 0),
  }));
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress size={65} />
      </div>
    );
  }
  if (error) {
    return (
      <Alert variant="filled" severity="error">
        Error ao gerar lista de anamnese
      </Alert>
    );
  }

  const handleRowClick = (params: any) => {
    setSelectedRow(params.row)
    setOpenModal(true)
  };

  return (
    <div style={{ height: '84vh', width: '100%' }}>
      <DataGrid
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        editMode="row"
        rows={data?.data ?? []}
        rowModesModel={rowModesModel}
        columns={adjustedColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        slotProps={{
          toolbar: { setRowModesModel, showQuickFilter: true },
        }}
        localeText={{
          toolbarQuickFilterPlaceholder: "Pesquisar",
        }}
        autoHeight
        style={{ width: "100%" }}
        onRowClick={handleRowClick}
      />
      <Visualizer open={openModal} data={anamneses?.data?.data} handleClose={handleClose} paciente={selectedRow.paciente} />
    </div>
  );
};
