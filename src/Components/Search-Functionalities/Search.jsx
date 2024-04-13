import { useState } from "react";
import React from 'react'

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const Data = [
        {
            id: 1,
            image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            technology: 'ReactJS',
            availability: '481',
            waiting: '223',
            verified: '120'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3smj3F4-qgCjxfFDRv9ets1l5tmPh39gdliwwstpWw&s',
            technology: 'JavaScript',
            availability: '423',
            waiting: '324',
            verified: '620'
        },
        {
            id: 3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
            technology: 'Css',
            availability: '323',
            waiting: '323',
            verified: '320'
        },
        {
            id: 4,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png',
            technology: 'CSS3',
            availability: '403',
            waiting: '423',
            verified: '220'
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s',
            technology: 'Html',
            availability: '523',
            waiting: '365',
            verified: '380'
        },
        {
            id: 6,
            image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
            technology: 'HTML5',
            availability: '523',
            waiting: '423',
            verified: '390'
        },
        {
            id: 7,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
            technology: 'Tailwind',
            availability: '228',
            waiting: '102',
            verified: '200'
        }
        ,
        {
            id: 8,
            image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png',
            technology: 'Angular',
            availability: '328',
            waiting: '110',
            verified: '300'
        }
        ,
        {
            id: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozrztviud0ddLb2c0XvfQpvzCszUoyQWgogEFM_SEg&s',
            technology: 'Azur',
            availability: '428',
            waiting: '200',
            verified: '210'
        }
        ,
        {
            id: 10,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
            technology: 'Golang',
            availability: '28',
            waiting: '110',
            verified: '400'
        }
        ,
        {
            id: 11,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
            technology: 'MongoDB',
            availability: '176',
            waiting: '301',
            verified: '111'
        }
        ,
        {
            id: 12,
            image: 'https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp',
            technology: 'NextJS',
            availability: '214',
            waiting: '423',
            verified: '390'
        }
        ,
        {
            id: 13,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqEl32vojBentb5LngsLeuEuJhGxXKhijymxh9n3aOA&s',
            technology: 'PostgreSQL',
            availability: '106',
            waiting: '101',
            verified: '201'
        }
        ,
        {
            id: 14,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
            technology: 'Python',
            availability: '122',
            waiting: '222',
            verified: '203'
        }
        ,
        {
            id: 15,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_zLByzh3D2PtukWzZGAazL6kPP-3kb772xJrgyOkiw&s',
            technology: 'SQL',
            availability: '28',
            waiting: '302',
            verified: '111'
        }
        ,
        {
            id: 16,
            image: 'https://w7.pngwing.com/pngs/67/315/png-transparent-flutter-hd-logo-thumbnail.png',
            technology: 'Flutter',
            availability: '203',
            waiting: '200',
            verified: '190'
        }
    ];

    const filteredData = Data.filter(item =>
        item.technology.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
      <div className='h-fit w-full py-10 bg-white'>
       <div className='flex justify-center mb-1 '>
                    <input className='h-[3rem] w-[20rem] border border-3 border-red-900' type='text'
                        placeholder='search technology' value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)} />
       </div>
      <div className='h-full w-11/12 m-auto bg-transparent gap-3 grid grid-cols-3 '>
                    {filteredData.map((value, index) => (
        <div key={index} className='w-auto h-[210px] border border-3 border-red-800 text-center
                         bg-yellow-200 text-black font-bold rounded relative'>
                            <img className='h-20 w-20 ml-[12rem]' src={value.image} alt={value.technology} />
         <div>
                 <h4 className='text-red-900 font-bold text-lg'>{value.technology}</h4>
                  <p className='text-sm'><span className='text-teal-600 font-semibold'>{value.availability}</span>User Available</p>
                  <p className='text-sm'><span className='text-teal-600 font-semibold'>{value.waiting}</span>User Waiting</p>
                  <p className='text-sm'><span className='text-teal-600 font-semibold'>{value.verified}</span>User Verified</p>
                    </div>
        </div>
             ))}
        </div>
  </div>
        </>
    );
}

export default Search;