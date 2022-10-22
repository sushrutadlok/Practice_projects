import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfGenerator from './PdfGenerator';
import React from 'react'

const PdfViewer = (props) => {
  return (
    <>
    <div className='container my-4 text-center'>
    <PDFViewer height={450} width={300} className='container'>
    <PdfGenerator DevelopBy = {"Sushrut Adlok"} covidFormData_1 = {props.covidFormData_1}/>
    </PDFViewer>
    <div className='my-2 text-center'>
    <PDFDownloadLink document={<PdfGenerator DevelopBy = {"Sushrut Adlok"} covidFormData_1 = {props.covidFormData_1}/>} fileName="FORM" > 
    {({loading}) => (loading ? <button className='text-center btn btn-primary'>Loading document...</button> : <button className='text-center btn btn-primary'>Download</button>)}
    </PDFDownloadLink>
    </div>
    </div>
    </>
  )
}


export default PdfViewer
