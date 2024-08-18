document.getElementById("cards").onmousemove = e => {
    for(const projBox of document.getElementsByClassName("card")) {
      const rect = projBox.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      projBox.style.setProperty("--mouse-x", `${x}px`);
      projBox.style.setProperty("--mouse-y", `${y}px`);
    };
}
