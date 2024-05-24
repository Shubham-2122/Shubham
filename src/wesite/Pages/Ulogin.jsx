import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../Comon_cpomnent/Header';
import Footer from '../Comon_cpomnent/Footer';

function Ulogin() {
  const redirect = useNavigate();
  const [fromvalue, setfromvalue] = useState({
    email: "",
    passowrd: "",
  })

  const getFrom = (e) => {
    setfromvalue({ ...fromvalue, [e.target.name]: e.target.value });
    console.log(fromvalue)
  }

  const submithandle = async (e) => {
    e.preventDefault();

    const { email, passowrd } = fromvalue;

    if (!email.trim() || !passowrd.trim()) {
      toast.error("email and password are required")
      console.error('email and password are required');
      return;
    }

    // match process
    try {
      const res = await axios.get(`http://localhost:3000/user?email=${email}`)
      if (res.data.length === 0) {
        toast.error("Email does not Exits")
        console.error("Email does not Exits");
        return
      }

      const user = res.data[0];
      if (user.passowrd !== passowrd) {
        toast.error("incorrect Password")
        console.error("incorrect Password")
        return
      }
      if (user.status !== "unblock") {
        toast.error("Account blocked. Please contact support.");
        return;
      }

      // session created 
      localStorage.setItem('userid', user.id);
      localStorage.setItem('uname', user.name);
      toast.success("login succssfull")
      console.log("login succssfull")
      setfromvalue({
        email: "",
        password: ""
      })
      redirect("/")
    } catch (error) {
      console.error("Error during login:", error)
    }
  }

  return (
    <>
      <Header />
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <form onSubmit={submithandle}>
          <MDBRow>

            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>

            <MDBCol col='4' md='6'>

              <div className="d-flex flex-row align-items-center justify-content-center">

                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <MDBInput name='email' value={fromvalue.email} onChange={getFrom} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput name='passowrd' value={fromvalue.passowrd} onChange={getFrom} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn as={<Link />} className="mb-0 px-5 " size='lg'>Login</MDBBtn>
                <Link to='/Uregister' className="btn btn-primary mb-0 px-5  mx-3" >Register</Link>
              </div>
            </MDBCol>

          </MDBRow>
        </form>

      </MDBContainer>
      <Footer />
    </>
  );
}

export default Ulogin;