// click search button

document.getElementById("search-btn").addEventListener("click",function(){
    // console.log("search btn clicked");
    const search = document.getElementById("input-value").value;
    fetch('https://api.lyrics.ovh/suggest/'+search+'')
    .then( res => res.json())
    .then( data => {
        console.log(data);
        // const title = data.data[0];
        // const getTitle = title.title;
        // console.log(getTitle);
        for(let i=0;i<10;i++){
            document.getElementById (`title${i}`) . innerText = data.data[i].title;
            document.getElementById (`album${i}`) . innerText = data.data[i].artist.name;
            document.getElementById (`albumName${i}`) .innerText = data.data[i].album.title;

            
    }
           document.getElementById ("display") .style.display = "block";
            document.getElementById ("lyricsDisplay") .style.display = "none";
    })

      
})

// Get Lyrics value
function totalLyrics(id1,id2,id3){
    const lyrics0 = document.getElementById(id1);
            lyrics0.addEventListener("click",function(){
               const value = document.getElementById(id2) .innerText;
                const name = document.getElementById(id3) .innerText;
                fetch(`https://api.lyrics.ovh/v1/${value}/${name}`)
                .then(res=>res.json())
                .then(data=>{
                   if(data.error == "No lyrics found"){
                    document.getElementById("fullLyrics").innerText = "This Song's Lyrics Is Not Available";
                    alert("This Song's Lyrics Is Not Available");
                   }
                   else{ 
                   document.getElementById ("fullLyrics") .innerText = data.lyrics;
                   }
                   document.getElementById ("titleName") .innerText = name;
                   document.getElementById ("lyricsDisplay") .style.display = "block";
                })  
            })
        }
        //Lyrics function value pass

        totalLyrics("lyrics0" , "album0" , "title0");
        totalLyrics("lyrics1" , "album1" , "title1");
        totalLyrics("lyrics2" , "album2" , "title2");
        totalLyrics("lyrics3" , "albumb3" , "title3");
        totalLyrics("lyrics4" , "albumb4" , "title4");
        totalLyrics("lyrics5" , "albumb5" , "title5");
        totalLyrics("lyrics6" , "albumb6" , "title6");
        totalLyrics("lyrics7" , "albumb7" , "title7");
        totalLyrics("lyrics8" , "albumb8" , "title8");
        totalLyrics("lyrics9" , "albumb9" , "title9");