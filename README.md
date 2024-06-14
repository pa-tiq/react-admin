
## Quick start

- Make sure your Node.js and npm versions are up to date. NPM version is specified in the .nvmrc file.
- Install version with nvm: `nvm install`
- Set node version with nvm: `nvm use`
- Install dependencies: `npm ci` or `yarn`
- Start the server: `npm run dev` or `yarn dev`
- Open browser: `http://localhost:3000`

## File Structure

```
┌── .editorconfig
├── .eslintrc.js
├── .gitignore
├── CHANGELOG.md
├── LICENSE.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
├── public
└── src
	├── components
	├── contexts
	├── hooks
	├── lib
	├── styles
	├── types
	└── app
		├── layout.tsx
		├── page.tsx
		├── auth
		└── dashboard
```
