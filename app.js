const list = ['Unitaed States','Poland','England','Canada']
const selectCountry = document.querySelectorAll('path')



console.log(selectCountry)


selectCountry.forEach(item=>{
item.addEventListener('click',()=>{
    item.classList.toggle('active');
});
})


const countriesDiv = document.querySelector(".countries-nav__items")


let el = document.createElement("TAG")
el.innerHTML = 
`<label>
    <input type="checkbox" name="us" value="us">United States
</label> `;
countriesDiv.appendChild(el)