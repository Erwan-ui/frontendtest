## Chess Game App

A web application that allows users to visualize a chess board and tracks the clicked squares, simulating a real game.

### Installation

- Clone the repository
- Navigate to the root directory of the project and run npm install
- Start the application with npm run serve

### Usage

- The chess board is displayed on the left-hand side of the screen, while the move history is displayed on the right-hand side (and on the bottom for mobile view).
- The user can make a move by clicking on a square.
- The move history will be updated with the move that was just made.

### Technologies Used

- Vue.js
- JavaScript
- CSS

### Components

#### Chessboard Component

The `ChessBoard` component renders the virtual chessboard and allows users to interact with it. It is implemented with Vue.js (Vue3) and includes the following features:

- Displays an 8x8 chessboard with alternating black and white tiles.
- Numbers and letters are displayed around the edge of the board to help users identify the location of each square.
- Users can click on a square to select it.
- The last clicked square is highlighted.

#### Sidebar Component

The Sidebar component displays a list of moves made during the game. It is implemented with Vue.js and includes the following features:

- Displays the moves in groups of two, with the number of the move and the move itself.
- Highlights the active move (the move that was just made).

### Testing

In order to make sure the basic functionnality is working, unit tests have been created for both components, you can run them by running: `npm run test:unit`.
