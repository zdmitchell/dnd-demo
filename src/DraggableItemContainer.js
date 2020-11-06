import React from 'react';
import styled from 'styled-components';
import DraggableItem from './DraggableItem';

const Container = styled.div`
   height: 50px;
   width: 80vw;
   background-color: red;
   margin-bottom: 10px;
   padding: 5px;
   display: flex;
   justify-content: space-evenly;
`;

const DraggableItemContainer = ({ items }) => {
   return (
      <Container>
         {items.map((item) => (
            <DraggableItem boxId={item} />
         ))}
      </Container>
   );
};

export default DraggableItemContainer;
