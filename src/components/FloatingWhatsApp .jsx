import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab, Zoom } from "@mui/material";

const FloatingWhatsApp = () => {
  return (
    <Zoom in={true}>
      <Fab
        color="success"
        aria-label="WhatsApp"
        href="https://wa.me/5491131034391?text=Hola,%20estoy%20interesado%20en%20su%20servicio%20de%20instalación"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1300,
          boxShadow: "0px 4px 10px rgba(0, 128, 0, 0.3)",
          "&:hover": {
            boxShadow: "0px 6px 15px rgba(0, 128, 0, 0.5)",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Fab>
    </Zoom>
  );
};

export default FloatingWhatsApp;
