document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault()
})
function log() {
    let firstName = document.getElementById('firstName').value
    let surname = document.getElementById('surname').value
    let contact = document.getElementById('contact').value
    let password = document.getElementById('password').value
    let DOB = document.getElementById('DOB').getElementsByTagName('select')
    DOB = DOB[0].value + "-" + DOB[1].value + "-" + DOB[2].value
    let gender = document.getElementById('gender').getElementsByTagName('input')
    gender = gender[0].checked ? 'Female' : gender[1].checked ? 'Male' : gender[2].checked ? 'Custom' : ""
    console.log('First Name ===>', firstName)
    console.log('Surname ===>', surname)
    console.log('Contact ===>', contact)
    console.log('Password ===>', password)
    console.log('DOB ===>', DOB)
    console.log('Gender ===>', gender)
}