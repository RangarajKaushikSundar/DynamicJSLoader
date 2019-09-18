reactComponentPlaceholder = () => {
  console.log("Loaded v3.0");
  return "React Component Version 3";
}
window.val = reactComponentPlaceholder();
alert(window.val);