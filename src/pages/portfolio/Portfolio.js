import React from 'react';

import { Section } from '../../styles';

function componentDidMount(){
  document.title = "myPage";
}

function Portfolio() {
  componentDidMount();
  return (
    <Section>
      <h1>Skills</h1>
    </Section>
  );
}

export default Portfolio;
