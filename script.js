// LOGIN SECURITY
if (localStorage.getItem("loggedIn") !== "true") {

    window.location.href = "login.html";

}


// EMPLOYEE DATA

let employees =
JSON.parse(localStorage.getItem("employees")) || [

    {
        id: 1,
        name: "Sakshi Galave",
        department: "IT",
        email: "sakshi@gmail.com",
        image: "images/image.jpeg"
    },

    {
        id: 2,
        name: "Rahul Sharma",
        department: "HR",
        email: "rahul@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 3,
        name: "Priya Patil",
        department: "Finance",
        email: "priya@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 4,
        name: "Amit Joshi",
        department: "IT",
        email: "amit@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 5,
        name: "Neha Sharma",
        department: "HR",
        email: "neha@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 6,
        name: "Rohan Patil",
        department: "IT",
        email: "rohan@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 7,
        name: "Pooja Deshmukh",
        department: "HR",
        email: "pooja@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 8,
        name: "Karan Mehta",
        department: "Finance",
        email: "karan@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 9,
        name: "Sneha Kulkarni",
        department: "IT",
        email: "sneha@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 10,
        name: "Aditya Jadhav",
        department: "Finance",
        email: "aditya@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 11,
        name: "Komal Pawar",
        department: "Finance",
        email: "komal@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 12,
        name: "Vikas More",
        department: "HR",
        email: "vikas@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 13,
        name: "Anjali Patil",
        department: "HR",
        email: "anjali@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 14,
        name: "Sagar Shinde",
        department: "IT",
        email: "sagar@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 15,
        name: "Meera Joshi",
        department: "Finance",
        email: "meera@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 16,
        name: "Akash Chavan",
        department: "Finance",
        email: "akash@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 17,
        name: "Rutuja Kale",
        department: "HR",
        email: "rutuja@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 18,
        name: "Nikhil Wagh",
        department: "HR",
        email: "nikhil@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 19,
        name: "Tejaswini Patil",
        department: "HR",
        email: "tejaswini@gmail.com",
        image: "images/empimg.jpg"
    },

    {
        id: 20,
        name: "Yash Deshpande",
        department: "IT",
        email: "yash@gmail.com",
        image: "images/empimg.jpg"
    }

];


// ======================================================
// ELEMENTS
// ======================================================

const container =
    document.getElementById("employeeContainer");


// ======================================================
// DISPLAY EMPLOYEES
// ======================================================

function displayEmployees(data) {

    container.innerHTML = "";


    if (data.length === 0) {

        container.innerHTML = `

            <div class="col-12 text-center">

                <h4 style="
                    color:#d64848;
                    margin-top:30px;
                    font-weight:bold;
                ">

                    🔍 Search Result Not Found ❌

                </h4>

            </div>

        `;

        return;
    }


    data.forEach((emp) => {

        container.innerHTML += `

            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

                <div class="card employee-card p-3"
                     onclick="showDetails(${emp.id})">

                    <div class="text-center">

                        <img src="${emp.image}"
                             class="emp-img"
                             onerror="this.src='images/default.png'">

                    </div>

                    <h5>
                        ${emp.name}
                    </h5>

                    <p>
                        Department :
                        ${emp.department}
                    </p>

                    <p>
                        ${emp.email}
                    </p>

                </div>

            </div>

        `;

    });

}


// ======================================================
// FILTER / SEARCH / SORT
// ======================================================

function filterEmployees() {

    let search =
        document.getElementById("search").value
        .toLowerCase()
        .trim();


    let department =
        document.getElementById("department").value;


    let sort =
        document.getElementById("sort").value;


    let filtered =
        employees.filter((emp) => {

            let nameMatch =
                emp.name.toLowerCase().includes(search);


            let departmentMatch =
                department === "All" ||
                emp.department === department;


            return nameMatch && departmentMatch;

        });


    filtered.sort((a, b) => {

        if (sort === "az") {

            return a.name.localeCompare(b.name);

        }

        return b.name.localeCompare(a.name);

    });


    displayEmployees(filtered);

}


