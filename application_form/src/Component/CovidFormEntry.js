import React, {useState} from "react";
import Navbar from './Navbar';
import PdfViewer from './PdfViewer';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";


//bg-teal-100

const CovidFormEntry1 = (props) => {
    // useState
  
  // // const [cf_fname, setCF_fname] = useState("");
  // // const [cf_lname, setCF_lname] = useState("");
  // const [cf_contact_no, setCF_contact_no] = useState("");
  // const [cf_age, setCF_age] = useState("");
  // const [cf_date, setCF_date] = useState("");
  // const [cf_vender, setCF_vender] = useState("");
  // const [cf_department, setCF_department] = useState("");
  // const [cf_email, setCF_email] = useState("");
  // const [cf_contact_person, setCF_contact_person] = useState("");
  // const [cf_address, setCF_address] = useState("");
  // const [cf_city, setCF_city] = useState("");
  // const [cf_state, setCF_state] = useState("");
  // const [cf_pin_code, setCF_pin_code] = useState("");
  // const [cf_form_confirmation, setCF_form_confirmation] = useState();
  
  // let userData;

  // const addData = () => {
  //     console.log("data is added", props.covidFormData_1.cf_fname);      
  //     userData = {
  //       fname : props.covidFormData_1.cf_fname,
  //       lname: props.covidFormData_1.cf_lname,
  //       contact_no: cf_contact_no,
  //       age: cf_age,
  //       date:cf_date,
  //       vender:cf_vender,
  //       department:cf_department,
  //       email:cf_email,
  //       contact_person:cf_contact_person,
  //       address:cf_address,
  //       city:cf_city,
  //       state:cf_state,
  //       pin_code:cf_pin_code,
  //       form_confirmation:cf_form_confirmation,
  //     }
  //     console.log(userData);
  // }

  


  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log("test1");
  //   addData();
  // }

  return (
    <>
      <div style={styles.templateBody} className="container-md">
        <div className="grid">
          <div className="my-4 text-center">{props.test}</div>
          <form onSubmit={props.submit}>
            <div className="row my-2">
              <div className="col">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_fname}
                  onChange={props.handleChange}
                  name="cf_fname"                
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_lname}
                  onChange={props.handleChange}
                  name="cf_lname"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <input
                  type="contact"
                  value={props.covidFormData_1.cf_contact_no}
                  onChange={props.handleChange}
                  name="cf_contact_no"
                  className="form-control my-2"
                  placeholder="Contact No"
                  aria-label="Contact No"
                />
              </div>
              <div className="col-sm">
                <input
                  type="contact"
                  value={props.covidFormData_1.cf_age}
                  onChange={props.handleChange}
                  name="cf_age"
                  className="form-control my-2"
                  placeholder="Age"
                  aria-label="Age"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_date}
                  onChange={props.handleChange}
                  name="cf_date"
                  className="form-control my-2"
                  placeholder="Date"
                  aria-label="Date"
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_vender}
                  onChange={props.handleChange}
                  name="cf_vender"
                  className="form-control"
                  placeholder="Vender"
                  aria-label="Vender"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_department}
                  onChange={props.handleChange}
                  name="cf_department"
                  className="form-control"
                  placeholder="Department"
                  aria-label="Department"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" value={props.covidFormData_1.cf_email} onChange={props.handleChange} name="cf_email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col">
                <label htmlFor="inputPassword4" className="form-label">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={props.covidFormData_1.cf_contact_person}
                  onChange={props.handleChange}
                  name="cf_contact_person"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  value={props.covidFormData_1.cf_address}
                  onChange={props.handleChange}
                  name="cf_address"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col-sm-6">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_city}
                  onChange={props.handleChange}
                  name="cf_city"
                  className="form-control my-2"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_state}
                  onChange={props.handleChange}
                  name="cf_state"
                  className="form-control my-2"
                  placeholder="State"
                  aria-label="State"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={props.covidFormData_1.cf_pin_code}
                  onChange={props.handleChange}
                  name="cf_pin_code"
                  className="form-control my-2"
                  placeholder="Zip"
                  aria-label="Zip"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={props.covidFormData_1.cf_form_confirmation}
                  onChange={props.handleChange}
                  name="cf_form_confirmation"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
          </form>
          <div className="col-12 text-center my-2">
      <Link className="btn btn-primary mx-2" to="covid_form2">Next</Link>
      <button type="submit" onClick={props.submit} className="btn btn-primary mx-2">
        Save
      </button>
    </div>
        </div>
      </div>
    </>
  );
};

