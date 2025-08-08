import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopeContext);
    const [latestProducts, setLatestProducts ] = useState([]);
    // console.log(products);
    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-3 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam porro consequatur quisquam cum deserunt ea tempore explicabo exercitationem quaerat placeat fugiat quas, blanditiis nisi ducimus alias sapiente eum nobis illo?</p>
            </div>
            {/* Rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
