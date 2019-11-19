import React, { Fragment} from 'react';

import { Section } from '../../styles';


function componentDidMount(){
  document.title = "myPage";
}

function Home() {
  componentDidMount();
  return (
    <Fragment>
      <Section className="container">
        <h1>Web developer</h1>
        <p>
          My name is no!
        </p>
      </Section>
    </Fragment>
  );
}

export default Home;
