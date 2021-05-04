$(document).ready(function () {
    $('#tabla_dependencias').DataTable(
        {
            "language": {
                "emptyTable": "Sin Datos para Mostrar...",
                "info": "Mostrando pagina _PAGE_ de _PAGES_",
                "infoEmpty":      "Mostrando 0 d 0 de 0 entradas",
                "loadingRecords": "Cargando...",
                "search":         "Buscar:",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "lengthMenu":     "Montrar _MENU_ entradas",
              },

              "ajax":{
                  "url":"http://localhost/php_POO/clases.php?accion=dependencias",
                  "dataSrc":"",
              },

              "columns":[
                  {"data":"iddependencia"},
                  {"data":"dependencia"},
                  {"defaultContent":'<a href="#" class="btn btn-sm btn-success"><i class="bi bi-pencil-fill"></i></a>'},
                  {"defaultContent":'<a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>'}
              ],
        }
    );
    
});