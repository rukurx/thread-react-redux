const likes = (state = {}, action) => {
    switch(action.type) {

    case 'ACTIVATE_LIKE':
        return state

    case 'INACTIVATE_LIKE':
        return state

    default:
        return state;
    }
};

export default likes;