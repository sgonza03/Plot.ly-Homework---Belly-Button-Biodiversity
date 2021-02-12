// from data.js
var tableData = data;
// select city buttons
var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");
// select state buttons
var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");

let tbody = d3.select("tbody");

// Function Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
citysubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'City Filter Button'.");
    // select the "input element" and get the raw html node
    var cityinputField = d3.select("#cityname");
    // get the value property of the "input" element 
    var cityinputElement = cityinputField.property("value");
    // print value in console
    console.log(cityinputElement);
    let filterData = tableData;
    // use the "field input" to filter the data by "date" only
    var cityinputTypeArray = filterdata.filter(row => row.city === cityinputElement);
    console.log(cityinputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    cityinputTypeArray.forEach((selects) => {
        // for each "element" create a row
        var Crow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selects).forEach(([key,value]) => {
            var Ccell = Crow.append("td");
            // adds the "value" to each row in the table
            Ccell.text(value);
        });
    });      
});


statesubmitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // get the value property of the "input" element 
    var stateinputElement = stateinputField.property("value");
    // print value in console
    console.log(stateinputElement);
    let filterData = tableData;
    // use the "field input" to filter the data by "state" only
    var stateinputTypeArray = data.filter(row => row.state === stateinputElement);
    console.log(stateinputTypeArray)
    // display in the html file (appends it at the end, after displaying all original data)
    stateinputTypeArray.forEach((selectss) => {
        // for each "element" create a row
        var Srow = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectss).forEach(([key,value]) => {
            var Scell = Srow.append("td");
            // adds the "value" to each row in the table
            Scell.text(value);
        });
    });      
});

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);






