import { Container, Typography, Button, Box } from "@mui/material";
import { useEffect } from "react";

const HeroSection = ({ id }) => {
  // Precarga de imagen
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://blog.coverix.mx/hubfs/Blog/que-es-y-para-que-sirve-la-seguridad-electronica.jpg";
    img.onload = () => {
      console.log("Imagen precargada");
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
        backgroundImage:
          "url('https://blog.coverix.mx/hubfs/Blog/que-es-y-para-que-sirve-la-seguridad-electronica.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Capa oscura para mejor contraste */}
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
        }}
      >
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
          href="#contacto" // Ajustá esto si usás otra sección
          aria-label="Ir a sección de contacto"
        >
          Contáctame
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
