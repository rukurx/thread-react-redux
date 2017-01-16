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

/****************************************
■ コメント操作
****************************************/
// コメント追加
export const addComment = (title, body) => {
    return {
        type: 'ADD_COMMENT',
        title,
        body
    };
};

// コメント削除
export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    };
};

// コメント編集ボタンクリック(編集モードにする)
export const editComment = (id) => {
    return {
        type: 'EDIT_COMMENT',
        id
    };
};

// コメント内容更新
export const updateComment = (id, title, body) => {
    return {
        type: 'UPDATE_COMMENT',
        id,
        title,
        body
    };
};