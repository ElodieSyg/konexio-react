import React from 'react';
// Component 
import Menu from '../components/Menu';
import WeeklyCard from '../components/WeeklyCard';
// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

const Weekly = () => {
    return (
        <div>
            <Menu />
            <WeeklyCard />
        </div>
    );
};

export default Weekly;