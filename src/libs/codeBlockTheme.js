var theme = {
  plain: {
    color: '#4e5a65',
    backgroundColor: '#eff1f5',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(166, 172, 185)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgb(212, 138, 70)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(62, 72, 81)',
      },
    },
    {
      types: ['builtin', 'function'],
      style: {
        color: 'rgb(105, 129, 153)',
      },
    },
    {
      types: ['constant', 'char'],
      style: {
        color: 'rgb(154, 103, 145)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(193, 94, 64)',
      },
    },
    {
      types: ['keyword'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(162, 66, 76)',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'rgb(164, 191, 141)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(193, 94, 64)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'rgb(106, 115, 135)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(111, 45, 51)',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(68, 88, 50)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(55, 68, 81)',
      },
    },
  ],
}

module.exports = theme
