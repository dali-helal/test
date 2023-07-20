
import React from 'react';
import { Viewer } from '@grapecity/activereports-react';
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import { useState, useEffect } from 'react';
import axios from "axios"
const ActiveReport = () => {

  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Fetch data from your REST API endpoint
    axios.get('http://127.0.0.1:8000/api/listFloorBuilding/1')
      .then(response => {
        // Set the data to the state variable
        setReportData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const report = {
    "Name": "Report",
    "Type": "report",
    "Width": "9.7215in",
    "Body": {
      "Name": "Body",
      "Type": "section",
      ReportItems: [
        { Type: "textbox", Name: "textbox1", Value: "Hello from ActiveReports", Height: "10in" }
      ]
    }
  };

  return (<>

    <>

      <div className="demo-app" style={{ height: '800px' }}>
        {/*    <Viewer report={{ Uri: 'Test2.rdlx.json' }} />*/}
        <Viewer report={{ Uri: 'Test.rdlx.json' }} />
      </div>

    </>
  </>);
}

export default ActiveReport;