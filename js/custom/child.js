class Child {

    constructor(name, id) {
        this.name = name;
        // this.id = id;
        this.day;
    };

    setNote(data, day){
        this.day = {
            'day': day,
            'notes': data
        }
        let req = new XMLHttpRequest;
        req.onload = function(){
            console.log(this.responseText);
        }
        req.open('POST', '../../add_data.php', true);
        let form = new FormData();
        form.append('test', 'test');
        req.send(form);
    }

    checkData(day){
        this
    }
};
