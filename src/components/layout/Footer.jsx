import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 3, textAlign: "center" }}>
      <Container>
        <Typography variant="body1">
          &copy; 2025 Instalador de Cámaras de Seguridad - Todos los derechos reservados
        </Typography>
        <Typography variant="body2">Contacto: +123 456 789 | Email: contacto@example.com</Typography>
      </Container>
    </Box>
  );
};

export default Footer;