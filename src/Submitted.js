import { Link, NavLink } from 'react-router-dom';
import { LoanInformation, NEXT, PageOne } from './ui-components';
import {APPLY, PageServices, APPLYTEXT, SuccessText, BACKTOMYSERVICES} from './ui-components'
import React from 'react';

const SubmittedPage = () => {
    return (
      <div>
        <PageServices/>
        <SuccessText
            position="absolute"
            left= "333px"
            top="488px" 
        />
        <NavLink to ="/">
        <BACKTOMYSERVICES 
            position="absolute"
            left= "617px"
            top="769px"
        />
        </NavLink>
      </div>
    );
  }


export default SubmittedPage;
