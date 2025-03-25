"use strict";
//abt abstract class
class TakePhoto {
    constructor(cameraMode, burst) {
        this.cameraMode = cameraMode;
        this.burst = burst;
    }
    getReelTime() {
        return 8;
    }
}
class WhatsApp extends TakePhoto {
    constructor(cameraMode, burst, filter) {
        super(cameraMode, burst);
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
    }
    getSepia() {
        console.log("he hey hey");
    }
}
const av = new WhatsApp("av", 123, "efoij");
//we cant make object for abstract class. but we can make object from the class that is inheriting it
