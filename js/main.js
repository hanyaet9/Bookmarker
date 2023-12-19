


// saving values from inputs
var webSiteName = document.getElementById("web-site");
var webSiteUrl = document.getElementById("Site-url");


// storing Data in Array
var allData = []



// taking values from inputs
function addBookmarks(){
    var webSites = {
       name : webSiteName.value,
       url : webSiteUrl.value,
    }

    allData.push(webSites)

    clearingData()
    displayData()
    // console.log(webSites);
}



// clearing date from inputs
function clearingData(){

    webSiteName.value ="";
    webSiteUrl.value ="";

}



// Displaying Data In Table
function displayData(){
// preparing the container
var container = "";

for (var i = 0; i < allData.length; i++){

container = container + `<tr>
<td>${i}</td>
<td>${allData[i].name}</td>
<td><button onclick="visitingLinks(${i})" class="btn btn-success px-3">Visit</button></td>
<td><button onclick="updatingData(${i})" class="btn btn-warning px-3">Update</button></td>
<td><button onclick="deleatingData(${i})" class="btn btn-danger px-3">Delete</button></td>
</tr>`

document.getElementById(`tbody`).innerHTML = container;

}

}



// Deleting Data In Table
function deleatingData(idx){

    allData.splice(idx , 1)

    displayData()
}



// Updating Data In Table
function updatingData(i){
// 1)// to update => get the input's value back by
//  choosing the element by id .value = arrayname [i].properies(key) and but i in invoking
 document.getElementById("web-site").value = allData[i].name; 
 document.getElementById("Site-url").value = allData[i].url;
 document.getElementById("bobo").innerHTML = (`<button onclick="addBookmarks()" id="submit-button" class="text-white bg-success px-5 py-2 my-4  rounded border-0">Update</button>`)

//  replacing Data in table
//  allData.splice(webSites , 1 , webSites.name)
 allData.splice(allData[i].name , 1 , allData[i].name)
// ???????
//  allData.splice(allData[i].name , 1 , displayData())
//  allData.splice(allData[i] , 1 , webSites.name)
//  allData.splice(allData[i] , 1 , allData[i])
// displayData()
}




// // Visiting links In Table
function visitingLinks(i){

for(var i=0 ; i < allData.length ; i++){

  window.open(allData[i].url);
    
}

//    console.log(webSiteUrl.value)
}
// `"https//:"+allData[i].url+"/"`  
// https://www.google.com.eg/





// validating data of inputs

// function validatingUrl (){
//     /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
// }


// function isUrlValid(str) {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', // fragment locator
//       'i'
//     );
//     return pattern.test(str);
// }