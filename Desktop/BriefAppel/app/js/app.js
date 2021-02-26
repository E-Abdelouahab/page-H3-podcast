
$(document).ready(function () {


    // ------------number call --------------

    $(".number-input").keyup(function (e) {
        if ($(this).val().length >= 20)
            $(".call-button").addClass("show");
        
    })
    //called when key is pressed in textbox
 


    $("[data-number]").on('click', function () {
        if ($(".number-input").val().length < 20) {
            var phoneNumber = $(".number-input").val() + $(this).data("number");
            $(".number-input").val(phoneNumber);
            $(".phoneNumberModel").val(phoneNumber);
            $(".callNumber").html(phoneNumber);
            $(".callNumber").val(phoneNumber);
            
        }
        if ($(".number-input").val().length == 20)
            $(".call-button").addClass("show");
    });

    $(".delete").on('click', function () {
        var phoneNumber = $(".number-input").val().slice(0, -1);
        $(".number-input").val("");
        $(".number-input").val(phoneNumber);
        $(".call-button").removeClass("show");
    });

});



// ------------contacts --------------

const inputField = document.getElementById('input')
const listItems = list.querySelectorAll('.list-item')
const btnCancel = document.getElementById('btn-cancel')

inputField.addEventListener('keyup', filterNames)

function filterNames() {
    const inputValue = inputField.value.toUpperCase()
    const list = document.getElementById('list')
    listItems.forEach(item => {
        if (item.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
}

btnCancel.addEventListener('click', clearSearch)

function clearSearch() {
    inputField.value = ''
    listItems.forEach(item => item.style.display = '')
}

