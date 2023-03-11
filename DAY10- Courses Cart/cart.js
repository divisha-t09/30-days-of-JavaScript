class CartItem{
    constructor(name, img, price){
        this.name = name
        this.img=img
        this.price = price
   }
}

class LocalCart{
    static key = "cartItems"

    static getLocalCartItems(){
        let cartMap = new Map()
     const cart = localStorage.getItem(LocalCart.key)   
     if(cart===null || cart.length===0)  return cartMap
        return new Map(Object.entries(JSON.parse(cart)))
    }

    static addItemToLocalCart(id, item){
        let cart = LocalCart.getLocalCartItems()

        cart.set(id, item)
       localStorage.setItem(LocalCart.key,  JSON.stringify(Object.fromEntries(cart)))
       updateCartUI()
        
    }

    static removeItemFromCart(id){
    let cart = LocalCart.getLocalCartItems()
    if(cart.has(id)){
        let mapItem = cart.get(id)
        cart.delete(id)
    } 
    if (cart.length===0)
    localStorage.clear()
    else
    localStorage.setItem(LocalCart.key,  JSON.stringify(Object.fromEntries(cart)))
       updateCartUI()
    }
}

const cartIcon = document.querySelector('.cart-icon')
const cartWindow = document.querySelector('.cart-window')
const addToCartBtn = document.querySelectorAll('.add')
addToCartBtn.forEach( (btn)=>{
    btn.addEventListener('click', addItemFunction)
}  )

function addItemFunction(e){
    const id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id")
    const img = e.target.parentElement.parentElement.previousElementSibling.src
    const name = e.target.parentElement.previousElementSibling.textContent
    let price = e.target.parentElement.children[1].textContent
    price = price.replace("Price: $Rs", '')
    const item = new CartItem(name, img, price)
    LocalCart.addItemToLocalCart(id, item)
 console.log(price)
}

cartWindow.inWindow = 0

cartIcon.addEventListener('mouseover', () =>{
    if(cartWindow.classList.contains('hide'))
    cartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', () =>{
    setTimeout(() =>{
        if(cartWindow.inWindow === 0){
            cartWindow.classList.add('hide')
        }
    }, 1000)

})

cartWindow.addEventListener('mouseover', ()=>{
    this.inWindow=1
})

cartWindow.addEventListener('mouseleave', ()=>{
    cartWindow.inWindow=0
    cartWindow.classList.add('hide')
})

function updateCartUI(){
    const cartContent = document.querySelector('.cart-section')
    cartContent.innerHTML=""
    const items = LocalCart.getLocalCartItems()
    if(items === null) return
    let count = 0
    let total = 0
    for(const [key, value] of items.entries()){
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        let price = value.price
        price = Math.round(price*100)/100
        count+=1
        total += price
        total = Math.round(total*100)/100
        cartItem.innerHTML =
        `
        <img src="${value.img}" alt="">
                            <div class="cart-details">
                                <h4>${value.name}</h4>
                                <p>Rs. ${value.price}</p>
                            </div>
                            <div class="cross"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                    fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg></div>
        
        `
       cartItem.lastElementChild.addEventListener('click', ()=>{
           LocalCart.removeItemFromCart(key)
       })
        cartContent.append(cartItem)
    }

    if(count > 0){
        cartIcon.classList.add('non-empty')
        let root = document.querySelector(':root')
        root.style.setProperty('--after-item', `"${count}"`)
        const subtotal = document.querySelector('.subtotal')
        subtotal.innerHTML = `SubTotal: $${total}`
    }
    else
    cartIcon.classList.remove('non-empty')
}
document.addEventListener('DOMContentLoaded', ()=>{updateCartUI()})