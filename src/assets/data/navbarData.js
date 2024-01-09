import { FaSyncAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

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

export const iconMenuData = [
  {
    id: 1,
    name: "Compare <br> Products",
    icon: FaSyncAlt,
    href: "/compare-products",
  },
  {
    id: 2,
    name: "Favorite <br> Wishlist",
    icon: FaHeart,
    href: "/wishlist",
  },
  {
    id: 3,
    name: "Login <br> My Account",
    icon: FaHeart,
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
