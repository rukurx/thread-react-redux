import React from 'react';
import Thread from './Thread';
import Comments from './Comments';
import Likes from './Likes';

const App = () => (
    <div>

        {/* 基になる投稿 */}
        <Thread />

        {/* コメント一覧 */}
        <Comments />

        {/* いいね！一覧 */}
        <Likes />

    </div>
);

export default App;