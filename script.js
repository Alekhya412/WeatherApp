"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// Select DOM elements
var cityInput = document.getElementById("cityInput");
var fetchWeatherBtn = document.getElementById("fetchWeather");
var weatherDataDiv = document.getElementById("weatherData");
// API Key & URL
var API_KEY = "8037425beecbfc0c4c618c5b0b1c722c";
var API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Fetch Weather Data
var getWeather = function (city) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("".concat(API_URL, "?q=").concat(city, "&units=metric&appid=").concat(API_KEY))];
            case 1:
                response = _a.sent();
                displayWeather(response.data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                weatherDataDiv.innerHTML = "<p style=\"color:red;\">City not\n        found. Please try again.</p>";
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var displayWeather = function (data) {
    weatherDataDiv.innerHTML = "\n        <h2>Weather in ".concat(data.name, "</h2>\n        <p>Temperature: ").concat(data.main.temp, "\u00B0C</p>\n        <p>Humidity: ").concat(data.main.humidity, "%</p>\n        <p>Condition: ").concat(data.weather[0].description, "</p>\n        ");
};
// Event Listener
fetchWeatherBtn.addEventListener("click", function () {
    var city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
    else {
        weatherDataDiv.innerHTML = "<p style=\"color:red;\">Please enter\n        a city name.</p>";
    }
});
