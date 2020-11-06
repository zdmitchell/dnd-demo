import './App.css';
import styled from 'styled-components';
import DraggableItem from './DraggableItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const AppContainer = styled.div`
   position: fixed;
   left: 50%;
   transform: translate(-50%);
`;

const DraggableItemContainer = styled.div`
   height: 50px;
   width: 80vw;
   background-color: red;
   margin-bottom: 10px;
   padding: 5px;
   display: flex;
   justify-content: space-evenly;
`;

function App() {
   return (
      <AppContainer>
         <DndProvider backend={HTML5Backend}>
            <DraggableItemContainer>
               <DraggableItem />
            </DraggableItemContainer>
            <DraggableItemContainer></DraggableItemContainer>
         </DndProvider>
      </AppContainer>
   );
}

export default App;
