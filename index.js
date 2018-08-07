let title = document.getElementById("title").innerHTML =
  movies ["Titanic"] ["title"]
;
let director = document.getElementById("director").innerHTML =
  movies ["Titanic"] ["director"]
;
let genre = document.getElementById("genre").innerHTML =
  movies ["Titanic"] ["genre"]
;
let filmRating = document.getElementById("filmRating").innerHTML =
  movies ["Titanic"] ["filmRating"]
;
let description = document.getElementById("description").innerHTML =
  movies ["Titanic"] ["description"]
;
let audienceScrore = document.getElementById("audienceScore").innerHTML =
  movies ["Titanic"] ["audienceScore"]
;

let cast= movies.Titanic.cast;
let i;
for  (i = 0; i <movies.Titanic.cast.length; i++) { 
    document.getElementById("cast").innerHTML+= movies.Titanic.cast[i].actor + " as ";
    document.getElementById("cast").innerHTML+= movies.Titanic.cast[i].role + "<br>";
}

let reviews = movies.Titanic.reviews;
let j;
for  (j = 0; j <movies.Titanic.reviews.length; j++) { 
    document.getElementById("reviews").innerHTML+= movies.Titanic.reviews[j].content + "<br>";
    document.getElementById("reviews").innerHTML+= movies.Titanic.reviews[j].username + "<br>";
}
button.onclick = function(){
  };

