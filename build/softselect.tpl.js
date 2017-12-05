angular.module('softselect.directive').run(['$templateCache', function($templateCache) {$templateCache.put('softselect.html','\n<div class="softselect" ng-class="{\'disabled\':ssDisabled}">\n\n    <div class="dropdown ">\n\n\n            <div tabindex="{{ssTabindex}}"  class="selected-box" placeholder="" aria-describedby="basic-addon2" data-toggle="dropdown" >\n\n                <div class="full-h" ng-show="!ssMany">\n\n                    <div class="form-group has-feedback">\n\n                        <input class="form-control" ng-click="setFocus($event)" ng-model="ssModel[ssField.text]" placeholder="{{ssField.placeholder ? ssField.placeholder : \'Selecionar...\'}}">\n\n                        <span class="fa fa-caret-down form-control-feedback" aria-hidden="true"></span>\n\n                    </div>\n\n                </div>\n\n                <div class="full-h" ng-show="ssMany">\n\n                    <div class="form-group has-feedback">\n\n                        <div class="form-control">\n\n                        <label ng-show="displayPlaceHolder" class="selected-placeholder">{{ssField.placeholder ? ssField.placeholder : \'Selecionar...\'}}</label>\n\n                        <label ng-show="ssModel.length > 2" class="selected-count">\n\n                            {{ssModel.length === ssData.length ? "Todos" : ssModel.length}} selecionados\n\n                        </label>\n\n                        <ul ng-show="(!displayPlaceHolder && ssModel.length > 0 && ssModel.length <= 2)">\n\n                            <li ng-repeat="item in ssModel track by $index">\n\n                                {{item[ssField.text]}}\n\n                            </li>                    &nbsp;\n\n                        </ul>\n\n                    </div>\n\n                        <span class="fa fa-caret-down form-control-feedback" aria-hidden="true"></span>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="dropdown-menu dropdown-menu-left scroll-4">\n\n                <div class="controls">\n\n                    <input ng-show="ssData.length > 10" ng-hide="!ssMany" class="form-control softselect-filter" ng-model="ssFilter" placeholder="Procurar...">\n\n                    <span ng-click="ss_selectAll()" ng-show="ssMany">Selecionar todos</span> | <span ng-click="ss_clearAll()">Limpar</span>\n\n                </div>\n\n                <hr style="margin:3px;">\n\n                <ul>\n\n                    <li class="item" ng-repeat="item in getFilteredData()" ng-click="ss_select(item)">\n\n                        <i class="fa fa-check" ng-show="item.selected" style="color: #2ecc71" ></i> {{item[ssField.text]}}\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n    </div>\n\n</div>\n');}]);