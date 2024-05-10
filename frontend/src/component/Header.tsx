import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div style={{ height: '92px', width: '100%', backgroundColor: '#f9fafb' }}>
            <nav className="shadow">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-around ">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <img style={{ width: '190px', height: '56px' }} className="w-auto h-6 sm:h-7" src="https://s3-alpha-sig.figma.com/img/9f55/2b92/c6dd07de9c8cdd98bd57fc44b8eead89?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ev22rd3lP6FfY3Onk6w--VBumt79TaBIjU7j-jLS9d~otiL35Z0jEDpLiPSba-EBDJZvWT1jy56lM6e1~eySdgXRwUfYKHFckA5q8yJHBHCIlTkW3FMk61NacreseIJosFaRgtTijjRCUVHg36590eo8-W232ubQ4zE4buFPTCb4L08r7bCwrxeE0D~BJ510YjwLHf0qLdeC4BbEPzg-SeyQdbnY3HgBRc63d5wIeussY4Kf77Rt-YZledNrnef7HhWmbXdc6LVL0JExSuql9UPIVS5KvZ4dYZBdRGWduPvbAEFiuhxRHM3XDICwzlxnPNaG484DbBG0uk8pAJWvIQ__" alt="" />
                            </a>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:mx-8 justify-between`}>
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">Find Roomate</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">About Us</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">Contact</a>
                                <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-800 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100">USD</a>
                            </div>
                        </div>
                        <div style={{ width: '239px', height: '46px' }} className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:mx-8 justify-between`}>
                            <button style={{ width: '190px', height: '46px' }} className="hidden border-2 border-black-600 px-3 py-1 rounded-full mx-4 text-gray-800 transition-colors duration-300 transform lg:block hover:text-gray-700 focus:text-gray-700 focus:outline-none" aria-label="show notifications">

                                <span>List Your Property</span>
                            </button>

                            <button style={{ width: '46px', height: '46px' }} type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                                    <svg className="absolute w-12 h-12 text-indigo-600 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>

                                <h3 className="mx-2 text-gray-800 lg:hidden">Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
