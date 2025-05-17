import { Box, Typography, Container, Divider, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 5,
        mt: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="Logo Tranca Cam"
          sx={{ height: 200, mb: 2 }}
        />

        <Typography variant="body1" sx={{ mb: 2 }}>
          Instalador de Cámaras de Seguridad
        </Typography>

        {/* Íconos de redes sociales */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <IconButton
            href="https://www.facebook.com/salvatierra.dev/"
            target="_blank"
            sx={{ color: "#fff", "&:hover": { color: "#3b5998" } }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/salvatierrra.dev/"
            target="_blank"
            sx={{ color: "#fff", "&:hover": { color: "#e1306c" } }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 3 }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2025 Todos los derechos reservados.
        </Typography>
        <Typography variant="body2">
          Contacto: +54 9 11 31034391 Email:{"  "}
          <a
            href="mailto:salvatierradev@gmail.com"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            salvatierradev@gmail.com
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
