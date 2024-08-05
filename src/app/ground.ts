export class Ground {
    id:number=0;
    title:string='';
    city:string='';
    road:string='';
    weekendRate:string='';
    weekdayRate:string='';
    path:string='';
    booked:boolean=false;
    cameraPresent:boolean|undefined;
    changingRoomPresent:boolean|undefined;
    washroomPresent:boolean|undefined;
    drinkingWater:boolean|undefined;
    wifiPresent:boolean|undefined;
}
