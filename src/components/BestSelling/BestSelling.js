import * as React from "react";
import PropTypes from "prop-types";
import { Container, Box, Typography, Tab, Tabs } from "@mui/material";

const tab={
    color:"#03dac5",
    fontSize:"22px",

}

function TabPanel(props) {
  // as variables used in our appli
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
          {/* children every thimg inside tab built in lang */}
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//PropTypes يصدر مجموعة من أدوات التحقق التي يمكن استخدامها للتأكد من صحة البيانات التي تتلقاها. في هذا المثال نحن نستعمل PropTypes.string. عندما يتم توفير قيمة غير مقبولة لخاصية (props)، سيظهر تحذير في وحدة التحكم (JavaScript Console). لأسباب تتعلق بأداء التطبيق، يتم التحقق من propTypes في وضع التطوير فقط (Development mode).
//used propTypes from own library
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// main function of web
const BestSelling = () => {
  const [value, setValue] = React.useState(0); //القيم المدخلة

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      {/* like div or section */}
      <Box sx={{ width: "40%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "rgb(219, 216, 216)" }}>
          {/* container for single tabs */}
          <Tabs
            value={value} //
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {/* ... take all intire data  */}
            <Tab label="Featured" {...a11yProps(0)} style={tab}/>
            <Tab label="On Sale" {...a11yProps(1)} tab />
            <Tab label="Best Rated" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {/* contain of tabs  */}
              <TabPanel value={value} index={0} >
          hello world
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          وبعدين
        </TabPanel>
      </Box>
    </Container>
  );
};

export default BestSelling;
