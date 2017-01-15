import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>
            <div className="title">{comment.title}</div>
            <div className="body">{comment.body}</div>

            <div className="comment_editArea" style={{display: comment.isEdit ? 'block' : 'none'}}>
                <input defaultValue={comment.title} />
                <input defaultValue={comment.body} />
                <button className="edit_save">更新</button>
            </div>

            <button className="edit">編集</button>
            <button className="delete">削除</button>
        </div>
    );
};

export default Comment;
