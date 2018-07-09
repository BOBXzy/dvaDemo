import dva from 'dva';
import './index.scss';
import { message } from 'antd';

// import createHistory from 'history/createBrowserHistory';
// const app = dva()
import createHistory from 'history/createHashHistory';

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(e) {
        message.error(e.message, 3)
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
// app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;  // eslint-disable-line
