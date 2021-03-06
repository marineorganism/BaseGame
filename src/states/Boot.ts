///<reference path="../phaser/phaser.d.ts"/>


module Scumbag
{
  export class Boot extends Phaser.State
  {
    preload()
    {
      this.load.image('preloadBar', 'images/preloadBar.png');
    }

    create()
    {
      //set up some rubbish
      this.input.maxPointers = 1;
      this.stage.disableVisibilityChange = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.game.stage.smoothed = false;
      MusicManager.init(this.game);

      this.game.input.gamepad.start();

      //start the preloader
      this.game.state.start('Preloader', true, false);
    }
  }
}
