export default {
    namespace: 'products',
    state: [{ name: 'dva', id: 1 }, { name: 'dva2', id: 2 }],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};