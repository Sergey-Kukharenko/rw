export default [
  {
    title: 'Flowers',
    icon: 'tile',
    style: {
      width: 16.67,
      height: 16.67
    },

    hasSubLevel: true,
  },
  {
    title: 'Trending',
    icon: 'fire',
    style: {
      width: 16,
      height: 16
    },

    hasSubLevel: false,
    by: {
      price: {
        title: 'Bouquets by price',
        list: [
          {
            text: 'Cheap flowers',
          },
          {
            text: 'Bouquets up to £25'
          },
          {
            text: 'Bouquets £25 – £50 '
          },
          {
            text: 'Bouquets £50 – £100'
          },
          {
            text: 'Premium bouquets'
          },
          {
            text: 'Special offer'
          },
        ]
      },
    },
  },
  {
    title: 'Recipient',
    icon: 'user-hart',
    style: {
      width: 17.33,
      height: 16.67
    },

    hasSubLevel: false,
  },
  {
    title: 'Occasions',
    icon: 'organizer',
    style: {
      width: 16,
      height: 16
    },

    hasSubLevel: false,
  },
  {
    title: 'Roses',
    icon: 'rose',
    style: {
      width: 10.31,
      height: 16
    },

    hasSubLevel: false,
  },
  {
    title: 'Sales',
    icon: 'percent-sale',
    style: {
      width: 14,
      height: 14
    },

    hasSubLevel: false,
  }
]
