import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import CameraIcon from "@mui/icons-material/CameraAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { motion } from "framer-motion"; // ✅ Importar motion

const MotionCard = motion(Card); // ✅ Crear componente animado

const Services = ({ id }) => {
  const services = [
    {
      title: "¿Querés ver tu casa desde el celu?",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Instalo cámaras con acceso remoto. Te dejo todo configurado para que mires tu casa o negocio desde cualquier lugar.",
    },
    {
      title: "¿Tus cámaras dejaron de funcionar?",
      icon: <SettingsIcon fontSize="large" />,
      description:
        "Hago mantenimiento, reparo fallas y ajusto todo para que tu sistema vuelva a andar como corresponde.",
    },
    {
      title: "Instalación de Cámaras Dahua y Hikvision",
      icon: <CameraIcon fontSize="large" />,
      description:
        "Colocación profesional con monitoreo desde el celular o la compu. Trabajo limpio, rápido y bien hecho.",
    },
  ];

  return (
    <Container id={id} maxWidth="lg" sx={{ py: 15 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 10 }}
      >
        Nuestros Servicios
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              sx={{
                textAlign: "center",
                p: 4,
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                borderRadius: "16px",
              }}
              elevation={3}
            >
              <Box sx={{ mb: 2, color: "primary.main" }}>{service.icon}</Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
