import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Content from '../components/Content';


function Home(props) {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Content>
                To work in a strategy driven organization  with proficient
                work motivated environment where i get to employ and apply my
                knowledge and development skill sets and experimental knowledge;
                thereby enabling me to nurture along with gratifying organization objective.

            </Content>

            <Carousel />
        </div>
    );
}
export default Home;
