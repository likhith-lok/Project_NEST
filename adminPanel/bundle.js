var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SELECTED_ROOMS = [];
var classes = document.getElementsByClassName("nav-button");
var floorSelection = document.getElementById('floorSelection');
var floorPlanView = document.getElementById('floorPlanView');
var messageBox = document.getElementById('messageBox');
function login_showFeedback(message, type) {
    if (type === void 0) { type = 'success'; }
    var box = document.getElementById('messageBox');
    box.textContent = message;
    box.className = 'message-box show p-3 rounded-lg shadow-xl'; // Reset classes
    if (type === 'success') {
        box.classList.add('bg-green-500', 'text-white');
    }
    else {
        box.classList.add('bg-red-500', 'text-white');
    }
    // Hide the box after 3 seconds
    setTimeout(function () {
        box.classList.remove('show');
    }, 3000);
}
function handleLogin(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    //const password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log("Attempting login...");
    console.log("Name:", name);
    login_showFeedback("Access Granted. Welcome, ".concat(name, "! Redirecting..."), 'success');
    setTimeout(function () {
        document.getElementById("loginMainForm").style.display = "none";
        document.getElementById("floorSelection").style.display = "flex";
    }, 1000);
    return false;
}
document.getElementById("loginForm").onsubmit = function (event) {
    if (event === void 0) { event = undefined; }
    handleLogin(event);
};
function showFeedback(message, type) {
    if (type === void 0) { type = 'success'; }
    messageBox.textContent = message;
    if (type === 'error') {
        messageBox.style.backgroundColor = '#ef4444';
    }
    else {
        messageBox.style.backgroundColor = '#1D4ED8';
    }
    messageBox.classList.add('show');
    setTimeout(function () {
        messageBox.classList.remove('show');
    }, 3000);
}
function selectFloor(floorName) {
    showFeedback("Navigating to ".concat(floorName, " Plan..."));
    document.getElementById("floorSelection").style.display = "none";
    document.getElementById("appContainer").style.display = "flex";
    document.getElementById(floorName + 'PlanView').style.display = "flex";
}
function __INTERNALS_hideAllFloors() {
    document.getElementById("Ground FloorPlanView").style.display = "none";
    document.getElementById("First FloorPlanView").style.display = "none";
}
function showAreaFeedback(areaName, deselect) {
    if (deselect === void 0) { deselect = false; }
    var showText = "Selected Area: ".concat(areaName);
    if (deselect) {
        showText = "De-".concat(showText);
    }
    showFeedback(showText, 'success');
    console.log("User clicked on: ".concat(areaName));
}
function goBackToSelection() {
    document.getElementById('appContainer').style.display = "none";
    floorSelection.style.display = "flex";
    __INTERNALS_hideAllFloors();
}
document.getElementById("secondFloor").addEventListener("click", function () { selectFloor("First Floor"); });
document.getElementById("backToFloorSelect").addEventListener("click", function () {
    goBackToSelection();
});
document.getElementById("firstFloor").addEventListener("click", function () { selectFloor("Ground Floor"); });
var _loop_1 = function (ii) {
    var ele = classes[ii];
    ele.addEventListener("click", function () {
        var roomId = (ele.id).replace("-", "").replace("-", " ").replace("-", " ");
        console.log(roomId, ele.id);
        roomId = roomId.replace("btn", "");
        roomId = roomId[0].toUpperCase().concat(roomId.slice(1));
        if (roomId.split(" ").length > 1) {
            roomId = "".concat(roomId.split(" ")[0]).concat(" ").concat(roomId.split(" ")[1][0].toUpperCase().concat(roomId.split(" ")[1].slice(1)));
        }
        console.log(SELECTED_ROOMS);
        if (SELECTED_ROOMS.indexOf(roomId) != -1) {
            SELECTED_ROOMS.splice(SELECTED_ROOMS.indexOf(roomId), 1);
            ele.style.background = "rgba(255, 255, 255, 0.95)";
            showAreaFeedback(roomId, true);
        }
        else {
            SELECTED_ROOMS.push(roomId);
            ele.style.background = "rgba(129, 231, 245, 0.95)";
            showAreaFeedback(roomId);
        }
        var refresh = document.getElementById("selected_rooms").children;
        for (var j = 0; j < refresh.length; j++) {
            refresh[j].style.display = "none";
        }
        var _loop_2 = function (jj) {
            if (!SELECTED_ROOMS[jj])
                return "continue";
            var element = document.createElement("div");
            element.setAttribute("id", "selectedRoom-" + SELECTED_ROOMS[jj]);
            element.classList.add("roomSelect");
            element.innerText = SELECTED_ROOMS[jj];
            var buttonNames = ["On", "Off", "Auto"];
            var subElementFrame = document.createElement("div");
            subElementFrame.classList.add("subOptionFrames");
            var _loop_3 = function (k) {
                var subElement = document.createElement("button");
                subElement.innerText = buttonNames[k];
                subElement.classList.add("subOption");
                subElement.setAttribute("id", "roomControlOption-" + ele.id + buttonNames[k]);
                subElement.style.zIndex = "999";
                subElement.style.cursor = "pointer";
                subElement.addEventListener("click", function () {
                    fetch("http://localhost:8888/componentControl", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ "room": SELECTED_ROOMS[jj], "command": buttonNames[k] })
                    }).then(function () { return showFeedback(SELECTED_ROOMS[jj] + " sensor mode has switched to " + buttonNames[k]); });
                });
                subElementFrame.appendChild(subElement);
            };
            for (var k = 0; k < buttonNames.length; k++) {
                _loop_3(k);
            }
            element.appendChild(subElementFrame);
            document.getElementById("selected_rooms").appendChild(element);
        };
        for (var jj = 0; jj < SELECTED_ROOMS.length; jj++) {
            _loop_2(jj);
        }
    });
};
for (var ii = 0; ii < classes.length; ii++) {
    _loop_1(ii);
}
var FRAME_SHOW = false;
document.getElementById("liveFeed").addEventListener("click", function () {
    if (FRAME_SHOW) {
        document.getElementById("Ground FloorPlanView").removeChild(document.getElementById("espLiveFrame"));
        showFeedback("Live feed has been turned off");
        FRAME_SHOW = false;
        return;
    }
    var iFrame = document.createElement('img');
    iFrame.setAttribute("id", "espLiveFrame");
    iFrame.src = "http://10.235.116.74:81/stream";
    document.getElementById("Ground FloorPlanView").appendChild(iFrame);
    showFeedback("Live feed has been turned on");
    FRAME_SHOW = true;
});
document.getElementById("clearLog").addEventListener("click", function () {
    var res = fetch("http://localhost:8888/resetLog");
    for (var jj = 0; jj < document.getElementById("log").children.length; jj++) {
        document.getElementById("log").removeChild(document.getElementById("log").children[jj]);
    }
    document.getElementById("clearLog").style.display = "none";
    showFeedback("Resetted Logs!");
});
function fetchLogs() {
    return __awaiter(this, void 0, void 0, function () {
        var jj, res, logs, actualLogs, ii, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    for (jj = 0; jj < document.getElementById("log").children.length; jj++) {
                        document.getElementById("log").removeChild(document.getElementById("log").children[jj]);
                    }
                    return [4 /*yield*/, fetch("http://localhost:8888/alertUser")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    logs = _a.sent();
                    actualLogs = Object.entries(logs);
                    for (ii = 0; ii < actualLogs.length; ii++) {
                        document.getElementById("clearLog").style.display = "flex";
                        element = document.createElement("div");
                        element.innerText = actualLogs[ii][1];
                        if (actualLogs[ii][0] == "severe")
                            element.style.background = "rgba(245, 11, 11, 0.65)";
                        element.classList.add("logElement");
                        document.getElementById("log").appendChild(element);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
setInterval(fetchLogs, 1000);
