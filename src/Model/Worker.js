export default class Worker{
    gender = 0;
    position = null;
    owner = null;
    indicator = 'W';

    constructor(position, owner){
        this.position = position;
        this.owner = owner;
    }

    logSomething(){
        console.log('I LOGGED SOMETHING');
    }


}

