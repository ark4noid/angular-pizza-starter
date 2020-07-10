export interface Comment {
    id: string;
    score: number;
    text: string;
    created: string; //date
    user: {
        id: string;
        name: string;
    };
}
//que estoy haciendo exactamente? 
//declarando la interface de los Comment para?