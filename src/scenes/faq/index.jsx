import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum totam possimus laboriosam distinctio et repellat quas numquam. Officiis illo expedita ad dignissimos laboriosam dolorum cum ex dolor iure aliquam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        second important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum totam possimus laboriosam distinctio et repellat quas numquam. Officiis illo expedita ad dignissimos laboriosam dolorum cum ex dolor iure aliquam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum totam possimus laboriosam distinctio et repellat quas numquam. Officiis illo expedita ad dignissimos laboriosam dolorum cum ex dolor iure aliquam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Very important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum totam possimus laboriosam distinctio et repellat quas numquam. Officiis illo expedita ad dignissimos laboriosam dolorum cum ex dolor iure aliquam?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        the final important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum totam possimus laboriosam distinctio et repellat quas numquam. Officiis illo expedita ad dignissimos laboriosam dolorum cum ex dolor iure aliquam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default FAQ;
