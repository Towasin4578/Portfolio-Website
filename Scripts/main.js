const creator = document.getElementById("creator")
const ptag = document.getElementById("hide")
const edit_it = () => {
  ptag.innerHTML = "by"
  creator.innerHTML = "Nusab Taha"
  creator.style.color = "rgb(79, 255, 182)"
  creator.style.fontWeight = "bold"
}

setTimeout(edit_it, 7777);