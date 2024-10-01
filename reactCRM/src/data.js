export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home_dark.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "profile_dark.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Customers",
          url: "/customers",
          icon: "user_dark.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product_dark.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "order_dark.svg",
        }
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Notes",
          url: "/",
          icon: "note_dark.svg",
        },
        {
          id: 2,
          title: "Forms",
          url: "/",
          icon: "form_dark.svg",
        }
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting_dark.svg",
        }
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart_dark.svg",
        }
      ],
    },
  ];
  
  export const Sellers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "13.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "13.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "12.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "12.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "12.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "11.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "11.560",
    },
  ];
  
  export const chartBoxLeads = {
    heading: "Top Leads by Source",
    chartData: [
    {name: "Mail", value: 243, color: "#0088FE"},
    {name: "Email", value: 711, color: "#00C49F"},
    {name: "Trade Show", value: 357, color: "#FFBB28"},
    {name: "Phone Call", value: 223, color: "#FF8042"},
    ]
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$88,060",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 8580 },
      { name: "Mon", revenue: 12754 },
      { name: "Tue", revenue: 12955 },
      { name: "Wed", revenue: 20745 },
      { name: "Thu", revenue: 9741 },
      { name: "Fri", revenue: 11487 },
      { name: "Sat", revenue: 7600 },
    ],
  };

   export const chartBoxCustomer = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Customers",
    number: "11.238",
    dataKey: "customers",
    percentage: 45,
    chartData: [
      { name: "Sun", customers: 400 },
      { name: "Mon", customers: 600 },
      { name: "Tue", customers: 500 },
      { name: "Wed", customers: 700 },
      { name: "Thu", customers: 400 },
      { name: "Fri", customers: 500 },
      { name: "Sat", customers: 450 },
    ],
  };
  
  
  export const areaBoxRevenue = {
    heading: "Revenue Analytics",
    chartData: [
      {
        name: "Sun",
        life: 4000,
        annunity: 2400,
        auto: 2400,
      },
      {
        name: "Mon",
        life: 3000,
        annunity: 1398,
        auto: 2210,
      },
      {
        name: "Tue",
        life: 2000,
        annunity: 9800,
        auto: 2290,
      },
      {
        name: "Wed",
        life: 2780,
        annunity: 3908,
        auto: 2000,
      },
      {
        name: "Thu",
        life: 1890,
        annunity: 4800,
        auto: 2181,
      },
      {
        name: "Fri",
        life: 2390,
        annunity: 3800,
        auto: 2500,
      },
      {
        name: "Sat",
        life: 3490,
        annunity: 4300,
        auto: 2100,
      },
    ],
  }; 
  
  export const singleCustomer = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };