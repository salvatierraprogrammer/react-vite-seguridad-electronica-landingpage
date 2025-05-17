import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion"; // ✅ Importar motion

import cam1 from "../../assets/cam1.jpeg";
import cam2 from "../../assets/cam2.jpeg";
import cam3 from "../../assets/cam3.jpeg";
import cam4 from "../../assets/cam4.jpeg";
import cam5 from "../../assets/cam5.jpeg";
import cam6 from "../../assets/cam6.jpeg";
import cam8 from "../../assets/cam8.jpeg";
import cam9 from "../../assets/cam9.jpeg";
import cam10 from "../../assets/cam10.jpeg";

const MotionCard = motion(Card); // ✅ Card animada

const Gallery = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [cam1, cam2, cam3, cam4, cam5, cam6, cam8, cam9, cam10];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container id={id} maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 6 }}
      >
        Galería
      </Typography>
      <Grid container spacing={4}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              onClick={() => handleOpen(src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                cursor: "pointer",
                borderRadius: 2,
                overflow: "hidden",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              elevation={3}
            >
              <CardMedia
                component="img"
                height="200"
                image={src}
                alt={`Instalación ${index + 1}`}
              />
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
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
          <motion.img
            key={selectedImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Imagen Ampliada"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </motion.div>
      </Modal>
    </Container>
  );
};

export default Gallery;
