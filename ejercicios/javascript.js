// Arrow Function
    //modo 1
        function square(num){
            return num * num;
        };
    //modo 2
        const square = (num) => {
            return num * num;
        }
    //modo 3
        const square = num => num * num;

//Template Strings
    //modo tradicional
        const hello = 'hello,';
        const friend = 'my friend';
        const queCaraj = hello + ' ' + friend + ' ' + '!';
    //Nuevo Modo Template LITERALs
        const queCaraj = `${hello,} ${my friend}!`;
        console.log(queCaraj);

    //Multi-line Strings
        let variasLineas1 = 'aqui escribo lo que quiero \n' + 'aquí otra vaina';
        let variasLineas2 = `aqui escribo lo que quiero 
aquí otra vaina
        `;
        
        console.log(variasLineas1);
        console.log(variasLineas2);
// Parametros por defecto
    //modo tradicional
        function fechas (mes, dia, hora) {
            var mes  = mes  || 'abril';
            var dia  = dia  ||'lunes';
            var hora = hora || 3;
            console.log(mes, dia, hora);
        }
        fechas ()

    //nuevo modo
        function fechas (mes = 'abril', dia = 'lunes', hora = 3){
            console.log(mes, dia, hora);
        }
        fechas();
        fechas('junio', 'martes', 4);

// Rest Spread 
    //ARRAYs Destructuring
        const fruits = ['apple', 'banana', 'melon', 'pera'];
        const [a, b, c, d] = fruits; //se asignan letras a los elementos
        console.log(d, fruits[2]); //se puede traer las letras y el número de ubicación del elemento
        console.log(c, b);

    //OBJECTs Destructuring
        const user = {fruits:'Fresa', vence:'3/08/2022'};
        const {fruits, vence} = user;
        console.log(user);
        console.log(vence, fruits);