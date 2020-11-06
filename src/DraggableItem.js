import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';

const Box = styled.div`
   height: 40px;
   width: 40px;
   background-color: blue;
   cursor: move;
   opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`;

const DraggableItem = () => {
   const [{ isDragging }, drag] = useDrag({
      item: { type: ItemTypes.BOX },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   });

   return <Box ref={drag} isDragging={isDragging} />;
};

export default DraggableItem;
