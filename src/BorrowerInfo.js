import { Link, NavLink } from 'react-router-dom';
import { LoanInformation, NEXT, PageOne } from './ui-components';
import {APPLY, PageServices, APPLYTEXT, BorrowerInformationInstructions, BorrowersPersonalInfo, BACK} from './ui-components'
import React from 'react';  

const BorrowerInfo = () => {
    return (
      <div>
        <PageServices/>
        <APPLYTEXT
            position="absolute"
            left= "158px"
            top="55px" 
        />
        <BorrowerInformationInstructions 
            position="absolute"
            left= "18px"
            top="378px"
        />
        <BorrowersPersonalInfo
            position="absolute"
            left= "406px"
            top="317px"
        />
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
