import React from 'react'

const home = () => {
    const name = 'WellCome to our React App'
    const number = 4 + 5

    return (
        <div>
            <div className="h-screen bg-black flex items-center justify-center  text-white">
                <div>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    <p>{number}</p>
                </div>
            </div>
        </div>
    )
}

export default home
