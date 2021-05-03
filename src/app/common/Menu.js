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
          variant="fullWidth"
        >
          <Tab label="Education History" {...a11yProps(0)} />
          <Tab label="Research Interest" {...a11yProps(1)} />
          <Tab label="Research" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ul>
            <li>
              <h4>Doctor of Education (EdD)</h4>
              <span>University of Southern Queensland</span>
            </li>

            <li>
              <h4>Masters of Education</h4>
              <span>University of Sydney</span>
            </li>

            <li>
              <h4>Bachelor of Education</h4>
              <span>University of Sydney</span>
            </li>

            <li>
              <h4>Masters of Business/Sports Management</h4>
              <span>Deakin University</span>
            </li>

            <li>
              <h4>Graduate Certificate of Arts</h4>
              <span>Swinburne University</span>
            </li>

            <li>
              <h4>Certificate IV in Training and Assessment</h4>
              <span>Ballarat Business School</span>
            </li>

            <li>
              <h4>Masters Certificate - Business/Law of Sport</h4>
              <span>Villanova University</span>
            </li>

            <li>
              <h4>Graduate Certificate - Criminology</h4>
              <span>Griffith University</span>
            </li>

          </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

          <ul className="works">
            <h2>Areas of Expertise</h2>
            <div className="col-md-4">
              <li><h5>Lived Experience</h5></li>
              <li><h5>Education for the incarcerated</h5></li>
              <li><h5>Convict Criminology</h5></li>
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
            <h2>Research</h2>
            <li>
              <p>
                Education while incarcerated - Does it increase employment
                opportunities after release? – The Lived Experience of
                previously incarcerated Males in Victoria, Australia.
              </p>
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
      </SwipeableViews>
    </div >
  );
}
