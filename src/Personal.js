import { Link, NavLink } from 'react-router-dom';
import { ApplyNow, LoanCalculator, PageServices, PERSONALLETTER, Requirements,  } from './ui-components';
import SERVICESLETTER from './ui-components/SERVICESLETTER';

function Personal() {
    console.log("THIS IS PERSONAL PAGE")
    
    return (
      
      <div>
      <Link exact to="/personal"><PageServices/></Link>
      <Link exact to="/applynow">
        <ApplyNow
        position= 'absolute'
        width='344px'
        height= '132px'
        left='1027px'
        top='380px'/>
        <Requirements
        position= 'absolute'
        width= '351px'
        height='139px'
        left='1026px'
        top='581px'
        />
      </Link>
      <LoanCalculator
      position= 'absolute'
      width= '346px'
      height= '141px'
      left='1034px'
      top= '784px'/>
      <NavLink to="/">
        <SERVICESLETTER
        width="479px"
        height="107px"
        position="absolute"
        top="100px"
        left="906px"
        padding="0px 0px 0px 0px"/>
      </NavLink>
      <PERSONALLETTER
      position= 'absolute'
      width= '632px'
      height= '107px'
      left= '190px'
      top= '100px'/>
      </div>

    );
  }
export default Personal;