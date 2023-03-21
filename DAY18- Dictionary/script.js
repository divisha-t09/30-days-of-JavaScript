const cursor = document.querySelector(".cursor");
        var timeout;

        document.addEventListener("mousemove", (e) => {
            // let x = e.pageX;
            // let y = e.pageY;

            cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px")

            // cursor.style.top = y + 'px';
            // cursor.style.left = x + 'px';
            // cursor.style.display = 'block';

            function mouseStopped () {
                cursor.style.display = 'none';
            }

            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = 'none';
        });