import { connect } from 'react-redux';
import PhotoFormNav from './photo_form_nav';

const msp = state => {
  return {
    navType: 'add'
  };
};

const mdp = dispatch => {
  return {
  };
};

export default connect(null, null)(PhotoFormNav);