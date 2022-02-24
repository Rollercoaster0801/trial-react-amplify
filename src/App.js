
import { isWebWorker } from '@aws-amplify/core';
import './App.css';
import { Route,Switch} from 'react-router-dom'

import Myservice from './Myservice';
import Car from './Car'
import Housing from './Housing';
import Personal from './Personal'
import Business from './Business'
import BorrowerInfo from './BorrowerInfo'
import Submission from './Submission'
import { BrowserRouter } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import ApplyNowPage  from './ApplyNowPage';
import SubmittedPage from './Submitted';
Amplify.configure(awsExports);

function App() {
  return (
   
        <main>
          <BrowserRouter>
          <div className='App' 
            style={{
            position: "absolute",
            left: "7%",
            top: "0%",
          }}
          >
          
          <Switch>
          <Route exact path ="/"><Myservice/></Route>
          <Route exact path ="/car"><Car/></Route>
          <Route exact path ="/personal"><Personal/></Route>
          <Route exact path ="/housing"><Housing/></Route>
          <Route exact path ="/business"><Business/></Route>
          <Route exact path ="/applynow"><ApplyNowPage/></Route>
          <Route exact path ="/borrowerinfo"><BorrowerInfo/></Route>
          <Route exact path ="/submitted"><SubmittedPage/></Route>
          <Route exact path ="/submission"><Submission/></Route>
          </Switch>
          </div>
          </BrowserRouter>
        </main>
  );
   
}

export default App;
  