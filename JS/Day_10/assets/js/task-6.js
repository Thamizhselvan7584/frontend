let  studentDtaile=(name, age, mark)=>{
    console.log("Name is :", ...name);
    console.log("Age is :", ...age);
    console.log("Mark is :", ...mark);
    console.log("----------------");
    
    
}
studentDtaile(["tamil"],[22],[100]);
studentDtaile(["vicky"],[20],[90]);


// both are same 

const student1 = {
    name: "Tamil",
    age: 20,
    mark: 85
};

const student2 = {
    name: "Vicky",
    age: 21,
    mark: 92
};


function displayDetails(student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Mark:", student.mark);
    console.log("----------------");
}


displayDetails(student1);
displayDetails(student2);