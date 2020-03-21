import Step1 from './Step1';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    isFetching: state.pool.isFetching
  }
}

export default connect(
    mapStateToProps,
    {}
)(Step1);