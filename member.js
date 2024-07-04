function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        scope: {
            member: '='
        },
        controller: function($scope, $element, $attrs) {
            $scope.member.skills = $scope.member.skills || [];
            $scope.addSkill = function() {
                $scope.member.skills.push($scope.skill);
                $scope.skill = '';
            };
            $scope.removeSkill = function(index) {
                $scope.member.skills.splice(index, 1);
            };
        }
    }
}