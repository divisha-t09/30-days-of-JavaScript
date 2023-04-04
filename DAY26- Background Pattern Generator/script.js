const rangeIp = document.querySelectorAll(".range-ip input"),
priceIp = document.querySelectorAll(".rs-ip input")
progress = document.querySelector(".slider .progress");

let priceGap = 1000;

rangeIp.forEach((input) => {
  input.addEventListener("input", () => {
    let minVal = parseInt(rangeIp[0].value),
      maxVal = parseInt(rangeIp[1].value);

    if (maxVal - minVal < priceGap) {
        if(else.target.className === "range-min"){
            rangeIp[0].value = minVal;
            progress.style.left = (minVal / rangeIp[1].max) * 100 + "%";
        }else{
            rangeIp[1].value = maxVal;
            progress.style.right = 100 - (maxVal / rangeIp[1].max) * 100 + "%";
        }
    }else {
        priceIp[0].value = minVal;
        priceIp[1].value = maxVal;
    }
  });
});