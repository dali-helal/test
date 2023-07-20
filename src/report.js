const createReportDefinition = (endpoint, dataFields) => {
  return {
    Name: "multisectionreport1",
    Width: "0in",
    Layers: [{ Name: "default" }],
    CustomProperties: [
      { Name: "DisplayType", Value: "Page" },
      { Name: "SizeType", Value: "Default" },
      { Name: "PaperOrientation", Value: "Portrait" }
    ],
    Page: {
      PageWidth: "8.5in",
      PageHeight: "11in",
      RightMargin: "0in",
      LeftMargin: "0in",
      TopMargin: "0in",
      BottomMargin: "0in",
      Columns: 1,
      ColumnSpacing: "0.5in"
    },
    DataSources: [
      {
        Name: "DataSource",
        ConnectionProperties: {
          DataProvider: "JSON",
          ConnectString: `endpoint=${endpoint}`
        }
      }
    ],
    ReportSections: [
      {
        Type: "Continuous",
        Name: "ContinuousSection1",
        Page: {
          PageWidth: "8.5in",
          PageHeight: "11in",
          RightMargin: "1in",
          LeftMargin: "1in",
          TopMargin: "1in",
          BottomMargin: "1in",
          Columns: 1,
          ColumnSpacing: "0in"
        },
        Width: "5.9167in",
        Body: {
          Height: "0.9896in",
          ReportItems: [
            {
              Type: "table",
              Name: "Table1",
              TableColumns: dataFields.map(() => ({ Width: "1in" })),
              Header: {
                TableRows: [
                  {
                    Height: "0.25in",
                    TableCells: dataFields.map((field) => ({
                      Item: {
                        Type: "textbox",
                        Name: `TextBox_${field}`,
                        CanGrow: true,
                        KeepTogether: true,
                        Value: field,
                        Style: {
                          PaddingLeft: "2pt",
                          PaddingRight: "2pt",
                          PaddingTop: "2pt",
                          PaddingBottom: "2pt"
                        },
                        Width: "1in",
                        Height: "0.25in"
                      }
                    }))
                  }
                ],
                RepeatOnNewPage: true
              },
              Details: {
                TableRows: [
                  {
                    Height: "0.25in",
                    TableCells: dataFields.map((field) => ({
                      Item: {
                        Type: "textbox",
                        Name: `TextBox_${field}`,
                        DataElementName: field,
                        CanGrow: true,
                        KeepTogether: true,
                        Value: `=Fields!${field}.Value`,
                        Style: {
                          PaddingLeft: "2pt",
                          PaddingRight: "2pt",
                          PaddingTop: "2pt",
                          PaddingBottom: "2pt"
                        },
                        Width: "1in",
                        Height: "0.25in"
                      }
                    }))
                  }
                ]
              },
              Left: "0.9167in",
              Top: "0.4896in",
              Width: `${1 + (dataFields.length - 1) * 2}in`,
              Height: "0.5in"
            }
          ]
        }
      }
    ],
    DataSets: [
      {
        Name: "DataSet",
        Fields: dataFields.map((field) => ({
          Name: field,
          DataField: field
        })),
        Query: {
          DataSourceName: "DataSource",
          CommandText: `jpath=$.*`
        },
        CaseSensitivity: "Auto",
        KanatypeSensitivity: "Auto",
        AccentSensitivity: "Auto",
        WidthSensitivity: "Auto"
      }
    ]
  };
};

export default createReportDefinition;