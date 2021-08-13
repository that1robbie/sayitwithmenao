const nameList =[
                "Halo Theme.flac", 
                "Its Modelo time fool.flac",
                "LITERALLYNOIDEA.flac",
                "Marijuana.flac",
                "Namaste my brother.flac",
                "Snyper Ryfle.flac",
                "You da boi.flac"
                ];

var grid = document.getElementById("main-grid");

window.addEventListener( ("load"), (e) => {
  var tileList = makeAllTiles(e);
  
    // var fullPath = document.getElementById('upload');
    // console.log(fullPath);
});

function makeAllTiles(e) {
  // e.preventDefault();
  tileList = [];
  for(i = 0; i< nameList.length; i++){
      title = nameList[i];
      title = title.slice(0,-5);
      tileList.push( makeTile(title,nameList[i]) );
  }
  return tileList;           
};

function makeTile(title,filename) { 
    var tile = document.createElement("div");
    tile.className = "tile";

    var img = new Image();
    img.src = 'waldo.jpg';

    var noise = new Audio();
    noise.src = filename;

    tile.addEventListener( ("click"), (e) => {noise.play();})
    
    var header = document.createElement("div");
    header.className = "tile-name"
    header.innerText = title;
    
    tile.appendChild(header);
    tile.appendChild(img);

    grid.appendChild(tile);
    return tile;

}