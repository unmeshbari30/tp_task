/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function (item, index){
    if(item.profession === "developer"){
      console.log(
          `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
        );
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (item, index){
    if(item.profession === "developer"){
      console.log(
          `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
        );
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let tempObj = { id: 4, name: "jagmohan", age: "21", profession: "Lead" };
    arr.push(tempObj);
    arr.map(function(item){
      console.log(
        `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
      )}
    );
}

function removeAdmin() {
  //Write your code here, just console.log
   arr = arr.filter((item) => item.profession !== "admin");
    arr.map((item) =>
      console.log(
        `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
      )
    );
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
      { id: 4, name: "Suresh ", age: "31", profession: "lead" },
      { id: 5, name: "Rajesh", age: "24", profession: "developer" },
      { id: 6, name: "Ramesh", age: "38", profession: "advocate" },
    ];
    arr = arr.concat(arr1);
    arr.map((item) =>
      console.log(
        `id : ${item.id}, Name : ${item.name}, Age : ${item.age}, Profession : ${item.profession}`
      )
    );
}
