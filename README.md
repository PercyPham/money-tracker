# Money Tracker

## Start

Before starting the app, we must define some values in the `.env` file. It has structure as below:

```
MONGODB_DEV_URL="xxxxxxxxxx"
MONGODB_PROD_URL="xxxxxxxxxx"

PROD_BASE_URL="xxxxxxxxxx"
```

Now, we can run the app:

```
npm install
npm run dev
```

## Contribute

You're welcome to make pull requests. Below are some suggestions if you want to contribute to this project.

### Setup coding environment

Recommend using [Visual Studio Code (VS Code)](https://code.visualstudio.com/download) to develop this project. After installing VS Code, integrate two extensions below:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add these to [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings) of VS Code:

```
"editor.tabSize": 2,
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"prettier.eslintIntegration": true
```

Now, it's good to go.

### Commit message

[Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages) is a great way to make commits. It's meaningful and helps a lot to keep the commit tree clean and readable.
