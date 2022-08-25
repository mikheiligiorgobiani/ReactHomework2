import logo from './logo.svg';
import './App.css';

import ParentComponent from './ParentComponent';
import Wrapper from './Wrapper';
import ChildComponent from './ChildComponent';
import ChildrenComp from './ChildrenComp';

function App() {
  
  return (
    <div className="App">
     
     <ParentComponent />
     <Wrapper>
      <ChildrenComp />
     </Wrapper>
    </div>
  );
}

export default App;
