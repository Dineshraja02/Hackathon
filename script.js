async function getInfo(searchText)
{
try
{
 const data=await fetch(`https://api.jikan.moe/v3/search/anime?q=${searchText}`,{method:"GET"});
 const content=await data.json();
 const moviesInfo=await content.results;
 console.log(moviesInfo);
 document.querySelector(".anime-list").innerHTML=``;
 moviesInfo.forEach(movieInfo => movieLabel(movieInfo));
}
catch(errMsg)
{
  alert("Page Not Found check URL, Try Again");
}
}
function movieLabel(movieInfo)
{
    const container=document.createElement('div');
    container.className="container";
    container.innerHTML=`<img class="poster" src=${movieInfo.image_url}>
    <div class="info">
      <h3>${movieInfo.title}</h3>
    <p><span class="details">Start Date:</span>${new Date(movieInfo.start_date).toDateString()}</p>
    <p><span class="details">End Date:</span>${new Date(movieInfo.end_date).toDateString()}</p>
      <p><span class="details">Type:</span>${movieInfo.type}</p>
      <p><span class="details">IMDB Rating:</span>${movieInfo.score}</p>
      </div>`;
document.querySelector(".anime-list").append(container);
}

function getSearchData(){
  const searchText=document.querySelector('.search-input').value;
  console.log(searchText);
  try{
      getInfo(searchText);
     }
  catch(errMsg){
    console.log(errMsg);
  }
}