import { Link, NavLink } from 'react-router-dom';
import { ApplyPersonal, LoanInformation, NEXT, PageOne, SubmissionPage, SubmissionPageText, SERVICESLETTER } from './ui-components';
import {APPLY, PageServices, APPLYTEXT, SubmissionInstructions, BACK} from './ui-components'
import React from 'react';

const Submission = () => {
    return (
      <div>
        <PageServices/>
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
        <SubmissionInstructions 
            position="absolute"
            left= "18px"
            top="378px"
        />
        <SubmissionPageText
            position="absolute"
            left= "406px"
            top="317px"
        />
        <NavLink to ="/borrowerinfo">
        <BACK 
            position="absolute"
            left="510px"
            top="856px"        
        />
        </NavLink>
        <NavLink to ="/submitted">
        <NEXT
            position="absolute"
            left= "1133px"
            top="856px"
        />
        </NavLink>
      </div>
    );
  }


export default Submission;

// <SubmissionPage
//             position="absolute"
//             left= "406px"
//             top="317px"
//         />