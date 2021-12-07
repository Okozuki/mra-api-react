import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';


const Snipet = ({
  getCurrentProfile,
  profile: { profile, loading }

}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  function generateSnipet(profile) {
    const $el = profile.agent.snipet.script;
    const botId = profile._id;
    const agentId = profile.agent._id;
    let snipet = '';
    snipet = $el.replace("data-botId=''", `data-botid='${botId}'`);
    snipet = snipet.replace("data-agentId=''", `data-agentid='${agentId}'`);
    return snipet;
  }

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return profile.agent.snipet === undefined ? (
    <Spinner />
  ) : (
      <Fragment>

        {}
        {}
        <h2 className="snipet-title my-2">My ChatBot Snipet</h2>
        <textarea
          className="snipet shadow"
          ref={textAreaRef}
          defaultValue={generateSnipet(profile)}

        />
        {
          /* Logical shortcut for only displaying the 
             button if the copy command exists */
          document.queryCommandSupported('copy') &&
          <div>
            <button className='btn btn-primary my-1 shadow' onClick={copyToClipboard}>Copy My Snipet</button>
            {copySuccess}
          </div>
        }

      </Fragment >
    );
};

Snipet.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
  //null
)(Snipet);
