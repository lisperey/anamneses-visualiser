// import { CircularProgress, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowModesModel,
} from "@mui/x-data-grid";
import Visualizer from "../../components/Visualizer";
// import { useQuery } from "react-query";


export default function Home() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [selectedRow, setSelectedRow] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);


  // const { data, isLoading, error } = useQuery(
  //   "linha",
  //   () => {
  //     return axios.get(`${URL_API}/linha`).then((response) => response.data);
  //   },
  //   {
  //     retry: 3,
  //     refetchOnWindowFocus: true,
  //   }
  // );

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
      field: "patientName",
      headerName: "Nome do Paciente",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "formatPublishDate",
      headerName: "Data de cadastro",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "doctorName",
      headerName: "Nome do medico",
      flex: 0.1,
      align: 'center',
      headerAlign: 'center'
    },

  ];
  const data = [
    {
      "id": "1",
      "patientName": "Gustavo",
      "formatPublishDate": "08/09/2024",
      "doctorName": "Filipe"
    },
    {
      "id": "2",
      "patientName": "Gustavo",
      "formatPublishDate": "08/09/2024",
      "doctorName": "Filipe"
    },
    {
      "id": "3",
      "patientName": "Gustavo",
      "formatPublishDate": "08/09/2024",
      "doctorName": "Filipe"
    },
    {
      "id": "4",
      "patientName": "Gustavo",
      "formatPublishDate": "08/09/2024",
      "doctorName": "Filipe"
    },

  ]

  const adjustedColumns = columns.map((col) => ({
    ...col,
    flex: getColumnWidth(col.flex ?? 0),
  }));
  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "80vh",
  //       }}
  //     >
  //       <CircularProgress size={65} />
  //     </div>
  //   );
  // }
  // if (error) {
  //   return (
  //     <Alert variant="filled" severity="error">
  //       Error ao gerar lista de linhas
  //     </Alert>
  //   );
  // }

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
        rows={data ?? []}
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
       <Visualizer open={openModal} data={selectedRow} handleClose={handleClose}/>
    </div>
  );
};
