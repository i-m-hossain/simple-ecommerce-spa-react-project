## simple-react-ecommerce-spa

Live website link: https://simple-ecommerce-spa-react-project.netlify.app/

### project summary:

<li> Data loaded from https://fakestoreapi.com/products using useEffect and useState hook </li>
<li> when product added to cart, the pricing is calculated</li>
<li> cart product is displayed </li>
<li> product search option is enabled </li>
<li> local storage is used to get and set cart items</li>

## Challenges i faced: 
    1. product searching: I have used filter method to filter the search product from products. Initialy the search text was accessed using onChange event target value.

    2. local storage setup: To prevent cart reset, I have used localstorage. The cart products are stored their as an object. So initially I had to check if any key is available corresponging to the cart. and then I set the value of the key. Again I cheked the value of the key is repeated, as the cart items are stored as an object.
    I created a module to set and get the values of local storage.
    
    3. useEffect dependency: As I am learning react, I have used useEffect hook to load data from API and internal json data. useEffect hook accepts two parameter where second one is the dependency. I had a close look at this when I loaded data from localstorage which is dependent to the products(which changes it state, asynchronous in nature)
