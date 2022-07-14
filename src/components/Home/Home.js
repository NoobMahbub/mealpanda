import React, { useState } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import CustomLink from '../CustomLink/CustomLink';
import './Home.css';
const Home = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        delay: 200,
        reverse: flip,
        onRest: () => set(!flip),

    })
    return (
        <div className='home'>

            <div>
                <h3 className='align-middle d-flex justify-content-center align-items-center mb-5 mt-5'>
                    <div>Welcome to </div>
                    <div className='ms-2 fw-bold mt-2'>
                        <animated.div style={props}> MealPanda <SiFoodpanda color='d70f64' size={40} /> </animated.div>

                    </div>
                </h3>
                <CustomLink to="/meals">
                    <button className='explore-btn'>
                        Explore Meals
                    </button>
                </CustomLink>
            </div>
        </div>
    );
};

export default Home;