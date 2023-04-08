import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio <br/>
      </SectionTitle>
      <SectionText>
      Hello, I'm Nemanja Stojanov, a web developer experienced in React and Node. I specialize in Front-end development, and I've created couple of projects. Here, you'll find a collection of my projects that showcase my skills and expertise.
      <br/> Let's work together to build something great!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:nemanja.stojanov21@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;