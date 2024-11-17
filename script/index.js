// ! MAIN SCRIPT FILE

const imageForm = document.getElementById('image-form')
const submitButton = document.getElementById('submit-btn')
const personimage = document.getElementById('userPhoto')
const clothimage = document.getElementById('clothPhoto')


// api call
// api key and url and other options

const url = 'https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon';

const data = new FormData(imageForm); // form data to send to api, can change in future


const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '56f2777f17msh6b93d4916eefbcfp1919ddjsn1148c53e5e6b',
		'x-rapidapi-host': 'virtual-try-on2.p.rapidapi.com'
	},
	body: data
};


clothimage.addEventListener('change', (e) => {
    data.append('personImage', imageForm.files[0]); // append image to form data
    data.append('clothImage', imageForm.files[1]); // append clothes type to form data

})





addEventListener('submit', async (e) => {



    e.preventDefault();
    console.log('submit')
    try {
        const response = await fetch(url, options); // waits for response
        const result = await response.text(); // will send a text reponse which is a link to the image
        console.log(result);
    } catch (error) {
        console.error(error);
    }

})

// ! TO CONTINUE run and test the code and observe errors and the result in console 
