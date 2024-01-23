//functions

function sum(n,m){
    return m+n;
}

sum(4,6)



// play with object

let students = [
    {
        name: 'monil',
        sem: 6,
        email: 'mn@gmail.com',
        id: 1234
    },

    {
        name: 'ayush',
        sem: 6,
        email: 'ls@gmail.com',
        id: 123
    },

    {
        name: 'priyansh',
        sem: 6,
        email: 'id@gmail.com',
        id: 134
    }
]



// only for one student object

for (let info in student) {
    console.log(info + ": " + student[info])
}
console.log(student)
console.log(Object.entries)



// for student list

for(student of students){
    console.log(student);
}


for(let i of students){
    for(let j in i){
        console.log(j,": ",i[j])
    }
}



//Condition

// if 1st condition is false then check second condition - ||
// if 1st condition is false then no need to check second condition - &&

var result = 100 && 200
console.log(result)

var result1 = 100 || 200
console.log(result1)

let a = null || false
console.log(a)
