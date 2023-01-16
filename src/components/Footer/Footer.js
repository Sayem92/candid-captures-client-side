import React from 'react';
import logo from '../../assets/logo.png';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (

        <div className="px-10 md:px-20 pt-16 mx-auto w-full bg-gray-700 text-white">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <p
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-16 h-16 rounded-xl' src={logo} alt="" />

                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                            Candid Captures
                        </span>
                    </p>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-white">
                            The word Photography literally means 'drawing with light', which derives from the Greek photo, meaning light and graph, meaning to draw.
                        </p>
                        {/* <p className="mt-4 text-sm text-white">
                            Photography is the process of recording an image  a photograph  on lightsensitive film or, in the case of digital photography, via a digital electronic or magnetic memory.
                        </p> */}
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-white">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-white">Phone:</p>
                        <p
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            01748-433092
                        </p>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-white">Email:</p>
                        <p
                            href="sayemmiha123@gmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            sayemmiha123@gmail.com
                        </p>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-white">Address:</p>
                        <p
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Kamalgonj, Moulvibazar, Sylhet
                        </p>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-white">
                        Follow me
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a href="https://web.facebook.com/sayemahmed.sum" target='_blank' rel='noreferrer'> <AiFillFacebook className='text-3xl text-gray-200 mr-3'></AiFillFacebook></a>

                        <a href="https://www.linkedin.com/in/md-sayem-miah/" target='_blank' rel='noreferrer'> <AiFillLinkedin className='text-3xl text-gray-200 mr-3'></AiFillLinkedin></a>

                        <a href="https://github.com/Sayem92" target='_blank' rel='noreferrer'> <AiFillGithub className='text-3xl text-gray-200'></AiFillGithub></a>
                    </div>
                    <p className="mt-4 text-sm text-white">
                    Photography is the process of recording an image  a photograph  on lightsensitive film or, in the case of digital photography, via a digital electronic or magnetic memory.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-white">
                    © Copyright 2022 Photography. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <p
                            href="/"
                            className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            F.A.Q
                        </p>
                    </li>
                    <li>
                        <p
                            href="/"
                            className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Privacy Policy
                        </p>
                    </li>
                    <li>
                        <p
                            href="/"
                            className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Terms &amp; Conditions
                        </p>
                    </li>
                </ul>
            </div>
        </div>


    );
};

export default Footer;