//1. Use the D3 library to read in `samples.json`.
d3.json("Data/samples.json").then(data)=> return console.log(data)

function getdata(id) {
    var wfreq = data.metadata.map(d => d.wfreq)
    console.log(`wfreq: ${wfreq} `)

    var samples = data.samples.filter(s => s.id.toString() === id)[0];
    console.log(samples);

    var samplevalues = samples.sample_values.slice(0, 10).reverse();

    // get only top 10 otu ids for the plot OTU and reversing it. 
    var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
    console.log()
    // get the otu id's to the desired form for the plot
    var OTU_id = OTU_top.map(d => "OTU " + d)

    console.log(`OTU IDS: ${OTU_id}`)

    var labels = samples.otu_labels.slice(0, 10);

    console.log()

};

    // get the top 10 labels for the plot
function getplot() {
   

    var trace = {
        x: samplevalues,
        y: OTU_id,
        text: labels,
        marker: {
          color: 'rgb(142,124,195)'},
        type:"bar",
        orientation: "h",
    var data = [trace]:
    
    var layout = {
        title: "Top 10 OTU",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    }; 
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//Use `sample_values` as the values for the bar chart.

Plotly.newPlot('bar', data, layout);








//Create a bubble chart that displays each sample.
var trace1 = {
    x: samples.otu_ids,
    y: samples.sample_values,
    mode: "markers",
    marker: {
        size: samples.sample_values,
        color: samples.otu_ids
    },
    text: samples.otu_labels

};
var layout_b = {
    xaxis:{title: "OTU ID"},
    height: 600,
    width: 1000
};
var data1 = [trace1];

Plotly.newPlot("bubble", data1, layout_b);



//Display the sample metadata, i.e., an individual's demographic information.


//Display each key-value pair from the metadata JSON object somewhere on the page.



//Update all of the plots any time that a new sample is selected.
// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // read the data 
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)

        // get the id data to the dropdwown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        getPlot(data.names[0]);
        getInfo(data.names[0]);
    });
}

init();

//Deploy your app to a free static page hosting service



