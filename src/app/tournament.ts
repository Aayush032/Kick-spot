export class Tournament {
    id:number=0;
    title:string='';
    description:string='';
    prize:string='';
    venue:string='';
    registrationExpirationDate:Date=new Date();
    startDate:Date=new Date();
    closed:boolean=false;
    path:string ='';
    secondPrize:string='';
    thirdPrize:string='';
}
