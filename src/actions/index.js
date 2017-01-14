/****************************************
■ スレッド操作
****************************************/
// スレッド編集ボタンクリック(編集モードにする)
export const editThread = () => {
    return {
        type: 'EDIT_THREAD'
    };
};

// スレッド内容更新
export const updateThread = (title, body) => {
    return {
        type: 'UPDATE_THREAD',
        title,
        body,
        isEdit: false,
    };
};

// スレッド削除
export const deleteThread = () => {
    return {
        type: 'DELETE_THREAD'
    };
};
