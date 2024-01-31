import React, { useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import makeStyles from "@mui/styles/makeStyles";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const PaperStyled = styled(Paper)({
  backgroundColor: "#302f4e",
  borderRadius: "20px",
  boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
  padding: "24px",
  height: "100%",
});

const useStyles = makeStyles({
  timeline: {
    "& .MuiTimelineConnector-root": {
      backgroundColor: "#FF4C60",
    },
  },
  timelineYear: {
    color: "#8B88B1",
    fontSize: "16px",
    marginBottom: "8px",
  },
  timelineType: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "600",
  },
  timelineDes: {
    color: "#fff",
    fontSize: "17px",
  },
  gpa: {
    color: "#fff",
    fontSize: "16px",
  },
  timelineEdu: {
    color: "#fff",
    fontSize: "17px",
    marginBottom: "8px",
  },
  timelineCompany: {
    color: "#fff",
    fontSize: "17px",
    marginBottom: "8px",
  },
  educationIcon: {
    color: "#FF4C60",
    fontSize: "30px",
    marginTop: "5px",
    marginBottom: "5px",
  },
});

function Experience() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Experience - My Resume | Songsuwin Kamhaeng";
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "600", color: "#fff" }}>
        Experience
      </Typography>
      <Box sx={{ marginTop: "24px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={6}>
            <PaperStyled>
              <Timeline
                className={classes.timeline}
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <SchoolOutlinedIcon className={classes.educationIcon} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography className={classes.timelineYear}>
                      2012 - 2014
                    </Typography>
                    <Typography className={classes.timelineType}>
                      High School
                    </Typography>
                    <Typography className={classes.timelineEdu}>
                      Klaeng Wittayasathaworn School
                    </Typography>
                    <Typography className={classes.gpa}>GPA : 3.30</Typography>
                    <Box sx={{ marginBottom: "40px" }}></Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <SchoolOutlinedIcon className={classes.educationIcon} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography className={classes.timelineYear}>
                      2014 - 2018
                    </Typography>
                    <Typography className={classes.timelineType}>
                      Bachelor’s Degree
                    </Typography>
                    <Typography className={classes.timelineEdu}>
                      Kasetsart University Sriracha Campus
                    </Typography>
                    <Typography className={classes.timelineDes}>
                      Information Technology
                    </Typography>
                    <Typography className={classes.gpa}>GPA : 2.84</Typography>
                    <Box sx={{ marginBottom: "40px" }}></Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </PaperStyled>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <PaperStyled>
              <Timeline
                className={classes.timeline}
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <WorkOutlineOutlinedIcon
                      className={classes.educationIcon}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography className={classes.timelineYear}>
                      2018 - 2021
                    </Typography>
                    <Typography className={classes.timelineType}>
                      Programmer
                    </Typography>
                    <Typography className={classes.timelineCompany}>
                      Yokohama Tire Manufacturing (Thailand) Co.,Ltd.
                    </Typography>
                    <Typography className={classes.timelineDes}>
                      Developed web application for production line with ASP.NET
                      C#
                    </Typography>
                    <Box sx={{ marginBottom: "40px" }}></Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <WorkOutlineOutlinedIcon
                      className={classes.educationIcon}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography className={classes.timelineYear}>
                      2021 - Present
                    </Typography>
                    <Typography className={classes.timelineType}>
                      Programmer
                    </Typography>
                    <Typography className={classes.timelineCompany}>
                      Thai Polyethylene Co., Ltd. (TPE)
                    </Typography>
                    <Typography className={classes.timelineDes}>
                      Developed web application HR Management with React.js
                    </Typography>
                    <Box sx={{ marginBottom: "40px" }}></Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </PaperStyled>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Experience;
