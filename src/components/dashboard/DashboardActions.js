import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light shadow'>
        <i className='fas fa-user-circle text-primary' /> Edit My Chatbot
      </Link>
      {}
      {}
    </div>
  );
};

export default DashboardActions;
