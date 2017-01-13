import React from 'react';

const Thread = ({ thread, actions }) => {
    return (
        <div className="thread">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>

            <div className="thread-content" style={{display: thread.isEdit ? 'none' : 'block'}}>
                <div className="title">{thread.title}</div>
                <div className="body">{thread.body}</div>
            </div>

            <div className="thread_editArea" style={{display: thread.isEdit ? 'block' : 'none'}}>
                <input defaultValue={thread.title} />
                <input defaultValue={thread.body} />
                <button className="edit_save">更新</button>
            </div>

            <button className="edit" onClick={e => {e.preventDefault();actions.editThread(thread.id)}}>編集</button>
            <button className="delete">削除</button>
        </div>
    );
};

export default Thread;