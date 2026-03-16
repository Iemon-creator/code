class Mathconst {
  getInfo() {
    return {
      id: 'mathconstants',
      name: 'Mathematical Constants',
      blocks: [
        {
          blockType: Scratch.BlockType.XML,
          xml: '<block type="mathconstants_menu_constants"/>'
        }
      ],
      menus: {
        constants: {
          acceptReporters: true,
          items: [
            {
              text: 'π', value: String(Math.PI)
            },
            {
              text: 'τ', value: '6.283185307179586'
            },
            {
              text: "e", value: String(Math.E)
            },
            {
              text: 'φ', value: '1.618033988749895'
            },
            {
              text: 'ln 2', value: String(Math.LN2)
            },
            {
              text: 'ln 10', value: String(Math.LN10)
            },
            {
              text: 'Ω', value: '0.5671432904097838'
            },
            {
              text: "γ", value: '0.5772156649015329'
            },
            {
              text: 'Ω', value: '0.5671432904097838'
            },
            {
              text: 'P', value: '2.295587149392638'
            }
          ]
        }
      }
    };
  }
}
Scratch.extensions.register(new Mathconst());
