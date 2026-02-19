import React , {useEffect , useState} from 'react'

const Product = () => {

    const [data , setData] = useState([])

    useEffect(()=>{
        const fetchingData = async ()=>{
            const URL = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await URL.json()
            
            const lessData = response.slice(0 , 200)
            console.log(lessData)
            setData(lessData)
        }
        fetchingData()
    } , [])
  return (
    <div className='grid grid-cols-3 gap-4 shadow-md '>
       {
        data.map((items)=>{
            return(
                <div key={items.id} className='shadow-lg'>
                    <h1>{items.title}</h1>
                </div>
            )
        })
       }
    </div>
  )
}

export default Product
