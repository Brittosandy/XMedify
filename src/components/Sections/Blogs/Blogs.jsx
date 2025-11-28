// import { Box, Container, Grid, Typography } from "@mui/material";
// import BlogCard from "./BlogCard";

// export default function Blogs() {
//     return (
//         <Box py={6}>
//             <Container>
//                 <Typography color='primary.main' fontWeight={600} textAlign='center'>
//                     Blog & News
//                 </Typography>
//                 <Typography textAlign='center' variant='h2' mb={2}>
//                     Read Our Latest News
//                 </Typography>

//                 <Grid container spacing={4}>
//                     <Grid item xs={12} md={4}>
//                         <BlogCard />
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <BlogCard />
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <BlogCard />
//                     </Grid>
//                 </Grid>

//             </Container>
//         </Box>
//     )
// }

// import { Box, Container, Grid, Typography } from "@mui/material";
// import BlogCard from "./BlogCard";
// import featured from '../../../assets/blog.png';
// import person from '../../../assets/person.png';

// export default function Blogs() {
//     const blogData = [
//         {
//             featuredImg: featured,
//             authorImg: person,
//             category: "Medical",
//             date: "March 31, 2022",
//             title: "6 Tips To Protect Your Mental Health When You're Sick",
//             author: "Rebecca Lee",
//         },
//         {
//             featuredImg: featured,
//             authorImg: person,
//             category: "Health",
//             date: "April 10, 2022",
//             title: "How to Stay Fit During the Pandemic",
//             author: "John Doe",
//         },
//         {
//             featuredImg: featured,
//             authorImg: person,
//             category: "Wellness",
//             date: "May 5, 2022",
//             title: "The Benefits of Yoga and Meditation",
//             author: "Alice Smith",
//         },
//     ];

//     return (
//         <Box py={6}>
//             <Container>
//                 <Typography color='primary.main' fontWeight={600} textAlign='center'>
//                     Blog & News
//                 </Typography>
//                 <Typography textAlign='center' variant='h2' mb={2}>
//                     Read Our Latest News
//                 </Typography>

//                 <Grid container spacing={4}>
//                     {blogData.map((blog, index) => (
//                         <Grid item xs={12} md={4} key={index}>
//                             <BlogCard {...blog} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }
// 
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
    return (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
            <Container maxWidth="xl">
                <Typography
                    color="primary.main"
                    fontWeight={600}
                    textAlign="center"
                    sx={{ mb: 1 }}
                >
                    Blog & News
                </Typography>
                <Typography
                    textAlign="center"
                    variant="h2"
                    sx={{ mb: { xs: 3, md: 4 } }}
                >
                    Read Our Latest News
                </Typography>

               <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}><BlogCard /></Grid>
                    <Grid item xs={12} sm={6} md={4}><BlogCard /></Grid>
                    <Grid item xs={12} sm={6} md={4}><BlogCard /></Grid>
                </Grid>
            </Container>
        </Box>
    );
}
