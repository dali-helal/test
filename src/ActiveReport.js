

import React, { Fragment } from "react";
import { Viewer as ReportViewer, Designer } from "@grapecity/activereports-react";
import { PageReport } from "@grapecity/activereports/core";
import { exportDocument as pdfExport } from "@grapecity/activereports/pdfexport";
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';
import "@grapecity/activereports/styles/ar-js-designer.css";
const ActiveReport = () => {

  const designer = React.useRef();

  async function onPdfPreview() {
    const reportInfo = await designer.current.getReport();
    const report = new PageReport();
    await report.load(reportInfo.definition);
    const doc = await report.run();
    const result = await pdfExport(doc);
    result.download("exportedreport");
  }

  return (<>

    <>

      <Fragment>
        <div id="designer-toolbar" class="container-fluid">
          <div>

            <button
              onClick={() => onPdfPreview()}
            >
              PDF Preview
            </button>

          </div>
        </div>

        <Designer ref={designer} />


      </Fragment>

    </>
  </>);
}

export default ActiveReport;