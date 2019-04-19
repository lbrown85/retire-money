function output() {
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var num3 = document.getElementById('num3').value;
	var num4 = document.getElementById('num4').value;
	document.getElementById('numres').innerHTML = (parseInt(num1) + parseInt(num3) + pparseInt(num4) - parseInt(num2)) * 12;

	//	var num1, num3, num4, numres;
	//	num1 = parseInt(document.formcalc.num1.value);
	//	num3 = parseInt(document.formcalc.num3.value);
	//	num4 = parseInt(document.formcalc.num4.value);
	//	document.formcalc.numres.value = numres;
}
//num2 = Number(document.formcalc.num2.value);
//$("body").on("keyup keydown keypress keychange", "input", function (e)
//console.log("Hello!!!");
//const $this_input = $(this);
//const $this_row = $this_input.closest("[inflation-percent]");
//const $span_pre_total = $this_row.find(".pre_total").find("span");
//const $span_post_total = $this_row.find(".post_total").find("span");
//let qty = $this_row.find(".qty").find("input").val();
//let cost = $this_row.find(".cost").find("input").val();
//let inflation = $this_row.data("inflation-percent");

//qty = parseFloat(qty);
//cost = parseFloat(cost);
//inflation = parseFloat(inflation);

//let inflation_decimal = inflation / 100;
//let post_inflation = (qty * cost) * (1 + inflation_decimal);
//console.log("Qty", qty);
//console.log("Inflation", inflation);

//console.log("pre_inflation", pre_inflation);
//console.log("post_inflation", post_inflation);
//
//$span_post_total.text(post_inflation);

//});

//$("body").on("click", ".calculate", function (e) {
//e.preventDefault();

//let pre_total = 0;
//let post_total = 0;

//$(".pre_total").each(function () {
//const this_pre_total = parseFloat($(this).find("span").text());
//	pre_total = pre_total + this_pre_total;
//
//$(".post_total").each(function () {
//const this_post_total = parseFloat($(this).find("span").text());
//post_total = post_total + this_post_total;
//});

//console.log("Pre total", pre_total);
//console.log("Post total", post_total);
// The javascript below is what we did in class
//	$(".pre_total").each(function () {
//	const $this_pre_total = $(this);
//	const $this_pre_total_span = $this_pre_total.find("span");
// let value = $this_pre_total_span.text();
// value = parseFloat(value);
//	pre_total = pre_total + value;
//	});
//console.log("Working!");
//console.log(pre_total);

//$("#pre_total").find("span").text(pre_total);
//$("#post_total").find("span").text(post_total);

//})
//the resolution would be monthly earnings plus social security plus retirement savings minus monthly expenses times 12 to get how much yearly a person would have to chill on. tryna figure out how to incorporate inflation. //