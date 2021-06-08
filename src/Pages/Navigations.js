import React from 'react';
import NavItem from '../Components/NavItem'
import { useHistory } from "react-router-dom";

const Navigations = () => {
    let history = useHistory();

    const navigateToPath = path => {
        console.log('clc ' + path)
       // history.push(path);
      }
    return (
        <div style={{
            display : 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            width: 500,
            alignItems: 'end'
        }}>
            <NavItem name={'Home'} onClickMenu={navigateToPath} path={'/home'}/>
            <NavItem name={'Blood Registration'} />
            <NavItem name={'Developer'} />
            <NavItem name={'About Us'} />
        </div>
    );
}

export default Navigations;
