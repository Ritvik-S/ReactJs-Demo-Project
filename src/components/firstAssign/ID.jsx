import React, { useEffect, useState } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BigButton = styled.button`
    padding: 10px 20px;
    background-color: seagreen;
    text-align: center;
    margin: auto;
    display: inline-block;
    margin-top: 5px;
    boyarder-radius: 50px;
    color: white;
`;

const ListItem = styled.li`
    color: black;
    list-style: none;
    font-size: 15px;
`;

const UnList = styled.ul`
    background-color: Yellow;
    text-align: center;
    margin-top: 20px;
    border-radius: 40px;
`;

const OuterFrame = styled.div`
    border-radius: 30px;
    margin: 15px;
    align-content: center;
    text-align: center;
`;

const ButtonBox = styled.div`
    text-align: center;
`;

const MyFont = styled.h2`
    color: black;
    font-family: arial;
`;
const ID = (props) => {
  const [list, setList] = useState([]);
  const [isLoaded, setLoaded] = useState('False');

  useEffect(() => {
    const { match: { params } } = props;
    const { id } = params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setList(res.data);
        setLoaded('true');
      });
  }, []);

  const { address } = list;
  const { company } = list;

  if (isLoaded === 'False') {
    return (<div><ButtonBox>loading....</ButtonBox></div>);
  }

  return (
    <OuterFrame>
      <MyFont>COMPLETE DETAILS OF THE PERSON</MyFont>
      <UnList>
        <br />
        <ListItem>
          <strong>Name: </strong>
          {list.name}
        </ListItem>
        <br />
        <ListItem>
          <strong>Username: </strong>
          {list.username}
        </ListItem>
        <br />
        <ListItem>
          <strong>Email: </strong>
          {list.email}
        </ListItem>
        <br />
        <ListItem>
          <strong>Street: </strong>
          {address && address.street}
        </ListItem>
        <br />
        <ListItem>
          <strong>Suite: </strong>
          {address && address.suite}
        </ListItem>
        <br />
        <ListItem>
          <strong>City: </strong>
          {address && address.city}
        </ListItem>
        <br />
        <ListItem>
          <strong>Zipcode: </strong>
          {address && address.zipcode}
        </ListItem>
        <br />
        <ListItem>
          <strong>Geo-Lat: </strong>
          {address && address.geo.lat}
        </ListItem>
        <br />
        <ListItem>
          <strong>Geo-Lng: </strong>
          {address && address.geo.lng}
        </ListItem>
        <br />
        <ListItem>
          <strong>Phone: </strong>
          {list.phone}
        </ListItem>
        <br />
        <ListItem>
          <strong>Website: </strong>
          {list.website}
        </ListItem>
        <br />
        <ListItem>
          <strong>Company_name: </strong>
          {company && company.name}
        </ListItem>
        <br />
        <ListItem>
          <strong>Company_Phrase: </strong>
          {company && company.catchPhrase}
        </ListItem>
        <br />
        <ListItem>
          <strong>Company_bs: </strong>
          {company && company.bs}
        </ListItem>
        <br />
      </UnList>

      <Link to="/home">
        <ButtonBox><BigButton>home</BigButton></ButtonBox>
      </Link>
    </OuterFrame>
  );
};

ID.propTypes = {
  match: proptypes.shape({
    params: proptypes.func.isRequired,
  }).isRequired,
};

export default ID;
