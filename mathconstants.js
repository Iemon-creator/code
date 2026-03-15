class Mathconst {
  getInfo() {
    return {
      id: 'mathconstants',
      name: 'Mathematical Constants',
      blocks: [
       {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello!'
        },
        {
          blockType: Scratch.BlockType.XML,
          xml: '<block type="mathconstants_menu_constants"/>'
        }
      ],
      menus: {
        constants: {

          acceptReporters: true, // To make the block round

          items: [
            {
              text: 'pi', value: String(Math.PI)
            },
            {
              text: 'tau', value: '6.283185307179586'
            },
            {
              text: "euler's number", value: String(Math.E)
            },
            {
              text: 'golden ratio', value: '1.618033988749895'
            },
            {
              text: 'supergolden ratio', value: '1.465571231876768'
            },
            {
              text: "gamma constant", value: '0.5772156649015329'
            },
            {
              text: 'omega constant', value: '0.5671432904097838'
            },
            {
              text: 'universal parabolic constant', value: '2.295587149392638'
            }
          ]
        }
      }
    };
  }
}
Scratch.extensions.register(new Mathconst());
