// Insert headers for Pokedex at specified positions
const headerTexts = ["Isle of Armor", "Crown Tundra"];
const headerPositions = [0, 216];

function adjustOrderedListHeaders() {
  const orderedLists = document.querySelectorAll("ol");
  orderedLists.forEach((ol) => {
    // listItems is all the li elements in the ol that don't have display: none
    const listItems = Array.from(ol.querySelectorAll("li")).filter(
      (li) => li.style.display !== "none"
    );
    headerPositions.forEach((pos, i) => {
      insertHeader(ol, listItems, pos, headerTexts[i]);
    });
  });
}

function insertHeader(ol, listItems, index, text) {
  const header = document.createElement("div");
  header.className = "list-header";
  header.textContent = text;
  const target = listItems[index];
  if (target) {
    ol.insertBefore(header, target);
  } else if (index === 0) {
    // If index is 0 and no items, just prepend
    ol.prepend(header);
  }
}

if (
  localStorage.getItem(
    `showNationalOnly${document.querySelector(".square-list").dataset.version}`
  ) === "true"
) {
  adjustOrderedListHeaders();
}
