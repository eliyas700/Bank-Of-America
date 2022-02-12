function getInputValue(id){
const inputTag = document.getElementById(id);
const inputText = inputTag.value;
const inputValue = parseFloat(inputText);
inputTag.value= '';
return inputValue;

}
function addValue (id, inputValue){
    const amount =document.getElementById(id);
    const amountText = amount.innerText ;
    const amountValue =parseFloat(amountText);
    const totalAmount = inputValue + amountValue ;
    amount.innerText = totalAmount;

}



    function updateBalance (inputValue, isAdd){
        const total = document.getElementById("total-balance");
        const totalText = total.innerText;
        const totalBalance= parseFloat(totalText);
        if( isAdd == true){
            total.innerText = totalBalance+ inputValue ;
        }
        else {
            total.innerText = totalBalance - inputValue ;
        }
    
    }
    //Get Current Balance 
    function currentBalance (){
        const total = document.getElementById("total-balance");
        const totalText = total.innerText;
        const totalBalance= parseFloat(totalText);
        return totalBalance ;

    }

    // Deposit Section
    
        document.getElementById('deposit-button').addEventListener('click', function(){
            var depositInputValue = getInputValue("deposit-input");
            if (depositInputValue > 0  ){
                addValue("deposit-update", depositInputValue);
                updateBalance(depositInputValue, true);
                
            }
            else{
                alert('Please Do some Transaction');
            }
            
        
        })
    // Withdraw Money
    document.getElementById('withdraw-button').addEventListener('click', function(){
        var withdrawInputValue = getInputValue("withdraw-input");
        const balance = currentBalance ();
        if(withdrawInputValue > 0 && balance > withdrawInputValue){         
                addValue("withdraw-update", withdrawInputValue);
                updateBalance(withdrawInputValue, false);
        }
        else{
            alert('Type Something That is Bigger Than 0')
        }
        
    })
    
