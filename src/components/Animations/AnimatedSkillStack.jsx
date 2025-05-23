// import { Box, Typography, useTheme } from '@mui/material';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';

// // Card skill data
// const skills = [
//   { title: 'React', color: '#61dafb' },
//   { title: 'AWS', color: '#ff9900' },
//   { title: 'Node.js', color: '#68a063' },
// ];

// // Card animation variants
// const stackVariants = {
//   hidden: (i) => ({
//     y: i * -10,
//     opacity: 0,
//     scale: 0.95,
//   }),
//   visible: (i) => ({
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delay: i * 0.2,
//       type: 'spring',
//       stiffness: 100,
//     },
//   }),
// };

// export default function AnimatedSkillStack() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-100px' });
//   const theme = useTheme();

//   return (
//     <Box
//       component="section"
//       ref={ref}
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // background: theme.palette.background.default,
//         // position: 'relative',
//       }}
//     >
//       <Box position="relative" width="300px" height="300px">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={skill.title}
//             custom={i}
//             initial="hidden"
//             animate={inView ? 'visible' : 'hidden'}
//             variants={stackVariants}
//             style={{
//               position: 'absolute',
//               width: '100%',
//               height: '100px',
//               top: i * 20,
//               zIndex: skills.length - i,
//             }}
//           >
//             <Box
//               sx={{
//                 height: '100%',
//                 borderRadius: 2,
//                 boxShadow: 4,
//                 bgcolor: theme.palette.background.paper,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderLeft: `6px solid ${skill.color}`,
//               }}
//             >
//               <Typography variant="h6" fontWeight="bold">
//                 {skill.title}
//               </Typography>
//             </Box>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
//   );
// }
