# Web Hero School
Цифровой Прорыв 2020. Первый отряд | Павел Третьяков, Анастасия Варабей, Серегей Новоселов, Иван Буровкин, Вероника

## Install
To init project you can use npm or yarn, by the next instructions will use yarn
package manager commands

```bash
yarn install
```

## Building
To build project use command

```bash
yarn build
```

## Development
To compile project and run dev server run:

```bash
yarn start
```

For windows machines
```bash
npm start:widnows
```

Webpack start dev server on 9000 port by default.
To change port you can:

- Update package.json start script:

```json
"start": "NODE_ENV=develop PORT=YOUR_PORT node node_modules/.bin/webpack-dev-server",
```

- Set spicific port on start command:

```bash
env PORT=YOUR_PORT yarn start
```

- Use configs/dev.json PORT config
```json
"PORT": YOUR_PORT
```
