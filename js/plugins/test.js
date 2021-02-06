(() => {
  "use strict";

  Game_Party.prototype.PScriptTest = function () {
    return this._PScript.map(function (id) {
      return $gameActors.actor(id);
    }).filter(function (battler) {
      return battler && battler.TScript();
    }).sort(function (a, b) {
      return a.testNumber() - b.testNumber();
    });
  };

  //  $gameVariables.value(1);

})();