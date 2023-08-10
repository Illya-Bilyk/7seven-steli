({form:document.querySelector("#form"),submit:document.querySelector("#submit")}).form.addEventListener("submit",(async e=>{e.preventDefault();const{elements:{name:t,phone:r,message:n}}=e.currentTarget;console.log(`name: ${t.value}, phone: ${r.value},message: ${n}`),e.currentTarget.reset()}));
//# sourceMappingURL=index.318e984e.js.map
