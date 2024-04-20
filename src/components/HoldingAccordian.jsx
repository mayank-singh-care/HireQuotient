import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import HoldingTable from "./HoldingTable";
import { Box } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    borderTop: 0,
  },
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:last-child": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: "50%",
    margin: "1rem",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
    color: theme.palette.common.white,
    backgroundColor: "blue",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function HoldingAccordions({ holdingsData }) {
  return (
    <Box
      pt={0.7}
      pb={0.7}
      sx={{
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
        borderRadius: 2,
        backgroundColor: "white",
      }}>
      {holdingsData.map((holding) => (
        <Accordion key={holding[0].asset_class}>
          <AccordionSummary
            aria-controls={holding[0].asset_class}
            id={holding[0].asset_class}>
            <Typography sx={{ fontWeight: "bold" }}>
              {holding[0].asset_class.toUpperCase()} ({holding.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <HoldingTable rows={holding} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
