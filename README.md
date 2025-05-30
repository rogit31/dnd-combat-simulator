This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Currently, the UI is empty. We're starting with a purely console.log-ed solution, to implement the actual simulation as
possible without bothering about frontend concerns and UI. 

## Mission:
Make a tool that gives various statistical insight into D&D combat to allow better planning for
DMs to build encounters. This should include vanilla SRD 5e classes, monsters, spells, actions and so on.
This should also include allowing for custom/homebrewed monsters, items, spells, and mechanics. Specificalley:
- plan balanced encoutners
- predict combat duration and variance
- understand encounter difficulty
- analyze party composition effectiveness
- test homebrewed content balance

## Architecture:
Nextjs front to back. This will not have a databse or a frontend, just a static local storage based
tool. TypeScript used throughout.

