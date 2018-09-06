export interface IQuery {
    totalItems: number,
    movies: IMovie[]
}


export interface IMovie {
    id : number;
    key : string;
    name : string;
    description: string;
    genres : any[];
    rate : string;  
    length: string;
    img : string;
}
