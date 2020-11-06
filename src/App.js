import './App.css';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItemContainer from './DraggableItemContainer';
import { useState } from 'react';

const AppContainer = styled.div`
   position: fixed;
   left: 50%;
   transform: translate(-50%);
`;

function App() {
   const [items1, setItems1] = useState(new Set([...Array(10).keys()]));
   const [items2, setItems2] = useState(new Set());

   const moveItem = fromTop => item => {
      if (fromTop) {
         items2.add(item.boxId);
         items1.delete(item.boxId);
      } else {
         items1.add(item.boxId);
         items2.delete(item.boxId);
      }

      setItems1(new Set(items1));
      setItems2(new Set(items2));
   };

   return (
      <AppContainer>
         <DndProvider backend={HTML5Backend}>
            <DraggableItemContainer items={items1} moveItem={moveItem} top={true} />
            <DraggableItemContainer items={items2} moveItem={moveItem} top={false} />
         </DndProvider>
      </AppContainer>
   );
}

export default App;
