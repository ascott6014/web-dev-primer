import { Request, Response} from 'express';

type UserGreetingQuery = {
    name: string;
    state: string;
};

type ColorCountUpdateRequest = {
    color: 'blue' | 'green' | 'purple' | 'black';
}

const colors = [
    'blue',
    'green',
    'purple',
    'black'
];

const favoriteColorsHistogram = {
    'blue': 0,
    'green': 0,
    'purple': 0,
    'black': 0
};

function greetUser(req: Request, res: Response){
    const {name, state} = req.query as UserGreetingQuery;

    res.send(`Hello ${name} from ${state}`);
}

function listColors(req: Request, res: Response){
    res.json(colors);
}

function udpateColorCount(req: Request, res: Response){
    // 1. Get the color from the request
    const { color } = req.body as ColorCountUpdateRequest;
    
    // 2. verify that it is a supported color
    if (!colors.includes(color)){
        res.sendStatus(400); // bad request
        return;
    }

    //3. Update color count
    favoriteColorsHistogram[color] += 1;

    //.4 send back the updated historgram
    res.json(favoriteColorsHistogram);
}   

export { greetUser, listColors, udpateColorCount };