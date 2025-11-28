import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

export default function DownloadApp() {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems="center">

          {/* Mobile Poster */}
          <Grid item xs={12} md={5.5}>
            <Box
              component="img"
              src={mobile}
              sx={{
                width: "100%",
                maxWidth: 400,     // Limit the maximum width
                height: "auto",
                display: "block",
                margin: { xs: "0 auto", md: "unset" }, // center on mobile
              }}
            />
          </Grid>

          {/* Text & Form */}
          <Grid item xs={12} md={6.5}>
            <Box position="relative" pl={{ xs: 0, md: 5 }} mb={{ xs: 4, md: 0 }}>
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify
                </Box>{" "}
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 2 }}>
                <Button
                  sx={{ bgcolor: "#333", color: "#fff", py: 1.5, borderRadius: 1.5 }}
                  size="large"
                  startIcon={<img src={playstore} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{ bgcolor: "#333", color: "#fff", py: 1.5, borderRadius: 1.5 }}
                  size="large"
                  startIcon={<img src={apple} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
