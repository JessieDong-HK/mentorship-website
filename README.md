# 过来人Mentor — 静态网站

导师制申请咨询平台官网。纯静态站点（HTML + CSS + JS），无构建步骤、无后端依赖。

## 本地预览

解压后任选其一：

```bash
# 方式一：Python（macOS/Linux 自带）
cd mentorship-website && python3 -m http.server 8000

# 方式二：直接双击 index.html 用浏览器打开
```

## 部署

任意静态托管均可，把整目录作为站点根目录上传：

- **Netlify / Vercel**：拖拽整个文件夹，或 connect git 仓库，build command 留空，publish 目录选根目录
- **GitHub Pages**：push 到仓库后 Settings → Pages 选 main 分支根目录
- **Nginx**：`root` 指向该目录即可，无需任何 rewrite 规则
- **对象存储**（OSS/S3/Cloudflare Pages）：整目录上传并开启静态网站托管

注意点：
- 入口是 `index.html`，页面间跳转全部相对路径，**必须保持目录结构**（`css/` `js/` `assets/` `images/` `mentors/`）
- `assets/sky.html` 是首页等页面的背景，删了会导致背景黑屏
- 天气接口离线不影响渲染，仅作锦上添花

## 结构

```
index.html          首页
about.html          关于我们
platform.html       导师列表
services.html       服务与定价
recruit.html        成为导师
stories.html        学员故事
mentors/mia.html    导师详情（示例：Mia）
mentors/qiran.html  导师详情（张祺然）
css/hark.css        全站设计系统（hark 美学浅色版）
js/nav.js           移动端导航菜单
assets/sky.html     WebGL 动态天空背景
images/ icons/      图片与图标资源
manifest.json       PWA manifest
```
