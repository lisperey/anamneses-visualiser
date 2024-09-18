import { Box, Typography, IconButton, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';



interface VisualizerProps {
    open: boolean;
    data: Array<any>;
    handleClose: () => void;
    paciente: string
}

const Visualizer: React.FC<VisualizerProps> = ({ data, open, handleClose, paciente }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
                    maxWidth: "900px",
                    height: { xs: "80%", md: "70%" },
                    maxHeight: "600px",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: "8px",
                    border: "2px solid #00000088",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                }}
            >
            <Box sx={{width: "100%"}}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", px: 1, py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography variant="h5">Paciente: {paciente}</Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Divider sx={{ width: "100%" }} />
            

                <Box
                    sx={{
                        width: "100%",
                        maxHeight: { xs: "60vh", md: "450px" },
                        overflowY: "auto",
                        mt: 2,
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            width: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#f1f1f1",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#555",
                        },
                    }}
                >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                                    <TableCell sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd", textAlign: "center" }}>
                                        Pergunta
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd", textAlign: "center" }} align="right">
                                        Resposta
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((r: { pergunta: string; resposta: string }, index: number) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center">{r.pergunta}</TableCell>
                                        <TableCell align="center">{r.resposta}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                </Box>
                <Divider sx={{ width: "100%", mt: 2 }} />
            </Box>
        </Modal>
    )
}

export default Visualizer;