// ======================================================
// EMPLOYEE DETAILS MODAL
// ======================================================

function showDetails(id) {

    let emp =
        employees.find((employee) => employee.id === id);


    if (!emp) {
        return;
    }


    document.getElementById("modalBody").innerHTML = `

        <div class="text-center">

            <img src="${emp.image}"
                 class="rounded-circle mb-3"
                 width="120"
                 height="120"
                 onerror="this.src='images/default.png'">

            <h4>
                ${emp.name}
            </h4>

            <p>
                <strong>Department:</strong>
                ${emp.department}
            </p>

            <p>
                <strong>Email:</strong>
                ${emp.email}
            </p>

        </div>

    `;


    let modal =
        new bootstrap.Modal(
            document.getElementById("employeeModal")
        );


    modal.show();

}


// ======================================================
// SHOW / HIDE ADD EMPLOYEE FORM
// ======================================================

function showForm() {

    let form =
        document.getElementById("employeeForm");


    if (form.style.display === "none") {

        form.style.display = "block";

    } else {

        form.style.display = "none";

    }

}


// ======================================================
// ADD EMPLOYEE
// ======================================================

function addEmployee() {

    let name =
        document.getElementById("empName").value.trim();


    let department =
        document.getElementById("empDepartment").value.trim();


    let email =
        document.getElementById("empEmail").value.trim();


    let image =
        document.getElementById("empImage").value.trim();


    // Validation

    if (name === "") {

        alert("Please enter employee name");

        return;

    }


    if (department === "") {

        alert("Please enter department");

        return;

    }


    if (email === "") {

        alert("Please enter email");

        return;

    }


    if (image === "") {

        alert("Please enter image path");

        return;

    }


    let newEmployee = {

        id:
            employees.length > 0
                ? Math.max(...employees.map(emp => emp.id)) + 1
                : 1,

        name: name,

        department: department,

        email: email,

        image: image

    };


    employees.push(newEmployee);


    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );


    alert("Employee Added Successfully ✅");


    displayEmployees(employees);

    displaySearchEmployees(employees);


    // Clear form

    document.getElementById("empName").value = "";

    document.getElementById("empDepartment").value = "";

    document.getElementById("empEmail").value = "";

    document.getElementById("empImage").value = "";


    document.getElementById("employeeForm")
        .style.display = "none";

}


// ======================================================
// HIDE ALL SECTIONS
// ======================================================

function hideAll() {

    document.getElementById("dashboardSection")
        .style.display = "none";


    document.getElementById("searchSection")
        .style.display = "none";


    document.getElementById("topSection")
        .style.display = "none";


    document.getElementById("profileSection")
        .style.display = "none";

}



// DASHBOARD


function showDashboard() {

    hideAll();

    document.getElementById("dashboardSection")
        .style.display = "block";
}


// SEARCH PAGE


function showSearch() {

    hideAll();


    document.getElementById("searchSection")
        .style.display = "block";


    displaySearchEmployees(employees);

}


// ======================================================
// TOP PERFORMERS
// ======================================================

function showTopPerformers() {

    hideAll();


    document.getElementById("topSection")
        .style.display = "block";

}


// ======================================================
// PROFILE
// ======================================================

function showProfile() {

    hideAll();


    document.getElementById("profileSection")
        .style.display = "block";


    loadProfile();

}


// ======================================================
// SEARCH PAGE EMPLOYEES
// ======================================================

function displaySearchEmployees(data) {

    let searchContainer =
        document.getElementById("searchContainer");


    searchContainer.innerHTML = "";


    if (data.length === 0) {

        searchContainer.innerHTML = `

            <div class="col-12 text-center">

                <h4 style="
                    color:#f61b1b;
                    margin-top:30px;
                    font-weight:bold;
                ">

                    🔍 Search Result Not Found ❌

                </h4>

            </div>

        `;

        return;

    }


    data.forEach((emp) => {

        searchContainer.innerHTML += `

            <div class="col-md-4 mb-3">

                <div class="card employee-card p-3">

                    <img src="${emp.image}"
                         class="employee-image"
                         onerror="this.src='images/default.png'">

                    <h5>
                        ${emp.name}
                    </h5>

                    <p>
                        ${emp.department}
                    </p>

                    <p>
                        ${emp.email}
                    </p>


                    <button class="btn btn-danger"
                            onclick="deleteEmployee(${emp.id})">

                        <i class="bi bi-trash"></i>
                        Delete

                    </button>

                </div>

            </div>

        `;

    });

}


