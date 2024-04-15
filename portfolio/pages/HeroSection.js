import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => (
  <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
    <div className="flex justify-center items-center h-full">
      <div className='max-w-[1240px] w-full p-2 text-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-2 text-gray-700 font-bold'>
            Hi, I'am <span className='text-[#5651e5]'> Elias Burhan</span>
          </h1>
          <h1 className='py-2 text-gray-700 font-bold'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            with the usage of javascript.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Elias-mb1'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
