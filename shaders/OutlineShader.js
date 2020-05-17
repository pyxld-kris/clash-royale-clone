import Phaser from "phaser";

export default class OutlinePipeline extends Phaser.Renderer.WebGL.Pipelines
  .TextureTintPipeline {
  constructor(game) {
    let config = {
      game: game,
      renderer: game.renderer,
      fragShader: `
            precision mediump float;
            uniform sampler2D uMainSampler;
            varying vec2 outTexCoord;
            void main(void) {
                vec4 color = texture2D(uMainSampler, outTexCoord);
                vec4 colorU = texture2D(uMainSampler, vec2(outTexCoord.x, outTexCoord.y - 0.03));
                vec4 colorD = texture2D(uMainSampler, vec2(outTexCoord.x, outTexCoord.y + 0.03));
                vec4 colorL = texture2D(uMainSampler, vec2(outTexCoord.x + 0.03, outTexCoord.y));
                vec4 colorR = texture2D(uMainSampler, vec2(outTexCoord.x - 0.03, outTexCoord.y));
                
                gl_FragColor = color;
                
                if (color.a == 0.0 && (colorU.a != 0.0 || colorD.a != 0.0 || colorL.a != 0.0 || colorR.a != 0.0)  ) {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1);
                }
            }
            `
    };
    super(config);
  }
}
