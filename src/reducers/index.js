import thread from './thread';
import comments from './comments';
import likes from './likes';

const reducer = (state, action) => ({
    thread: thread(state.thread, action),
    comments: comments(state.comments, action),
    likes: likes(state.likes, action),
});

export default reducer;