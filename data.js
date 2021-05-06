$(document).ready(function () {

    let table
    table = $('#tabla_dependencias').DataTable(
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
                { "defaultContent": `
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" {% if idanulo == 1 %} checked {% endif %}>
                
                </div>
              ` }
            ],
        },

        btneditar("#tabla_dependencias tbody", table),
        btnDelete("#tabla_dependencias tbody", table)

    );

    $('#btn-insert').click(function (e) {
        e.preventDefault();
        let data = $('#insertData').val();
        if (data == null || data.length == 0) {
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

    $('#act_dep').click(function (e) {
        e.preventDefault();
        let iddepen = $('#inputidData').val();
        let nuevaDataDepe = $('#inputNuevaData').val();
        actualizarDependencia(iddepen, nuevaDataDepe)
    });

    $('#btn-del').click(function (e) {
        e.preventDefault();
        let data = $('#inputidDelete').val();
        eliminarDependencia(data);

    });

    $('.modal-close').click(function (e) {
        location.reload('index.php')
    });


    setTimeout("location.reload(true);", 90000);
});


function btneditar(tbody, table) {
    $(tbody).on("click", "button.btn-edit", function () {
        id = $(this).parents("tr").find("td").eq(0).html();
        $.ajax({
            type: "GET",
            url: "http://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=queryinv&id=" + id,
            success: function (response) {
                let data = response
                data.forEach(depen => {
                    $('#inputidData').val(depen.iddependencia);
                    $('#inputNuevaData').val(depen.dependencia);
                });
            }
        });
    });

}

function btnDelete(tbody, table) {
    $(tbody).on("click", "button.btn-delete", function () {
        id = $(this).parents("tr").find("td").eq(0).html();
        $('#inputidDelete').val(id);

    });

}

function eliminarDependencia(a) {
    let del = a;
    
    $.ajax({
        type: "GET",
        url: "http://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=delete&id=" + del,
        success: function (response) {
            let data = response
            console.log(data)
        }
    });

}

function actualizarDependencia(a, b) {
    let id = a;
    let nombre = b;
    if (nombre == null || nombre.length == 0) {
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
        let data = nombre.toUpperCase();
        $.ajax({
            type: "GET",
            url: "http://localhost/modulo_clientes/dependencia/php/crea_obj_dep.php?accion=update&id=" + id + "&nombre=" + data,
            success: function (response) {
                let resp = response;
                if (resp == 1) {
                    Command: toastr["success"]("Dependencia Actualizada Correctamente", "Dependencia");
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

}


function insertDependencia(data) {
    let dataform = data.toUpperCase();
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