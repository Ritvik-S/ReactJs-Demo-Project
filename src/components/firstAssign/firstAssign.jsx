import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';

const NameList = styled.li`
text-align: center;
margin: 10px;
padding: 8px;
background-color: yellow;
border: 2px;
border-radius: 40px;
list-style: none;
`;


const Container = styled.div`
border-radius: 30px 30px 30px 30px;
`;

const ClickButton = styled.button`
border-radius: 50px; 
margin: 3px;
padding: 5px; 
font-size: 11px;
letter-spacing: 0.5px;
background-color: seagreen
color: white;  
`;

const Text = styled.h3`
color: black;
`;

const FirstAssign = (props) => {
  const [items, setItems] = useState([]);       
  const [isLoaded, setLoaded] = useState(false);   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      // eslint-disable-next-line no-trailing-spaces
      .then(res => res.json())
      .then((json) => {
        setItems(json);
        setLoaded(true);
      });
  });
  const { history } = props;

  if (!isLoaded) {
    return (
      <div id="load">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      {items.map(item => (
        <Container>

          <ul className="ul-list">
            <NameList>
              <Text>
                <b>Name: </b>
                {item.name || 'No record found'}
              </Text>
              <ClickButton onClick={() => { history.push(`/home/${item.id}`); }}>
                  Click here to see Details
              </ClickButton>
            </NameList>
          </ul>
        </Container>
      ))}
    </div>
  );
};
// eslint-disable-next-line react/no-typos
FirstAssign.propTypes = {
  history: proptypes.shape({
    push: proptypes.func.isRequired,
  }).isRequired,
};

export default FirstAssign;
