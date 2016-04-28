// adicionado o AppModule para 'herdar' a lista de clientes
angular.module('PacienteModule', ['AppModule']).
        controller('PacienteController', ['$scope', function ($scope) {

                $scope.paciente = {};
                $scope.pesquisa = '';
                $scope.editarRegistro = false;
                $scope.visualizarRegistro = false;
                $scope.modalShown = false;
                
                $scope.toggleModal = function(o) {
                     $scope.modalShown = !$scope.modalShown;
                     $scope.debug = o;
                };

                $scope.editar = function (obj) {
                    $scope.editarRegistro = true;
                    $scope.paciente = angular.copy(obj);
                };

                $scope.excluir = function (key) {
                    for (var i = 0; i < $scope.listaPaciente.length; i++) {
                        if ($scope.listaPaciente[i].id == key) {
                            $scope.listaPaciente.splice(i, 1);
                            $scope.pesquisa = '';
                        };
                    };
                };

                $scope.salvarEdicao = function () {
                    if (!$scope.paciente.nome || !$scope.paciente.email) {
                        alert('Campos obrigatórios não foram preenchidos!');
                        return;
                    }

                    $scope.excluir($scope.paciente.id);

                    $scope.paciente.id = $scope.getFakeID();
                    $scope.listaPaciente.push($scope.paciente);
                    $scope.editarRegistro = false;
                };

                $scope.cancelarEdicao = function () {
                    $scope.editarRegistro = false;
                };

                $scope.salvar = function () {
                    if (!$scope.paciente.nome || !$scope.paciente.email) {
                        alert('Campos obrigatórios não foram preenchidos!');
                        return;
                    }

                    $scope.paciente.id = $scope.getFakeID();
                    $scope.listaPaciente.push($scope.paciente);
                    $scope.redir('/paciente-lista');
                };

                $scope.visualizar = function (obj) {
                    $scope.paciente = angular.copy(obj);
                };
}]);