import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import sample1 from '../../assets/images/sample1.jpg';
/**
 * Todo: axios, useEffect, useState
 * Todo: map
 */
const CardList = () => {
  return (
    <Common>
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
    </Common>
  );
};

const Common = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-bottom: 3rem;
  margin: 3rem;
  align-items: center;
  flex-direction: column;
`;
export default CardList;
