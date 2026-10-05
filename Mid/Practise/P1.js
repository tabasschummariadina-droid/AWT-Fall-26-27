function getStudentResult() {
    return new Proise((resolve, reject) => {
        console.log("Student Result");

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ id: 101, name: " Rahim", department: "CSE", marks: 85 });
            } else {
                reject("Failed");
            }
        }, 3000);
    });
}
async function displayResult() {
    try {
        const student = await getStudentResult();

        console.log("Student result");
        console.log("ID", student.id);
        console.log("Name", student.name);
        console.log("Department", student.department);
        console.log("Marks", student.marks);
    } catch (error) {
        console.log("Result Processing Complete");
    }
}
displayResult();
