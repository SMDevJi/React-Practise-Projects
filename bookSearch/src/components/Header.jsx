import { useState } from 'react';
import Navbar from './Navbar';
import searchIcon from '../assets/search.svg';
import { useDispatch } from 'react-redux';
import { loadSearches } from '../redux/searchSlice';
import { useNavigate } from 'react-router-dom'

function Header() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        if (inputValue) {
            console.log("Search value:", inputValue);
            navigate('/');
            dispatch(loadSearches(inputValue));
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <>
            <Navbar />
            <div className='bg-cover bg-center h-[550px] header-bg w-full flex justify-center'>
                <div className="max-w-[700px] h-full header-container flex flex-col justify-center items-center p-3">
                    <h1 className='font-bold text-white text-4xl sm:text-5xl text-center'>Find Your Book of Choice.</h1>
                    <h2 className='mt-5 opacity-70 text-white text-center text-md sm:text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae assumenda error similique! Voluptatibus minus officiis sapiente aperiam id, consequatur enim aliquid dolorum delectus doloribus nobis fuga dolores quaerat natus quam?
                    </h2>

                    <div className="relative mt-9 w-[90%]">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Type something..."
                            className="text-xl w-full h-[50px] sm:h-[65px] bg-white rounded-4xl px-6 pr-14 py-2 border border-gray-300 focus:outline-none"
                        />
                        <button
                            onClick={handleSearchClick}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            aria-label="Search"
                        >
                            <img
                                src={searchIcon}
                                alt="Search"
                                className="w-6 h-6 text-gray-400"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
