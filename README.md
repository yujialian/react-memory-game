# React memory game
## Environment
* node: 8.12.0
* React: 16.5.2
* Webpack: 4.19.1
* antd: 3.9.2

## Set up project
1. Enter your project folder, do `git clone git@github.com:yujialian/react-memory-game.git`
2. Install node:
`curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -`
`sudo yum -y install nodejs`
3. Install all the dependencies: `npm install`
4. `npm install webpack-dev-server -g`
5. `npm install webpack -g`

## Start project
Run: `webpack-dev-server`

## Rules
1. Enter your name and word you want to guess in the main board input field, the difficulty of the game depend on the word length you entered.
2. You can restart the game anytime you want by clicking `Restart`
3. Click `Back to main board` to switch to another user or change to another word.
4. The score board ranks the total points by user, from highest to lowest. You can use same user name to play the game and the score will refresh as you get higher points in the game.
5. Click the top header to switch between `Score Board` and `Game Center`.
