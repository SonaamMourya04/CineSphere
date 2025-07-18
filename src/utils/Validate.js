//check validate data
export const checkValidation =(email, password)=>{
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
    
    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    //  if both are valid or no error
    return null;

}