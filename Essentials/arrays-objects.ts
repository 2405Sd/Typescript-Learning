let hobbies= ['sports', 'cooking'];


//hobbies.push(10);


//let users: (string |  number )[];

let users: Array<string|number>;


users = ['Max', 34];
users=[5,1];
users=['MAx', 'Anna'];


let possibleResults: [number, number,];

possibleResults = [1, -1];
possibleResults = [5, 10];


let user:{
    name: string;
    age: number;
    hobbies: string[];
    role:{
        description: string;
        id: number;
    }
} = {
    name: 'Akash',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: {
        description: 'Admin',
        id: 1
    }
};





