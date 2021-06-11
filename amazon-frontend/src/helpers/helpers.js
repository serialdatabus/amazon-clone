export const getCategories = () => [
  {
    headertitle: "All Departments",
    displayname: "All Departments",
    slug: "",
    description: "All Departments",
    categorylevel: "main",
  },
  {
    displayname: "Arts & Crafts",
    headertitle: "Arts and Crafts",
    slug: "artscrafts",
    description:
      "Shop art supplies including painting, drawing, crafting, scrapbooking, fabric and jewelry making",
    categorylevel: "main",
  },
  {
    displayname: "Automotive",
    headertitle: "Automotive and Car Care",
    slug: "automotive",
    description:
      "Shop automotive, car care, car accessories, oils and fluids, tools, and replacement part",
    categorylevel: "main",
  },
  {
    displayname: "Baby",
    headertitle: "The Baby Store",
    slug: "baby",
    description:
      "Shop top baby toys, clothing, formula, diaper, and maternity products",
    categorylevel: "main",
  },
  {
    headertitle: "Beauty and Personal Care",
    displayname: "Beauty & Personal Care",
    slug: "beaupersocare",
    description: "Shop makeup, skin care, hair care, fragrances and more",
    categorylevel: "main",
  },
  {
    headertitle: "Books",
    displayname: "Books",
    slug: "books",
    description: "get here your favourite books",
    categorylevel: "main",
  },
  {
    headertitle: "Computers, Tablets and IT Accessories",
    displayname: "Computers",
    slug: "computers",
    description:
      "Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more",
    categorylevel: "main",
  },
  {
    headertitle: "Digital Music",
    displayname: "Digital Music",
    slug: "digitalmusic",
    description: "Discover the hottest music",
    categorylevel: "main",
  },
  {
    headertitle: "Electronics",
    displayname: "Electronics",
    slug: "electronics",
    description:
      "Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more",
    categorylevel: "main",
  },
  {
    headertitle: "Kindle Store",
    displayname: "Kindle Store",
    slug: "kindlestore",
    description: "Shop kindle books",
    categorylevel: "main",
  },
  /*{
    headertitle: 'Prime Video',
    displayname: "Prime Video",
    slug: "primevideo",
    description: 'TV Shows, Documentaries , Movies and much more',
  },
  */
  {
    headertitle: "The Women's Shop",
    displayname: "Women's Fashion",
    slug: "womenfashion",
    description:
      "Shop Amazon Fashion including clothing, shoes, jewelry, watches, bags and more",
    categorylevel: "main",
  },
  {
    headertitle: "The Men's Shop",
    displayname: "Men's Fashion",
    slug: "menfashion",
    description:
      "Shop Amazon Fashion including clothing, shoes, jewelry, watches, accessories and more",
    categorylevel: "main",
  },
  {
    headertitle: "Girls' Fashion",
    displayname: "Girls' Fashion",
    slug: "girlsfashion",
    description: "Shop clothing, shoes, jewelry, accessories and more",
    categorylevel: "main",
  },
  {
    headertitle: "Boys' Fashion",
    displayname: "Boy's Fashion",
    slug: "boysfashion",
    description: "Shop clothing, shoes, watches, accessories and more",
    categorylevel: "main",
  },

  /** sub-categories for boys fashion */

  {
    parentslug: "boysfashion",
    displayname: "clothing",
    slug: "boysfashion-cothing",
    categorylevel: "sub",
  },

  {
    parentslug: "boysfashion",
    displayname: "shoes",
    slug: "boysfashion-shoes",
    categorylevel: "sub",
  },

  {
    parentslug: "boysfashion",
    displayname: "watches",
    slug: "boysfashion-watches",
    categorylevel: "sub",
  },

  {
    parentslug: "boysfashion",
    displayname: "accessories",
    slug: "boysfashion-accessories",
    categorylevel: "sub",
  },

  /** end sub-categories for boys fashion */

  {
    headertitle: "Deals and Promotions",
    displayname: "Deals",
    slug: "deals",
    description:
      "Shop Today’s Deals, Lightning Deals, and limited-time discounts",
    categorylevel: "main",
  },
  {
    headertitle: "Health and Household",
    displayname: "Health & Household",
    slug: "healthhousehold",
    description:
      "Shop health care, household supplies, baby and child care, medical supplies and more",
    categorylevel: "main",
  },
  {
    headertitle: "Home and Kitchen",
    displayname: "Home & Kitchen",
    slug: "homekitchen",
    description:
      "Shop kitchen and dinning, bedding, bath, furniture, home décor and more",
    categorylevel: "main",
  },
  {
    headertitle: "Business, Industrial and Scientific",
    displayname: "Industrial & Scientific",
    slug: "industrialscientific",
    description:
      "Shop business equipment and supplies, lab products, industrial power amd hand tools, and more",
    categorylevel: "main",
  },
  {
    headertitle: "Luggage and Travel Gear",
    displayname: "Luggage",
    slug: "luggage",
    description:
      "Shop suitcases, carry-ons, backpacks, travel totes, kids luggage and more",
  },
  /*{
    headertitle: "",
    displayname: "Movies & TV",
    slug: "moviestv",
    description: ""
  },
  {
    headertitle: "",
    displayname: "Music, CDs & Vinyl",
    slug: "musiccdvinyl",
    description: ""
  },*/
  {
    headertitle: "Pet Supplies",
    displayname: "Pet Supplies",
    slug: "petsupplies",
    description: "Shop for dogs, cats, fish, small animals and more",
    categorylevel: "main",
  },
  {
    headertitle: "Software",
    displayname: "Software",
    slug: "software",
    description:
      "Shop for PC and Mac software including business, games, photography and more",
    categorylevel: "main",
  },
  /** sub-categories for software */

  {
    parentslug: "software",
    displayname: "bussiness & office",
    slug: "software-businessoffice",
    categorylevel: "sub",
  },

  {
    parentslug: "software",
    displayname: "games",
    slug: "software-games",
    categorylevel: "sub",
  },

  {
    parentslug: "software",
    displayname: "photography",
    slug: "software-photography",
    categorylevel: "sub",
  },

  {
    parentslug: "software",
    displayname: "video",
    slug: "software-video",
    categorylevel: "sub",
  },

  /** end sub-categories for software */
  {
    headertitle: "Sports and Outdoors",
    displayname: "Sports & outdoors",
    slug: "sportsoutdoors",
    description:
      "Shop fitness and exercise, outdoor recreation, team gear and more",
    categorylevel: "main",
  },
  {
    headertitle: "Tools and Home Improvement",
    displayname: "Tools & Home Imporvement",
    slug: "toolshomeimprovement",
    description:
      "Shop power and handtools, woodworking, lighting, hardware and more",
    categorylevel: "main",
  },
  {
    headertitle: "Toys and Games",
    displayname: "Toys & Games",
    slug: "toysgames",
    description:
      "Shop action figures, arts and crafts, dolls, puzzles, learning toys and more",
    categorylevel: "main",
  },
  {
    headertitle: "Video Games",
    displayname: "Video Games",
    slug: "videogames",
    description: "Shop video games for Nintendo, PlayStation, Xbox and more",
    categorylevel: "main",
  },
];

export const getMainCategories = () => {
  return getCategories().filter((item) => item.categorylevel === "main");
};

export const getCategoryBySlug = (slug) => {
  const category = getCategories().filter((item) => item.slug === slug);

  return category[0];
};
