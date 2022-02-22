
import { Link, NavLink } from 'react-router-dom';
import { PageServices, BUSINESSLETTER,  } from './ui-components';
import SERVICESLETTER from './ui-components/SERVICESLETTER';

function Credit() {
    console.log("THIS IS CREDIT PAGE")
    
    return (
      
      <div className='App'>
      <Link exact to="/business"><PageServices/></Link>
      <NavLink to="/">
        <SERVICESLETTER
        width="479px"
        height="107px"
        position="absolute"
        top="100px"
        left="906px"
        padding="0px 0px 0px 0px"/>
      </NavLink>
      <BUSINESSLETTER
      position= 'absolute'
      width= '632px'
      height= '107px'
      left= '179px'
      top= '100px'/>
      </div>

    );
  }
export default Credit;