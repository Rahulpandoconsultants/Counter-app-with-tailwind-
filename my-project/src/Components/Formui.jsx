import React from 'react';
import Validation from './Validation';
import { useState } from 'react';

const Formui = () => {
    const [name, setName] = useState("");
    const [lName, setlName] = useState("");
    const[mail,setMail]=useState("");
    const [password,setPassword]=useState("");
    const [password2,setPassword2]=useState("");
    let obj={
        name:"",
        lname:"",
        mail:"",
        password:"",
        password2:""
       
    }
    function inputhandler(e) {
        setName(e.target.value);
        // console.log(e.target.value);
    }
    function inputhandler2(e) {
        setlName(e.target.value);
        // console.log(e.target.value);
    }
    function handlemail(e){
        setMail(e.target.value);
    }
    function handlpassword(e){
        setPassword(e.target.value);
    }
    function handlpassword2(e){
        setPassword2(e.target.value);
    }
    function handlesubmit(){
        let id=new obj();
    }
    return (
        <div>
            <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto   relative  flex-col border-2 w-1/2 text-center h-screen p-5
        
rounded-lg '>
                <h1 className='text-orange-500 text-3xl p-2'>Form Validation Page</h1>
                <div className='w-9/12 text-black-600' >
                     <label>First Name:-</label>
                    <input type='text' placeholder='Your first name' className=' inline-block border-b-2  m-2 w-10/12  focus:outline-none rounded-lg p-2' onChange={inputhandler}></input>
                <p>{(name.length>0)?<Validation name={name}/>:null}</p>
                </div>
                <div className='w-9/12 text-black-600' >
                <label>Last Name:-</label>
                    <input type='text' placeholder='Your Last name' className=' border-b-2  m-2  w-10/12 focus:outline-none rounded-lg p-2' onChange={inputhandler2}></input>
                    <p>{(lName.length>0)?<Validation lName={lName}/>:null}</p>
                </div>
                <div className='w-9/12 text-black-600' >
                <label>E-mail:-</label>
                    <input type='e-mail' placeholder='Your Email Adress' className=' border-b-2  w-10/12  m-2 focus:outline-none rounded-lg p-2 ' onChange={handlemail}></input>
                    <p>{(mail.length>0)?<Validation mail={mail}/>:null}</p>
                </div>
                <div className='w-9/12 text-black-600' >
                <label>Password:-</label>
                    <input type='password' placeholder='Please choose a strong Password' className=' border-b-2  w-10/12 m-2 focus:outline-none rounded-lg p-2'  onChange={handlpassword}></input>
                    {/* <div className='text-left mx-9' id='p8'>Min 8 characters required</div> */}
                    <p>{(password.length>0)?<Validation password={password}/>:null}</p>
                </div>
                <div className='w-9/12 text-black-600' >
                <label>RenterPassword:-</label>
                    <input type='password' placeholder='Confirm above password' className=' border-b-2  w-9/12  mt-2 focus:outline-none rounded-lg  p-2  ' onChange={handlpassword2}></input>
                    <p>{(password2.length>0)?<Validation password2={password2}/>:null}</p>
                </div>
                <button className='bg-blue-200 h-10 m-auto mt-5 border-2 rounded-lg w-[100px]' onClick={handlesubmit}>Submit</button>

            </div>
        </div>
    );
}

export default Formui;