// ======================================================
// DELETE EMPLOYEE
// ======================================================

function deleteEmployee(id) {

    let result =
        confirm(
            "Are you sure you want to delete this employee?"
        );


    if (!result) {

        return;

    }


    employees =
        employees.filter(
            (emp) => emp.id !== id
        );


    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );


    displayEmployees(employees);

    displaySearchEmployees(employees);


    alert("Employee Deleted Successfully");

}


// ======================================================
// PROFILE DATA
// ======================================================

let profile =
    JSON.parse(localStorage.getItem("profile"))
    ||
    {

        name: "Sakshi Galave",

        email: "sakshi918@gmail.com",

        role: "Admin",

        department: "IT"

    };


// ======================================================
// LOAD PROFILE
// ======================================================

function loadProfile() {

    document.getElementById("profileName")
        .innerText = profile.name;


    document.getElementById("profileEmail")
        .innerText = profile.email;


    document.getElementById("profileRole")
        .innerText = profile.role;


    document.getElementById("profileDepartment")
        .innerText = profile.department;

}


// ======================================================
// EDIT PROFILE
// ======================================================

function editProfile() {

    document.getElementById("editName").value =
        profile.name;


    document.getElementById("editEmail").value =
        profile.email;


    document.getElementById("editRole").value =
        profile.role;


    document.getElementById("editDepartment").value =
        profile.department;


    let modal =
        new bootstrap.Modal(
            document.getElementById("editProfileModal")
        );


    modal.show();

}


// ======================================================
// SAVE PROFILE
// ======================================================

function saveProfile() {

    let name =
        document.getElementById("editName")
            .value.trim();


    let email =
        document.getElementById("editEmail")
            .value.trim();


    let role =
        document.getElementById("editRole")
            .value.trim();


    let department =
        document.getElementById("editDepartment")
            .value.trim();


    // Validation

    if (name === "") {

        alert("Please enter your name");

        return;

    }


    if (email === "") {

        alert("Please enter your email");

        return;

    }


    if (role === "") {

        alert("Please enter your role");

        return;

    }


    if (department === "") {

        alert("Please enter your department");

        return;

    }


    profile.name = name;

    profile.email = email;

    profile.role = role;

    profile.department = department;


    localStorage.setItem(
        "profile",
        JSON.stringify(profile)
    );


    loadProfile();


    let modal =
        bootstrap.Modal.getInstance(
            document.getElementById("editProfileModal")
        );


    if (modal) {

        modal.hide();

    }


    alert("✅ Profile Updated Successfully");

}


// ======================================================
// LOGOUT
// ======================================================

function logoutUser() {

    let result =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!result) {

        return;

    }


    localStorage.removeItem("loggedIn");


    alert("Logout Successfully");


    window.location.href = "login.html";

}


// ======================================================
// EVENT LISTENERS
// ======================================================

document.addEventListener("DOMContentLoaded", function () {


    // Employee cards

    displayEmployees(employees);


    // Main search

    document.getElementById("search")
        .addEventListener(
            "input",
            filterEmployees
        );


    // Department

    document.getElementById("department")
        .addEventListener(
            "change",
            filterEmployees
        );


    // Sort

    document.getElementById("sort")
        .addEventListener(
            "change",
            filterEmployees
        );


    // Search Employee page

    document.getElementById("searchPage")
        .addEventListener(
            "input",
            function () {

                let text =
                    this.value
                        .toLowerCase()
                        .trim();


                let filtered =
                    employees.filter(
                        (emp) =>
                            emp.name
                                .toLowerCase()
                                .includes(text)
                    );


                displaySearchEmployees(filtered);

            }
        );


    // Dashboard should be default

    showDashboard();

});