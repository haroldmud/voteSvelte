// @ts-nocheck
import { render, screen } from "@testing-library/svelte";
import Add from "./Add.svelte"

test("Add todos", async()=>{
  const { getByText, getByPlaceholderText } = render(Add);

  const input = getByPlaceholderText("enter your task");
  const addButton = getByText("I'm not here for games");

  await fireEvent.input(input, { target: { value: "I'm not here for games" } });
  await fireEvent.click(addButton);

  expect(getByText("I'm not here for games")).toBeInDocument();
  expect(addButton.innerHTML).toHaveProperty('disabled', 'false')
})
