import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#424242',
    'marginTop': '5%',
    'marginBottom': '12%',
    'marginLeft': '5%',
    'marginRight': '5%',
    'color': 'white'
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Education History" {...a11yProps(0)} />
          <Tab label="Research Interest" {...a11yProps(1)} />
          <Tab label="Research" {...a11yProps(2)} />
          <Tab label="Media Appearances" {...a11yProps(3)} />
          <Tab label="Conference/Seminar Presentations" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ul className="education-history">

            <div className="col-md-4">
              <li>
                <h5>Doctor of Education (EdD)</h5>
                <h5>University of Southern Queensland</h5>
              </li>

              <li>
                <h5>Masters of Education</h5>
                <h5>University of Sydney</h5>
              </li>

              <li>
                <h5>Bachelor of Education</h5>
                <h5>University of Sydney</h5>
              </li>
            </div>


            <div className="col-md-4">
              <li>
                <h5>Masters of Business/Sports Management</h5>
                <h5>Deakin University</h5>
              </li>

              <li>
                <h5>Graduate Certificate of Arts</h5>
                <h5>Swinburne University</h5>
              </li>

              <li>
                <h5>Certificate IV in Training and Assessment</h5>
                <h5>Ballarat Business School</h5>
              </li>

            </div>


            <div className="col-md-4">
              <li>
                <h5>Masters Certificate - Business/Law of Sport</h5>
                <h5>Villanova University</h5>
              </li>

              <li>
                <h5>Graduate Certificate - Criminology</h5>
                <h5>Griffith University</h5>
              </li>

            </div>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

          <ul className="works">
            <div className="col-md-4">
              <li><h5>Lived Experience</h5></li>
              <li><h5>Education for the incarcerated</h5></li>
              <li><h5>Convict Criminology / Lived Experience Criminology</h5></li>
            </div>
            <div className="col-md-4">
              <li><h5>Education – Marginalised people</h5></li>
              <li><h5>Equal educational opportunities</h5></li>
              <li><h5>Sport / Facility Management / Planning</h5></li>
            </div>
            <div className="col-md-4">
              <li><h5>Education</h5></li>
              <li><h5>Leadership</h5></li>
              <li><h5>Coaching</h5></li>
            </div>

          </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ul className="research-initiatives">
            <li>
              <p>Education while incarcerated - Does it increase employment
                opportunities after release? – The Lived Experience of
                previously incarcerated Males in Victoria, Australia.</p>
            </li>
            <li>
              <p>
                Barriers to the development of Convict Criminology-A comparison
                between Brazil and Australia - 25 years of Convict Criminology.
              </p>
            </li>
            <li>
              <p>
                Swinging doors... An autoethnographic look at the lived
                experience challenges faced by previously incarcerated people in
                the USA and Australia.
              </p>
            </li>
            <li>
              <p>
                Bronfenbrenner’s Ecological systems theory and the education of
                currently and previously incarcerated people.
              </p>
            </li>
            <li>
              <p>
                Barriers to the development of Convict Criminology in Australia.
              </p>
            </li>
            <li>
              <p>
                Victorian prisoner numbers – A review of the figures from those
                that are the figures.
              </p>
            </li>
            <li>
              <p>
                Victorian prisoner numbers – A review of the figures from those
                that are the figures.
              </p>
            </li>
            <li>
              <p>
                Battles, challenges and victories: The lived experiences of the
                previously incarcerated in the US, UK and Australia.
              </p>
            </li>
            <li>
              <p>
                Education Post Incarceration – Opportunities and Challenges –
                Book Chapter .
              </p>
            </li>
            <li>
              <p>
                The Hard Road travelled – Global Lived Experiences from inside -
                Book.
              </p>
            </li>
          </ul>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <ul className="research-initiatives">
            <li>
              <a className="media-appearances" href="https://customreport.mediaportal.com/#/articlepresenter/4a16e85d-d8df-4699-b231-9317913b0fd2/607500389/1469245621?_k=tf6van" target="_blank">
                School of Hard Knocks – Education during Covid 19
              </a>
            </li>
            <li>
              <a className="media-appearances" href="https://drive.google.com/drive/folders/1-ZdOXdIOyUZUB5yh5oohKix6U4VQEpGX?usp=sharing" target="_blank">
                Unlocking the future – Podcast series
              </a>
            </li>
            <li>
              <a className="media-appearances" href="https://open.spotify.com/show/6hbGK85febqdOWl3IXXSem?si=H5H18kC6RtqDZ4xjedd5Rg" target="_blank">
                Talking time with Lukas and Alicia – Podcast Series
              </a>
            </li>
            <li>
              <a className="media-appearances" href="https://lsa.umich.edu/pcap/podcast/listen/season-21.html" target="_blank">
                While We Were Away Podcast Series – The University of Michigan
              </a>
            </li>
          </ul>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <ul className="seminar">
            <li>USQ Webinar Series – Ph.D. to Prison, Prison to Ph.D. October 2020</li>
            <li>CrimCon Annual Conference 2020 – Barriers to setting up Convict Criminology in Australia.</li>
            <li>Reintegration Puzzle Webinar 2020 - Convict Criminology and the importance of lived experience in education and research</li>
            <li>Queensland Community Corrections Education Conference 2021</li>
            <li>Key Note Speaker – ‘Barriers to undertaking education inside – A lived experience perspective’</li>
            <li>Education Justice Project 2021 – University of Illinois</li>
            <li>‘Owning your own narrative and returning to work’ (4 presentations)</li>
            <li>Return to the community roundtable series - Claflin University 2021</li>
            <li>‘Educational pathways - The way back’.</li>
            <li>Sustaining Connections Conference – Marymount Manhattan College 2021</li>
            <li>‘Convict Criminology in Australia, the word ‘Convict’ and the barriers faced’.</li>
            <li>Guest Lecturer Series – University of Western Australia 2021</li>
            <li>“Convict Criminology and the importance of Lived experience in research’</li>
            <li>Guest Lecturer Series – University of New South Wales 2021</li>
            <li>‘Barriers to education – An insider perspective’</li>
            <li>Guest Lecturer Series – Murdoch University (WA) 2021 Convict / Lived experience Criminology and its importance in education.</li>
          </ul>
        </TabPanel>
      </SwipeableViews>
    </div >
  );
}
