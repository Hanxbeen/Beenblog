import { combineReducers } from 'redux';

import userSlice from './user';

// slice는 user만 존재한다. 그래도 만들어서 store로 보내줬다.
const rootReducer = combineReducers({
    user: userSlice.reducer,
});

// 아래 타입은 구글링을 통해서 얻은 코드다..
// 이렇게 작성해주면 컴포넌트에서 useSelector를 통해서 쉽게 가져올 수 있다.
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;