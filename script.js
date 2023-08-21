const check = () => {
    const grade = document.getElementById('grade').value;



if(grade == "") {
    alert("Enter your grade.");
} else if(grade <= 74) {
    alert('Failed');
} else {
    alert('Passed');
}
location.reload();
}