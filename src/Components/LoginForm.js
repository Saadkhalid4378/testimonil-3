import React , { useState  } from 'react';

const LoginForm = () => {
    const [name , setName ] = useState(' ');
    const [Password , setlastname] = useState(' ');
    
    const onChange = (e , setvalue) => {
    setvalue(e.target.value);
    };

    const onSubmit = (e) => {
       e.preventDefault();
       console.log(name,Password);  
       setName('');
       setlastname('');
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
            <lable htmlFor=' User Name '> User Name: </lable> <br/>
            <input onChange={(e) => onChange(e, setName)} type='text' name='name' value={name} ></input> 
        </div>
        <div>
            <lable htmlFor=' Password '> User Password: </lable> <br/> 
            <input onChange={(e)=> onChange (e,setlastname)} type='text'  value={Password} ></input> 
        </div>
        <input type='submit'/>
        </form>
  ); 
}

export default LoginForm