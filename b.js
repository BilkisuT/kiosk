
    let auth_token;
    $(document).ready(function () {
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/getaccesstoken',
            success: function(data) {
                // console.log('success init');
                auth_token = data.auth_token;
                getCountry(data.auth_token);
                console.log("A ".data)
            },
            error: function(error) {
                console.log(error);
            },
            headers: {
                "Accept": "application/json",
                "api-token": "zwycajGYLTgOmRBpPlMxfWUFXcWVlBi7gNr6nx0i2-WZIuKUZcEvPpWZ4fkiWKzGHN8",
                "user-email": "adnan.baba-ahmed@bazeuniversity.edu.ng"
            }
        })
        $('#country').change(function() {
            console.log('countrychange')
        })
    })

    function getCountry(auth_token) {
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/countries/',
            success: function(data) {
                // data.forEach(element => {
                //     $('#country').append('<option>'+element.country_name+'</option>');
                // })
                data.forEach(element => {
                    $('#country').append('<option>'+element.country_name+'</option>')
                });
                console.log(data);
                
                // getState(auth_token);
            },
            error: function(error) {
                console.log(error);
            },
            header: {
                "Authorization": "Bearer "+ auth_token,
                "Accept": "application/json"
            }
        })
    }

    function getState(auth_token) {
        let country_name = 'Nigeria'
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/states/'+country_name,
            success: function(data) {
                // data.forEach(element => {
                //     $('#country').append('<option>'+element.country_name+'</option>');
                // })
                getCity(auth_token);
            },
            error: function(error) {
                console.log(error);
            },
            header: {
                "Authorization": "Bearer "+ auth_token,
                "Accept": "application/json"
            }
        })
    }

    function getCity(auth_token){
        let state_name = 'Nigeria'
        $.ajax({
            type: 'get',
            url: 'https://www.universal-tutorial.com/api/city/'+state_name,
            success: function(data) {
                // data.forEach(element => {
                //     $('#country').append('<option>'+element.country_name+'</option>');
                // })
                getState(auth_token);
            },
            error: function(error) {
                console.log(error);
            },
            header: {
                "Authorization": "Bearer "+ auth_token,
                "Accept": "application/json"
            }
        })
    }