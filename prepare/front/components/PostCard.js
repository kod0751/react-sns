import React, { useCallback, useState } from 'react';
import { Button, Card, Popover, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
  const [like, setLike] = useState(false);
  const [commentFormOpened, setCommentFormOpend] = useState(false);

  const onToggleLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  const id = useSelector((state) => state.user.me?.id); //state.user.me && state.user.me.id);
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages image={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          like ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }>
            <EllipsisOutlined />
          </Popover>
        ]}>
        <Card.Meta avatar={<Avatar>{post.User.nickname[0]}</Avatar>} title={post.User.nickname} description={post.content} />
      </Card>
      {commentFormOpened && <div>댓글 부분</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;
