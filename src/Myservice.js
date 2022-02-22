import { PageOne } from './ui-components';
import Business from './Business';
import { Link, NavLink } from 'react-router-dom';
import Housing from './Housing'
import Personal from './Personal'
import Car from './Car'
import { HousingPg, PersonalPg, BusinessPg, CarPg, All } from './ui-components';

function Myservice() {

    return (
        <div >
        <Link exact to="/">
            <PageOne/>
        </Link>
        <NavLink to="/">
            <All
            position="absolute"
            top="300px"
            left="727px"
            ></All>
        </NavLink>
        <NavLink to="/personal">
            <PersonalPg
            onClick={Personal}
            position="absolute"
            top="350px"
            left="0px"
            property1="Default"
            ></PersonalPg>
        </NavLink>
        <NavLink to="/car">
            <CarPg
            onClick={Car}
            position="absolute"
            top="512px"
            left="108px"
            property1="Default"
            ></CarPg>
        </NavLink>   
        <NavLink to="/business">
            <BusinessPg
            onClick={Business}
            position="absolute"
            top="674px"
            left="0px"
            property1="Default"
            ></BusinessPg>
        </NavLink>
        <NavLink to="/housing">
            <HousingPg
            onClick={Housing}
            position="absolute"
            top="837px"
            left="107px"
            property1="Default"
            ></HousingPg>
        </NavLink>  
        </div>
    );
  }
  
  export default Myservice;
