import React,{useState} from 'react'
import Papa from "papaparse";
import axios from 'axios'
const CSVParser = () => {


    
    const [csvData,setData] = useState();

    const handleCsvParse = (e)=>{
    
    const files = e.target.files;
      if (files) {
        Papa.parse(files[0], {
          complete: async function(results) {
            console.log("Finished:", results.data);
            setData(results.data)

            const res = await axios.post('/books/addFromCSV',{data:results.data})
            console.log(res)
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