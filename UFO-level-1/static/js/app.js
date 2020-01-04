// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with UFO report values (Date,
// City, State, Country, Shape, Duration, Comment).
// Use Arrow Functions
data.forEach((ufoReport) => {
    // Create table of rows for each report value in the UFO report
    var row = tbody.append("tr");
    // Iterate through the each row for hey and values
    Object.entries(ufoReport).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Clearing the previous table data
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    // Display the filteredData
    filteredData.forEach((ufoReport) => {
        // Create table of rows for each report value in the UFO report
        var row = tbody.append("tr");
        // Iterate through the each row for hey and values
        Object.entries(ufoReport).forEach(([key, value]) => {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
    e.preventDefault();
});