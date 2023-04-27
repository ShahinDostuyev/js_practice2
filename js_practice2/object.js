//                                Task 1
/*
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
let onlineUsers = [];

users.forEach((element) =>{
    if(element.status==="online"){
        onlineUsers.push(element);
    }
});

const usersOnlineNames = onlineUsers.map(user => user.username).join(",");
alert(`The following users are currently online: ${usersOnlineNames}`);
*/

//                                Task  2
/*
const student = {
  fullName: "Maxim",

  experienceInMonths: 12,

  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const giveJobToStudent = (student, jobName) => {
  student.job = jobName;
  return student;
};

const updatedStudent = giveJobToStudent(student, "web developer");
console.log(student);
*/

//                                Task 3
/*
const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const handleObjects = (obj, key, action) => {
  if (action === "get") {
    return obj[key];
  } else if (action === "add") {
    console.log("added");
    obj[key] = "";
    return obj;
  } else if (action === "delete") {
    console.log("deleted");
    delete obj[key];
    return obj;
  } else {
    return obj;
  }
};
const result = handleObjects(student, "programmingLanguage", "delete");
console.log("result", result);
*/

//                                Task 4
/*
function getKiller(suspectInfo, deadPeople) {
  for (const [suspect, suspectSaw] of Object.entries(suspectInfo)) {
    if (deadPeople.every((victim) => suspectSaw.includes(victim))) {
      alert(`The killer is ${suspect}`)
      return suspect;
    }
  }
}
getKiller(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); 
*/

//                                Task 5

/*
const todaysWinner = {
  prize: "$10,000",
};

const winnerApplicants = {
  "001": {
    name: "Max",
    age: 25,
  },
  201: {
    name: "Svetlana",
    age: 20,
  },
  304: {
    name: "Catherine",
    age: 35,
  },
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const getWinner = (applicants, winnerObject) => {
  const winnerNumber = getRandomNumberInRange(
    1,
    Object.keys(applicants).length
  );
  const winnerInfo = applicants[winnerNumber];
  const winner = {
    ...winnerObject,
    ...winnerInfo,
  };
  return winner;
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
*/

//                            Task 6

/*
const giveTalonsInOrder = (patients, orders) => {
  const orderedArray = [];

  orders.forEach(element => {
    const order = element;
    const patient = patients.find((element) => element.id === order);
    orderedArray.push(patient);
  });
  
  return orderedArray;
};
const ordersArr = [4, 2, 1, 3];
const people = [
{ id: 1, name: "Maxim" },
{ id: 2, name: "Nicholas" },
{ id: 3, name: "Angelina" },
{ id: 4, name: "Vitaly" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
*/