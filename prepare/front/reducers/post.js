export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'DI'
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140407_217%2Fhyesungk813_1396839637058QcuWS_JPEG%2Ftumblr_n3mni89HWp1qczzxzo1_500.jpg&type=sc960_832'
        },
        {
          src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140407_217%2Fhyesungk813_1396839637058QcuWS_JPEG%2Ftumblr_n3mni89HWp1qczzxzo1_500.jpg&type=sc960_832'
        },
        {
          src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140407_217%2Fhyesungk813_1396839637058QcuWS_JPEG%2Ftumblr_n3mni89HWp1qczzxzo1_500.jpg&type=sc960_832'
        }
      ],
      Comments: [
        {
          User: {
            nickname: 'nero'
          },
          content: '1234'
        },
        {
          User: {
            nickname: 'hero'
          },
          content: '3456'
        }
      ]
    }
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = {
  id: 2,
  content: '더미 데이터',
  User: {
    id: 1,
    nickname: 'DI'
  },
  Images: [],
  Conmment: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error
      };
    default:
      return state;
  }
};

export default reducer;
