//abt abstract class
abstract class TakePhoto{
    constructor(public cameraMode: string ,public burst:number){}
    abstract getSepia():void
    getReelTime(): number{
        return 8
    }
}
class WhatsApp extends TakePhoto{
    constructor(public cameraMode: string ,public burst:number, public filter:string){
        super(cameraMode,burst)
    }
    getSepia(): void {
        console.log("he hey hey")
    }
}
const av = new WhatsApp("av",123,"efoij")



//we cant make object for abstract class. but we can make object from the class that is inheriting it