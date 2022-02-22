import { Link, NavLink } from 'react-router-dom';
import { LoanInformation, NEXT, PageOne, SubmissionPage } from './ui-components';
import {APPLY, PageServices, APPLYTEXT, SubmissionInstructions, BACK} from './ui-components'
import React from 'react';

const Submission = () => {
    return (
      <div>
        <PageServices/>
        <APPLYTEXT
            position="absolute"
            left= "158px"
            top="55px" 
        />
        <SubmissionInstructions 
            position="absolute"
            left= "18px"
            top="378px"
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