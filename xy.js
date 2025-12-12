// Put headers at the start of the ordered list, after 153 items, and after 306 items
// Detect the order list
let i = 0;
function adjustOrderedListHeaders() {
  const orderedLists = document.querySelectorAll("ol");
  orderedLists.forEach((ol) => {
    const listItems = ol.querySelectorAll("li");
    insertHeader(ol, listItems, 0);
    if (listItems.length > 153) {
      insertHeader(ol, listItems, 153);
      i++;
    }
    if (listItems.length > 306) {
      insertHeader(ol, listItems, 306);
      i++;
    }
  });
}

const headerTexts = ["Central Kalos", "Coastal Kalos", "Mountain Kalos"];

// Insert header as a sibling above the specified list item
function insertHeader(ol, listItems, index) {
  const header = document.createElement("div");
  header.className = "list-header";
  header.textContent = headerTexts[i];
  const target = listItems[index];
  if (target) {
    ol.insertBefore(header, target);
  }
}

if (
  !localStorage.getItem(
    `showNationalOnly${document.querySelector(".square-list").dataset.version}`
  )
)
  adjustOrderedListHeaders();
