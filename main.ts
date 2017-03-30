import {Observable, Observer} from "rxjs";

let numbers = [1,5,10]
let source = Observable.from(numbers);

//Short way of creating and subscribing to an Observer
source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

//Long and formal way of creating and subscribing to an Observer

/*class MyObserver implements Observer<number>{

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
source.subscribe(new MyObserver());*/