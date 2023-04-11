import { it, describe, expect } from "@jest/globals";
import ChessBoard from "../../src/components/ChessBoard.vue";
import { shallowMount } from "@vue/test-utils";

describe("ChessBoard.vue", () => {
  it("renders 64 tiles", () => {
    const wrapper = shallowMount(ChessBoard);
    const tiles = wrapper.findAll(".chessboard__tile");
    expect(tiles.length).toBe(64);
  });

  it('emits "move" event when a tile is clicked', async () => {
    const wrapper = shallowMount(ChessBoard);
    const tile = wrapper.find(".chessboard__tile");
    await tile.trigger("click");
    expect(wrapper.emitted().move).toBeTruthy();
  });

  it("highlights the last clicked square", async () => {
    const wrapper = shallowMount(ChessBoard);
    const tiles = wrapper.findAll(".chessboard__tile");
    const firstTile = tiles[0];
    const secondTile = tiles[1];

    // Click on the first tile
    await firstTile.trigger("click");
    expect(firstTile.classes()).toContain("chessboard__tile--highlighted");

    // Click on the second tile
    await secondTile.trigger("click");
    expect(firstTile.classes()).not.toContain("chessboard__tile--highlighted");
    expect(secondTile.classes()).toContain("chessboard__tile--highlighted");
  });
});
