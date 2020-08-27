$(document).ready(function() {
	let optionList = document.getElementById('select_city').options;
	let options = [];
	var data = {
		 resource_id: '5c78e9fa-c2e2-4771-93ff-7f400a12f7ba', // the resource id
		 // limit: 5, // get 5 results
		 // q: 'עין' // query for 'jones'
	 };
	 $.ajax({
		 url: 'https://data.gov.il/api/3/action/datastore_search',
		 data: data,
		 // dataType: 'text',
		 success: function(data) {
			 for (var i = 0; i < data.result.records.length; i++) {
				 var opt = {text: data.result.records[i]["שם_ישוב"].trim(), value: data.result.records[i]["שם_ישוב"].trim()}
				 options.push(opt)
				 console.log(opt);
			 	// console.log(data.result.records[i]["שם_ישוב"])
			 }
			 options.forEach(option =>
				 optionList.add(
					 new Option(option.text, option.value, option.selected)
				 )
			 );

			 // alert('Total results found: ' + data.result.total)
		 }
	 });


});
