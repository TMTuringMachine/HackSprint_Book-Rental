import React,{useState} from 'react'
import Papa from "papaparse";

const CSVParser = () => {
    
    const [csvData,setData] = useState();

    const handleCsvParse = (e)=>{
    
    const files = e.target.files;
      if (files) {
        Papa.parse(files[0], {
          complete: function(results) {
            console.log("Finished:", results.data);
            setData(results.data)
          }}
        )
      }
    }

    

  return (
    <>
    <input type="file"
    accept=".csv,.xlsx,.xls"
    onChange={(e) => handleCsvParse(e) }
    />

    </>
  )
}

export default CSVParser