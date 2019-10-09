var employees = new Array;
class Employee {
    constructor(id, name, surname, email, job_title, salary) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.job_title = job_title;
        this.salary = salary;
    }
}

function createEmployees(length) {
    for (i = 0; i < length; i++) {
        let id = Math.floor(Math.random() * 10000000);
        let name = `name${i}`;
        let surname = `surname${i}`;
        let email = `${surname}_${name}@company.at`;
        let job_title = `Employed at Company`;
        let salary = Math.floor((Math.random() * 4000) + 1000);

        employees.push(new Employee(id, name, surname, email, job_title, salary));
    }
}

function printEmployees() {
    let table = "<table><tr><th>ID</th><th>Name</th><th>Surname</th><th>E-Mail</th><th>Job Title</th><th>Salary</th></tr>";
    for (i = 0; i < employees.length; i++) {
    table += `<tr><td>${employees[i].id}</td><td>${employees[i].name}</td><td>${employees[i].surname}</td><td>${employees[i].email}</td><td>${employees[i].job_title}</td><td>${employees[i].salary}</td></tr>`;
    }
    table += "</table>";
    document.body.innerHTML= table;
}
createEmployees(10);
printEmployees();