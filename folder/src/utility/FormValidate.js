
// export const  validate = (values) => {
//     const notFill = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.fname) {
//         notFill.fname = "First Name is required"
//     } else if (values.fname.length < 2) {
//         notFill.fname = "Name cannot be less than 2 characters"
//     }
//     if (!values.lname) {
//         notFill.lname = "Last Name is required"
//     }
//     if (!values.email) {
//         notFill.email = "Email is required"
//     } else if (!regex.test(inputs.email)) {
//         notFill.email = "Enter valid email"
//     }
//     if (!values.password) {
//         notFill.password = "Password is required"
//     } else if (values.password.length < 6) {
//         notFill.password = "Enter strong password (6 digits)"
//     } else if (values.password.length > 10) {
//         notFill.password = "Password cannot be grater than 10 character"
//     }
//     if (values.password !== values.confirmPassword) {
//         notFill.confirmPassword = "Password and confirm password does not match"
//     }
//     if (!values.gender) {
//         notFill.gender = "Please select the gender"
//     }
//     if (!values.contactNumber) {
//         notFill.contactNumber = "Please enter contact number"
//     } else if (values.contactNumber.length < 10 || values.contactNumber.length > 10) {
//         notFill.contactNumber = "Not a valid mobile number"
//     }
//     return notFill;
// }
