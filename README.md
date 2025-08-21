This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contributing

Clone the repo, install packages using npm, you will need node for this project.
Start the program with npm run dev as below. This will start both the electron project and should open a web tab.

```bash
npm run dev
```

## Mission:
- Make a free, extensible, customizable D&D character sheet manager that is simple to use but supports in depth
homebrew content.
- Make a tool that gives various statistical insight into D&D combat to allow better planning for
DMs to build encounters. This should include vanilla SRD 5e classes, monsters, spells, actions and so on.

## Architecture:
- Nextjs frontend. Sqlite instance using wasm persisted through local storage on the web app. Sqlite instance persisted through
node and local files on the electron app. TypeScript/node data layer. Types used throughout.

## Guidelines: 
- Use prettier and eslint. Comment any code that isn't self-explanatory using jsdoc notation.
- Use tests as needed. 100% coverage is not needed, but some unit tests at least are nice.
- Avoid ignoring type errors and typescript anys as much as possible.
- Pull, branch, commit and pr. 