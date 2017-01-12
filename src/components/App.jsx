import React from 'react';
import ThreadHandler from '../containers/ThreadHandler';
import CommentsHandler from '../containers/CommentsHandler';
import LikesHandler from '../containers/LikesHandler';

const App = () => (
    <div>

        {/* 基になる投稿 */}
        <ThreadHandler />

        {/* コメント一覧 */}
        <CommentsHandler />

        {/* いいね！一覧 */}
        <LikesHandler />

    </div>
);

export default App;