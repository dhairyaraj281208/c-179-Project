let coordinates = {}

$(document).ready(function(){
    get_coordinates()
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    
    if (searchParams.has('src') && searchParams.has('place')) {
        let source = searchParams.get('src')
        let destination = searchParams.get('place')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.place = place.split(";")[0]
        coordinates.place = place.split(";")[1]
        console.log(coordinates)

    }
    else{
        alert("Coordinates not selected. Please Select them to Continue.")
        window.history.back 
    }
}