const UserRouter = [
    {
        path: 'login',
        name: '用户登陆',
        component: () => import('../routes/User/Login'),
        // component: BasicLayout,
        models: ['user'],
    },
    {
        path: 'forgetPwd',
        name: '忘记密码',
        component: () => import('../routes/User/ForgetPwd'),
        models: ['user'],
    },
    {
        path: 'register',
        name: '用户注册',
        component: () => import('../routes/User/Register'),
        models: ['user'],
    }
]

export default UserRouter;