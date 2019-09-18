reactComponentPlaceholder = () => {
  console.log("Loaded v1.0");
  return "React Component Version 1";
}
window.val = reactComponentPlaceholder();
alert(window.val);