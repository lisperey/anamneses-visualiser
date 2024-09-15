import { Box, Typography, IconButton, Divider } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface VisualizerProps {
    open: boolean;
    data: any;
    handleClose: () => void;
}

const Visualizer: React.FC<VisualizerProps> = ({ data, open, handleClose}) => {
    return (
        <Modal
            open={open}
            onClose={()=> []}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 600, bgcolor: "background.paper", boxShadow: 24, borderRadius: "8px", border: "2px solid #00000088" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 1, py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography variant="h5"></Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Divider sx={{ width: "100%" }} />
                <Box sx={{ mb: 0, px: 2, py: 2 }}>
                    visualizou total
                </Box>
                <Divider sx={{ width: "100%" }} />
            </Box>
        </Modal>
    )
}

export default Visualizer;