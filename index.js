let receivesAFunction = (cb) => {
    cb();
};

let returnsANamedFunction = () => {
    return function newFunction(){};
};

let returnsAnAnonymousFunction = () => {
    return function (){};
};