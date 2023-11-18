const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log("Developers");
    for(let i=0;i<data.length;i++) if(data[i].profession==="developer") console.log(data[i].name);
  }
  
  // 2. Add Data
  function addData() {
    let name=prompt("enter name"),age=prompt("enter age"),profession=prompt("enter profession");
    let newData={name:name,age:parseInt(age),profession:profession};
    data.push(newData);
    console.log("new data added successfully");
    console.log(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<data.length;i++) if(data[i].profession==="admin") data.pop(data[i].profession);
    console.log("admins removed");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dataTwo=[{name:"Max",age:30,profession:"developer"},
    {name:"Sam",age:30,profession:"admin"},
    {name:"Alex",age:30,profession:"developer"},
    {name:"Peter",age:30,profession:"admin"}];
    const afterConcat=data.concat(dataTwo);
    console.log("array after concatenation");
    console.log(afterConcat);
  }
  
  // 5. Average Age
  function averageAge() {
    let ans= 0;
    for(let i=0;i<data.length;i++) ans+=data[i].age;
    console.log("Average Age in the array is --> "+ans/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<data.length;i++){
      if(data[i].age>25){
           console.log("age above 25 exists")
           console.log(data[i]);
           break;
      }
  }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
       for(let i=0;i<data.length;i++){
            if(arr.includes(data[i].profession)==true){
                 continue;
            }else{
                 arr.push(data[i].profession);
            }
       }
       console.log(arr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log("Sorted array")
      console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
      if(data[i].name==="john"){
           data[i].profession="manager";
      console.log(data[i]);
      console.log("john's profession updated to manager updated successfully")
      }
  }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admin =0;
    let dev = 0;
    for(let i=0;i<data.length;i++){
         if(data[i].profession==="admin") admin++;
         else if(data[i].profession==="developer") dev++;
    }
    console.log(`total admin are ${admin}`)
    console.log(`total developers are ${dev}`)
  }
  