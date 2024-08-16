const dashboardData={
    header:" Welcome To Dashboard",
    contact:[
        {
            key:"profile",
            label:"Profile"
        },
        {
            key:"aboutus",
            label:"Aboutus"
        },
        {
            key:"contactus",
            label:"Contactus"
        },
        {
            key:"help",
            label:"Help"
        },
    ],

}
function displaydashboard(){
    const dashboard=document.createElement('div');
    const dashh1=document.createElement("h1");
    dashh1.textContent=dashboardData.header;
    dashboard.append(dashh1)
    dashboardData.contact.forEach(ele=>{
        const div=document.createElement("div");
        div.id=ele.key;
        const button=document.createElement('button');
button.textContent=ele.label;
button.addEventListener("click",()=>handlesidebarBtnClick(btn.key))

div.appendChild(button)
dashboard.appendChild(div);
replacechildElement(dashboard)
    });
    
   
};