<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>datatables</title>

    <!-- boottrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <!-- Bootstrap Datatables -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">

    <!-- materialize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <!-- Compiled and minified CSS -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> -->
</head>

<body>

    <header>
        <div class="container-fluid bg-primary text-center ">
            <div class="row">
                <h1>Prueba Datatables</h1>
            </div>
        </div>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-10">
                    <section>
                        <div class="row p-2">

                            <div class="col-2">
                                <div>
                                    <button type="button" class="btn btn-success text-center" style=" 
                                                width: 50px;
                                                height: 50px;
                                                border-radius: 50%;
                                                box-shadow: 3px 2.5px 1px lightgray;
                                                " title="Crear una nueva Dependencia" data-bs-toggle="modal" data-bs-target="#InserDepModal"><i class="bi bi-plus" width="32" height="32" viewBox="0 0 20 20" style="
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                font-size:2rem;
        "></i></button>
                                </div>
                            </div>
                            <div class="col-10"></div>
                        </div>
                    </section>
                    <section>
                        <table class="table" id="tabla_dependencias">
                            <thead class="table-success justify-content-center">
                                <tr class="text-center">
                                    <td><strong>Id</strong></td>
                                    <td><strong>Nombre</strong></td>
                                    <td><strong>Editar</strong></td>
                                    <td><strong>Eliminar</strong></td>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </section>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary ">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Insert -->

                    <div class="modal fade" id="InserDepModal" tabindex="-1" aria-labelledby="InserDepModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header bg-primary">
                                    <h5 class="modal-title" id="InserDepModalLabel">Insertar Dependencia</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form method="get">
                                        <div class="form-group">
                                            <label for="" class="">Nombre:</label>
                                            <input type="text" name="" id="insertData" class="form-control" >
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn btn-primary " id="btn-insert">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <footer></footer>

    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- bootstrap js -->
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <!-- JS Datatables -->
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
    <!-- Alert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <!-- Archivo JS -->
    <script src="data.js"></script>
</body>

</html>