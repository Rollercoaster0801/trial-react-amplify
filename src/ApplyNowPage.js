import { Link, NavLink } from 'react-router-dom';
// import { PageServices, PERSONALLETTER } from './ui-components';
// import SERVICESLETTER from './ui-components/SERVICESLETTER';
// import { Auth } from 'aws-amplify';
import { ApplyPersonal, LoanInformation, NEXT, SERVICESLETTER } from './ui-components';
import {APPLY, PageServices, APPLYTEXT, LoanInformationInstructions,} from './ui-components'
import React from 'react';

// let auth = false;

const ApplyNowPage = () => {
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
      <LoanInformationInstructions 
        position="absolute"
        left= "18px"
        top="378px"
      />
      <LoanInformation
        position="absolute"
        left= "406px"
        top="317px"
      />
      <NavLink to="/borrowerinfo">
        <NEXT 
          position="absolute"
          left= "1133px"
          top="856px"
        />
      </NavLink>
      </div>
    );
  }


export default ApplyNowPage;

// const currentSession = async () => {
//     const id = await getUserPoolId().then(res=>{return res})
//     console.log(id)
//     if (id == 'us-east-1_qD5rmHVdw') {
//         console.log(id)
//         auth = true;
//         return auth
//     }
// }

// function authenticate() {
//     auth = currentSession()
//     if (auth) {
//         return (
//             <div>
//                 You are elligible for applying loans.
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 You are not elligible for applying loans.
//             </div>
//         )
//     }
// }

// const getUserPoolId = () => {
//     return Auth.currentAuthenticatedUser().then(res=>{
//         return res.pool.userPoolId;
//       })
// }

