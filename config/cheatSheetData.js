export const cheatSheetData = [
  {
    title: "basic operations",
    commands: [
      "git init",
      "git add .",
      "git restore —staged <name>",
      "git status",
      "git diff",
      "git commit -m <message>",
      "git commit —amend -author <author>",
      "git commit",
      "git rm <file_name>",
      "git pull -v",
      "git push -u",
      "git fetch -v",
    ],
  },
  {
    title: "branch management",
    commands: [
      "git branch -a",
      "git branch <name>",
      "git checkout <name>",
      "git checkout -b <name>",
      "git branch -d <name>",
      "git branch -m <old> <new>",
      "git fetch -v",
      "git remote update origin —prune",
      "git branch -d <branch>",
      "git push -u origin <branch>",
      "git push update origin -d <branch>",
    ],
  },
  {
    title: "reading",
    commands: [
      "git remote show origin",
      "git remote -vv",
      "git cat-file -s / -t / -p",
      "git log —oneline / —graph",
      "git reflog",
    ],
  },
  {
    title: "tags",
    commands: [
      "git tag",
      "git tag v1.0.0",
      "git tag -a v1.0.0 -m <message>",
      "git push -u —tag",
      "git push -u origin v1.0.0",
    ],
  },
  {
    title: "revert & reset",
    commands: [
      "git reset —hard <hash>",
      "git reset -mixed <hash>",
      "git reset -soft <hash>",
      "git revert <hash>",
    ],
  },
  {
    title: "merge & rebase",
    commands: ["git merge <name>", "git rebase <name> | git merge <name>"],
  },
  {
    title: "stash",
    commands: ["git stash", "git stash pop", "git stash drop"],
  },
  {
    title: "fork",
    commands: [
      "git remote add upstream <url>",
      "git fetch upstream -v",
      "git pull upstream main",
      "git push -u",
    ],
  },
  {
    title: "cherry pick",
    commands: [
      "git cherry-pick <hash>",
      "COPY ME!!!",
      "git cherry pick —no-commit <hash>",
    ],
  },
  {
    title: "config",
    commands: [
      "git gc",
      "git <file> | git unpack-objects",
      ".gitignore",
      "git rm —cached <file>",
      "git config —list",
      "git config — global user.name <name>",
      "git config credential.helper ''",
    ],
  },
];
