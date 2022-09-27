export default [
  {
    type: 'all',
    title: 'Flowers',
    icon: 'flowers',
    hasSubLevel: true,
    list: [],
    link: {
      text: 'Show all bouquets MyFlowers'
    },
    categories: {
      title: '',
      list:  [
        {
          icon: 'percent-sale',
          text: 'Sale',
        },
        {
          icon: 'instagram',
          text: 'Insta Bouquets',
        },
        {
          icon: 'fire-outline',
          text: 'Sales hits',
        },
        {
          icon: 'bouquet',
          text: 'Author"s bouquets',
        },
        {
          icon: 'flowers-box',
          text: 'Flowers in a box',
        },
        {
          icon: 'bag-outline',
          text: 'Flowers in the basket',
        },
      ],
    },
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
    products: {
      title: 'All flowers',
      list: [
        {
          img: 'https://images.unsplash.com/photo-1615182787503-08365d1e7fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82',
          title: 'Roses',
          status: 'Best',
        },
        {
          img: 'https://images.unsplash.com/photo-1591963944277-fe153988e471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvbmllcyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82',
          title: 'Peonies',
          status: 'Best',
        },
        {
          img: 'https://images.unsplash.com/photo-1522482999650-be954a7c0392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsaXBzJTIwYm91cXVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=82',
          title: 'Tulips',
        },
        {
          img: 'https://images.unsplash.com/photo-1610190441997-dac1fb499b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFpc2llcyUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=82&h=82',
          title: 'Daisies',
        },
        {
          img: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3lwc29waGlsZXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82',
          title: 'Gypsophiles',
        },
        {
          img: 'https://images.unsplash.com/photo-1610190427750-03e9095f18e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VyYmVyYXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82',
          title: 'Gerberas',
        },
        {
          img: 'https://images.unsplash.com/photo-1610190427750-03e9095f18e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VyYmVyYXMlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=82',
          title: 'Gerberas',
        },
      ],
      additionally: {
        img: 'https://images.unsplash.com/photo-1625144780860-bea39d8e6af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYW1vbWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=170&h=82',
        title: 'Growing a catalog...'
      }
    }
  },
  {
    type: 'roses',
    title: 'Roses',
    icon: 'rose',
    hasSubLevel: true,
    list: [],
    link: {
      text: 'Show all bouquets MyFlowers'
    },
    categories: {
      title: 'Categories',
      list: [
        {
          icon: 'love',
          text: 'Roses for your beloved',
        },
        {
          icon: 'bag-outline',
          text: 'Roses in the basket',
        },
        {
          icon: 'mom',
          text: 'Roses for Mom',
        },
        {
          icon: 'friends',
          text: 'Roses for Mom',
        },
        {
          icon: 'flowers-box',
          text: 'Roses in a box',
        },
      ],
    },
    by: {
      quantity: {
        title: 'By quantity',
        list: [
          {
            text: '15 roses',
            from: '- from £15',
          },
          {
            text: '21 roses',
            from: '- from £25',
          },
          {
            text: '25 roses',
            from: '- from £30',
          },
          {
            text: '35 roses',
            from: '- from £35',
          },
          {
            text: '41 roses',
            from: '- from £40',
          }
        ],
        link: {
          text: 'Show all'
        }
      },
      look: {
        title: 'By the look of roses',
        list: [
          {
            text: 'Classic',
          },
          {
            text: 'Kenyan',
          },
          {
            text: 'Peony - shaped',
          },
          {
            text: 'Bush',
          },
        ],
      },
      height: {
        title: 'By height',
        list: [
          {
            text: 'Roses 40 cm',
          },
          {
            text: 'Roses 50 cm',
          },
          {
            text: 'Roses 60 cm',
          },
          {
            text: 'Roses 70 cm',
          },
        ],
      },
    },
    products: {
      title: 'By color',
      list: [
        {
          img: 'https://images.unsplash.com/photo-1486639107311-064febaff1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VycyUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=80&h=64',
          title: 'White',
        },
        {
          img: 'https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VycyUyMHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=80&h=64',
          title: 'Red',
        },
        {
          img: 'https://images.unsplash.com/photo-1498813479361-b55a51e27ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VycyUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=82&h=64',
          title: 'Cream',
        },
        {
          img: 'https://images.unsplash.com/photo-1582692170784-4152906a4298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=82&h=64',
          title: 'Orange',
        },
        {
          img: 'https://images.unsplash.com/photo-1562048048-86d659689440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMHBpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=100&w=82&h=64',
          title: 'Pink',
        },
        {
          img: 'https://images.unsplash.com/photo-1615046526364-ccfd92cd45bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VycyUyMG11bHRpY29sb3JlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&w=82&h=64',
          title: 'Multicolored',
        },
      ]
    }
  },
  {
    type: 'relatives',
    title: 'Recipients',
    icon: 'relatives',
    hasSubLevel: true,
    list: [
      {
        text: 'For mom',
        icon: 'mom'
      },
      {
        text: 'For partner',
        icon: 'partner'
      },
      {
        text: 'For friends',
        icon: 'friends'
      },
      {
        text: 'For colleagues',
        icon: 'colleagues'
      },
      {
        text: 'For Relatives',
        icon: 'relatives'
      }
    ]
  },
  {
    type: 'occassions',
    title: 'Occassions',
    icon: 'organizer',
    hasSubLevel: true,
    list: [
      {
        text: 'Birthday',
        icon: 'birthday'
      },
      {
        text: 'Anniversary',
        icon: 'anniversary'
      },
      {
        text: 'wedding-anniversary',
        icon: 'wedding-anniversary'
      },
      {
        text: 'Date',
        icon: 'mom'
      },
      {
        text: 'Extract from the hospital',
        icon: 'extract-hospital'
      },
      {
        text: 'Housewarming',
        icon: 'housewarming'
      },
      {
        text: 'Graduation',
        icon: 'graduation'
      },
      {
        text: 'An apology',
        icon: 'apology'
      },
      {
        text: 'Simply so',
        icon: 'simply'
      },
      {
        text: 'Wedding',
        icon: 'wedding'
      }
    ]
  },
  {
    type: 'bestsales',
    title: 'Best sales',
    icon: 'fire-outline',
    hasSubLevel: false,
  },
  {
    type: 'favorite',
    title: 'Favorite',
    icon: 'mom',
    hasSubLevel: false,
  },
  {
    type: 'gifts',
    title: 'Gifts',
    count: 12,
    icon: 'gift',
    hasSubLevel: false,
  },
  {
    type: 'sales',
    title: 'Sales',
    icon: 'percent-sale',
    hasSubLevel: false,
  },
];
