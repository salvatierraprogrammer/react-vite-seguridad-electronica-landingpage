import { Container, Box, Typography, Button, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from '@mui/system';

const Contact = ({ id }) => {
  return (
    <Container id={id} maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        Consulta por tu presupuesto
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 5, color: "text.secondary" }}>
        Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 128, 0, 0.2)",
              "&:hover": {
                boxShadow: "0px 6px 15px rgba(0, 128, 0, 0.3)",
              },
            }}
          >
            <Typography variant="h6">Contáctanos por WhatsApp</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            href="mailto:contacto@tucorreo.com" // Reemplaza con tu correo electrónico
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 255, 0.2)",
              "&:hover": {
                boxShadow: "0px 6px 15px rgba(0, 0, 255, 0.3)",
              },
            }}
          >
            <Typography variant="h6">Envíanos un Email</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
