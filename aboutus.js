const aboutusdata ={
    header:"Welcome to the Aboutus",
    user: [
     {
         "knowme":"We are providing a best services for the all human",
         "ourservices": "We given a goods products",
         "thinkme": "0543236543",
         "address":"police headquater room no 747 lal khoti jaipur"
     },
  ]
  } 
function displayaboutus(){
        const aboutus=document.createElement("div");
        aboutus.id="main_div";
        const header=document.createElement("h2");
        header.textContent=aboutusdata.header;
        header.className="h2";
        aboutusdata.user.forEach((ele)=>{
          const card=document.createElement("div");
          card.id=ele.firstName
          card.className="card";
          const label=document.createElement("label")
          label.textContent=ele.knowme;
          const span=document.createElement("span")
          span.textContent=ele.ourservices;
          const image=document.createElement("span");
          image.textContent=ele.thinkme;
          card.append(label,span,image)
          aboutus.append(header,card)
          // main.append(header);
        });
      
        replacechildElement(aboutus);
      };
