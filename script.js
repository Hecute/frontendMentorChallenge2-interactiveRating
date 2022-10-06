ratingRow = document.querySelector(".rate_row")
ratingBtns = ratingRow.querySelectorAll(".rateCircle")
submitBtn = document.querySelector(".submitBtn")



const selectRate = (e) => {
    let clickedBtn = e.target
    for(let x of ratingBtns)
    {
        if(x.classList.contains("clickedCircle") && x!== e.target)
            x.classList.remove("clickedCircle")
    }
    clickedBtn.classList.toggle("clickedCircle")
}

const submitClick = () => {
    const selectedRate = ratingRow.querySelector(".clickedCircle")
    if(selectedRate !== null){
        console.log(selectedRate.textContent)
    }

}

ratingBtns.forEach(x => x.addEventListener("click",selectRate))
submitBtn.addEventListener("click", submitClick)