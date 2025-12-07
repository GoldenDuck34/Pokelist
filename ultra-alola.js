// Insert headers for Alola Dex at specified positions
const headerTexts = [
  "Alola Dex",
  "Melemele Island",
  "Akala Island",
  "Ula'ula Island",
  "Poni Island",
];
const headerPositions = [0, 409, 564, 728, 892];

function adjustAlolaOrderedListHeaders() {
  const orderedLists = document.querySelectorAll("ol");
  orderedLists.forEach((ol) => {
    const listItems = ol.querySelectorAll("li");
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

adjustAlolaOrderedListHeaders();
