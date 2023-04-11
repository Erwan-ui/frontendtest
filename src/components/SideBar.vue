<template>
  <div class="sidebar">
    <div class="sidebar__title">Moves</div>
    <div
      v-for="(group, index) in groupedMoves"
      :key="index"
      :class="{
        'sidebar__row--odd': isOddRow(index),
        'sidebar__row--even': isEvenRow(index),
        'sidebar__row--active': isActiveMove(group),
      }"
      class="sidebar__row"
    >
      <div class="sidebar__column">{{ index + 1 }}.</div>
      <div class="sidebar__column">{{ group[0] }}</div>
      <div
        class="sidebar__column"
        :class="{ 'sidebar__column--active': isActiveMove(group) }"
      >
        {{ group[1] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    moves: {
      type: Array,
      required: true,
    },
  },
  computed: {
    groupedMoves() {
      const groups = [];
      for (let i = 0; i < this.moves.length; i += 2) {
        groups.push(this.moves.slice(i, i + 2));
      }
      return groups;
    },
  },
  methods: {
    isOddRow(index) {
      return index % 2 === 0;
    },
    isEvenRow(index) {
      return index % 2 !== 0;
    },
    isActiveMove(group) {
      const lastMove = this.moves[this.moves.length - 1];
      return group.includes(lastMove[0]) || group.includes(lastMove[1]);
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  background-color: #2e2622;
  z-index: 1;
  color: white;
  padding-left: 8px;
  padding-top: 16px;
  transition: 0.3s ease;
  overflow-y: auto;
  flex-grow: 1;

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 5px;

    &--odd {
      background-color: #3f3b3a;
    }

    &--even {
      background-color: #413d3c;
    }

    &--active .sidebar__column--active {
      background-color: #5d5552;
    }
  }

  &__column {
    flex: 1;
    margin-right: 10px;

    &--active {
      background-color: #a3a09f;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    flex-basis: auto;
    width: 100%;
    height: 25%;
    padding-left: 0;
  }
}
</style>
