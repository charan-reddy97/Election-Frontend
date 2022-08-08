import { Candidate } from "./Candidate";

export class Election
{
    pollnumber:number=0;
    position:string='';
    Description:string=''
    candidate:Candidate|undefined
}