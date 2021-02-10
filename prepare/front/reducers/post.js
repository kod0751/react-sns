export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'DI'
      },
      content: '첫 번째 게시글',
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
  postAdded: false
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST
};

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
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts]
      };
    default:
      return state;
  }
};

export default reducer;
