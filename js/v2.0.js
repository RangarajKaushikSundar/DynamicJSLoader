reactComponentPlaceholder = () => {
  console.log("Loaded v2.0");
  return "React Component Version 2";
}
window.val = reactComponentPlaceholder();
alert(window.val);