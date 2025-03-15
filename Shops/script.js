const bar =document.getElementById('bar');
const menu=document.querySelector(".menu");
const mobile=document.getElementById("mobile")

if(bar){
    bar.addEventListener('click', ()  =>{
menu.classList.add('active');
mobile.classList.add('active');
cart_product.classList.remove("active");
    })
};

const close =document.getElementById('close');

if(close){
    close.addEventListener('click', ()  =>{
menu.classList.remove('active')
mobile.classList.remove('active');
    })
}















const allpro = document.querySelectorAll(".pro")

allpro.forEach(pro =>{
  pro.querySelectorAll(".img-list img")[0].classList.add("active");
  
})

function previewImg(event) {

    var mainImage = event.parentElement.parentElement.querySelector(".pro img ");
    console.log(mainImage)
    mainImage.src = event.src;
    // // remove active from img list
    const imageList = event.parentElement.parentElement.querySelectorAll(".img-list img");
    console.log(imageList)
    // create new array to loop
    const newImageList = [...imageList];
    // loop remove old active from element
    newImageList.forEach((img) => {
      img.classList.remove("active");
    });
    // add new active
    event.classList.add("active");


// loop
    const allproduct = document.querySelectorAll(".pro")
    allproduct.forEach(function(pro){
    const allCart = pro.querySelector(".pro .cart")
      const title =pro.querySelector(".title").textContent;
      var price =pro.querySelector(".price").textContent;
      var img =mainImage.src;
      console.log(img,price,title)
    
    
      let active = 1;
    
    
    
    
      allCart.addEventListener("click", () =>{
      alert(allproduct)
      if(active ==1){
        message(true);
        active =0;
    
        Additem(title,price,img);
      }else
      message(false);
    
     
      })
    
    })





  }









  // បញ្ចូល class active ទៅ​ cart product to display
  const cart_btn = document.querySelector(".cart_btn ");
  const cart_product = document.querySelector(".cart-product");
  const overlay_cart=document.querySelector(".overlay")
  const cart_mobile=document.getElementById("cart-mobile")
  console.log(cart_product,cart_mobile)

  
  cart_btn.addEventListener("click", function(){
    cart_product.classList.toggle("active");
    overlay_cart.classList.toggle("active");

  });
 overlay_cart.addEventListener("click", function(){
    cart_product.classList.remove("active");
    overlay_cart.classList.remove("active");
    menu.classList.remove('active')

  });
  cart_mobile.addEventListener("click", function(){
    cart_product.classList.toggle("active"); 
    overlay_cart.classList.toggle("active");

  })



  const cart = document.getElementById("cart")





const alert_message = document.querySelector(".alert-ms");

function message(status=true){
  let showmessage=alert_message.querySelector(".show-message")
  alert_message.classList.add("active");

  if(status == true){
    showmessage.innerText ="Item was aded sucessfully"
     alert_message.style.backgroundColor = "rgb(243, 243, 243)"
      alert_message.style.color = " rgb(0, 0, 0)"
  }else{
    showmessage.innerText ="Item already aded!"
    alert_message.style.backgroundColor = " rgb(255, 73, 73)"
    alert_message.style.color = " rgb(255, 255, 255)"
    
  }


  setTimeout(function(){
  alert_message.classList.remove("active");

  },2000);
}


const allCart = document.querySelectorAll(".pro .cart")
allCart.forEach(allCart =>{
  let active = 1;
  allCart.addEventListener("click", () =>{
  
  if(active ==1){
    message(true);
    active =0;

    Additem(title,price,img); 
  }else
  message(false);

 
  })
  
})


const Additem = (title=0,price=0,img=null)=>{

      var cardbox= document.querySelector(".cart-product .box")
      var item =`
            <div class="product">
                <div class="box-img">
                  <img src="${img}" alt="" width="50">
                </div>
                <input type="number" value="1">
                  <div>
                    <div class="product-name">${title}</div>
                    <div class="qty">Quantity:<span id="cart-number">1</span></div>
                  </div>
                  <span>Price : ${price}</span> 
                <div class="delete-product">
                  <i class="fa-regular fa-circle-xmark"></i>
                </div>
              </div>
            `
            cardbox.innerHTML += item;
}