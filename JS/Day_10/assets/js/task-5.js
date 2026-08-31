let  studentDetails=(name, course, city = "Chennai") =>{
    return `My name is ${name}. I am studying ${course} in ${city}.`;
}

console.log(studentDetails("Thamizh", "JavaScript"));
console.log(studentDetails("vicky", "Python", "Bangalore"));