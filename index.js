var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.hebron-academy.com/itacademyhebron/api/hebron100/get_people/");
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        let sponsors = document.getElementById('sponsors');
        console.log(data);
        for(var i=0;i<data.people.length;i++){
            console.log(data.people[i])
            let objectData = `
                <div class="facebook"><a href='https://www.facebook.com/`+data.people[i].facebook+`'></div>
                <div class="image"><img src='https://api.hebron-academy.com/itacademyhebron/api/media/`+data.people[i].image+`'></div>
                <div class="name">`+data.people[i].name+`</div>
                <div class="position">`+data.people[i].position+`</div>`;
            sponsors.innerHTML += objectData;
        }
    }
}
xhttp.send(); 