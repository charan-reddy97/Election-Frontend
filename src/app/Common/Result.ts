import { Candidate } from "./Candidate";
import { Election } from "./Election";
import { Vote } from "./Vote";

export class Result
{
    electionId:Election|undefined;
    candidateName:Candidate|undefined
    totalVotes:Vote|undefined

}