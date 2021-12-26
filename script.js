function apply() {
  let box = document.getElementById("box");

  box.style.borderTopLeftRadius = document.getElementById("tl").value + "px";
  box.style.borderTopRightRadius = document.getElementById("tr").value + "px";
  box.style.borderBottomLeftRadius = document.getElementById("bl").value + "px";
  box.style.borderBottomRightRadius =
    document.getElementById("br").value + "px";
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    apply();
  }
});
