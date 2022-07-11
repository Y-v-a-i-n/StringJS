const e=require("fs");
e.existsSync(process.argv[2])?e.readFile(process.argv[2],"utf-8",((e,o)=>{
    e?console.log("An error has been occurred"):console.log(o.match(/([0-9A-Za-z !-?&-à][0-9A-Za-z !-?&-à][0-9A-Za-z !-?&-à][0-9A-Za-z !-?&-à]*)/gi).join("\n"))
})):console.log("The file does not exists");