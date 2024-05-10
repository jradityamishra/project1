import React from 'react'
// classNameNameName="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center"
const Footer = () => {
    return (
        <div>
            <footer className="w-full py-10 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center justify-center lg:justify-between pb-6 lg:pb-12 gap-4 lg:gap-7 border-b border-gray-200">
                        {/* Content here */}
                    </div>
                    <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 flex justify-center">
                        <div className="w-full lg:w-[1081px] flex flex-col justify-around lg:flex-row py-8 lg:py-14 gap-8 lg:gap-16 lg:gap-0">
                            <div className="flex flex-col items-center justify-center lg:justify-start max-w-lg gap-4 sm:gap-8 xl:gap-16">
                                <div className="w-full h-[243px] lg:w-[640px]">
                                    <h4 className="text-xl leading-6 text-white font-extrabold mb-2 lg:mb-1 text-center lg:text-left">NewsLetter</h4>
                                    <h1 className="text-3xl text-center lg:text-left font-normal text-white mb-6 mt-2 lg:text-4xl lg:mb-1 lg:mt-0 lg:leading-[80px] lg:font-semibold lg:tracking-wide m-auto">Join Our Community</h1>
                                    <h6 className="text-white text-wrap text-lg font-normal leading-8 text-center lg:text-left">Become a part of a growing community that values flexibility, convenience, and connectivity. Whether you are looking to manage living costs, find a temporary workspace, or grab that last-minute vacation deal, [Your Company Name] is your go-to platform.</h6>
                                </div>
                            </div>
                            <div className="w-full max-w-md flex justify-center items-center  ">
                                <button className="border-2 border-white px-8 mt-24 lg:mt-0 py-3 rounded-md mx-4 text-white  transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none lg:w-[220px] lg:h-[70px]">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap lg:justify-around xl:justify-around justify-center m-5'>
                        <div className='lg:w-[436px] lg:h-[269px]  text-center'>
                            <a href="#">
                                <img className="lg:h-[77px] lg:w-[260px] m-auto lg:m-0" src="https://s3-alpha-sig.figma.com/img/9f55/2b92/c6dd07de9c8cdd98bd57fc44b8eead89?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ev22rd3lP6FfY3Onk6w--VBumt79TaBIjU7j-jLS9d~otiL35Z0jEDpLiPSba-EBDJZvWT1jy56lM6e1~eySdgXRwUfYKHFckA5q8yJHBHCIlTkW3FMk61NacreseIJosFaRgtTijjRCUVHg36590eo8-W232ubQ4zE4buFPTCb4L08r7bCwrxeE0D~BJ510YjwLHf0qLdeC4BbEPzg-SeyQdbnY3HgBRc63d5wIeussY4Kf77Rt-YZledNrnef7HhWmbXdc6LVL0JExSuql9UPIVS5KvZ4dYZBdRGWduPvbAEFiuhxRHM3XDICwzlxnPNaG484DbBG0uk8pAJWvIQ__" alt="" />
                            </a>
                            <h3 className='text-gray-400 text-wrap text-xl leading-10'>An all-in-one platform that helps you to find
                                what you needed.</h3>
                            <div className="flex flex-col items-center sm:flex-row sm:justify-between">


                                <div className="flex mx-2 mt-6">
                                    <a href="#" className="w-[33px] h-[33px] lg:w-[44px] lg:h-[44px] mx-4 text-white transition-colors duration-300 dark:text-[#DD4B39] hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.464844 22.717C0.464844 10.626 10.2666 0.824219 22.3577 0.824219C34.4487 0.824219 44.2505 10.626 44.2505 22.717C44.2505 34.8081 34.4487 44.6098 22.3577 44.6098C10.2666 44.6098 0.464844 34.8081 0.464844 22.717Z" fill="#007AB9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3609 11.041C19.1898 11.041 18.7918 11.0549 17.5463 11.1116C16.3033 11.1685 15.4548 11.3653 14.7124 11.654C13.9444 11.9523 13.293 12.3512 12.644 13.0004C11.9945 13.6494 11.5956 14.3009 11.2964 15.0686C11.0069 15.8113 10.8098 16.66 10.7539 17.9025C10.6982 19.148 10.6836 19.5462 10.6836 22.7173C10.6836 25.8884 10.6977 26.2851 10.7541 27.5306C10.8113 28.7736 11.0081 29.6221 11.2966 30.3645C11.5951 31.1325 11.994 31.7839 12.6433 32.4329C13.292 33.0824 13.9435 33.4824 14.7109 33.7806C15.4538 34.0693 16.3026 34.2661 17.5454 34.323C18.7908 34.3797 19.1886 34.3936 22.3594 34.3936C25.5307 34.3936 25.9275 34.3797 27.1729 34.323C28.416 34.2661 29.2654 34.0693 30.0083 33.7806C30.7761 33.4824 31.4265 33.0824 32.0753 32.4329C32.7248 31.7839 33.1237 31.1325 33.4229 30.3648C33.71 29.6221 33.907 28.7734 33.9654 27.5308C34.0213 26.2854 34.0359 25.8884 34.0359 22.7173C34.0359 19.5462 34.0213 19.1482 33.9654 17.9028C33.907 16.6597 33.71 15.8113 33.4229 15.0688C33.1237 14.3009 32.7248 13.6494 32.0753 13.0004C31.4258 12.3509 30.7763 11.952 30.0076 11.654C29.2632 11.3653 28.4143 11.1685 27.1712 11.1116C25.9258 11.0549 25.5293 11.041 22.3572 11.041H22.3609ZM21.3133 13.1451C21.6242 13.1447 21.9711 13.1451 22.3608 13.1451C25.4784 13.1451 25.8479 13.1563 27.079 13.2123C28.2174 13.2643 28.8353 13.4546 29.2469 13.6144C29.7918 13.826 30.1803 14.079 30.5887 14.4877C30.9974 14.8963 31.2504 15.2856 31.4625 15.8304C31.6223 16.2416 31.8128 16.8594 31.8646 17.9979C31.9205 19.2287 31.9327 19.5985 31.9327 22.7146C31.9327 25.8307 31.9205 26.2005 31.8646 27.4313C31.8125 28.5698 31.6223 29.1876 31.4625 29.5987C31.2508 30.1436 30.9974 30.5316 30.5887 30.9401C30.18 31.3487 29.792 31.6017 29.2469 31.8133C28.8358 31.9739 28.2174 32.1636 27.079 32.2157C25.8481 32.2716 25.4784 32.2838 22.3608 32.2838C19.243 32.2838 18.8735 32.2716 17.6426 32.2157C16.5042 32.1631 15.8863 31.9729 15.4745 31.8131C14.9296 31.6015 14.5404 31.3485 14.1317 30.9398C13.723 30.5311 13.47 30.1429 13.2579 29.5978C13.0981 29.1867 12.9076 28.5688 12.8558 27.4304C12.7999 26.1995 12.7887 25.8297 12.7887 22.7117C12.7887 19.5936 12.7999 19.2258 12.8558 17.9949C12.9079 16.8565 13.0981 16.2386 13.2579 15.827C13.4696 15.2822 13.723 14.8929 14.1317 14.4843C14.5404 14.0756 14.9296 13.8226 15.4745 13.6105C15.8861 13.4499 16.5042 13.2602 17.6426 13.2079C18.7197 13.1593 19.1372 13.1447 21.3133 13.1422V13.1451ZM28.5935 15.0839C27.82 15.0839 27.1924 15.7108 27.1924 16.4846C27.1924 17.2581 27.82 17.8857 28.5935 17.8857C29.3671 17.8857 29.9947 17.2581 29.9947 16.4846C29.9947 15.711 29.3671 15.0839 28.5935 15.0839ZM22.3609 16.721C19.0494 16.721 16.3646 19.4058 16.3646 22.7173C16.3646 26.0287 19.0494 28.7123 22.3609 28.7123C25.6723 28.7123 28.3562 26.0287 28.3562 22.7173C28.3562 19.4058 25.6723 16.721 22.3609 16.721ZM22.3608 18.8252C24.5102 18.8252 26.2529 20.5676 26.2529 22.7173C26.2529 24.8667 24.5102 26.6094 22.3608 26.6094C20.2112 26.6094 18.4687 24.8667 18.4687 22.7173C18.4687 20.5676 20.2112 18.8252 22.3608 18.8252Z" fill="white" />
                                        </svg>


                                    </a>

                                    <a href="#" className="w-[33px] h-[33px] lg:w-[44px] lg:h-[44px] mx-4 text-white transition-colors duration-300 dark:text-[#3B5998] hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.140625 22.717C0.140625 10.626 9.94237 0.824219 22.0334 0.824219C34.1245 0.824219 43.9262 10.626 43.9262 22.717C43.9262 34.8081 34.1245 44.6098 22.0334 44.6098C9.94237 44.6098 0.140625 34.8081 0.140625 22.717Z" fill="#3B5998" />
                                            <path d="M23.6637 35.0326V24.4212H26.8911L27.3751 20.2857H23.6637V17.6453C23.6637 16.4481 23.9651 15.6321 25.5208 15.6321H27.505V11.9344C26.5446 11.8222 25.5793 11.7679 24.6136 11.7717C21.7527 11.7717 19.7942 13.6988 19.7942 17.2381V20.2857H16.5586V24.4212H19.7942V35.0326H23.6637Z" fill="white" />
                                        </svg>

                                    </a>

                                    <a href="#" className="w-[33px] h-[33px] lg:w-[44px] lg:h-[44px] mx-4 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.832031 22.717C0.832031 10.626 10.6338 0.824219 22.7248 0.824219C34.8159 0.824219 44.6177 10.626 44.6177 22.717C44.6177 34.8081 34.8159 44.6098 22.7248 44.6098C10.6338 44.6098 0.832031 34.8081 0.832031 22.717Z" fill="#55ACEE" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.072 18.618L22.1179 19.3756L21.3522 19.2828C18.5652 18.9272 16.1303 17.7214 14.063 15.6961L13.0523 14.6912L12.7919 15.4333C12.2407 17.0875 12.5929 18.8345 13.7414 20.0095C14.3539 20.6588 14.2161 20.7515 13.1595 20.365C12.7919 20.2414 12.4704 20.1486 12.4397 20.195C12.3325 20.3032 12.7001 21.7101 12.991 22.2666C13.3892 23.0396 14.2008 23.7972 15.089 24.2455L15.8393 24.6011L14.9512 24.6165C14.0936 24.6165 14.063 24.632 14.1549 24.9567C14.4611 25.9616 15.6709 27.0283 17.0185 27.4921L17.9679 27.8168L17.141 28.3115C15.9159 29.0226 14.4764 29.4246 13.037 29.4555C12.3479 29.471 11.7812 29.5328 11.7812 29.5792C11.7812 29.7338 13.6495 30.5996 14.7368 30.9397C17.9986 31.9446 21.8729 31.5117 24.7825 29.7956C26.8498 28.5743 28.9171 26.1471 29.8819 23.7972C30.4026 22.5449 30.9232 20.2568 30.9232 19.1591C30.9232 18.448 30.9692 18.3552 31.8267 17.5049C32.3321 17.0102 32.8068 16.4691 32.8987 16.3145C33.0518 16.0208 33.0365 16.0208 32.2555 16.2836C30.9538 16.7474 30.7701 16.6855 31.4132 15.9898C31.888 15.4951 32.4546 14.5984 32.4546 14.3356C32.4546 14.2892 32.2249 14.3665 31.9645 14.5057C31.6889 14.6603 31.0763 14.8922 30.6169 15.0313L29.79 15.2941L29.0396 14.784C28.6262 14.5057 28.0443 14.1965 27.738 14.1037C26.957 13.8873 25.7625 13.9182 25.0581 14.1656C23.1439 14.8613 21.9341 16.6546 22.072 18.618Z" fill="white" />
                                        </svg>


                                    </a>
                                    <a href="#" className="w-[33px] h-[33px] lg:w-[44px] lg:h-[44px] mx-4 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.503906 22.717C0.503906 10.626 10.3057 0.824219 22.3967 0.824219C34.4878 0.824219 44.2895 10.626 44.2895 22.717C44.2895 34.8081 34.4878 44.6098 22.3967 44.6098C10.3057 44.6098 0.503906 34.8081 0.503906 22.717Z" fill="#DD4B39" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5223 15.1907C32.5271 15.4665 33.3184 16.2789 33.587 17.3106C34.075 19.1804 34.075 23.0819 34.075 23.0819C34.075 23.0819 34.075 26.9832 33.587 28.8532C33.3184 29.8849 32.5271 30.6973 31.5223 30.9732C29.7013 31.4741 22.3988 31.4741 22.3988 31.4741C22.3988 31.4741 15.0963 31.4741 13.2752 30.9732C12.2704 30.6973 11.4791 29.8849 11.2105 28.8532C10.7227 26.9832 10.7227 23.0819 10.7227 23.0819C10.7227 23.0819 10.7227 19.1804 11.2105 17.3106C11.4791 16.2789 12.2704 15.4665 13.2752 15.1907C15.0963 14.6896 22.3988 14.6896 22.3988 14.6896C22.3988 14.6896 29.7013 14.6896 31.5223 15.1907ZM20.2096 19.7979V27.0955L26.0476 23.4468L20.2096 19.7979Z" fill="white" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* contact */}
                        <div className='mt-16 lg:mt-0 lg:w-[436px] lg:h-[269px] flex flex-col justify-center items-center text-center' style={{fontFamily:'Inter'}}>
                            <h1 className='text-xl mb-6 leading-6 font-bold lg:text-left'>CONTACT</h1>
                            <h3 className='text-gray-400 mb-3 text-wrap text-xl leading-10'>8521 Leesburg Pike, Vienna, VA 22182
Virginia, USA</h3>
                                <h3 className='text-gray-400 mb-2 text-wrap text-xl leading-10'>info@pacedream.com
                                </h3>
                                <h3 className='text-gray-400 text-wrap text-xl leading-10'>703-869-2029
                                </h3>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </div>



    )
}

export default Footer