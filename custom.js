function changecolor(){

	var rand= Math.random();
	console.log(rand);

	if(rand<0.1)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor="orange";

	}

		if(rand>=0.1 && rand<0.2)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor="gray";

	}

		if(rand>=0.2 && rand<0.3)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor="#7ED7BE";

	}


	if(rand>=0.3 && rand<0.4)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor=" purple";

	}
		if(rand>=0.4&& rand<0.5)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor="#F60DF6";

	}


	if(rand>=0.5 && rand<0.7)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor=" pink";
	}
	if(rand>=0.7 && rand<0.8)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor="#93F532";
	}

	if(rand>=0.8)
	{	document.body.style.animation="false";
		document.body.style.backgroundColor ="#888888"
	}
}