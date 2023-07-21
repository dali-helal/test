import React from 'react';
import {Viewer } from "@grapecity/activereports-react";
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';


import createReportDefinition from './report';


const ViewerReport = () => {



  const dataFields = [
    "floor_name",
    "floor_num",
    "floor_elevator",
    "floor_area",
    "floor_added_date",
  ];

  const endpoint = "http://127.0.0.1:8000/api/listFloorBuilding/1"

  const report = createReportDefinition(endpoint, dataFields);
  return (
    <>

      <div className="demo-app" style={{ height: '800px' }}>
        <Viewer report={{ Uri: report }} />
      </div>

    </>

  );
}

export default ViewerReport;