import { connect } from 'react-redux';
import Comments from '../components/Comments';

const mapStateToProps = (state) => ({
    comments: state.comments
});

const CommentsHandler = connect(
    mapStateToProps,
)(Comments);

export default CommentsHandler;
