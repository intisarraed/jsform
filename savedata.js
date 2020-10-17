function getFormData(){ 

    var data = [];
    var person ={
        name:document.getElementById('name').value,
        id,
        major
    }

    person.name=;
    person.id=document.getElementById('id').value;
    person.major=document.getElementById('major').value;

data.push(person.name, person.major, person.id);

document.getElementById("demo").innerHTML = data;

}