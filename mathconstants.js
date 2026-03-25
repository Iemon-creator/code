
Scratch.extensions.register(new class {
  getInfo() {
    return {
      id: 'lemonmathconstants',
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
              text: "β", value: '1.1865691104156255'
            },
            {
              text: 'C₁', value: '0.697774657964008'
            },
            {
              text: 'ρ', value: '1.324717957244746'
            },
            {
              text: 'P', value: '2.295587149392638'
            },
            {
              text: 'θₘ', value: '0.9553166181245093'
            },
            {
              text: 'Δ(3)', value: '0.6617071822671763'
            },
            {
              text: 'ζ(3)', value: '1.2020569031595942'
            }
          ]
        }
      }
    };
  }
});
