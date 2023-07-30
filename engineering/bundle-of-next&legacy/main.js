import Wolf from "./wolf.js";

const focusNoJutsu = (e) => {
  const target = e ?? document.body;
  console.log("focus-no-jutsu side effect");
  console.log(new Wolf());
  target.focus();
};

focusNoJutsu();