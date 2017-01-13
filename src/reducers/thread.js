const thread = (state, action) => {
    const thread = state;

    switch(action.type) {

    case 'EDIT_THREAD':
        thread.isEdit = !thread.isEdit;
        return Object.assign({}, state, {
            thread: thread
        });

    case 'UPDATE_THREAD':
        return state

    case 'DELETE_THREAD':
        return state;

    default:
        return state;
    }
};

export default thread;