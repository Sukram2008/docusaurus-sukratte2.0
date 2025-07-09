import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-sukratte2.0/blog',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog', 'ebe'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/archive',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/archive', 'df2'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/authors',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/authors', '04a'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/authors/all-sebastien-lorber-articles', '9b2'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/authors/yangshun', 'a56'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/first-blog-post', '8ff'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/long-blog-post', 'c04'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/mdx-blog-post', '0f8'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/tags',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/tags', '066'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/tags/docusaurus', '5bf'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/tags/facebook', 'f60'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/tags/hello',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/tags/hello', '1be'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/tags/hola',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/tags/hola', '3b1'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/blog/welcome',
    component: ComponentCreator('/docusaurus-sukratte2.0/blog/welcome', '411'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/markdown-page',
    component: ComponentCreator('/docusaurus-sukratte2.0/markdown-page', '69a'),
    exact: true
  },
  {
    path: '/docusaurus-sukratte2.0/docs',
    component: ComponentCreator('/docusaurus-sukratte2.0/docs', '5d1'),
    routes: [
      {
        path: '/docusaurus-sukratte2.0/docs',
        component: ComponentCreator('/docusaurus-sukratte2.0/docs', '949'),
        routes: [
          {
            path: '/docusaurus-sukratte2.0/docs',
            component: ComponentCreator('/docusaurus-sukratte2.0/docs', '5f1'),
            routes: [
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle', '0c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/admin-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/admin-befehle', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/extra-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/extra-befehle', '41a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/rollen-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/admin-tools/rollen-befehle', '7f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/afk-system',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/afk-system', '6b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/bewerbungen',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/bewerbungen', '93b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/color-me',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/color-me', '688'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/economy',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/economy', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/economy-system/economy-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/economy-system/economy-befehle', '131'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/economy-system/shop-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/economy-system/shop-befehle', 'af6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/errate die nummer',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/errate die nummer', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle/interaktions-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle/interaktions-befehle', '154'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle/random-befehle',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/fun-befehle/random-befehle', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/geburtstags-kalender',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/geburtstags-kalender', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/gewinnspiele',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/gewinnspiele', '07f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/category/discord-befehle/minispiele',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/category/discord-befehle/minispiele', 'dbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminMovechannel', 'fb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminMoverole', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Admin-Befehle/AdminSetcategory', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Extra-Befehle/Stealemote',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Extra-Befehle/Stealemote', '8cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesGive',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesGive', '053'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesRemove', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesStatus',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Admin Tools/Rollen-Befehle/RolesStatus', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/AFK-System/AFKEnd',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/AFK-System/AFKEnd', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/AFK-System/AFKStart',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/AFK-System/AFKStart', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Bewerbungen/Apply',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Bewerbungen/Apply', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Color me/Color-meManage',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Color me/Color-meManage', 'f44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Color me/Color-meRemove',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Color me/Color-meRemove', '72a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyAdd',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyAdd', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyBalance',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyBalance', 'da6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyCrime',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyCrime', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDaily',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDaily', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDeposit',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDeposit', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDestroy',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDestroy', 'd65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDropDisable',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDropDisable', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDropEnable',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyDropEnable', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyRemove',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyRemove', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyRob',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyRob', '66f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomySet',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomySet', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWeekly',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWeekly', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWithdraw',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWithdraw', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWork',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Economy-Befehle/EconomyWork', 'b5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopAdd',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopAdd', 'fd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopBuy',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopBuy', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopDelete',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopDelete', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopList',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Economy System/Shop-Befehle/ShopList', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessCreate',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessCreate', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessEnd',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessEnd', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessStatus',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Errate die Nummer/GuessStatus', 'bd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunHug',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunHug', '9c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunKiss',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunKiss', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunPat',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunPat', '88f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunSlap',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Interaktions-Befehle/FunSlap', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/Random8Ball',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/Random8Ball', 'd16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomCoinflip',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomCoinflip', 'ec8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomDice',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomDice', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomIkea-name',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomIkea-name', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomNumber',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Fun-Befehle/Random-Befehle/RandomNumber', 'c06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdayDelete',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdayDelete', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdaySet',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdaySet', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdayStatus',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Geburtstags-Kalender/BirthdayStatus', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageEnd',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageEnd', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageReroll',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageReroll', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageStart',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GmanageStart', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GMessages',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Gewinnspiele/GMessages', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Minispiele/ConnectFour',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Minispiele/ConnectFour', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-sukratte2.0/docs/discord-befehle/Minispiele/Duel',
                component: ComponentCreator('/docusaurus-sukratte2.0/docs/discord-befehle/Minispiele/Duel', 'f3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-sukratte2.0/',
    component: ComponentCreator('/docusaurus-sukratte2.0/', '67c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
