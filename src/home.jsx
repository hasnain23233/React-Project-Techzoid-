import React , {useState} from 'react'

const home = () => {

    
    const [state, setState] = useState(0)
    const [user , setUser] = useState(false)

    let handlePlusFun = ()=>{
        setState(state + 1)
        if(state === 10){
            setUser(true)
        }
    }
      let handleSubractFun = ()=>{
        setState(state - 1)
    }
 
 


    return (
        <div className='h-screen bg-black  text-white'>
            <div className=" flex items-center justify-center  text-white">

                <div className='flex items-center gap-8'>   
                    <button className='bg-white p-1 text-lg font-bold w-8 h-8 rounded-full text-black' onClick={handlePlusFun}>+</button>
                    <h1 className='text-5xl font-bold'>{state}</h1>
                    <button className='bg-white p-1 text-lg font-bold w-8 h-8 rounded-full text-black' onClick={handleSubractFun}>-</button>
                </div>

            </div>
            
                {user ? <h1>Wellcome to our React app </h1> : <h1>Sorry you can`t login</h1>}
        </div>
    )
}

export default home
