var navbar =    '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">'+
                    '<a class="navbar-brand" href="#">JPN</a>'+
                    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
                    '<span class="navbar-toggler-icon"></span>'+
                    '</button>'+
                    '<div class="collapse navbar-collapse" id="navbarNav">'+
                    '<ul class="navbar-nav ml-auto">'+
                        '<li class="nav-item active">'+
                        '<a class="nav-link" href="#">Sobre mi <span class="sr-only">(current)</span></a>'+
                        '</li>'+
                        '<li class="nav-item">'+
                        '<a class="nav-link" href="#">Experiencia</a>'+
                        '</li>'+
                        '<li class="nav-item">'+
                        '<a class="nav-link" href="#">Trabajos</a>'+
                        '</li>'+
                        '<li class="nav-item">'+
                        '<a class="nav-link " href="#">Contacto</a>'+
                        '</li>'+
                    '</ul>'+
                    '</div>'+
                '</nav>'

$('body').css('margin', '0');
$('#navbar').append(navbar);