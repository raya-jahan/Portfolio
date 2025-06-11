import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoE from '../../assets/images/E.png';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "aya. ".split("");
    const jobArray = "".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>Greetings,</span>
                <span className = {`${letterClass} _9`}></span>
                <br /> 
                <span className = {`${letterClass} _10`}>I</span>
                <span className = {`${letterClass} _11`}>'m</span>
                <img src={LogoE} alt = "developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2>I am interested in Quantum computing and Reinforcement learning related research, 
                  I love to teach and
                  I am passionate about learning new concepts through hands-on projects.
                  <br/>Computer Science, 2025 at Youngstown State University</h2>
                <Link to="/contact" className="flat-button">CONTACT</Link>
            </div>
            <Logo className="Home"/>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home