
"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                            Hello, I'm{" "}
                            </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'ELHADJ',
                                1000,
                                'Developpeur Web',
                                1000,
                                'Developpeur d\'Application Mobile/iOS',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga aliquid exercitationem nobis pariatur ea vero at
                        officiis aspernatur, veritatis, velit soluta. Error eligendi
                        laboriosam labore dicta tenetur ad impedit temporibus!
                    </p>
                    <div className=''>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-600 text-white'>Engage-Moi</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2'>
                                Obtenir le CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[300px] h-[410px] lg:w-[400px] relative'>
                        <Image
                            src="/images/myImage.png"
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={200}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
