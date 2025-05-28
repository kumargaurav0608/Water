import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
//   faLinkedinIn,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-pink-500 p-2 w-full   '>
        <div className="flex flex-row justify-around  ">
        <div className="left-footer max-w-[100/3] ">
             <p className='text-center font-bold'>Address</p>
             <div className='flex justify-center align-center'>
             <p className='text-justify text-center'>Holy Mission School, Khata No.217 , Khesra No. 1762, <br /> Narayanpur Anant, Sherpur, Muzaffarpur, Bihar 842002</p>

             </div>

        </div>
        <div className="middle-footer w-[100/3]">
            <p className='text-center font-bold'>Our Parks & Attractions </p>
            <div className='flex justify-center align-center'>
                <ul className='align-center justify-center'>
                  <li>Wave Pool</li>
                  <li>Water Fall</li>
                  <li>Water Slide</li>
                  <li>Mountain Jump</li>
                  <li>Mountain Racing</li>
                  <li>Rain Dance</li>
                  <li>Tower Slide</li>
                </ul>

            </div>
           
        </div>
        {/* <div className="right-footer w-[100/3]">
            <p className='text-center font-bold'>Contact us</p>
              <p className='text-center text-md font-semibold'>Water Valley Water Park <br></br> <span className='italic text-sm font-normal'>(A unit of Ananda Resorts)</span></p>
               <div className="flex justify-center items-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 text-2xl"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 text-2xl"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div> */}
    
        {/* </div> */}
        </div>

        {/* <p className='text-center'>Copyright </p> */}

    </div>
  )
}

export default Footer
