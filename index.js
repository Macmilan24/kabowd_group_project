import express from "express";
import mysql2 from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_enrollment_system_1",
  port: 3308,
});

connection.connect((err) => {
  if (err) throw err;
  else console.log("connction created");
});
///////////////////////////////////////////Student////////////////
//add student
app.post("/student/add", (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let pNo = req.body.pno;
  const sql =
    "insert into student(first_name,last_name,email,phone_number) values(?,?,?,?)";

  connection.query(sql, [fname, lname, email, pNo], (err, result) => {
    if (err) throw err;
    else console.log("inserted successfully");
  });
});

// View method
app.get("/student/view", (req, res) => {
  const sql = "select * from student";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

// edit methode

app.put("/student/edit", (req, res) => {
  const { newID, newFname, newLname, newEmail, newPno } = req.body;

  const sql =
    "UPDATE student SET first_name = ?, last_name = ?, email = ?, phone_number = ? where student_id = ?";

  connection.query(
    sql,
    [newFname, newLname, newEmail, newPno, newID],
    (err, result) => {
      if (err) throw err;
      else {
        console.log(newID);
        res.send(result);
      }
    }
  );
});

//delete student

app.delete("/student/delete", (req, res) => {
  {
    const { deleteId } = req.body;

    const sql = "delete from student where student_id = ?";

    connection.query(sql, [deleteId], (err, result) => {
      if (err) throw err;
      else console.log("delete successfull");

      res.json(result);
    });
  }
});

///////////////////////Course//////////////////////

//add student
app.post("/course/add", (req, res) => {
  let Cname = req.body.cname;
  let chr = Number(req.body.chr);
  let cdes = req.body.cdes;
  const sql =
    "insert into course (course_name,credit_hours,course_description) values(?,?,?)";

  connection.query(sql, [Cname, chr, cdes], (err, result) => {
    if (err) throw err;
    else console.log("inserted successfully");
  });
});

// View method
app.get("/course/view", (req, res) => {
  const sql = "select * from course";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

// edit methode

app.put("/student/edit", (req, res) => {
  const { newID, newCname, newchr, newdes } = req.body;

  const sql =
    "UPDATE course SET course_name = ?, credit_hours = ?, course_description = ? where student_id = ?";

  connection.query(sql, [newCname, newchr, newdes, newID], (err, result) => {
    if (err) throw err;
    else {
      console.log(newID);
      res.send(result);
    }
  });
});

//delete student

app.delete("/course/delete", (req, res) => {
  {
    const { deleteId } = req.body;

    const sql = "delete from course where course_id = ?";

    connection.query(sql, [deleteId], (err, result) => {
      if (err) throw err;
      else console.log("delete successfull");

      res.json(result);
    });
  }
});

////////////////Instructor/////////////

//add student
app.post("/instructor/add", (req, res) => {
  let fname = req.body.I_fname;
  let lname = req.body.I_lname;
  let email = req.body.I_email;
  let dep = req.body.I_dep;
  const sql =
    "insert into instructor (first_name,last_name,email,department) values(?,?,?,?)";

  connection.query(sql, [fname, lname, email, dep], (err, result) => {
    if (err) throw err;
    else console.log("inserted successfully");
  });
});

// View method
app.get("/instructor/view", (req, res) => {
  const sql = "select * from instructor";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

// edit methode

app.put("/instructor/edit", (req, res) => {
  const { new_I_ID, new_I_Fname, new_I_Lname, new_I_Email, new_I_dep } =
    req.body;

  const sql =
    "UPDATE instructor SET first_name = ?, last_name = ?, email = ?, department = ? where instructor_id = ?";

  connection.query(
    sql,
    [new_I_Fname, new_I_Lname, new_I_Email, new_I_dep, new_I_ID],
    (err, result) => {
      if (err) throw err;
      else {
        console.log(newID);
        res.send(result);
      }
    }
  );
});

//delete student

app.delete("/instructor/delete", (req, res) => {
  {
    const { deleteId } = req.body;

    const sql = "delete from instructor where instructor_id = ?";

    connection.query(sql, [deleteId], (err, result) => {
      if (err) throw err;
      else console.log("delete successfull");

      res.json(result);
    });
  }
});

// submit grade

app.put("/instructor/grade", (req, res) => {
  const { courseID, studentID, grade } = req.body;

  const sql =
    "update enroll set grade = ? where course_id = ? and student_id = ?";

  connection.query(sql, [grade, courseID, studentID], (err, result) => {
    if (err) throw err;
    else console.log("grade submitted");

    res.send(result);
  });
});
//// Enrollment///////////

app.post("/enroll/add", (req, res) => {
  let cId = req.body.E_corId;
  let sId = req.body.E_stuId;
  let date = req.body.E_date;
  const sql =
    "insert into enroll (course_id,student_id,enrollment_date) values(?,?,?)";

  connection.query(sql, [cId, sId, date], (err, result) => {
    if (err) throw err;
    else console.log("inserted successfully");
  });
});

// View method
app.get("/enroll/view", (req, res) => {
  const sql = `SELECT e.enroll_id, s.first_name, s.last_name, c.course_name,e.grade ,e.enrollment_date
  FROM enroll e
  JOIN student s ON e.student_id = s.student_id
  JOIN course c ON e.course_id = c.course_id;
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});
/// listen

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
