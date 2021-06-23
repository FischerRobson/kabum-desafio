export function convertObjectToArray(object: any) {
    let elements = [];
        for (let number in object) {
            if (object.hasOwnProperty(number)) {
                elements.push(object[number]);
            }
        }
    return elements;
}