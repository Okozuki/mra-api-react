import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
//import moment from 'moment';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';


class Chatbot extends React.Component {

  launchScript() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = process.env.REACT_APP_SNIPET_URL;
    document.body.appendChild(s);
  }

  componentDidMount() {
    this.launchScript();
    console.log('Chatbot DIV : ', this.el);

  }

  componentWillUnmount() {
    this.el.innerHTML = '';
  }

  render() {
    const { _id } = this.props.profile;
    const { profile, loading } = this.props.profile;
    return loading && profile === null ? (
      <Spinner />
    ) : (
        <div ref={el => this.el = el} >
          <script type="text/javascript"
            id="monrepondeurauto-embedder-d7lcfheammjct"
            className="monrepondeurauto-embedder-d7lcfheammjct"
            data-botid={_id}>

          </script>
        </div>
      )

  }



};


Chatbot.propTypes = {
  profile: PropTypes.object.isRequired
};

export default connect(
  null
)(Chatbot);
