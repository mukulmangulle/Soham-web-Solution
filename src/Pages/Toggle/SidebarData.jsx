
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';




export const SidebarData = [
  {
    id: "ram",
    title: 'Company',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,



    subNav: [
      {

        className: "flex",
        title: 'About us',
        path: `/${process.env.SLUG_URL}/about/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Career',
        path: `/${process.env.SLUG_URL}/career/`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Blogs',
        path: `/${process.env.SLUG_URL}/bloges`,
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Contact us',
        path: `/${process.env.SLUG_URL}/career/`,
        icon: <IoIcons.IoIosPaper />
      }
    ]



  },
  {
    title: 'Services',
    path: `/${process.env.SLUG_URL}/services/`,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PHP development',
        icon: <IoIcons.IoIosPaper />,
        ClassName: 'sub-nav',
        path: `/${process.env.SLUG_URL}/services/php-development/`,
      },

      {
        title: 'WordPress Develoment',
        icon: <IoIcons.IoIosPaper />,
        ClassName: 'sub-nav',
        path: `/${process.env.SLUG_URL}/services/wordpress-development/`,

      },
      {
        title: 'Shopify Development',
        icon: <IoIcons.IoIosPaper />,
        path: `/${process.env.SLUG_URL}/services/shopify-development/`,

      },
      {
        title: 'Web Designing',
        icon: <IoIcons.IoIosPaper />,
        path: `/${process.env.SLUG_URL}/services/web-designing/`,

      },
      {
        title: 'Graphic Designing',
        icon: <IoIcons.IoIosPaper />,
        path: `/${process.env.SLUG_URL}/services/graphic-designing/`,

      },
      {
        title: 'Ecommerce Development',
        icon: <IoIcons.IoIosPaper />,
        path: `/${process.env.SLUG_URL}/services/ecommerce-development/`,

      }
    ]
  },
  {
    title: 'Solution',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'HireDevelopment',
    icon: <IoIcons.IoMdPeople />
  },

  {
    title: 'Work',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
