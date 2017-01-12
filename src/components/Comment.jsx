import React from 'react';

const Comment = () => {
    return (
        <div className="comment">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>
            <div className="title"></div>
            <div className="body"></div>

            <div className="comment_editArea">
                <input type="text"/>
                <input type="text"/>
                <button className="edit_save">更新</button>
            </div>

            <button className="edit">編集</button>
            <button className="delete">削除</button>
        </div>
    );
};

export default Comment;
