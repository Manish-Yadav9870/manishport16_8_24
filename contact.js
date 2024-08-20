const contactdata={
  name:"contact us",
  formField:[
    {
      id:"name",
      label:"Name",
      inputType:"input",
      type:"text",
      name:"name",
    },
    {
      id:"mobile",
      label:"mobile",
      inputType:"input",
      type:"tel",
      name:"mobile",
    },
    {
      id:"email",
      label:"Email",
      inputType:"input",
      type:"email",
      name:"email",
    },
    {
      id:"message",
      label:"Message",
      inputType:"textarea",
      type:"textarea",
      name:"message",
    }
  ]
}
function displaycontactdata(){
  const condiv=document.createElement('div')
  condiv.className="contactus"
  condiv.innerHTML=`<h1>${contactdata.name}</h1>`;
  const form=document.createElement('form')
  form.className="contactform"
  const nameDiv=document.createElement('div')
  nameDiv.className="formgroup"
  const btn=document.createElement('button')
  btn.innerText="Submit";
  contactdata.formField.forEach((ele)=>{
    const label=document.createElement('label')
    label.className="label"
    label.textContent=ele.label;
    const input=document.createElement(ele.inputType)
    input.type=ele.type;
    input.name=ele.name
    input.name=ele.name;
    input.addEventListener("change",handelchange)
    nameDiv.append(label,input,btn);
    form.appendChild(nameDiv);
  })
  condiv.append(form)
  replacechildElement(condiv)
}
function handelchange(e){
  console.log(e);
  
}