import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

import React from 'react'

const About = () => {
    return (
        <section className='bg-white py-20' id='about' >
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />

                <article>
                    <SectionTitle text='code and coffee' />

                    <p className='text-slate-600 mt-8 leading-loose'>
                    Food truck jianbing af ennui prism tonx. Pabst 90's chicharrones gluten-free, 
                    blog pitchfork four dollar toast stumptown vinyl. 
                    Adaptogen cronut tattooed readymade four dollar toast photo booth fanny pack tote bag williamsburg craft beer. 
                    Retro selvage gastropub DSA taiyaki four dollar toast swag tumeric.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About