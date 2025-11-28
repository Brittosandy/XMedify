// import { Box, Stack, Typography } from "@mui/material";
// import featured from '../../../assets/blog.png'
// import person from '../../../assets/person.png'

// export default function BlogCard() {
//     return (
//         <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
//             <Box
//                 component='img'
//                 src={featured}
//                 width={1}
//             />
//             <Box p={2}>
//                 <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
//                     Medical | March 31, 2022
//                 </Typography>
//                 <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
//                     6 Tips To Protect Your Mental Health When You're Sick
//                 </Typography>
//                 <Stack direction='row' spacing={1} alignItems='center'>
//                     <Box
//                         component='img'
//                         src={person}
//                         height={32}
//                         width={32}
//                     />
//                     <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
//                         Rebecca Lee
//                     </Typography>
//                 </Stack>
//             </Box>
//         </Box>
//     )
// }

// import { Box, Stack, Typography } from "@mui/material";

// export default function BlogCard({ featuredImg, authorImg, category, date, title, author }) {
//     return (
//         <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
//             <Box
//                 component='img'
//                 src={featuredImg}
//                 width={1}
//                 alt={title}
//             />
//             <Box p={2}>
//                 <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
//                     {category} | {date}
//                 </Typography>
//                 <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
//                     {title}
//                 </Typography>
//                 <Stack direction='row' spacing={1} alignItems='center'>
//                     <Box
//                         component='img'
//                         src={authorImg}
//                         height={32}
//                         width={32}
//                         alt={author}
//                     />
//                     <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
//                         {author}
//                     </Typography>
//                 </Stack>
//             </Box>
//         </Box>
//     );
// }


import { Box, Stack, Typography } from "@mui/material";
import featured from '../../../assets/blog.png';
import person from '../../../assets/person.png';

export default function BlogCard() {
    return (
        <Box
            sx={{
                maxWidth: 345,
                width: '100%',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: 2,
                overflow: 'hidden',            
                height: '100%', // ensure uniform height
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
            }}
        >
            <Box
                component='img'
                src={featured}
                width={1}
                sx={{ display: 'block', objectFit: 'cover', height: 180}}
            />
            <Box sx={{ p: 2, flexGrow: 1 }}>
                <Typography
                    color='#77829D'
                    fontWeight={500}
                    mb={1}
                    fontSize={{ xs: 12, md: 16 }}
                >
                    Medical | March 31, 2022
                </Typography>
                <Typography
                    component='h3'
                    color='#1B3C74'
                    fontSize={{ xs: 14, md: 18 }}
                    fontWeight={500}
                    lineHeight={1.2}
                    mb={2}
                >
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center' mt="auto">
                    <Box
                        component='img'
                        src={person}
                        height={32}
                        width={32}
                        sx={{ borderRadius: '50%' }}
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

