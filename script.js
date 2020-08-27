$(document).ready(function() {
  $('#select_city').select2();
	let optionList = document.getElementById('select_city').options;
	let options = [{text: "בחרו ישוב", value: "", region:""}];
	let regions = ["g"]
	var data = {
		 resource_id: '5c78e9fa-c2e2-4771-93ff-7f400a12f7ba', // the resource id
		 limit: 1273, // get 5 results
		 // q: 'עין' // query for 'jones'
	 };
	 $.ajax({
		 url: 'https://data.gov.il/api/3/action/datastore_search',
		 data: data,
		 // dataType: 'text',
		 success: function(data) {
			 for (var i = 0; i < data.result.records.length; i++) {
				 var opt = {text: data.result.records[i]["שם_ישוב"].trim(),
				  					value: data.result.records[i]["שם_ישוב"].trim(),
					 					region: data.result.records[i]["שם_נפה"].trim()}
				 options.push(opt)
				 if (!regions.includes(opt.region)) regions.push(opt.region)
				 // console.log(opt);
			 	// console.log(data.result.records[i]["שם_ישוב"])
			 }
			 options.forEach(option =>
				 optionList.add(
					 new Option(option.text, option.value)
				 )
			 );
			 console.log(regions);
			 // console.log(options[2]);
			 // console.log(region);
			 $("#select_city").change(function(event) {
				 var city = $(this).val()
				 var region = options.find(option => option.text === city).region;
				 console.log(region);
				 $("#region").val(region)
			 });
		 }
	 });
});
