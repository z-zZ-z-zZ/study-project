# 关于git账号的问题

现在登陆的是公司的账号

``` bash
    git config --global user.name
    git config --global user.email
```

通过这两个命令可以查看登陆的git账号

添加密钥的时候访问不到 .ssh文件  
通过 open ./.ssh 就可以打开该文件了

``` bash
    git remote add {仓库名} {仓库链接} #添加远程仓库
    git remote remove {仓库名}  #可以删除某个链接的远程仓库

```

```bash
    ssh-keygent -t rsa -C "公司网址"  # 生成ssh-key
    #返回值
    Generating public/private rsa key pair.
    Enter file in which to save the key (/User/用户名/.ssh/id_rsa)
    Created directory '/User/用户名/.ssh'.
    Enter passphrase (empty for no passphrase):
    #上面提示你输密码，你可以直接enter，然后再输入一遍
    Enter same passphrase again:
    #返回提示身份认证保存
    Your identification has been saved in /User/用户名/.ssh/id_rsa.
    Your public key has been saved in /User/用户名//ssh/id_rsa.pub.
    The key fingerprint is:
    #SHA256:巴拉巴拉一大堆..





    #查看本地添加的私钥的全部
    ssh-add -l



    # 删除git用户配置
    git config --unset user.name
    git config --unset user.email
```
