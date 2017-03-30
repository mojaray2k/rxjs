import {Observable} from "rxjs";

let numbers = [1,5,10]

/*Short way of creating and subscribing to an Observer*/
let source = Observable.from(numbers);
source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

