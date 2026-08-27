// Task 1 

let sum = (number) => {
    for (let a = 0; a <= number; a++) {
        console.log(a);

    }
}

sum(5);

// Task 2  

let student=(names)=>{

for(let a=0;a<names.length;a++){
    console.log(names[a]);
    
}
   
}

student(["tamil","vicky","aksh","bharathi","kaviya"]);

// Task 3

let evenNumber=(number)=>{
    for(let a=0;a<=number;a++){
        if(a%2===0){
            console.log(a);
            
        }
    }
}

evenNumber(10);


// Task 4 


let  students=(studentList)=>{
    for(let a=0;a<studentList.length;a++){
        if(studentList[a].mark < 80){
            console.log(studentList[a]);
            
        }
    }
}

students([
    {
        name: "Ravi",
        age: 22,
        mark: 85
    },
    {
        name: "Kumar",
        age: 23,
        mark: 90
    },
    {
        name: "Priya",
        age: 21,
        mark: 50
    }
]
)


// Task 5 

let add=(a,b)=>{
    return a+b;
    
}
console.log(add(10,20));


// Task  6  

let student1=(name,mark)=>{
    return name+" "+mark;
}
console.log(student1("tamil",30));
