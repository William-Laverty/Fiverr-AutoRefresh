const interval_min = 7;
const url = "https://www.fiverr.com/users/username/manage_gigs";
const CONTAINER_TOP_OFFSET = 30;
const CONTAINER_MARGIN = 20;
const CONTAINER_PADDING = 10;
const BUTTON_CONTAINER_HEIGHT = 30;

let toggled_full = true;

const frame_container = document.createElement("div");
const button_container = document.createElement("div");
const cross_toggle_button = document.createElement("button");
cross_toggle_button.innerText = "Minimize";
const frame = document.createElement("iframe");

function toggleContainerState() {
  if (toggled_full) {
    prepareFrameContainerCollapsed();
    cross_toggle_button.innerText = "Expand";
    console.log("Collapsed");
  } else {
    prepareFrameContainerFull();
    cross_toggle_button.innerText = "Minimize";
    console.log("Full-ed");
  }
  toggled_full = !toggled_full;
}

function prepareFrameContainerFull() {
  frame_container.style.top = `${CONTAINER_TOP_OFFSET}px`;
  frame.style.display = "block";
  frame_container.style.width = `${getBodyWidth()}px`;
  frame_container.style.height = `${getBodyHeight()}px`;
}

function prepareFrameContainerCollapsed() {
  frame_container.style.bottom = "20px";
  frame.style.display = "none";
  frame_container.style.width = "200px";
  frame_container.style.height = "100px";
}

function getBodyWidth() {
  return (
    screen.availWidth -
    CONTAINER_MARGIN * 2 -
    CONTAINER_PADDING * 2 -
    20
  );
}

function getBodyHeight() {
  return (
    screen.availHeight -
    CONTAINER_MARGIN * 2 -
    CONTAINER_PADDING * 2 -
    CONTAINER_TOP_OFFSET -
    BUTTON_CONTAINER_HEIGHT -
    20 -
    50
  );
}

function init() {
  frame.setAttribute("src", url);
  prepareFrameContainerFull();

  cross_toggle_button.onclick = toggleContainerState;

  frame_container.style.zIndex = 999999;
  frame_container.style.position = "fixed";
  frame_container.style.opacity = 1;
  frame_container.style.margin = "20px";
  frame_container.style.padding = "15px";
  frame_container.style.overflow = "hidden";
  frame_container.style.border = "2px dotted red";
  frame_container.style.backgroundColor = "rgba(255, 240, 245, 1)";

  button_container.style.height = `${BUTTON_CONTAINER_HEIGHT}px`;
  button_container.style.margin = "5px";

  frame.style.width = "100%";
  frame.style.height = `${getBodyHeight() - BUTTON_CONTAINER_HEIGHT}px`;

  button_container.appendChild(cross_toggle_button);
  frame_container.appendChild(button_container);
  frame_container.appendChild(frame);
  document.body.appendChild(frame_container);

  setInterval(() => {
    console.log("Reloading the page");
    frame.setAttribute("src", "");
    frame.setAttribute("src", url);
    console.log("Reloaded?!");
  }, interval_min * 60 * 1000);
}

init();
