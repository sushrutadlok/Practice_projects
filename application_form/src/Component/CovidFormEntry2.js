import React, {useState} from "react";
import Navbar from './Navbar';
import PdfViewer from './PdfViewer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


//bg-teal-100

const CovidFormEntry1 = (props) => {
    // useState

  const [cf_fname, setCF_fname] = useState("");
  const [cf_lname, setCF_lname] = useState("");
  const [cf_contact_no, setCF_contact_no] = useState("");
  const [cf_age, setCF_age] = useState("");
  const [cf_date, setCF_date] = useState("");
  const [cf_vender, setCF_vender] = useState("");
  const [cf_department, setCF_department] = useState("");
  const [cf_email, setCF_email] = useState("");
  const [cf_contact_person, setCF_contact_person] = useState("");
  const [cf_address, setCF_address] = useState("");
  const [cf_city, setCF_city] = useState("");
  const [cf_state, setCF_state] = useState("");
  const [cf_pin_code, setCF_pin_code] = useState("");
  const [cf_form_confirmation, setCF_form_confirmation] = useState();
  
  console.log(props.test_variable);
  let userData;

  const addData = () => {
      console.log("data is added", cf_fname);      
      userData = {
        fname : cf_fname,
        lname: cf_lname,
        contact_no: cf_contact_no,
        age: cf_age,
        date:cf_date,
        vender:cf_vender,
        department:cf_department,
        email:cf_email,
        contact_person:cf_contact_person,
        address:cf_address,
        city:cf_city,
        state:cf_state,
        pin_code:cf_pin_code,
        form_confirmation:cf_form_confirmation,
      }
      console.log(userData);
  }
  
  const submit = (e) => {
    e.preventDefault();
    if (cf_fname === "")
    alert("field not emplty");
    addData();
  }

  return (
    <>
      <div style={styles.templateBody} className="container-md">
        <div className="grid">
          <div className="my-4 text-center">CovidFormEntry</div>
          <form onSubmit={submit}>
            <div className="row my-2">
              <div className="col">
                <input
                  type="text"
                  value={cf_fname}
                  onChange={(e)=>{setCF_fname(e.target.value)}}                
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={cf_lname}
                  onChange={(e)=>{setCF_lname(e.target.value)}}
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
                  value={cf_contact_no}
                  onChange={(e)=>{setCF_contact_no(e.target.value)}}
                  className="form-control my-2"
                  placeholder="Contact No"
                  aria-label="Contact No"
                />
              </div>
              <div className="col-sm">
                <input
                  type="contact"
                  value={cf_age}
                  onChange={(e)=>{setCF_age(e.target.value)}}
                  className="form-control my-2"
                  placeholder="Age"
                  aria-label="Age"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={cf_date}
                  onChange={(e)=>{setCF_date(e.target.value)}}
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
                  value={cf_vender}
                  onChange={(e)=>{setCF_vender(e.target.value)}}
                  className="form-control"
                  placeholder="Vender"
                  aria-label="Vender"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  value={cf_department}
                  onChange={(e)=>{setCF_department(e.target.value)}}
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
                <input type="email" value={cf_email} onChange={(e)=>{setCF_email(e.target.value)}} className="form-control" id="inputEmail4" />
              </div>
              <div className="col">
                <label htmlFor="inputPassword4" className="form-label">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={cf_contact_person}
                  onChange={(e)=>{setCF_contact_person(e.target.value)}}
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
                  value={cf_address}
                  onChange={(e)=>{setCF_address(e.target.value)}}
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
                  value={cf_city}
                  onChange={(e)=>{setCF_city(e.target.value)}}
                  className="form-control my-2"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={cf_state}
                  onChange={(e)=>{setCF_state(e.target.value)}}
                  className="form-control my-2"
                  placeholder="State"
                  aria-label="State"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  value={cf_pin_code}
                  onChange={(e)=>{setCF_pin_code(e.target.value)}}
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
                  value={cf_form_confirmation}
                  onChange={(e)=>{setCF_form_confirmation(e.target.value)}}
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
      <button type="submit" className="btn btn-primary mx-2">
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
        <div className="col-12 mx-8">
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
        <div className="col-12 mx-8">
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

const CovidFormEntry = () => {
  let test_variable = 1;

    

  return (
    <>
    <Navbar title = {"Covid Form"} />
    <Routes> 
      <Route path="/" element={ <CovidFormEntry1 
      test_variable = {test_variable} 

      /> } />
      <Route path="covid_form2" element={ <CovidFormEntry2 />}/>
      <Route path="form" element={<PdfViewer />} /> 
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



{/* <div>
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br />
<div/> */}