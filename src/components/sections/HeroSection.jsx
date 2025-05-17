import { Container, Typography, Button, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const HeroSection = ({ id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://blog.coverix.mx/hubfs/Blog/que-es-y-para-que-sirve-la-seguridad-electronica.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111", // Fondo oscuro de respaldo
        transition: "background-image 1s ease-in-out",
        backgroundImage: imageLoaded
          ? "url('https://blog.coverix.mx/hubfs/Blog/que-es-y-para-que-sirve-la-seguridad-electronica.jpg')"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Capa oscura */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />
      
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imageLoaded ? (
          <>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
              Seguridad y Confianza para tu Hogar y Negocio
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Instalación profesional de cámaras Dahua, Hikvision y sistemas IP.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contacto"
              aria-label="Ir a sección de contacto"
            >
              Contáctame
            </Button>
          </>
        ) : (
          <CircularProgress color="inherit" size={60} />
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;
