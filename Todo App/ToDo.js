function ToDo(desc){
    this.desc=desc;
    this.timeStamp=new Date().toString();
}

Window.ToDo = ToDo;