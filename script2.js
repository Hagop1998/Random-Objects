// console.log("dsdfsdfsdf")
import { productListArray } from "./script.js";

// console.log("productListArray = ", productListArray);

function getMultipleRandom(productListArray, num) {
  const shuffled = [...productListArray].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

let randomList = getMultipleRandom(productListArray, 5);

console.log("shuffled card is :", randomList);

const createsimilarproductdiv = (spl) => {
  const SimilarA = document.createElement("a");
  const bottomDiv = document.createElement("div");
  const productImage = document.createElement("img");
  const productParagraph = document.createElement("p");
  const productPrice = document.createElement("span");

  productImage.src = spl.images;
  productImage.className = "img-product";
  productParagraph.innerHTML = spl.paragraph;
  SimilarA.href = spl.link;
  bottomDiv.className = "grid-container";
  productPrice.innerHTML = spl.price;
  productPrice.className = "price";

  SimilarA.appendChild(bottomDiv);
  bottomDiv.appendChild(productImage);
  bottomDiv.appendChild(productParagraph);
  bottomDiv.appendChild(productPrice);

  return SimilarA;
};

const  similarProductCard = document.getElementById("productCards")
for (const spl of randomList) {
    let car2 = createsimilarproductdiv(spl);
    
similarProductCard.appendChild(car2)

}