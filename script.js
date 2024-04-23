// Student Function
const student = function () {
  $(".stu-add").click(function () {
    $("#viewTable").addClass("hidden");
    $("#edit-form").addClass("hidden");
    $("#delete-form").addClass("hidden");
    $("#add-form").removeClass("hidden");
  });

  /// edit table

  $(".stu-edit").click(function () {
    $("#viewTable").addClass("hidden");
    $("#edit-form").removeClass("hidden");
    $("#delete-form").addClass("hidden");
    $("#add-form").addClass("hidden");
  });

  const edit = function (e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/student/edit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        newID: Number(document.getElementById("estuID").value),
        newFname: document.getElementById("efname").value,
        newLname: document.getElementById("elname").value,
        newEmail: document.getElementById("eemail").value,
        newPno: document.getElementById("epno").value,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log(document.getElementById("efname").value));
  };

  document.getElementById("edit-form").addEventListener("submit", edit);

  // view table

  $(".stu-view").click(function () {
    $("#viewTable").removeClass("hidden");
    $("#edit-form").addClass("hidden");
    $("#delete-form").addClass("hidden");
    $("#add-form").addClass("hidden");

    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    fetch("http://127.0.0.1:5000/student/view")
      .then((res) => res.json())
      .then((data) => {
        data.map((user, i) => {
          table.innerHTML += `
            <tr>
                <td class="border px-4 py-2">${user.student_id}</td>
                <td class="border px-4 py-2">${user.first_name}</td>
                <td class="border px-4 py-2">${user.last_name}</td>
                <td class="border px-4 py-2">${user.email}</td>
                <td class="border px-4 py-2">${user.phone_number}</td>
            </tr>`;
        });
      });
  });

  // delete form

  $(".stu-delete").click(function () {
    $("#viewTable").addClass("hidden");
    $("#edit-form").addClass("hidden");
    $("#delete-form").removeClass("hidden");
    $("#add-form").addClass("hidden");
  });

  const deletestu = function (e) {
    e.preventDefault();

    const stuid = Number(document.getElementById("deletestu").value);

    fetch("http://127.0.0.1:5000/student/delete", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deleteId: stuid }),
    })
      .then((res) => res.json)
      .then(() => console.log(stuid));
  };

  document.getElementById("delete-form").addEventListener("submit", deletestu);

  $("#stud_div").removeClass("hidden");
  $("#inst_div").addClass("hidden");
  $("#course_div").addClass("hidden");
  $("#enroll_div").addClass("hidden");
};

// course Function
const course = function () {
  $(".cor-add").click(function () {
    $("#C_viewTable").addClass("hidden");
    $("#C_edit-form").addClass("hidden");
    $("#C_delete-form").addClass("hidden");
    $("#C_add-form").removeClass("hidden");
  });

  /// edit table

  $(".cor-edit").click(function () {
    $("#C_viewTable").addClass("hidden");
    $("#C_edit-form").removeClass("hidden");
    $("#C_delete-form").addClass("hidden");
    $("#C_add-form").addClass("hidden");
  });

  const edit = function (e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/course/edit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        newID: Number(document.getElementById("ecorID").value),
        newCname: document.getElementById("e_cname").value,
        newchr: Number(document.getElementById("e_chr").value),
        newdes: document.getElementById("e_cdes").value,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("edited successfull"));
  };

  document.getElementById("C_edit-form").addEventListener("submit", edit);

  // view table

  $(".cor-view").click(function () {
    $("#C_viewTable").removeClass("hidden");
    $("#C_edit-form").addClass("hidden");
    $("#C_delete-form").addClass("hidden");
    $("#C_add-form").addClass("hidden");

    let table = document.getElementById("C_tableBody");
    table.innerHTML = "";

    fetch("http://127.0.0.1:5000/course/view")
      .then((res) => res.json())
      .then((data) => {
        data.map((user, i) => {
          table.innerHTML += `
            <tr>
                <td class="border px-4 py-2">${user.course_id}</td>
                <td class="border px-4 py-2">${user.course_name}</td>
                <td class="border px-4 py-2">${user.credit_hours}</td>
                <td class="border px-4 py-2">${user.course_description}</td>
            </tr>`;
        });
      });
  });

  // delete form

  $(".cor-delete").click(function () {
    $("#C_viewTable").addClass("hidden");
    $("#C_edit-form").addClass("hidden");
    $("#C_delete-form").removeClass("hidden");
    $("#C_add-form").addClass("hidden");
  });

  const deletecor = function (e) {
    e.preventDefault();

    const corid = Number(document.getElementById("deletecor").value);

    fetch("http://127.0.0.1:5000/course/delete", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deleteId: corid }),
    })
      .then((res) => res.json)
      .then(() => console.log(stuid));
  };

  document
    .getElementById("C_delete-form")
    .addEventListener("submit", deletecor);

  $("#course_div").removeClass("hidden");
  $("#inst_div").addClass("hidden");
  $("#stud_div").addClass("hidden");
  $("#enroll_div").addClass("hidden");
};