const CovidFormEntry2 = () => {
  return (
    <>
      <div style={styles.templateBody} className="container-md mx-6 my-2">
        <div className="col">
          <div className="form-check">


          <input                                                                                                                                                                                                                                                                               
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>


        <div className="col">
          <div className="form-check"> 
          <input                                                                                                                                                                                                                                                                               
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check"> 
          <input                                                                                                                                                                                                                                                                               
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check"> 
          <input                                                                                                                                                                                                                                                                               
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
          <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>

        <div className="col-12 text-center my-2">
      <Link className="btn btn-primary mx-2" to="covid_form2">Next</Link>
      <button type="submit" className="btn btn-primary mx-2">
        Save
      </button>
    </div>
      </div>
    </>
  );
};

const CovidFormEntry = (props) => {

  const [covidFormData_1, setCovidFormData_1] = useState({
      cf_fname : "",
      cf_lname : "",
      cf_contact_no : "",
      cf_age : "",
      cf_date : "",
      cf_vender : "",
      cf_department : "",
      cf_email : "",
      cf_contact_person : "",
      cf_address : "",
      cf_city : "",
      cf_state : "",
      cf_pin_code : "",
      cf_form_confirmation : "",
  });

  const handleChange = e =>{ 
    const {name, value} = e.target;
    setCovidFormData_1(preState =>({...preState, [name]: value}));
  };

  // let userData = {};
  // const addData = () => {
  //     console.log("data is added", covidFormData_1.cf_fname);      
  //     userData = {
  //       fname : covidFormData_1.cf_fname,
  //       lname: covidFormData_1.cf_lname,
  //       contact_no: covidFormData_1.cf_contact_no,
  //       age: covidFormData_1.cf_age,
  //       date: covidFormData_1.cf_date,
  //       vender: covidFormData_1.cf_vender,
  //       department: covidFormData_1.cf_department,
  //       email: covidFormData_1.cf_email,
  //       contact_person: covidFormData_1.cf_contact_person,
  //       address: covidFormData_1.cf_address,
  //       city: covidFormData_1.cf_city,
  //       state: covidFormData_1.cf_state,
  //       pin_code: covidFormData_1.cf_pin_code,
  //       form_confirmation: covidFormData_1.cf_form_confirmation,
  //     }  
  // }

  const submit = (e) => {
    e.preventDefault();
    console.log("test1");
    // addData();
  }
  return (
    <>
    <Navbar title = {"Covid Form"} />
    <Routes> 
      <Route path="/" element={ <CovidFormEntry1 
      test = {"Covid Form"} 
      covidFormData_1 = {covidFormData_1}
      handleChange = {handleChange}
      submit = {submit}
      /> } />
      <Route path="covid_form2" element={ <CovidFormEntry2 />}/>
      <Route path="form" element={<PdfViewer DevelopBy = {"Sushrut Adlok"} covidFormData_1 = {covidFormData_1}/>} /> 
    </Routes>

      <footer className="bd-footer py-4 py-md-5 mt-5 bg-secondary">
        Sushrut Adlok
      </footer>
    </>
  );
};

export default CovidFormEntry;

const styles = {
  templateBody: {
    backgroundColor: "#f1f8f9",
  },
};
