import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Aboutindex = () => {

    const url = 'https://dummyjson.com/products'
    const addProductURL = 'https://dummyjson.com/products/add'
    const [product, setProduct] = useState([])
    const [formData, setFormData] = useState({
        productName: "",
        productDetail: "",
        productPrice: ""
    })
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(url);
                setProduct(response.data.products);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    },[])
    console.log(product)

    const handleFormChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    
    const handleForm = async ()=>{
        const response = await axios.post(addProductURL, {
            title: formData.productName,
            description: formData.productDetail,
            price: formData.productPrice
        })
    }

  return (
    <div className='py-20'>
        <Container>
            <div className='flex flex-col gap-4 items-start'>
                <h4>create product</h4>
                <input onChange={handleFormChange} type="text" placeholder="product name" name="productName" className='border' />
                <input onChange={handleFormChange} type="text" placeholder="product details" name="productDetail" className='border' />
                <input onChange={handleFormChange} type="text" placeholder="product price" name="productPrice" className='border' />
                <button onClick={handleFOrm} className='bg-primary px-8 py-3'>submit</button>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-10'>
                {product.length > 0 ? product.map((item,index)=>(
                    <div key={index} className='bg-primary p-10'>
                        {item.images && <img src={item.images || ""} alt="not found" />}
                        <span>{item.price}</span>
                        <h3 className='text-2xl font-bold'>{item.title}</h3>
                        <p className='mt-5'>{item.description}</p>
                        <p className='mt-5'>Brand: {item.brand}</p>
                    </div>

                )): (
                    [0,1,2,3,4,5,6,7,8].map((item,index)=>(
                        <div key={item} className='bg-primary p-10'>
                            <span><Skeleton count={1}/></span>
                            <h3 className='text-2xl font-bold'><Skeleton count={1}/></h3>
                            <p className='mt-5'><Skeleton count={4}/></p>
                        </div>
                    ))
                )}

            </div>
        </Container>
    </div>
  )
}

export default Aboutindex