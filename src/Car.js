import { Link, NavLink } from 'react-router-dom';
import { PageServices, CARLETTER,  } from './ui-components';
import SERVICESLETTER from './ui-components/SERVICESLETTER';


function Page() {
    console.log("THIS IS PERSONAL PAGE")
    
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
      <CARLETTER
      position= 'absolute'
      width= '632px'
      height= '107px'
      left= '90px'
      top= '100px'/>
      </div>

    );
  }
export default Page
