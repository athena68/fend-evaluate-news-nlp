function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText)

    console.log("::: Form Submitted :::" + formText)

    let formdata = {
        txt: formText,
        lang: "en"
    }

    analyzeText('/textAnalysis', formdata)
    .then(function(data) {
        document.getElementById('results').innerHTML = JSON.stringify(data);
    })
}

//Async POST
const analyzeText = async ( url = '', data = {})=>{

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
        console.log("error", error);
    }
};

export { handleSubmit }
