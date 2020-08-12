export default {
  title: "Test",
  component: () => null,
};

export const Story = () => null;

Story.parameters = {
  foobar: () => {
    document.addEventListener("foo", () => console.log("bar"));
  },
};
