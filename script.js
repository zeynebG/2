   

class Message{
    constructor(name , date , content){
this.name = name;
this.content = content;
this.date = this.getTime;

    }
    getTime() {
       let now = new Date();
       return `${now.getHours()}:${now.getMinutes()}`
   }
     toString(name , date , content) {
       let all = toString(this.name)+toString(this.date)+toString(this.content)
       console.log(all)
   }
    
}
class Messenger extends Message{
    constructor(name , date , content){
        super(name , date , content)
    }
    show_history(){
        console.log(this.date + " " + this.name + " " + this.content);
    }
    send(name , content){
        this.name = name;
        this.content = content;
        console.log(this.date + " " + this.name + " " + this.content);
    }
}
let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()