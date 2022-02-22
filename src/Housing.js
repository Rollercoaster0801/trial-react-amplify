import { Link, NavLink } from 'react-router-dom';

import { PageServices,HOUSINGLETTER } from './ui-components';
import SERVICESLETTER from './ui-components/SERVICESLETTER';


function Housing() {
    console.log("THIS IS HOUSING PAGE")
    
    return (
      
      <div>
      <Link exact to="/personal"><PageServices/></Link>
      <NavLink to="/">
        <SERVICESLETTER
        width="479px"
        height="107px"
        position="absolute"
        top="100px"
        left="906px"
        padding="0px 0px 0px 0px"/>
      </NavLink>
      <HOUSINGLETTER
      position= 'absolute'
      width= '632px'
      height= '107px'
      left= '179px'
      top= '100px'/>
      </div>

    );
  }
export default Housing;