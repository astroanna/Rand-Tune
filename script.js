function initXHR(x, value) {
	console.log(x);
	if (x == 'songs') {
		//retrieveActiveListsFromServer('/app/songs', 'songs');
 		document.getElementById("songs").style.display = "block";
		document.getElementById("user").style.display = "none";
	}
 	else if (x == 'user') {
		//retrieveActiveListsFromServer('/app/user', 'user');
 		document.getElementById("songs").style.display = "none";
		document.getElementById("user").style.display = "block";
	}
	else {
		//retrieveActiveListsFromServer('/app/songs', 'songs');
		document.getElementById("songs").style.display = "block";
		document.getElementById("user").style.display = "none";
	}
}

// function retrieveSongFromServer(url, operation) {
// 	var xmlhttp = new XMLHttpRequest();
//
// 	xmlhttp.onreadystatechange = function() {
// 		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 			var returnValues = JSON.parse(xmlhttp.responseText);
// 			populateSongViews('songs', returnValues);
// 		}
// 	}
// 	xmlhttp.open("GET", url, true);
// 	xmlhttp.send();
// }

/*
//DOM based function
function populateListsView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Active Lists</h3>";

	for (var i = 0; i < lists.length; i++) {
		newElement += "<div class=\"panel panel-default\">";
		newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:initXHR('gList'," +  (i+1) + ")\">" + (i + 1) + ". " + lists[i].name + "</a></h4>";
		newElement += "<div class=\"panel-body\">";
		newElement += "<p>" + lists[i].description  + "</p>";
		newElement += "</div>";
		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
		newElement += "<tbody>";
		newElement += "<tr>";
		newElement += "<td>Due: <span>" + lists[i].due + "</span></td>";
		newElement += "<td align=\"right\">Items: <span class=\"badge\">" + lists[i].items + "</span></td>";
		newElement += "</tr>";
		newElement += "</tbody>";
		newElement += "</table>";
		newElement += "</div>";
	}

	element.innerHTML = newElement;
}

//DOM based function
function populateListItems2(elementId, list) {
	var listItems = list.tasks;
	var element = document.getElementById(elementId);
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}

	element.innerHTML = newElement;
}*/

//JQuery based function
// function populateListItems(elementId, list) {
// 	var listItems = list.tasks;
// 	var newElement = "";
//
// 	for (var i = 0; i < listItems.length; i++) {
// 		newElement += "<tr>";
// 		newElement += "<td>" + listItems[i].description + "</td>";
// 		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
// 		newElement += "<td>";
// 		newElement += "<div class=\"input-group\">";
// 		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
// 		newElement += "<input type=\"checkbox\">";
// 		newElement += "</span>";
// 		newElement += "</div>";
// 		newElement += "</td>";
// 		newElement += "</tr>";
// 	}
// 	$("#" + elementId).append(newElement);
// }
