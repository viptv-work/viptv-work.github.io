# Git

- [官网](https://git-scm.com/)
- [Git 学习教程](https://learngitbranching.js.org/?locale=zh_CN)
- [Github](https://github.com/git/git)
- [Windows 版 Github](https://github.com/git-for-windows/git)
- [Windows 版下载镜像站](https://npm.taobao.org/mirrors/git-for-windows/)
- [下载技巧 - 使用 jsdelivr 加速 Github 仓库资源](https://github.com/maomao1996/daily-notes/issues/7)

## 常用 Git 命令

::: tip 提示
[xxx] 均为可选参数
:::

| 命令                                    | 作用                                       |
| :-------------------------------------- | :----------------------------------------- |
| git clone 仓库地址                      | 下载一个 Git 项目                          |
| git config --list                       | 显示当前的 Git 配置                        |
| git config [--global] user.name "名称"  | 设置提交代码时的用户名称                   |
| git config [--global] user.email "邮箱" | 设置提交代码时的邮箱地址                   |
| git add .                               | 添加所有文件到暂存区                       |
| git commit -m "提交信息"                | 提交暂存区到仓库区                         |
| git commit --amend -m "提交信息"        | 替换（无代码改动就重写）上一次 commit 信息 |
| git branch                              | 列出所有本地分支                           |
| git branch -r                           | 列出所有远程分支                           |
| git branch -a                           | 列出所有本地分支和远程分支                 |
| git branch -d 分支名                    | 删除分支                                   |
| git branch 分支名                       | 新建一个分支，但依然停留在当前分支         |
| git checkout --orphan 分支名            | 新建一个空白分支                           |
| git status                              | 显示变更的文件                             |
| git log                                 | 显示当前分支的版本历史                     |
| git merge 分支名                        | 合并指定分支到当前分支                     |
| git remote -v                           | 显示所有远程仓库                           |
| git pull [remote][branch]               | 取回远程仓库的变化，并与本地分支合并       |
| git push [remote][branch]               | 上传本地指定分支到远程仓库                 |
| git push [remote] --force               | 强行推送当前分支到远程仓库，即使有冲突     |
| git stash                               | 暂时将未提交的变化移除                     |
| git stash pop                           | 取出未提交的变化                           |

[查看完整版 Git 命令](command)

[git 命令大全 github](https://github.com/521xueweihan/git-tips)

## commit 常用 type

| type     | 含义                                   |
| :------- | :------------------------------------- |
| feat     | 新功能                                 |
| fix      | 修复 bug                               |
| docs     | 修改文档                               |
| style    | 代码格式修改                           |
| refactor | 重构（即不是新增功能，也不是修复 bug） |
| perf     | 更改代码以提高性能                     |
| test     | 增加测试                               |
| build    | 构建过程或辅助工具的变动               |
| ci       | 修改项目持续集成流程                   |
| chore    | 其他类型的提交                         |
| revert   | 恢复上一次提交                         |

## 将代码提交到 github 的 gh-pages 分支

1. 安装 `gh-pages`

```sh
yarn add -D gh-pages
# OR npm install -D gh-pages
```

2. 在 `package.json` 中添加如下脚本

```json
"deploy": "gh-pages -d dist -m deploy",
"deploy:build": "npm run build && npm run deploy"
```

3. 运行 `deploy` 脚本

```sh
yarn deploy
# OR npm run deploy
```

## 删除 Git 中的所有提交历史记录

::: tip 提示
以 `master` 分支为例
:::

```sh
# 创建 orphan 分支
git checkout --orphan [分支名]

# 添加需要上传文件
git add .

# 提交更改
git commit -m "Initial"

# 删除需要清空提交记录的分支
git branch -D master

# 将当前分支重命名为需要清空提交记录的分支名
git branch -m master

# 强制更新存储库
git push -f origin master
```

## 使用 GitHub Actions 自动部署

[GitHub Actions](https://github.com/features/actions) 是 GitHub 的持续集成服务

### 配置 Secrets

> Action 需要有操作仓库的权限

GitHub 官方的帮助文档：[创建用于命令行的个人访问令牌](https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

打开需要配置 Actions 的仓库，进入 `Settings/Secrets` 页面，配置 `ACCESS_TOKEN` 变量，储存内容为刚刚创建的个人访问令牌

### 编写 `workflow` 文件

1. 点击仓库的 `Actions` 按钮
2. 点击 `Set up a workflow yourself` 按钮
3. 复制如下内容

```yml
name: GitHub Actions Build and Deploy

# 触发条件: push 到 master 分支后
on:
  push:
    branches:
      - master

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 打包静态文件
      - name: Build
        run: npm install && npm run build

      # 部署
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          # GitHub 密钥
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # GitHub Pages 读取的分支
          BRANCH: gh-pages
          # 静态文件所在目录
          FOLDER: dist
```
# Git 命令清单

## 1. 新建 git 仓库

```sh
# 在当前目录新建一个 Git 仓库
git init

# 新建一个目录，将其初始化为 Git 仓库
git init [project-name]

# 下载一个项目和它的整个代码历史
git clone [url]
```

## 2. 配置

```sh
# 显示当前的Git配置
git config --list

# 设置提交代码时的用户信息
git config [--global] user.name "名称"
git config [--global] user.email "邮箱地址"
```

## 3. 向暂存区添加 / 删除文件

```sh
# 添加指定文件或指定目录到暂存区
git add [文件路径 / 目录路径]

# 添加所有文件到暂存区
git add .

# 停止追踪指定文件并保留在工作区
git rm --cached [文件路径]

# 删除工作区文件并且提交到暂存区
git rm [文件路径]
```

## 4. 代码提交

```sh
# 提交暂存区到仓库区
git commit -m [提交信息]

# 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）
git commit --amend -m [提交信息]
```

## 5. 分支

```sh
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [分支名]

# 新建一个分支，并切换到该分支
git checkout -b [分支名]

# 新建一个分支，指向指定commit
git branch [分支名] [commit id]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [分支名] [远程分支名]

# 新建一个空白分支
git checkout --orphan [分支名]

# 切换到指定分支，并更新工作区
git checkout [分支名]

# 切换到上一个分支
git checkout -

# 合并指定分支到当前分支
git merge [分支名]

# 删除分支
git branch -d [分支名]

# 删除远程分支
git push origin --delete [分支名]
git branch -dr [remote/分支名]
```

## 6. 标签

```sh
# 列出所有 tag
git tag

# 根据当前 commit 创建一个 tag
git tag [tag]

# 根据指定 commit 创建一个 tag
git tag [tag] [commit id]

# 删除本地 tag
git tag -d [tag]

# 删除远程 tag
git push origin :refs/tags/[tagName]

# 查看 tag 信息
git show [tag]

# 提交指定tag
git push [remote] [tag]

# 提交所有tag
git push [remote] --tags

# 新建一个分支，指向某个tag
git checkout -b [分支名] [tag]
```

## 7. 查看信息

```sh
# 显示变更的文件
git status

# 显示当前分支的版本历史
git log

# 显示commit历史，以及每次commit发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git log -S [keyword]

# 显示某个文件的版本历史，包括文件改名
git log --follow [文件路径]
git whatchanged [文件路径]

# 显示指定文件相关的每一次diff
git log -p [文件路径]

# 显示过去5次提交
git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
git blame [file]

# 显示暂存区和工作区的差异
git diff

# 显示工作区与当前分支最新 commit 之间的差异
git diff HEAD

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"

# 显示当前分支的最近几次提交
git reflog
```

## 8. 提交

```sh
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```

## 9. 撤销

```sh
# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
git reset [文件路径]

# 重置暂存区与工作区，与上一次 commit 保持一致
git reset --hard

# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
git reset [commit id]

# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
git reset --hard [commit id]

# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
git reset --keep [commit id]

# 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit id]

# 暂时将未提交的变化移除，稍后再移入
git stash
git stash pop
```