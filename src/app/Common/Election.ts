import { Candidate } from "./Candidate";

export class Election
{
    pollnumber:number=0;
    position:string='';
    description:string=''
    candidates:Candidate[]|undefined
}
