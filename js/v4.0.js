reactComponentPlaceholder = () => {
  console.log("Loaded v4.0");
  return "React Component version 4";
}
window.val = reactComponentPlaceholder();
alert(window.val);