// Instructor Function
const instructor = function () {
  $(".ins-add").click(function () {
    $("#I_viewTable").addClass("hidden");
    $("#I_grade-form").addClass("hidden");
    $("#I_edit-form").addClass("hidden");
    $("#I_delete-form").addClass("hidden");
    $("#I_add-form").removeClass("hidden");
  });

  /// edit table

  $(".ins-edit").click(function () {
    $("#I_viewTable").addClass("hidden");
    $("#I_edit-form").removeClass("hidden");
    $("#I_grade-form").addClass("hidden");
    $("#I_delete-form").addClass("hidden");
    $("#I_add-form").addClass("hidden");
  });

  const edit = function (e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/instructor/edit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        new_I_ID: Number(document.getElementById("einsID").value),
        new_I_Fname: document.getElementById("e_insfname").value,
        new_I_Lname: document.getElementById("e_inslname").value,
        new_I_Email: document.getElementById("e_insemail").value,
        new_I_dep: document.getElementById("edep").value,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("edited successfull"));
  };

  document.getElementById("C_edit-form").addEventListener("submit", edit);

  // view table

  $(".ins-view").click(function () {
    $("#I_viewTable").removeClass("hidden");
    $("#I_edit-form").addClass("hidden");
    $("#I_delete-form").addClass("hidden");
    $("#I_add-form").addClass("hidden");
    $("#I_grade-form").addClass("hidden");

    let table = document.getElementById("I_tableBody");
    table.innerHTML = "";

    fetch("http://127.0.0.1:5000/instructor/view")
      .then((res) => res.json())
      .then((data) => {
        data.map((user, i) => {
          table.innerHTML += `
            <tr>
                <td class="border px-4 py-2">${user.instructor_id}</td>
                <td class="border px-4 py-2">${user.first_name}</td>
                <td class="border px-4 py-2">${user.last_name}</td>
                <td class="border px-4 py-2">${user.email}</td>
                <td class="border px-4 py-2">${user.department}</td>
            </tr>`;
        });
      });
  });

  // delete form

  $(".ins-delete").click(function () {
    $("#I_viewTable").addClass("hidden");
    $("#I_edit-form").addClass("hidden");
    $("#I_delete-form").removeClass("hidden");
    $("#I_add-form").addClass("hidden");
    $("#I_grade-form").addClass("hidden");
  });

  const deleteins = function (e) {
    e.preventDefault();

    const insid = Number(document.getElementById("deleteins").value);

    fetch("http://127.0.0.1:5000/instructor/delete", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deleteId: insid }),
    })
      .then((res) => res.json)
      .then(() => console.log(stuid));
  };

  document
    .getElementById("C_delete-form")
    .addEventListener("submit", deleteins);

  //// Submit grade
  $(".ins-grade").click(function () {
    $("#I_viewTable").addClass("hidden");
    $("#I_edit-form").addClass("hidden");
    $("#I_delete-form").addClass("hidden");
    $("#I_add-form").addClass("hidden");
    $("#I_grade-form").removeClass("hidden");

    const submit = function (e) {
      e.preventDefault();
      const sID = document.getElementById("I_stuId").value;
      const cID = document.getElementById("I_courseId").value;
      const grade = document.getElementById("I_Grade").value;

      fetch("http://127.0.0.1:5000/instructor/grade", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          courseID: Number(cID),
          studentID: Number(sID),
          grade: grade,
        }),
      })
        .then((res) => res.json())
        .then(() => console.log("grade submitted"));
    };

    document.querySelector("#I_grade-form").addEventListener("submit", submit);
  });

  $("#enroll_div").addClass("hidden");
  $("#inst_div").removeClass("hidden");
  $("#course_div").addClass("hidden");
  $("#stud_div").addClass("hidden");
};

// Enroll Function

const enroll = function () {
  $(".enroll-add").click(function () {
    $("#E_add-form").removeClass("hidden");
    $("#E_viewTable").addClass("hidden");
  });

  // view table

  $(".enroll-view").click(function () {
    $("#E_viewTable").removeClass("hidden");
    $("#E_add-form").addClass("hidden");

    let table = document.getElementById("E_tableBody");
    table.innerHTML = "";

    fetch("http://127.0.0.1:5000/enroll/view")
      .then((res) => res.json())
      .then((data) => {
        data.map((user, i) => {
          table.innerHTML += `
            <tr>
                <td class="border px-4 py-2">${user.enroll_id}</td>
                <td class="border px-4 py-2">${user.first_name}</td>
                <td class="border px-4 py-2">${user.last_name}</td>
                <td class="border px-4 py-2">${user.course_name}</td>
                <td class="border px-4 py-2">${user.grade}</td>
                <td class="border px-4 py-2">${user.enrollment_date}</td>
            </tr>`;
        });
      });
  });

  $("#enroll_div").removeClass("hidden");
  $("#inst_div").addClass("hidden");
  $("#course_div").addClass("hidden");
  $("#stud_div").addClass("hidden");
};

$(".btn-student").click(student);
$(".btn-course").click(course);
$(".btn-instructor").click(instructor);
$(".btn-enroll").click(enroll);
