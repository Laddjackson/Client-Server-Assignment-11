async function getAlbums(){
    let response = await fetch("http://localhost:3000/api/albums");
    let albumsJSON = await response.json();
    let albumsDiv = document.getElementById("albums-div")

    for(i in albumsJSON) {
        let album = albumsJSON[i];
        albumsDiv.append(getAlbumItem(album));
    }
}

function getAlbumItem(album) {
    let albumSection = document.createElement("section");

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = album.title;
    albumSection.append(h3Elem);

    let coverArt = document.createElement("img");
    coverArt.src = album.cover;
    coverArt.classList.add("cover-art");
    albumSection.append(coverArt);

    let infoP = document.createElement("p");
    infoP.innerHTML = `<b>Artist</b>: ${album.artist}<br><b>Genre</b>: ${album.genre}<br><b>Year</b>: ${album.year}<br><b>Top Tracks</b>:`;
    albumSection.append(infoP);

    let topTracksOl = document.createElement("ol");
    for(i in album.topTracks) {
        trackItem = document.createElement("li");
        trackItem.textContent = album.topTracks[i];
        topTracksOl.append(trackItem);
    }
    albumSection.append(topTracksOl)

    albumSection.classList.add("album");
    return albumSection;
}

window.onload = function() {
    getAlbums();
}