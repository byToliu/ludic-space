var cadastro = document.querySelector('.cadastro');
var login = document.querySelector('.login');
var home = document.querySelector('.home');





function ajax() {

    // Injeta o html do componente "target".
    $.get('components/login/login.html', function (response) {
      $('.login').html(response);
    });


    $.get('components/cadastro/cadastro.html', function (response) {
      $('.cadastro').html(response);
    });

    // $.get('components/cadastro/cadastro.html', function (response) {
    //   $('.cadastro').html(response);
    // });
    
}

ajax();

