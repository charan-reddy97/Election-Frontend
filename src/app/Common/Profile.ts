export class Profile
{
    firstName:string = "";
    email:string = "";
    role:number = 0;
    id:number=0;
}

export class Token
{
    profile:Profile|any;
    token:string|undefined;
}
