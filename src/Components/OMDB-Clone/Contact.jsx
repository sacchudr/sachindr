import React from 'react'
import  './omdb.css/Contact.css';


const Contact = () => {
  return (
    <React.Fragment>
        <div className='omdbcontact'> 
            <div className='contactcontent'>
                <div className='contactcontent1'>If you like what you see</div>
                <div className='contactcontent2'>let’s work together!</div>
                <div className='contactcontent3'>Get in touch and we’ll get all your questions answered</div>
                </div>
                
            <form action="" className='allchildparent'>

                <div className='contactdetails1'>
                    <div className='formcontent'> How can we help you</div>
                    <div className='formcontent1'>Reach out to us for all your Enquiries</div>
                <div className='cntactdetails'>
                    <label htmlFor="" >Name</label>
                    <input type="e-mail" className='contactinput'  placeholder='Enter name' />
                </div>
                <div className='cntactdetails'>
                    <label htmlFor="">Email</label>
                    <input type="e-mail" className='contactinput'  placeholder='Enter E-mail'/>
                </div>
                <div className='cntactdetails'>
                    <label htmlFor="">Phone Number</label>
                    <input type="e-mail" className='contactinput' placeholder='Enter phone number' />
                </div>
                <div className='cntactdetails'>
                    <label htmlFor="">What can we help with</label>
                    <input type="e-mail" className='contactinput'placeholder='What type of enquiry' />
                </div>
                <div className='cntactdetails'>
                    <label htmlFor="">Enquiry</label>
                    <input type="e-mail" className='contactinput' placeholder='Help us Know a littel about your query'/>
                </div>
                <button className='sendbtn'>Send Enquiry</button>
                </div>
            </form>
        </div>
    </React.Fragment>

  )
}

export default Contact