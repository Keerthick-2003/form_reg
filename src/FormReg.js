import React, { useState } from 'react'

const FormReg = () => {

    const [user, setUser]=useState({
        name:"Keerthick",
        age:20,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:""
    })

    function changeHandler(e) {
        const name=e.target.name
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user, [name] : value})
    }

  return (
    <>
      <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
      </table>
      <form>
        <input type='text' placeholder='Full Name' name='name' value={user.name} onChange={changeHandler}/>
        <input type='number' placeholder='Age' name='age' value={user.age} onChange={changeHandler}/>
        <div className='gender'>
            <label htmlFor='male'>
                <input type='radio' name='gender' id='male' value="Male" checked={user.gender=="Male"} onChange={changeHandler}/>Male
            </label>
            <label htmlFor='female'>
                <input type='radio' name='gender' id='female' value="Female" checked={user.gender=="Female"} onChange={changeHandler}/>Female
            </label>
        </div>
        <div>
            <label htmlFor='isMarried'>
                <input type='checkbox' id='isMarried' name='isMarried' value={user.isMarried} onChange={changeHandler}/>IsMarried
            </label>
            <div className="select-div">
                <label htmlFor='country'>Select Country</label>
                <select name='country' id='country' value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Russia">Russia</option>
                    <option value="Japan">Japan</option>
                </select>
            </div>
        </div>
        <textarea name='bio' id='bie' cols={30} rows={10} value={user.bio} onChange={changeHandler} placeholder='Enter more about yourself...'></textarea>
      </form>
    </>
  )
}

export default FormReg
