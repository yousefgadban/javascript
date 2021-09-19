const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};


function findPerson(studentOrTeacher, id) {

    if (studentOrTeacher == 'student') {
        
        let res = school.students.filter(s => {
            return s.id == id;
        })

        return res;

    } else {

        let res = school.teachers.filter(s => {
            return s.id == id;
        })

        return res;

    }

}

//console.log(findPerson('student', 12));
//console.log(findPerson('teacher', 2));


function assignStudent(id, subject) {

    let teachersLearnSubject = [];
    school.teachers.forEach(element => {
        
        let subs = element.subjects.filter(s => {
            return s == subject && element.capacityLeft > 0;
        });

        if (subs.length > 0) {
            teachersLearnSubject.push(element)
        }

        // console.log(teachersLearnSubject);

    });

    if (teachersLearnSubject.length == 0 ) {
        console.log('Sorry, no available teachers left');
    } else {
        school.teachers.forEach(teacher => {
            if (teacher.id == teachersLearnSubject[0].id) {
                teacher.students.push(id);
                teacher.capacityLeft--;
            }
        });
    }

}


//assignStudent(11, 'history');


function assignTeachersSubject(id, subject) {

     let teacherSubjects =  school.teachers.filter(teacher => {
        return teacher.id == id;
    })
    
    let subjectExists = teacherSubjects[0].subjects.filter(sub => {
        return sub == subject;
    }).length == 0 ? false : true;

    if (!subjectExists) {
        school.teachers.forEach(teacher => {
            if (teacher.id == id) {
                teacher.subjects.push(subject);
            }
        });
    }

}


//assignTeachersSubject(2, 'history');
assignTeachersSubject(2, 'biology');


console.log(school.teachers);