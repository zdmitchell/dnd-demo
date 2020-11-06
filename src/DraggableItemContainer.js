import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import DraggableItem from './DraggableItem';
import { ItemTypes } from './ItemTypes';

const Container = styled.div`
   height: 50px;
   width: 80vw;
   background-color: ${({ highlight }) => (highlight ? 'green' : 'red')};
   margin-bottom: 10px;
   padding: 5px;
   display: flex;
   justify-content: space-evenly;
`;

const DraggableItemContainer = ({ items, moveItem, top }) => {
   const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes.BOX,
      drop: item => moveItem(!top)(item),
      collect: monitor => ({
         isOver: monitor.isOver(),
         canDrop: monitor.canDrop(),
      }),
      canDrop: item => item.fromTop !== top,
   });

   return (
      <Container ref={drop} highlight={isOver && canDrop}>
         {Array.from(items).map(item => (
            <DraggableItem key={item} isOver={isOver && canDrop} boxId={item} top={top} />
         ))}
      </Container>
   );
};

export default DraggableItemContainer;
