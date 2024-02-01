import { useState } from "react";

const INIT_FORM_STATE = { name: "", lastname: "", email: "", phone: "" };


export const Form = () => {
    const formStorageObj = JSON.parse(localStorage.getItem("formState"));

    const [form, setForm] = useState(formStorageObj || INIT_FORM_STATE );
   

    const submitHeandler = (e) => {
       e.preventDefault();
    };

    const clearFormHeandler = (e) => {
        e.preventDefault();
        setForm(INIT_FORM_STATE);
        localStorage.setItem("formState", JSON.stringify(INIT_FORM_STATE));
    };

    const inputHeandler = (e) => {
        setForm((prev) => {
           const temp = {
                ...prev,
                [e.target.name]: e.target.value,
            };
            localStorage.setItem("formState", JSON.stringify(temp));

            return temp;
        });
    };


    return (
    <div className="form-wrapper">
        <h2>New form</h2>
        <div className="form-block">
            <div className="fill">
                <form action="" onSubmit={submitHeandler}>
                   <input
                    value={form.name}
                    onInput={inputHeandler}
                    type="text"
                    placeholder="Name"
                    name="name"
                    />
                   <input
                    value={form.lastname}
                    onInput={inputHeandler} 
                    type="text" 
                    placeholder="Lastname" 
                    name="lastname"
                    />
                   <input 
                   value={form.email}
                   onInput={inputHeandler} 
                   type="text" 
                   placeholder="Email" 
                   name="email"
                   />
                   <input
                   value={form.phone}
                    onInput={inputHeandler} 
                    type="text" 
                    placeholder="Phone" 
                    name="phone"
                    />
                    <div style={{ display: "flex", gap: "20px" }}></div>
                   <button>SUBMIT</button>
                   <button onClick={clearFormHeandler}>CLEAR</button>
                </form>
            </div>
            <div className="show">
                {Object.keys(form).map(formLine => {
                    return(
                        <div key={formLine} className="line">
                            {form[formLine]}
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};