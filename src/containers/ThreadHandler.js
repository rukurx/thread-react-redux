import { connect } from 'react-redux';
import Thread from '../components/Thread';

const mapStateToProps = (state) => ({
    thread: state.thread
});

const ThreadHandler = connect(
    mapStateToProps,
)(Thread);

export default ThreadHandler;
