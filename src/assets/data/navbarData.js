import { AiOutlineSync } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

export const accountRelatedData = [
  {
    id: 1,
    name: "About Us",
    href: "about-us",
  },
  {
    id: 2,
    name: "My account",
    href: "my-account",
  },
  {
    id: 3,
    name: "Featured Products",
    href: "featured-products",
  },
  {
    id: 4,
    name: "Wishlist",
    href: "wishlist",
  },
];

export const informationRelatedData = [
  {
    id: 1,
    name: "Language",
    data: [
      {
        id: "bangla",
        name: "Bangla",
        href: "bangla",
      },
      {
        id: "english",
        name: "English",
        href: "english",
      },
      {
        id: "chinese",
        name: "Chinese",
        href: "chinese",
      },
    ],
  },
  {
    id: 2,
    name: "Currency",
    data: [
      {
        id: "bdt",
        name: "BDT",
        href: "bdt",
      },
      {
        id: "usd",
        name: "USD",
        href: "usd",
      },
      {
        id: "chinese-yuan",
        name: "Yuan",
        href: "chinese-yuan",
      },
    ],
  },
];

export const iconMenuData = [
  {
    id: 1,
    name: "Compare <br> Products",
    icon: AiOutlineSync,
    href: "/compare-products",
  },
  {
    id: 2,
    name: "Favorite <br> Wishlist",
    icon: FaRegHeart,
    href: "/wishlist",
  },
  {
    id: 3,
    name: "Login <br> My Account",
    icon: FaRegUser,
    data: [
      {
        id: "l1",
        name: "Login",
        href: "/login",
      },
      {
        id: "r2",
        name: "Register",
        href: "/register",
      },
    ],
  },
];

export const primaryMenuData = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Our Store",
    href: "/shop",
  },
  {
    id: 3,
    name: "Blogs",
    href: "/blogs",
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
  },
];

export const categoriesMenuData = [
  {
    id: 1,
    name: "Electronics",
    data: [
      {
        id: "laptop",
        name: "Laptop",
        subData: [
          {
            id: "hp",
            name: "HP",
            href: "/hp",
          },
          {
            id: "lenovo",
            name: "Lenovo",
            href: "/lenovo",
          },
          {
            id: "asus",
            name: "Asus",
            href: "/asus",
          },
          {
            id: "acer",
            name: "Acer",
            href: "/acer",
          },
          {
            id: "macbook",
            name: "Apple",
            href: "/apple",
          },
        ],
      },
      {
        id: "mobile",
        name: "Mobile",
        subData: [
          {
            id: "samsung",
            name: "Samsung",
            href: "/samsung",
          },
          {
            id: "apple",
            name: "Apple",
            href: "/apple",
          },
          {
            id: "huawei",
            name: "Huawei",
            href: "/huawei",
          },
        ],
      },
      {
        id: "camera",
        name: "Camera",
        href: "/camera",
      },
      {
        id: "tv",
        name: "TV",
        href: "/tv",
      },
      {
        id: "others",
        name: "Others",
        href: "/others",
      },
    ],
  },
  {
    id: 3,
    name: "Clothing",
    href: "/clothing",
  },
  {
    id: 4,
    name: "Footwear",
    href: "/footwear",
  },
  {
    id: 5,
    name: "Jewellery",
    href: "/jewellery",
  },
  {
    id: 6,
    name: "Accessories",
    href: "/accessories",
  },
  {
    id: 9,
    name: "Sports",
    href: "/sports",
  },
  {
    id: 13,
    name: "Others",
    href: "/others",
  },
];
