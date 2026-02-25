import React, { useState } from 'react'

const evenHandling = () => {
    const [value, setValue] = useState(false)
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    function handling() {
        setValue(!value)
    }

    const submitHandle = (e)=>{
        e.preventDefault()
        console.log(name , email)
    }
    return (
        <>
            <div className={value ? 'bg-white text-black' : 'bg-gray-700 text-white'}>
                <button onClick={handling} className='bg-gray-300 p-2 rounded-md m-12 hover:bg-blue-500'>Click</button>
                <h1>In this class class we learn about event handling</h1>
            </div>

                <form>
                    <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className='border-2 border-gray-500 p-2 rounded-lg m-12'/>
                    <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='border-2 border-gray-500 p-2 rounded-lg m-12'/>
                    <button type='submit' onClick={submitHandle}>Submit</button>
                </form>
        </>
    )
}

export default evenHandling
