const comments = (state = {}, action, entireState) => {
    switch(action.type) {
    case 'ADD_COMMENT':
        let stateId = state.length + 1;
        return [
            ...state,
            {
                id: stateId,
                title: action.title,
                body: action.body,
                isEdit: false
            }
        ];

    case 'EDIT_COMMENT':
        return state

    case 'UPDATE_COMMENT':
        return state

    case 'DELETE_COMMENT':
        return state

    default:
        return state;
    }
};

export default comments;