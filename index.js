const sidebardata={
    header:" Welcome To Dashboard",
    contact:[
        {
            key:"dashboard",
            label:"Dashboard"
        },
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
const sidebar=document.getElementById("sidebar");
 function displaysidebardata() {
    
    const header=document.createElement("h2");
header.textContent=sidebardata.header;
sidebar.append(header);
}
displaysidebardata();
function displaysidebarbuttonlist(){
    const ul=document.createElement('ul');
    sidebardata.contact.forEach(btn=>{
        const li=document.createElement('li');
        li.id=btn.Key;
        li.className='list';
        const btn1=document.createElement('button');
         btn1.id=`${btn.key}_btn`
         btn.className='button';
         btn1.textContent=btn.label;
         btn1.addEventListener("click",()=>handlesidebarBtnClick(btn.key))
         li.append(btn1)
         ul.append(li);
        
    });
    sidebar.append(ul);
}
displaysidebarbuttonlist();
function handlesidebarBtnClick(key){
    const pageObj={
        dashboard: displaydashboard,
        profile: displayprofile,
        aboutus: displayaboutus,
        contactus: displaycontact,
        help: displayhelp,
    }
return pageObj[key]();

}
const main=document.getElementById("main");
function getchildelement(){
    return main.firstChild;
}
function replacechildElement(element){
    const childele=getchildelement();
    if(childele){
        main.replaceChild(element,childele);

    }else{
        main.append(element)
    }
}