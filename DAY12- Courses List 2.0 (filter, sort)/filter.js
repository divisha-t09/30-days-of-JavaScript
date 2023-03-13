function filter() {
    
    const activeFilter = document.querySelector(".filter-options li.active").getAttribute("data-filter");
    const items = document.querySelectorAll(".course-list li");
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      
      if (activeFilter === "All" || item.getAttribute("data-item").includes(activeFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  }
  
  const filterOptions = document.querySelectorAll(".filter-options li");
  for (let i = 0; i < filterOptions.length; i++) {
    const filterOption = filterOptions[i];
    filterOption.addEventListener("click", function() {
      for (let j = 0; j < filterOptions.length; j++) {
        filterOptions[j].classList.remove("active");
      }
  
      filterOption.classList.add("active");
      filter();
    });
  }


  filter();