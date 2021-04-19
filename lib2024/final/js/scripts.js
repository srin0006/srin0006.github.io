function updateForm(name, email, address, city, province, postalcode) 
{
	document.getElementById("profilename").innerHTML = name;

	document.getElementById("profileemail").innerHTML = email;

	document.getElementById("profileaddress").innerHTML = address.concat( ", ", city);

	document.getElementById("profileprovince").innerHTML = province.concat( ", ", postalcode);
}