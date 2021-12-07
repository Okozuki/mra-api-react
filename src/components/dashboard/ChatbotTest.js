import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
//import moment from 'moment';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';

import { getCurrentProfile } from '../../actions/profile';

const ChatBotTest = ({
  getCurrentProfile,
  profile: { profile, loading } }
) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  function launchScript() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = process.env.REACT_APP_SNIPET_URL;
    document.body.appendChild(s);
  }

  return profile.agent.snipet === undefined ? (
    <Spinner />
  ) : (
      <Fragment>
        <script type="text/javascript"
          id="monrepondeurauto-embedder-d7lcfheammjct"
          className="monrepondeurauto-embedder-d7lcfheammjct"
          data-botid={profile._id}>
          {launchScript()}
        </script>
      </Fragment>
    );
};

ChatBotTest.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ChatBotTest);
