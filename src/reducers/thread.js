const thread = (state, action) => {
    let thread = {};
    switch(action.type) {

    case 'EDIT_THREAD':
        thread = state;
        thread.isEdit = !thread.isEdit;

        return Object.assign({}, state, {
            thread: thread
        });

    case 'UPDATE_THREAD':
        thread = state;
        thread.title = action.title;
        thread.body = action.body;
        thread.isEdit = action.isEdit;

        return Object.assign({}, state, {
            thread: thread
        });

    case 'DELETE_THREAD':
        return state;

    default:
        return state;
    }
};

export default thread;