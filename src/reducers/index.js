import thread from './thread';
import comments from './comments';

const reducer = (state, action) => ({
    thread: thread(state.thread, action),
    comments: comments(state.comments, action),
});

export default reducer;