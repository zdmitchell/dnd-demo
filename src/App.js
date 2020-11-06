import './App.css';
import styled from 'styled-components';
import DraggableItem from './DraggableItem';

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
         <DraggableItemContainer>
            <DraggableItem />
         </DraggableItemContainer>
         <DraggableItemContainer></DraggableItemContainer>
      </AppContainer>
   );
}

export default App;
