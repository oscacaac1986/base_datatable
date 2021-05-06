$(document).ready(function () {
    
    let table
    table= $('#tabla_dependencias').DataTable(
        {
            "language": {
                "emptyTable": "Sin Datos para Mostrar...",
                "info": "Mostrando pagina _PAGE_ de _PAGES_",
                "infoEmpty": "Mostrando 0 d 0 de 0 entradas",
                "loadingRecords": "Cargando...",
                "search": "Buscar:",
                "paginate": {
                    "first": "First",
                    "last": "Last",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "lengthMenu": "Montrar _MENU_ entradas",


            },

            "ajax": {
                "url": "http://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=listar",
                "dataSrc": "",
            },

            "lengthMenu": [[7, 14, 21, 28, -1], [7, 14, 21, 28, "Todos"]],
            "iDisplayLength": 7,

            "columns": [
                { "data": "iddependencia" },
                { "data": "dependencia" },
                { "defaultContent": '<button class=" btn-edit btn  btn-success" id="editar" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-fill"></i></button>' },
                { "defaultContent": '<button class="btn-delete btn  btn-danger" id="eliminar" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-trash"></i></button>' }
            ],
        },

        btneditar("#tabla_dependencias tbody",table)
    );

    $('#btn-insert').click(function (e) {
        e.preventDefault();
        let data = $('#insertData').val();
        if (data == null || data.length == 0 || /\W \s/.test(data)) {
            Command: toastr["warning"]("Debe diligenciar el campo Nombre de forma adecuada no puede llevar caracteres Especiales o estar Vacio ", "Dependencia")

            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "300",
                "timeOut": "7000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        } else {
            insertDependencia(data)
        }
    });

});


function btneditar(tbody,table) {
    $(tbody).on("click","button.btn-edit", function () {
        id = $(this).parents("tr").find("td").eq(0).html();
        $.ajax({
            type: "GET",
            url: "http://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=queryinv&id=" + id,
            success: function (response) {
              let data=response
                console.log(data)
            }
        });
    });
}


function insertDependencia(data) {
    let dataform =data.toUpperCase();
    $.ajax({
        type: "GET",
        url: "https://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=insertar&nombre=" + dataform,
        success: function (response) {
            let resp = response
            if (resp == 1) {
                Command: toastr["success"]("Dependencia Ingresada Correctamente", "Dependencia");
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "300",
                    "timeOut": "2000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                $("#insertData").val("");
            } else {
                Command: toastr["error"]("Verifique los datos enviados", "Dependencia")

                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "300",
                    "timeOut": "2000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
            }
        }
    });
}