export interface ITag {
    id: number;
    name: string;
    description: string;
    questionsTotal : number;
  }
  
  export interface IQuestion {
    id: number;
    tag: string;
    voteCount: number;
    questionTitle: string;
    questionLink: string;
  }