//=============================================================================
// ZoneOut.js
//=============================================================================

/*:
 * @plugindesc 混乱時に攻撃対象が自分自身になった場合、設定したスキルを使用するようにします。
 * @author こま
 *
 * @param Skill ID
 * @desc 使用するスキルのIDを指定してください。
 * @default 1
 *
 * @help *このプラグインには、プラグインコマンドはありません。
 *
 * [ 利用規約 ] ...................................................................
 *  本プラグインの利用者は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  商用、非商用、ゲームの内容（年齢制限など）を問わず利用可能です。
 *  ゲームへの利用の際、報告や出典元の記載等は必須ではありません。
 *  二次配布や転載、ソースコードURLやダウンロードURLへの直接リンクは禁止します。
 *  （プラグインを利用したゲームに同梱する形での結果的な配布はOKです）
 *  不具合対応以外のサポートやリクエストは受け付けておりません。
 *  本プラグインにより生じたいかなる問題においても、一切の責任を負いかねます。
 * [ 改訂履歴 ] ...................................................................
 *   Version 1.00  2016/04/26  初版
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  Web Site: http://i.gmobb.jp/nekoma/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 */

(function(){
    'use strict';

    var _PLUGIN = 'ZoneOut';
    var _PARAMETERS = PluginManager.parameters(_PLUGIN);
    
    var _SKILL_ID = (+_PARAMETERS['Skill ID']) || 1;
    
    var _alias_Game_Action_confusionTarget = Game_Action.prototype.confusionTarget;
    Game_Action.prototype.confusionTarget = function() {
        var target = _alias_Game_Action_confusionTarget.call(this);
        if (target === this.subject()) {
            this._item = new Game_Item($dataSkills[_SKILL_ID]);
        }
        return target;
    };
}());
