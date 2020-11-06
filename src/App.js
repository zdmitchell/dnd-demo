import './App.css';
import styled from 'styled-components';
import DraggableItem from './DraggableItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItemContainer from './DraggableItemContainer';
import { useState } from 'react';
import { useCallback } from 'react';

const AppContainer = styled.div`
   position: fixed;
   left: 50%;
   transform: translate(-50%);
`;

function App() {
   const [items1, setItems1] = useState([...Array(10).keys()]);
   const [items2, setItems2] = useState([]);

   const moveItem = useCallback(
      (item) => {
         if (items1.includes(item)) {
            items2.push(item);
         } else {
            items1.push(item);
         }
      },
      [items1, items2]
   );

   return (
      <AppContainer>
         <DndProvider backend={HTML5Backend}>
            <DraggableItemContainer items={items1} />
            <DraggableItemContainer items={items2} />
         </DndProvider>
      </AppContainer>
   );
}

export default App;
