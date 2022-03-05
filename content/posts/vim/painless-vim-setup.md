Title: Painless VIM setup
Date: 2022-03-05 09:19
Modified: 2022-03-05 09:19
Category: vim
Tags: vim, git
Slug: painless-vim-setup
Authors: Eric Macedo

Setting up vim in another computer was always an annoying task for me. 

- There were always multiple different copies of the .vimrc file: in my laptop, Desktop, company’s server, etc.
- I always had to access an old computer, copy the most updated .vimrc to dropbox, so I could have it in my new pc.
- Making a change in one place would not update the .vimrc in my other computers.

After a few years of pain, I (FINALLY) decided to look for a solution for this problem. Here is what I did:

- **Created a github account and a new public repository**: You can access it [here.](https://github.com/ericmatheussm/initvim)
- **Added my .vimrc to the repo and added the plugin manager I use  to the git repo as git submodule:** You only need the plugin manager. It will take care of downloading the rest of your plugins later.

Now, every time I want to setup vim in a new place I just run:

```bash
git clone https://github.com/ericmatheussm/initvim ~/.config/nvim
cd ~/.config/nvim
git submodule init
git submodule update
```

That is it! After that I just need to download my plugins using PlugInstall (command used by Plugin manager). Now all the copies I have are synchronised through git.

I don’t know why it took me so long to do this!

