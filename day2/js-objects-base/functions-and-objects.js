//1
function getName (object) {
    return object.name
}
//2
function getNames (obj) {
    let a = [
        obj.firstname,
        obj.lastname
    ]
    return a;
}
//3
function concatNames (obj, lastname) {
    let a = obj.firstname + ' ' + lastname;
    return a;
}
//4
function correctName (object) {
    if (object.fathername === undefined) {
        return object.firstname;
    } else {
        return object.firstname + ' ' + object.lastname + ' ' + object.fathername;
    }
}
