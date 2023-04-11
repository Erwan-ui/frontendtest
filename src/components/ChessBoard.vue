<template>
  <div class="chessboard">
    <div
      class="chessboard__tile"
      v-for="(square, index) in chessboard"
      :key="index"
      :class="{
        'chessboard__tile--white': isWhiteTile(square),
        'chessboard__tile--black': isBlackTile(square),
        'chessboard__tile--highlighted': square === lastClickedSquare,
      }"
      @click="handleTileClick(square)"
    >
      <span
        class="chessboard__tile__number"
        :class="{
          'chessboard__tile__number--black': isWhiteTile(square),
          'chessboard__tile__number--white': isBlackTile(square),
        }"
        >{{ getNumberIfLetterIsA(square) }}</span
      >
      <span
        class="chessboard__tile__letter"
        :class="{
          'chessboard__tile__letter--black': isWhiteTile(square),
          'chessboard__tile__letter--white': isBlackTile(square),
        }"
        >{{ getLetterIfNumberIsOne(square) }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ChessBoard",
  data() {
    return {
      verticalAxis: ["1", "2", "3", "4", "5", "6", "7", "8"],
      horizontalAxis: ["a", "b", "c", "d", "e", "f", "g", "h"],
      clickedSquares: [],
    };
  },
  methods: {
    getLetterIfNumberIsOne(square) {
      const [letter, number] = square.split("");
      if (number === "1") {
        return letter;
      }
      return "";
    },

    getNumberIfLetterIsA(square) {
      const [letter, number] = square.split("");
      if (letter === "a") {
        return number;
      }
      return "";
    },
    getIndexSum(i, j) {
      return j + i + 2;
    },
    isWhiteTile(square) {
      const [i, j] = square.split("");
      return (
        this.getIndexSum(
          this.horizontalAxis.indexOf(i),
          this.verticalAxis.indexOf(j)
        ) %
          2 ===
        0
      );
    },
    isBlackTile(square) {
      return !this.isWhiteTile(square);
    },
    handleTileClick(square) {
      this.clickedSquares.push(square);
      this.$emit("move", square);
    },
  },
  computed: {
    chessboard() {
      let board = [];
      for (let j = this.verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < this.horizontalAxis.length; i++) {
          board.push(this.horizontalAxis[i] + this.verticalAxis[j]);
        }
      }
      return board;
    },
    lastClickedSquare() {
      return this.clickedSquares[this.clickedSquares.length - 1];
    },
  },
};
</script>
<style scoped lang="scss">
.chessboard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1 / 1;
  max-height: 90vh;
  width: 70%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &__tile {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    aspect-ratio: 1 / 1;

    &__number {
      color: #ebecd0;
      align-self: flex-start;
      margin: 5px;

      &--white {
        color: #ebecd0;
      }
      &--black {
        color: #778556;
      }
    }

    &__letter {
      align-self: flex-end;
      margin: 5px;

      &--white {
        color: #ebecd0;
      }
      &--black {
        color: #778556;
      }
    }

    &--white {
      background-color: #ebecd0;
    }

    &--black {
      background-color: #778556;
    }

    &--highlighted {
      background-color: #a47d37;
    }
  }

  h2 {
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .chessboard {
    height: auto;
  }
}

@media (max-width: 530px) {
  .chessboard {
    width: auto;
  }
}
</style>
