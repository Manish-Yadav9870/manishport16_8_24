const helpdata ={
    header:"Welcome to the Help",
    user: [
     {
         "mobile": 9829089870,
         "email": "myadav9870@gmail.com",
         "fax": "0543236543",
         "address":"police headquater room no 747 lal khoti jaipur"
     },
  ]
  } 
function displayhelp(){
    const help=document.createElement("div");
    help.id="main_div";
    const header=document.createElement("h2");
    header.textContent=helpdata.header;
    header.className="h2";
    helpdata.user.forEach((ele)=>{
      const card=document.createElement("div");
      card.id=ele.firstName
      card.className="card";
      Object.keys(ele).forEach((key)=>{
          const label=document.createElement("label")
          label.textContent=key;
          const value=document.createElement("p");
          value.textContent=ele[key];
          card.append(label,value);
            help.append(card)
         

      });

    });
  
    replacechildElement(help);
}
