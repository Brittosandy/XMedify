// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Link,
//   Stack,
//   Typography,
// } from "@mui/material";
// import logo from "../../assets/logo.png";
// import fb from "../../assets/fb.png";
// import pinterest from "../../assets/pinterest.png";
// import twitter from "../../assets/twitter.png";
// import yt from "../../assets/yt.png";
// import FooterLink from "./FooterLink";

// export default function Footer() {
//   return (
//     <Box bgcolor="primary.secondary" pb={3} pt={6}>
//       <Container maxWidth="xl" textAlign="center">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4.5}>
//             <Stack
//               textAlign="center"
//               alignItems="flex-start"
//               justifyContent="space-between"
//               height={1}
//             >
//               <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
//               <Stack direction="row" spacing={1.5}>
//                 <Box component="img" src={fb} height={36} />
//                 <Box component="img" src={twitter} height={36} />
//                 <Box component="img" src={yt} height={36} />
//                 <Box component="img" src={pinterest} height={36} />
//               </Stack>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>Orthology</FooterLink>
//               <FooterLink>Neurology</FooterLink>
//               <FooterLink>Dental Care</FooterLink>
//               <FooterLink>Opthalmology</FooterLink>
//               <FooterLink>Cardiology</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>
//         </Grid>

//         <Typography
//           fontWeight={300}
//           color="#fff"
//           fontSize={14}
//           pt={3}
//           mt={5}
//           borderTop="1px solid rgba(255,255,255,0.1)"
//         >
//           Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          {/* Logo + Social */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="center">
              <Box src={logo} height={36} alt="Medify" component="img" />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          {/* Links Group 1 */}
          <Grid item xs={12} md={2}>
            <Stack spacing={2} alignItems="center">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Links Group 2 */}
          <Grid item xs={12} md={2}>
            <Stack spacing={2} alignItems="center">
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          {/* Links Group 3 */}
          <Grid item xs={12} md={2}>
            <Stack spacing={2} alignItems="center">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
          textAlign="center"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
