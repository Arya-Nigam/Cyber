$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("1000");
  });
});

/*let num=prompt(["PSWORD"]);
let gam=["nm"];
while(num!=gam)
{
    num=prompt("wrong password");

}
console.log("open");*/

const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName == "AboutUs.html") {
  document.querySelector(".aboutUs").classList;
}
