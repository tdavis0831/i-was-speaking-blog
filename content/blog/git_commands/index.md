---
title: 5 Git Commands You Should Know
date: "2022-1-4T22:12:03.284Z"
description: "The title says it all!"
---

This information is for those who understand what git is (understanding version control and what that means). In the future I plan on going into version control more in depth, but for not, git commands. 
If you are lost, please feel free to learn more about git and version control and head back over here 😊 

## Git Status

git status is a command that is used to get information about the branch that you are in. It will show us if the branch is up to date, if files are stages or not, if there are things to push and pull and if the branch is up to date.

## Git Add

git add is used to include changes of a file to the next commit. This is important to remember- if you create or change a file locally and do not add the file, it will not be tracked. 

You can add each file individually by following : git add <filename> or adding all files in a branch by following: git add -A. 

If you are adding all files, make sure your .gitignore is up to date!! If you don’t know what a .gitignore file is, it is what it sounds like! A file that when read tells git what files to “ignore” or not include in any commits. 

## Git Commit

git commit is the command that takes files from a staging area, to a commit. It is a checkpoint of where your repository is at the time you commit. This command is probably the most used by developers. You can think of this as a save that you might do when working on any other document! To commit, simply follow this: git commit -m “commit note”

When committing, it is important to note that a note is needed. In your note you can explain briefly what changes have been made or the reason for the commit.  

## Git Push


git push is the command that is used to send changes made to the local environment to the remote repository.  If you do not push your code, the commits or changes you make can not be viewed anywhere outside of your environment. We need to push code to access all of the benefits of git (like collaboration with others!). There a few different ways to pass this command, but you can follow: git push <remote> <branch-name>. This is for a branch that has been created, for a branch that has not been created, you can follow: git push -u origin <branch-name> (This is the command I use!)

## Git Pull

git pull is used to get any changes from the remote repository and applies the most recent changes to the local repository that is requesting the pull. You can follow: git pull <remote>  to pull this information as needed.  


If images are more your thing, I found this really incredible image that belongs to Eduonix Learning Solutions (https://www.eduonix.com/courses)

!["git"](./maxresdefault.jpg)


There are so many more commands and I plan on doing a part 2 to this breif overview, but you can NOT be a programmer and not understand git! This information is very important and should be part of your developer toolkit for sure! 

And of course, feel free to connect with me by clicking any of the buttons below! 