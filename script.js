const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const items = document.getElementById(".course-list")
  const course = document.querySelectorAll(".courses")
  const cname = document.getElementsByTagName("h2")

  for (var i = 0; i < cname.length; i++) {
    let match = course[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        course[i].style.display = "";
      } else {
        course[i].style.display = "none";
      }
    }
  }
}