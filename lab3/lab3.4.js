const convertTemperature = (temperature , unit ) => {
    if (unit === 'C'){
        let Celsius  = (temperature * 9/5) +32;
        console.log('Độ F', Celsius )
    }else if (unit === 'F'){
        let Fahrenheit = (temperature - 32) * 5/9;
        console.log('Độ C', Fahrenheit )
    }
}
convertTemperature(12,'F')
