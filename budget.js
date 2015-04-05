/**
 * Created by SHERRI on 4/4/15.
 */
function budgetController($scope) {

    $scope.totalExpenses = function () {
        var rent = $scope.rent;
        var gas = $scope.gas;
        var groceries = $scope.groceries;
        var cable = $scope.cable;
        var clothes = $scope.clothes;
        var food = $scope.food;
        var utilities = $scope.utilities;
        var fun = $scope.fun;
        var vision = $scope.vision;
        var healthcare= $scope.healthcare;
        var autoInsurance= $scope.autoInsurance;
        var misc1 = $scope.misc1;
        var misc2 = $scope.misc2;

        return rent + gas + groceries + cable + clothes + food +
            utilities + fun + vision + healthcare + autoInsurance + misc1 + misc2;

    };

// gets the difference between income and expenses
    $scope.difference = function () {
        var totalExpenses = $scope.totalExpenses();
        var income = $scope.income;
        return income - totalExpenses;
    };

    $scope.save = function () {
        var totalExpenses = $scope.totalExpenses();
        var income = $scope.income;
        if (income > totalExpenses) {
            return .75 * (income - totalExpenses);
        }
        else {
            return 0;
        }
    }
}