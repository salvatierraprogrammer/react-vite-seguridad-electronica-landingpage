import { useState } from "react";
import { Container, Grid, Card, CardMedia, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import cam1 from '../../assets/cam1.jpeg';
import cam2 from '../../assets/cam2.jpeg';
import cam3 from '../../assets/cam3.jpeg';
import cam4 from '../../assets/cam4.jpeg';
import cam5 from '../../assets/cam5.jpeg';
import cam6 from '../../assets/cam6.jpeg';
import cam8 from '../../assets/cam8.jpeg';
import cam9 from '../../assets/cam9.jpeg';
import cam10 from '../../assets/cam10.jpeg';

const Gallery = ({id}) => {
  const [open, setOpen] = useState(false); // Estado para abrir/cerrar el modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  const images = [
    cam1,
    cam2,
    cam3,
    cam4,
    cam5,
    cam6,
    cam8,
    cam9,
    cam10,
  ];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container id={id} maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Galería
      </Typography>
      <Grid container spacing={4}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              onClick={() => handleOpen(src)}
            >
              <CardMedia
                component="img"
                height="200"
                image={src}
                alt={`Instalación ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para la imagen ampliada */}
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              zIndex: 10,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <img
            src={selectedImage}
            alt="Imagen Ampliada"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </div>
      </Modal>
    </Container>
  );
};

export default Gallery;