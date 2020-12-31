 NameOfStudentArray = [];
 var display_student_arry = [];
 for(var i = 1; i<=4; i++){
     var NameOfTheStudent = document.getElementById("name_of_the_student_" +i).value;
     console.log(NameOfTheStudent);
     NameOfStudentArray.push(NameOfTheStudent);
 } 
console.log(NameOfStudentArray);
var length_of_student_array = NameOfStudentArray.length;
console.log(length_of_student_array);
for(var j = 0; j<length_of_student_array; j++){
    display_student_arry.push("<h4>NAME - "+NameOfStudentArray[j]+"</h4>");
    console.log(display_student_arry);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_arry;
var remove_commas = display_student_arry.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
function sorting(){
    NameOfStudentArray.sort();
    console.log(NameOfStudentArray);
}
var display_sorting = [];
var length_sorting = NameOfStudentArray.length;
for(var k = 0; k<length_sorting; k++){
    display_sorting.push("<h4>NAME - "+NameOfStudentArray[k]+"</h4>");
}
var remove_commas = display_sorting.join(" ");
console.log(remove_commas);