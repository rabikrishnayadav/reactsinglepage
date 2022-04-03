import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });

  const InvalidEvent = (event) =>{
    const {name, value} = event.target;
    setData((preVal) =>{
      return{
        ...preVal,
        [name] : value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`hello ${data.fullname} your
    Mobile Number is ${data.phone} and Email Id: ${data.email} or Message: ${data.message}`);
  }

  return (
    <>
        <div className="my-5">
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto mb-5">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleInputname1" className="form-label">Full Name</label>
                  <input type="name" className="form-control" id="exampleInputname1" name='fullname' value={data.fullname} onChange={InvalidEvent} placeholder='Enter Your Name Here'/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputphone1" className="form-label">Phone</label>
                  <input type="number" className="form-control" id="exampleInputphone1" name='phone' value={data.phone} onChange={InvalidEvent} placeholder='mobile Number'/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={InvalidEvent} placeholder='e.g. email@gmail.com' />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleInputTextarea1" name='message' value={data.message} onChange={InvalidEvent} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
}

export default Contact;