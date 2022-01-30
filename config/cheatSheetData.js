export const cheatSheetData = [
  {
    title: "basic operations",
    commands: [
      { text: "git init", copied: false },
      { text: "git add .", copied: false },
      { text: "git restore —staged <name>", copied: false },
      { text: "git status", copied: false },
      { text: "git diff", copied: false },
      { text: "git commit -m <message>", copied: false },
      { text: "git commit —amend -author <author>", copied: false },
      { text: "git commit", copied: false },
      { text: "git rm <file_name>", copied: false },
      { text: "git pull -v", copied: false },
      { text: "git push -u", copied: false },
      { text: "git fetch -v", copied: false },
    ],
  },
  {
    title: "branch management",
    commands: [
      { text: "git branch -a", copied: false },
      { text: "git branch <name>", copied: false },
      { text: "git checkout <name>", copied: false },
      { text: "git checkout -b <name>", copied: false },
      { text: "git branch -d <name>", copied: false },
      { text: "git branch -m <old> <new>", copied: false },
      { text: "git fetch -v", copied: false },
      { text: "git remote update origin —prune", copied: false },
      { text: "git branch -d <branch>", copied: false },
      { text: "git push -u origin <branch>", copied: false },
      { text: "git push update origin -d <branch>", copied: false },
    ],
  },
  {
    title: "reading",
    commands: [
      { text: "git remote show origin", copied: false },
      { text: "git remote -vv", copied: false },
      { text: "git cat-file -s / -t / -p", copied: false },
      { text: "git log —oneline / —graph", copied: false },
      { text: "git reflog", copied: false },
    ],
  },
  {
    title: "tags",
    commands: [
      { text: "git tag", copied: false },
      { text: "git tag v1.0.0", copied: false },
      { text: "git tag -a v1.0.0 -m <message>", copied: false },
      { text: "git push -u —tag", copied: false },
      { text: "git push -u origin v1.0.0", copied: false },
    ],
  },
  {
    title: "revert & reset",
    commands: [
      { text: "git reset —hard <hash>", copied: false },
      { text: "git reset -mixed <hash>", copied: false },
      { text: "git reset -soft <hash>", copied: false },
      { text: "git revert <hash>", copied: false },
    ],
  },
  {
    title: "merge & rebase",
    commands: [
      { text: "git merge <name>", copied: false },
      { text: "git rebase <name> | git merge <name>", copied: false },
    ],
  },
  {
    title: "stash",
    commands: [
      { text: "git stash", copied: false },
      { text: "git stash pop", copied: false },
      { text: "git stash drop", copied: false },
    ],
  },
  {
    title: "fork",
    commands: [
      { text: "git remote add upstream <url>", copied: false },
      { text: "git fetch upstream -v", copied: false },
      { text: "git pull upstream main", copied: false },
      { text: "git push -u", copied: false },
    ],
  },
  {
    title: "cherry pick",
    commands: [
      { text: "git cherry-pick <hash>", copied: false },
      { text: "COPY ME!!!", copied: false },
      { text: "git cherry pick —no-commit <hash>", copied: false },
    ],
  },
  {
    title: "config",
    commands: [
      { text: "git gc", copied: false },
      { text: "git <file> |{text:  git unpack-objects", copied: false },
      { text: ".gitignore", copied: false },
      { text: "git rm —cached <file>", copied: false },
      { text: "git config —list", copied: false },
      { text: "git config — global user.name <name>", copied: false },
      { text: "git config credential.helper ''", copied: false },
    ],
  },
];
