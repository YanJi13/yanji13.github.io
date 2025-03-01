// JSON string 
const jsonString = '{"name": "Jeane", "age": 20, "hobbies": "Gaming"}';
// Parse JSON string into a JavaScript object 
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 
console.log(jsonObject.age); 

// Convert JavaScript object back to JSON string 
const newJsonString = JSON.stringify(jsonObject); console.log(newJsonString); 