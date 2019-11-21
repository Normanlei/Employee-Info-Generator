const cheerio = require('cheerio');
const fs = require('fs');
const util = require("util");
let writefileAsync = util.promisify(fs.writeFile);


let html = fs.readFileSync("./templates/manager.html", "utf8");
let $manager = cheerio.load(html);
let mainHtml = fs.readFileSync("./templates/main.html", "utf8");
let $main = cheerio.load(mainHtml);
$manager("#name").html("Norman");
$manager("#id").html('1');
$manager("#email").html('fjfj');
$manager("#office").html('2');
$main("#addMember").append($manager.html());
writefileAsync("./templates/main.html", $main.html(), error => {
    if (error) console.log(error);
});
console.log("Manager is added to main.html successfully!!!");


