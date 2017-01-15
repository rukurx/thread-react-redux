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

// スレッドタイトル文字数チェック
export const countThreadTitleLength = (title) => {
    return {
        type: 'COUNT_THREAD_TITLE_LENGTH',
        title
    };
};

// スレッド本文文字数チェック
export const countThreadBodyLength = (body) => {
    return {
        type: 'COUNT_THREAD_BODY_LENGTH',
        body
    };
};
