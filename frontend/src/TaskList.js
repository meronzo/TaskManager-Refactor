import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./TaskList.css"

export default function TaskList({ tasks }) {
    console.log(tasks);
    return (


        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            {
                tasks.map((task) => {
                    return (
                        <Accordion sx={{border: `1px solid gray`}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                
                                <Typography className="TaskTitle" sx={{width: "200px", borderBottom: "1px solid gray", paddingBottom: "8px"}}>{task.title}</Typography>
                                <Typography>{task.date}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        )
                })
            }

        </div>
    )
}