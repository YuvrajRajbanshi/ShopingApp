import React from 'react';
import Card from '../card/Card';

const Home = () => {
    return (
        <>
            <div className=' lg:flex items-center lg:justify-center'>
                <div className="bg-cover bg-center bg-no-repeat bg-opacity-50 w-full h-[700px] lg:w-[80%] opacity-80"
                    style={{ backgroundImage: "url('../../images/home.png')" }}>

                    <div className='text-center pt-12'>
                        <h1 className='text-5xl text-gray-600 font-bold font-sans'>
                            We Are Hexashop
                        </h1>
                        <h3 className='text-4xl font-bold mt-4 text-white'>
                            We are in most love e-commerce website
                        </h3>

                        <h3 className=' mt-8'>
                            <span className=' text-5xl text-orange-400'>50% Discount</span>
                        </h3>

                        <button className=" bg-gray-500 text-white p-3 rounded-md
                        mt-10 hover:bg-gray-600 cursor-pointer 
                        
                        ">Shop Now</button>
                    </div>
                </div>
            </div >

            <Card />

        </>
    );
}

export default Home;
