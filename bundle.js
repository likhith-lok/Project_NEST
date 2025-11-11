var SELECTED_ROOMS = [];
var classes = document.getElementsByClassName("nav-button");
var _loop_1 = function (ii) {
    var ele = classes[ii];
    ele.addEventListener("click", function () {
        var roomId = (ele.id).replace("-", "").replace("-", " ").replace("-", " ");
        console.log(roomId, ele.id);
        roomId = roomId.replace("btn", "");
        roomId = roomId[0].toUpperCase().concat(roomId.slice(1));
        console.log(SELECTED_ROOMS);
        if (SELECTED_ROOMS.indexOf(roomId) != -1) {
            SELECTED_ROOMS.splice(SELECTED_ROOMS.indexOf(roomId), 1);
        }
        else {
            SELECTED_ROOMS.push(roomId);
        }
        var stringBuild = "";
        SELECTED_ROOMS.forEach(function (room) { return stringBuild = stringBuild.concat(room.concat(", ")); });
        if (stringBuild.length > 4)
            stringBuild = stringBuild.slice(0, stringBuild.length - 2);
        else
            stringBuild = "None";
        document.getElementById("selected_rooms").innerText = "Selected Rooms: ".concat(stringBuild);
    });
};
for (var ii = 0; ii < classes.length; ii++) {
    _loop_1(ii);
}
var _a, _b;
if (document.readyState == "complete") {
    document.getElementById("hours").onkeydown = function () {
        if (12 < Number(document.getElementById("hours").value) || Number(document.getElementById("hours").value) < -1) {
            document.getElementById("hours").value = "12";
        }
    };
    document.getElementById("mins").onkeydown = function () {
        if (59 < Number(document.getElementById("mins").value) || Number(document.getElementById("hours").value) < -1) {
            document.getElementById("mins").value = "30";
        }
    };
}
function showFeedback(message) {
    var box = document.getElementById('messageBox');
    box.textContent = message;
    box.className = 'message-box show p-3 rounded-lg shadow-xl bg-nest-blue text-white';
    setTimeout(function () {
        box.classList.remove('show');
    }, 3000);
}
function selectFloor(floorName) {
    console.log("User selected: ".concat(floorName));
    showFeedback("Navigating to ".concat(floorName, " Dashboard..."));
}
(_a = document.getElementById("firstFloor")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    selectFloor("First Floor");
});
(_b = document.getElementById("secondFloor")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    selectFloor("Second Floor");
});
function login_showFeedback(message, type) {
    if (type === void 0) { type = 'success'; }
    var box = document.getElementById('messageBox');
    box.textContent = message;
    box.className = 'message-box show p-3 rounded-lg shadow-xl';
    if (type === 'success') {
        box.classList.add('bg-green-500', 'text-white');
    }
    else {
        box.classList.add('bg-red-500', 'text-white');
    }
    setTimeout(function () {
        box.classList.remove('show');
    }, 3000);
}
function handleLogin(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    console.log("Attempting login...");
    console.log("Name:", name);
    login_showFeedback("Access Granted. Welcome, ".concat(name, "! Redirecting..."), 'success');
    setTimeout(function () {
        window.location.href = 'floor_selection.html';
    }, 1000);
    return false;
}
//# sourceMappingURL=bundle.js.map