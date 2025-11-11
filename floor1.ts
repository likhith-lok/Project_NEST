let SELECTED_ROOMS: Array<string> = []
const classes = document.getElementsByClassName("nav-button")
for (let ii=0; ii <classes!.length; ii++){
    const ele = <HTMLElement>classes[ii]!;
    ele.addEventListener("click", ()=>{
        let roomId = (ele.id).replace("-", "").replace("-", " ").replace("-", " ")
        console.log(roomId, ele.id)
        roomId = roomId.replace("btn", "")
        roomId= roomId[0].toUpperCase().concat(roomId.slice(1))
        console.log(SELECTED_ROOMS)
        if (SELECTED_ROOMS.indexOf(roomId) != -1){
            SELECTED_ROOMS.splice(SELECTED_ROOMS.indexOf(roomId), 1)
        }else{
            SELECTED_ROOMS.push(roomId)
        }
        let stringBuild = "";
        SELECTED_ROOMS.forEach(room => stringBuild = stringBuild.concat(room.concat(", ")))
        if (stringBuild.length > 4)stringBuild = stringBuild.slice(0, stringBuild.length-2)
        else stringBuild = "None"
        document.getElementById("selected_rooms").innerText = "Selected Rooms: ".concat(stringBuild)
    })
}