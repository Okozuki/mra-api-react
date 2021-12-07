import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const historyRouter = useHistory();
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    welcome: '',
    op_hour: '',
    cl_hour: '',
    chatbot: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      welcome: loading || !profile.welcome ? '' : profile.welcome,
      op_hour: loading || !profile.start_hour ? '' : profile.start_hour,
      cl_hour: loading || !profile.end_hour ? '' : profile.end_hour,
      chatbot: loading || !profile.agent._id ? '' : profile.agent._id,

      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    welcome,
    op_hour,
    cl_hour,
    chatbot,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
    historyRouter.push("/dashboard");
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <div className='form-group'>
            <select name='chatbot'

              value={chatbot}
              onChange={e => onChange(e)}
            >
              <option disabled>* Select ChatBot Agent</option>
              <option disabled>---------------------</option>
              <option value='5e5c04461c9d4400002f67d1'>Rendez-Vous</option>
              <option value='5e5cf47a1c9d44000059fbea'>Snoopy</option>
            </select>
            <small className='form-text'>
              Your ChatBot Agent
						</small>
          </div>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option disabled>* Select Professional Status</option>
            <option disabled>----------------------------</option>
            <option value='Developer'>Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Could be your own company or one you work for
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Toulouse, Occitanie)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Welcome message'
            name='welcome'
            value={welcome}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Please enter the welcome message for your chatbot
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Opening hour'
            name='op_hour'
            value={op_hour}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Please enter the Opening hour of your business
						</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Closing hour'
            name='cl_hour'
            value={cl_hour}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Please enter the Closing hour of your business
					  </small>
        </div>


        {}

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light shadow'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1 shadow' />
        <Link className='btn btn-light my-1 shadow' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
