import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   


  return (
    <Box sx={{ width: '100%'}}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="white" indicatorColor="white" 
        className='tabsStyle'
        >
        <Tab className='MyTabClass' label="Private Equity" {...a11yProps(0)} />
        <Tab className='MyTabClass' label="Market" {...a11yProps(1)} />
        <Tab className='MyTabClass' label="Options" {...a11yProps(2)} />
        <Tab className='MyTabClass' label="Large Caps" {...a11yProps(3)} />
        <Tab className='MyTabClass' label="Small Caps" {...a11yProps(4)} />    
        <Tab className='MyTabClass' label="Private Equity" {...a11yProps(5)} />
        <Tab className='MyTabClass' label="Market" {...a11yProps(6)} />
        <Tab className='MyTabClass' label="Options" {...a11yProps(7)} />
        <Tab className='MyTabClass' label="Large Caps" {...a11yProps(8)} />

        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        
      </CustomTabPanel> */}

    </Box>
  );
}