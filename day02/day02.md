git上的watch,star,fork的区别
git提交时忽略不必要的文件
.gitignore添加不必要提交的文件

git历史管理
命令：git reset --hard commit_id

说明：可以通过git reset 回退到以前的某个版本，也可以恢复到现在的某个版本

所谓版本：即用git commit一次就是一个版本
1.放弃工作区的修改：git checkout -- 要放弃修改的文件名

2.放弃暂存区的修改：

   第一步：先将暂存区的文件回退到工作区

       git reset HEAD 要回退的文件
   第二步：到工作区，再用git checkouit放弃修改
   
      git checkout -- 要放弃修改的文件名
3.回退分支版本：git reset --hard commit_id

git分支管理
默认git仓库只有一个master主分支

master:通常用于发布产品的分支 dev:开发分支 bug:修复bug的分支 feature:添加新功能的分支

分支常用命令：

1.查看分支：git branch
2.创建分支：git branch 分支名
3.切换分支：git checkout 要切换的分支名

4. 创建并自动切换到创建的分支上： git checkout -b 新分支

5.合并分支

   git merge 要合并的分支名

   出现冲突的场景：合并的分支和被合并的分支，都有修改，这时就会出现冲突

   如果出现冲突：通常是手动解决
      采用当前：
      采用外来
      两者都要

  提交本地分支到远程：git push origin 要提交的本地分支

  删除本地分支：
  
      已合并：git branch -d 要删除的分支

      未合并：git branch -D 要删除的分支

  删除远程分支：

     git push origin :要删除的远程分支名