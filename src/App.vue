<template>
  <div class="container">
    <div class="container__chessboard-container">
      <ChessBoard @move="addMove" />
    </div>
    <SideBar :moves="moves" />
  </div>
</template>

<script>
import ChessBoard from "./components/ChessBoard.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    ChessBoard,
    SideBar,
  },
  data() {
    return {
      moves: [],
    };
  },
  methods: {
    addMove(move) {
      this.moves.push(move);
    },
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  &__chessboard-container {
    background-color: #b89a75;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
  }
}

@media (max-width: 480px) {
  .container {
    height: auto;
    flex-direction: column;
    height: 100vh;

    &__chessboard-container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
