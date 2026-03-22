function filterProjects(category){

let projects = document.querySelectorAll(".project");

projects.forEach(p => {

if(category === "all" || p.classList.contains(category)){
p.style.display = "block";
}else{
p.style.display = "none";
}

});

}