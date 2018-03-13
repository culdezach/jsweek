function renderMovie(movie){
    document.getElementById("movieTitle").innerText = movie.Title;
    document.getElementById("movieDescription").innerText = movie.Descrip;
    document.getElementById("imgDiv").innerHTML = movie.Poster;
    
    let count = 1;
    movie.Cast.forEach(element => {        
        let li = document.createElement("li");
        li.innerText = element;

        document.getElementById("castList").appendChild(li);
    });
}

function changeStarRating(grade){
    let stars = document.getElementsByClassName("star");

    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];

        if(index < grade)
        {
            element.classList.add("selected");
        }
        else
        element.classList.remove("selected");        
    }
}

function setHover(grade){
    let stars = document.getElementsByClassName("star");

    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];

        if(index < grade)
        {
            element.classList.add("hover");
        }
        else
        element.classList.add("no-hover");     
    }
}

function resetRating(){
    let stars = document.getElementsByClassName("star");

    for (let index = 0; index < stars.length; index++) {
        const element = stars[index];
        element.classList.remove("hover");
        element.classList.remove("no-hover");     
    }

    //$(".star").forEach
}

// JQUERY LISTENERS
$("#starRating").on("click", "span", function(e){
    let star = $(e.target).attr("id");
    changeStarRating(star.split("bright")[1]);
  });

  $("#starRating").on("mouseenter", "span", function(e){
    let star = $(e.target).attr("id");
    setHover(star.split("bright")[1]);
  });

  $("#starRating").on("mouseleave", "span", () => resetRating());


renderMovie(movieInfo);

changeStarRating(4);
