const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// 记录URL日志
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 用于处理post请求
app.use(bodyParser());

// 添加控制器
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');