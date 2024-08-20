const profiledata ={
  header:"Welcome to the my profile",
  user: [
   {
       "firstName": "Akira",
       "lastName": "Laine",
       "number": "0543236543",
       "photo":"https://static.vecteezy.com/system/resources/previews/036/135/738/non_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg"
   },
   {
       "firstName": "Harry",
       "lastName": "Potter",
       "number": "0994372684",
       "photo":"https://images4.alphacoders.com/134/1341419.png"
   },
   {
       "firstName": "Sherlock",
       "lastName": "Holmes",
       "number": "0487345643",
       "photo":"https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
   },
   {
       "firstName": "Kristian",
       "lastName": "Vos",
       "number": "unknown",
       "photo":"https://5.imimg.com/data5/AH/UJ/MY-3979298/premium-hd-wallpaper.jpg"
   }
]
} 
function displayprofile(){
 
  const header=document.createElement("h2");
  header.textContent=profiledata.header;
  header.className="h2";
const prodiv=document.createElement("div")
const profile=document.createElement("div");
profile.id="main_div";
  profiledata.user.forEach((ele)=>{
    const card=document.createElement("div");
   
    card.className="card";
    const name=document.createElement("h3");
    name.textContent=ele.firstName+" "+ele.lastName;
    let num= document.createElement('h4')
    num.textContent=ele.number;
    let image=document.createElement('img');
    image.src=ele.photo;
    card.append(image,name,num)
    profile.append(card)
    prodiv.append(header,profile)
    // main.append(header);
  });

  replacechildElement(prodiv);
};

