import React from 'react';
import ThreadHandler from '../containers/ThreadHandler';
import CommentsHandler from '../containers/CommentsHandler';
import AddCommentHandler from '../containers/AddCommentHandler';
import LikesHandler from '../containers/LikesHandler';

const App = () => (
    <div>

        {/* 基になる投稿 */}
        <ThreadHandler />

        {/* コメント一覧 */}
        <CommentsHandler />

        {/* コメント追加 */}
        <AddCommentHandler />

        {/* いいね！一覧 */}
        <LikesHandler />

    </div>
);

export default App;