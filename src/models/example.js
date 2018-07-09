import { getRouteList } from "../services/example";

export default {

  namespace: 'example',

  state: {
    routeList: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        if (location.pathname === '/user/login') {
          console.log('进入了监听器了！');
          dispatch({
            type: 'getRouteList',
            payload: {}
          });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getRouteList({ payload }, { call, put}) {
      const { data } = yield call(getRouteList);
      if(data) {
        yield put({
          type: 'saveRouteList',
          payload: {
            routeList: data,
          }
        });
      }
    }

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    saveRouteList(state, action) {
      return { ...state, ...action.payload };
    }
  },

};
