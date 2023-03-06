import React from 'react';
//import img from assets
import mjImg from '../../assets/portfolio-mj2.jpg'


export default function About () {
    <section className='title'>
        <div className='row justify-content-center' id='about-container'>
            <div className='col-lg-6 col-md-12'>
                <center><img src={ mjImg } className='mj-image' alt='mj with drink as profile image'/></center>
                <p className='name'>MJ Jeong</p>
                <p className='job'>Full stack web developer / MERN stack</p>
            <h2 className='mjstory'>a little stroy about MJ</h2>
            <p>
            Hey, I'm MJ <br />
          I am a fullstack web development student expected to graduate in March
          2023, my coding journey began in December of last year due to my
          thirst of knowledge and self-enhancement. I have held various
          profession as welder, machine operator, production manager, assistant
          project manager in R&D (electronics manufacturing), R&D quality
          assurance project management (electronics software) and assistant
          project manager in construction. Throughout my career, I've always
          admired co-workers with in-dept technical knowledge. Through coding, I
          intent to become the subject matter expert that I desire.
            </p>
            <br></br>
            <br></br>
          Outside of work, I enjoy walking in the parks, watching movies,
          drinking coffee, learning histroy and experiencing different cultures.
            </div>

        </div>
    </section>
}