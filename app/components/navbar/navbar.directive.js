export function NavbarDirective() {
  //noinspection BadExpressionStatementJS
  'ngInject';

  //noinspection UnnecessaryLocalVariableJS
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment) {
    //noinspection BadExpressionStatementJS
    'ngInject';

    // "this.creation" is avaible by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
