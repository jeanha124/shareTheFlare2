import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    formType: 'signup',
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

