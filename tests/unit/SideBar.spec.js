import { mount } from "@vue/test-utils";
import Sidebar from "../../src/components/Sidebar.vue";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const moves = ["move1", "move2", "move3", "move4"];
    const wrapper = mount(Sidebar, {
      props: {
        moves,
      },
    });

    // check if the component has rendered
    expect(wrapper.exists()).toBe(true);

    // check if the title is rendered correctly
    const title = wrapper.find(".sidebar__title");
    expect(title.text()).toBe("Moves");

    // check if the rows are rendered correctly
    const rows = wrapper.findAll(".sidebar__row");
    expect(rows.length).toBe(2);
    expect(rows[0].classes()).toContain("sidebar__row--odd");
    expect(rows[0].classes()).not.toContain("sidebar__row--even");
    expect(rows[1].classes()).toContain("sidebar__row--even");
    expect(rows[1].classes()).not.toContain("sidebar__row--odd");

    // check if the columns are rendered correctly
    const columns = rows[0].findAll(".sidebar__column");
    expect(columns[0].text()).toBe("1.");
    expect(columns[1].text()).toBe("move1");
    expect(columns[2].text()).toBe("move2");
  });
});
