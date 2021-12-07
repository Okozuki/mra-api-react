import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Snipet from './Snipet';
import Chatbot from './Chatbot';
import ChatbotTest from './ChatbotTest';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);



  return loading && profile === null ? (
    <Spinner />
  ) : (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            {}

            <div className='btn-delete'>
              <button className='btn btn-danger shadow' onClick={() => deleteAccount()}>
                <i className='fas fa-user-minus' /> Delete My ChatBot
            </button>
            </div>

            {console.log(loading)}
            {console.log(profile)}

            {}


            <Snipet />




            <ChatbotTest />

            {}

          </Fragment>
        ) : (
            <Fragment>
              <p>You have not yet setup a chatbot, please add some info</p>
              <Link to='/create-profile' className='btn btn-primary my-1 shadow'>
                Create My Chatbot
              </Link>
            </Fragment>
          )}
      </Fragment>
    );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
