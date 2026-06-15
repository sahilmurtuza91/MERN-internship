const Student = require("../models/student");
const { Calculation, } = require("./calculation");

async function processStudents() {

    console.log("Started");

    Promise.resolve().then(async () => {
        console.log("Microtask started --> Promise_1 then: time: ", new Date().toLocaleTimeString());
        const students = await Student.find().limit(100);

        const studentsTotal = students.map(student => {
            return {
                name: student.name,
                rollNo: student.rollNo,
                totalMarks: (student.subjects?.math || 0) + (student.subjects?.science || 0) + (student.subjects?.english || 0) + (student.subjects?.history || 0)
            };
        });
        console.log(`Microtask result: promise_1 : time ${new Date().toLocaleTimeString()} \n ${JSON.stringify(studentsTotal)}`);
    });
    setTimeout(async () => {
        console.log("setTimeout executed --> macrotask");

        const result = Calculation("Timer Task");

        console.log("setTimeout finished result:", result);

    }, 0);
    setImmediate(() => {
        console.log("setImmediate Start");
        const result = Calculation("SETIMMEDIATE TASK");
        console.log("setImmediate finished result:", result);
    });
    console.log("End");
}

module.exports = processStudents;