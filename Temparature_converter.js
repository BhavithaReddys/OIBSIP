
const calculateTemp = () =>{
    const inputTemp = document.getElementById("temp").value;
     const temp_diff = document.getElementById("temp_diff").value;
   let output;
    if(temp_diff === "fah")
    {
      output = (inputTemp - 32) * 5/9;
      document.getElementById("output").textContent = `${inputTemp}°F = ${output}°C`;
      }
    else{  
      output = (inputTemp * (9/5)) + 32;
      document.getElementById("output").textContent = `${inputTemp}°C = ${output}°F`;
    }
};























   // const valueTemp = temp_diff.options[tempSelected.seletedIndex].value;
    // const celtofah = (cel) =>{
    //     let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
    //     return fahrenheit;
    // }  
     
    // const fahtocel = (fah) =>{
    //     let celcius = ((fah - 32) * 5 / 9).toFixed(1);
    //     return celcius;
    // }
    