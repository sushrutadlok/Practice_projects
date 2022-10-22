import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';


const PdfGenerator = (props) => (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ Demo version created for project purpose ~
        </Text>
        <Text style={styles.title}>Self-Declaration Form</Text>
        <Text style={styles.author}>Develop by - {props.DevelopBy}</Text>

        {/* <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
          Quijote de la 
        </Text> */}
        <Text style={styles.text}>
        Dear Sir/Madam,{'\n'}    
        </Text>
        <Text style={styles.text}>
          In view of the ongoing COVID-19 situation, Company is taking precautionary
          measures to safeguardthe well-being of you and your family, as well as the 
          well-being of our staff.
        </Text>
        <Text style={styles.text}>
          We seek your co-operation in filling up this declaration form. The details
          you submit will be held in confidence in accordance with data protection
          act and will be used to facililate contact and health measures to be taken, 
          the event of any incidents involving COVID-19.
        </Text>
        <Text style={styles.text}>
          Note: The data is collected to enter in company data base for reference.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text1}>
          Name: {props.covidFormData_1.cf_fname} {props.covidFormData_1.cf_lname} {"   "}
        </Text>
        <Text style={styles.text1} >
          Age: {props.covidFormData_1.cf_age} {"   "}
          </Text>
          <Text style={styles.text1}>
          Email: {props.covidFormData_1.cf_email} {"   "}
        </Text>
        </Text>
        <Text style={styles.text}>
        <Text style={styles.text1}>
        Department: {props.covidFormData_1.cf_department} {"   "}
        </Text>
        <Text style={styles.text1}>
          Mobile No: {props.covidFormData_1.cf_contact_no}  {"   "}
          </Text>    
        </Text>

        <Text style={styles.text}>
        <Text style={styles.text1}>
        Vender: {props.covidFormData_1.cf_vender} {"   "}
        </Text>
          <Text style={styles.text1}>
          Traveling from: {props.covidFormData_1.cf_address} {"   "}
          </Text>
          
        </Text>

        <Text style={styles.subtitle}>
          Self-Declaration by Employee
        </Text> 
        <Text style={styles.text}>
          1. Are you presently suffering from any fever/ cough/ cold? {"   "} No
          </Text>
          <Text style={styles.text}>
          2. Any privious history of fever in your family? {"   "} No
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
  
  // Font.register({
  //   family: 'Oswald',
  //   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  // });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      // border: '2px solid black',
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 20,
      
    },
    subtitle: {
      fontSize: 12,
      margin: 12,
      textAlign: 'center',
    },
    text: {
      margin: 5,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    text1: {
      alignContent: 'space-around',
      paddingRight: 30,
      fontSize: 14,
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });
  
  export default PdfGenerator;
  // ReactPDF.render(<PdfGenerator />);
