import { Container, Box, Typography, Button, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Contact = ({ id }) => {
  return (
    <Box id={id} sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Consulta por tu presupuesto
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 3, color: "text.secondary", maxWidth: 700, mx: "auto" }}
        >
          Instalación en domicilio, departamentos, habitaciones. <br />
          Instalación en comercios: locales pequeños y grandes.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, color: "text.secondary", maxWidth: 700, mx: "auto" }}
        >
          Trabajamos en Capital Federal (CABA) y Zona Sur: Avellaneda, Lomas de Zamora, Lanús, Banfield, Temperley, entre otras localidades.
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<WhatsAppIcon sx={{ fontSize: 32 }} />}
              href="https://wa.me/5491131034391?text=Hola,%20estoy%20interesado%20en%20su%20servicio%20de%20instalación"
              target="_blank"
              sx={{
                py: 3,
                px: 4,
                textTransform: "none",
                fontSize: "1.1rem",
                borderRadius: 3,
                background: "linear-gradient(45deg, #25D366, #128C7E)",
                boxShadow: "0px 4px 20px rgba(37, 211, 102, 0.3)",
                "&:hover": {
                  boxShadow: "0px 6px 25px rgba(37, 211, 102, 0.4)",
                },
              }}
            >
              Contáctanos por WhatsApp
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<EmailIcon sx={{ fontSize: 32 }} />}
              href="mailto:salvatierradev@gmail.com"
              target="_blank"
              sx={{
                py: 3,
                px: 4,
                textTransform: "none",
                fontSize: "1.1rem",
                borderRadius: 3,
                background: "linear-gradient(45deg, #3f51b5, #1a237e)",
                boxShadow: "0px 4px 20px rgba(63, 81, 181, 0.3)",
                "&:hover": {
                  boxShadow: "0px 6px 25px rgba(63, 81, 181, 0.4)",
                },
              }}
            >
              Envíanos un Email
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
