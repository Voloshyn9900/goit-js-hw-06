const submitFormEl = document.querySelector(".login-form");
console.log(submitFormEl);
const submitBtn = submitFormEl.querySelector("button");
console.log(submitBtn);

submitFormEl.addEventListener("submit", submitUserForm);


function submitUserForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const userData = {
      
    };
    
    formData.forEach((value, key) => {
        if (value === "") {
            return alert("Enter your Email and Password");
        }
        userData[key] = value;
        console.log(value, key);
    });
    console.log(userData);
    
   

    submitFormEl.reset();
};


