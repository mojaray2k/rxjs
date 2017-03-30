import {Observable, Observer} from "rxjs";
let numbers = [1,5,10]


/*Long and formal way of creating and subscribing to an Observer*/
let source = Observable.from(numbers);

source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

class MyObserver implements Observer<number>{

    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete(){
        console.log("complete");
    }

}

source.subscribe(new MyObserver());