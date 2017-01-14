const thread = (state, action) => {
    switch(action.type) {

    case 'EDIT_THREAD':
        return Object.assign({}, state, {
            isEdit: !state.isEdit
        });

    case 'UPDATE_THREAD':
        return Object.assign({}, state, {
            title: action.title,
            body: action.body,
            isEdit: action.isEdit
        });

    case 'DELETE_THREAD':
        return state;

    default:
        return state;
    }
};

export default thread;