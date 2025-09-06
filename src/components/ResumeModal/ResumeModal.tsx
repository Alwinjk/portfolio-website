import { Dialog, DialogContent, IconButton, Typography, Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { borderRadius: 3, p: 3, maxHeight: '80vh', overflowY: 'auto' } }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Header */}
        <Typography variant="h5" textAlign="center" fontWeight={700}>Alwin Jose Kurian</Typography>
        <Typography textAlign="center" color="textSecondary">alwinjk1997@gmail.com</Typography>
        <Typography textAlign="center" color="primary">linkedin.com/in/alwin-jose-kurian</Typography>

        {/* Professional Summary */}
        <Box sx={{ my: 1}}>
            <Typography variant="subtitle1" fontWeight={800}>PROFESSIONAL SUMMARY</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>
            Software Developer with 4 years of experience building secure, cloud-native applications using Node.js and
            AWS serverless. Skilled in designing microservices and event-driven systems with a strong foundation in OOP,
            SOLID design principles, and TDD practices to ensure scalable and maintainable codebases.
            </Typography>
        </Box>
        

        {/* Skills */}
        <Box sx={{ my: 1}}>
            <Typography variant="subtitle1" fontWeight={800}>SKILLS</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>
            Programming Languages: JavaScript, TypeScript, Java.<br />
            Cloud Technologies: AWS<br />
            Technologies & Tools: AWS CDK, Node.js, React, REST API, Asynchronous services, SQL, NoSQL, GitHub,
            Bitbucket, Unit Testing, Jest, Mocha & Chai, Postman, SoapUI, Confluence, JIRA.
            </Typography>
        </Box>

        {/* Experience */}
        <Box sx={{ my: 1}}>
            <Typography variant="subtitle1" fontWeight={800}>EXPERIENCE</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography fontWeight={400}>Software Developer, Tata Consultancy Services Canada Inc., Toronto, ON, Canada (Jan 2022 – Presently)</Typography>
            <Box component="ul" sx={{ pl: 3 }}>
                <li>Led the design and development of a cloud-hosted, high-traffic payment API platform (SaaS / API-as-a-Service).</li>
                <li>Built APIs following OOP and SOLID design patterns, improving reusability and maintainability across modules.</li>
                <li>Optimized a high-traffic Payment Status API by redesigning DynamoDB queries and refactoring service logic.</li>
                <li>Designed an event-driven fan-out system to support parallel workflows, improving system throughput.</li>
                <li>Integrated Kafka topics as producer and consumer for real-time data processing.</li>
                <li>Automated failure recovery with DLQs, enabling reprocessing of failed events.</li>
                <li>Delivered real-time monitoring dashboards, reducing manual effort and improving visibility.</li>
                <li>Engineered secure APIs with AWS KMS encryption and JWT authentication.</li>
                <li>Implemented Redis caching for Cognito JWT tokens, reducing authentication latency.</li>
                <li>Created and maintained API documentation using Swagger and OpenAPI specifications.</li>
                <li>Applied TDD (Jest) across services, reducing production defects.</li>
                <li>Contributed to CI/CD pipelines with GitHub and Bitbucket.</li>
            </Box>
        </Box>

        {/* Education */}
        <Box sx={{ my: 1}}>
            <Typography variant="subtitle1" fontWeight={800}>EDUCATION</Typography>
            <Divider sx={{ my: 1 }} />{/* Education items as flex rows */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {/* First row */}
                <Box sx={{my:1}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={400}>Post Graduate Diploma, Web Design and Development</Typography>
                        <Typography sx={{mx: 2}}>August 2021</Typography>
                    </Box>
                    <Typography sx={{ ml: 0 }}>{`Conestoga College Institute of Technology and Advanced Learning – Kitchener, ON, Canada.`}</Typography>
                </Box>
                {/* Second row */}
                <Box sx={{my: 1}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={400}>Bachelor of Computer Applications, Computer Science</Typography>
                        <Typography sx={{mx: 2}}>March 2018</Typography>
                    </Box>
                    <Typography sx={{ ml: 0 }}>{`Mahatma Gandhi University – Kottayam, Kerala, India.`}</Typography>
                </Box>
            </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
