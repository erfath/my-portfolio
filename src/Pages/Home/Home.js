import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Projects from '../Projects/Projects';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <GetInTouch></GetInTouch>
        </div>

    );
};
export default Home;