import { NavLink } from 'react-router-dom';
import { BorrowersPersonalInfoTab, NEXT, SERVICESLETTER, } from './ui-components';
import {APPLY, ApplyPersonal, BACK} from './ui-components'
import React from 'react';  

const BorrowerInfo = () => {
    return (
      <div>
        <BorrowersPersonalInfoTab/>
        <ApplyPersonal
        position="absolute"
        left= "259px"
        top="31px" 
        />
        <NavLink to = "/">
        <SERVICESLETTER
          position="absolute"
          left= "909px"
          top="86px" 
        />
        </NavLink>
        <NavLink to ="/applynow">
        <BACK 
            position="absolute"
            left="510px"
            top="1540px"        
        />
        </NavLink>
        <NavLink to ="/submission">
        <NEXT
            position="absolute"
            left="1117px"
            top="1540px"
        />
        </NavLink>
      </div>
    );
  }


export default BorrowerInfo;
