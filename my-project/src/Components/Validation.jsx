import React from 'react';
import Formui from './Formui';

const Validation = (props) => {
    const data=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    function handlepassword(){
         let p8=document.querySelector('#p8');
         console.log(p8);   
        p8.style.color="blue"
        console.log("kjafsfj");
       const eightchar= new RegExp('(?=.{8,})');
       if(eightchar.test(props.password)){
        console.log("kjafsfj");
        let p8=document.querySelector('#p8');
        p8.style.color="blue"
       }
    }
    return (
        <>
        
        <div className='text-red-500'>
           {(props.name==null)?null:(props.name.charAt(0)===props.name.charAt(0).toUpperCase())?null:<div>Please enter first letter in Capital letter</div>}
            
        </div>
        {/* <p>{props.lName}</p> */}
        <div className='text-red-500'>
           {(props.lName==null)?null:(props.lName.charAt(0)===props.lName.charAt(0).toUpperCase())?null:<div>Please enter first letter in Capital letter</div>}
            
        </div>

        <div className='text-red-500'>
           {(props.mail==null)?null:(props.mail.includes("@gmail.com"))?null:<div>Please enter valid mail</div>}
            
        </div>
        <div className='text-red-500'>
           {(props.password==null)?null:(data.test(props.password))?null:<div>Please enter Strong password</div>}
         </div>
        
         {/* <div className='text-red-500'>
           {(props.password==null)?null:(data.test(props.password))?handlepassword:null}
         </div> */}
         
        <div className='text-red-500'>
           {(props.password2==null)?null:(props.password==null || props.password2===props.password)?<div>Password not matches </div>:null}
            
        </div>
        

        </>
    );
}

export default Validation;
