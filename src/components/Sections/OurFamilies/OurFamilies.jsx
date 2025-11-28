import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/our-families-banner.png'

export default function OurFamilies() {
  return (
    <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container maxWidth="xl">
        <Grid container alignItems='center' spacing={{ xs: 2, md: 10 }} justifyContent="center">

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="primary.main" textAlign={{ xs: "center", md: "left" }}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography variant="h2" textAlign={{ xs: "center", md: "left" }}>
              Our Families
            </Typography>
            <Typography color='#77829D' lineHeight={1.8} textAlign={{ xs: "center", md: "left" }}>
              We will work with you to develop individualised care plans, including management of chronic diseases. 
              If we cannot assist, we can provide referrals or advice about the type of practitioner you require. 
              We treat all enquiries sensitively and in the strictest confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box
              component='img'
              src={banner}
              sx={{ width: "100%", maxWidth: 450, height: "auto", display: "inline-block" }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
