import thread from './thread';

const reducer = (state, action) => ({
    thread: thread(state.thread, action),
});

export default reducer;