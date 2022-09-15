function romans(req, res) {
    const {a} = req.body;

    if(!a){
        return res.status(404).json({message: "a and required!"});
    }

    if(typeof a !== 'number'){
        return res.status(404).json({message: "a must be number!"});
    }

    let result = convRoman(a);

    return res.status(200).json({message: "Result is " + result});
}

function convRoman(a){
    var numRom = ''
    const numberMap = {
		//Unidade
		0 : [
			 '',	//0
			'I', 	//1
			'II',	//2
			'III',	//3
			'IV',	//4
			'V',	//5
			'VI',	//6
			'VII',	//7
			'VIII',	//8
			'IX',	//9				
		],
		//Dezena
		1 : [
			 ''	,	//10
			'X',	//10
			'XX',   //20
			'XXX',  //30
			'XL',   //40
			'L',    //50
			'LX',   //60
			'LXX',  //70
			'LXXX', //80
			'XC'    //90
		],
		2 : [
			''
			,'C'	//100
			,'CC'   //200
			,'CCC'  //300				
			,'CD'   //400
			,'D'    //500
			,'DC'   //600
			,'DCC'  //700
			,'DCCC' //800
			,'CM' 	//900
		],
		3 : [
			 '',
			'M', //1000
            'MM', //2000
            'MMM', //3000
		]
	};

    if( a > 3999){
        numRom = ' Digite um numero menor ou igual à 3999'
    }

    else{

        var aGreatness = Number(a).toString();    // Tranformando o numero em um abjeto.
        var aLength = aGreatness.length;          // Retornando o de casas do numero.
        var aUniDezCent = aLength -1;             // contando de traz para frente.

        var newOrder = '';
        for( var i = aUniDezCent; i >= 0 ; i--){

            var newOrder = newOrder + aGreatness.charAt(i)
        }

        
        for( var i = aUniDezCent; i >= 0 ; i--){

            var auVar = parseInt(newOrder.charAt(i));
            numRom = numRom + numberMap[i][auVar];
        }

        return numRom;
    }
}

module.exports = { romans };
