import React from 'react'
import aboutImg from '../assets/about-img.jpg'

function About() {
    return (
        <div className="about-box-wrapper p-7 w-full flex  justify-center">
            <div className="about-box max-w-[1200px] flex justify-center items-center flex-col md:flex-row p-3">
                <div className="about-left  ls-1 font-bold text-2xl">
                    <h1>ABOUT</h1>
                    <img className='mt-5 w-[300px] sm:w-[400px] max-w-[500px]' src={aboutImg} alt="About" />
                </div>
                <div className="ls-1  about-right max-w-[75%] md:max-w-[50%] ml-0 md:ml-15 flex flex-col justify-start h-full mt-20 ">
                    <h1 className=' mb-5 font-bold text-2xl'>About BookHub</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About