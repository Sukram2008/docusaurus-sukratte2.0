/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Nur noch die Discord Befehle Kategorie, da die anderen als "nicht existierend" gemeldet wurden.
    {
      type: 'category',
      label: 'Discord Befehle',
      link: {
        type: 'generated-index',
        title: 'Alle Discord Befehle',
        description: 'Hier findest du eine Übersicht über alle Discord Befehle und deren Unterkategorien.',
        slug: '/category/discord-befehle',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Admin Tools',
          link: {
            type: 'generated-index',
            title: 'Admin Tools Übersicht',
            description: 'Verwalte deinen Server mit diesen Admin Tools.',
            slug: '/category/discord-befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: {
                type: 'generated-index',
                title: 'Spezifische Admin-Befehle',
                description: 'Befehle zur Serververwaltung.',
                slug: '/category/discord-befehle/admin-tools/admin-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'discord-befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'discord-befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Roles-Befehle',
              link: {
                type: 'generated-index',
                title: 'Befehle zur Rollenverwaltung',
                description: 'Befehle zum Vergeben und Entfernen von Rollen.',
                slug: '/category/discord-befehle/admin-tools/roles-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Roles-Befehle/RolesGive',
                'discord-befehle/Admin Tools/Roles-Befehle/RolesRemove',
                'discord-befehle/Admin Tools/Roles-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Steal-Befehle',
              link: {
                type: 'generated-index',
                title: 'Steal Befehle Übersicht',
                description: 'Befehle zum Stehlen von Emojis und Stickern.',
                slug: '/category/discord-befehle/admin-tools/steal-befehle',
              },
              items: [
                'discord-befehle/Admin Tools/Steal-Befehle/Stealemote',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'AFK System',
          link: {
            type: 'generated-index',
            title: 'AFK System Übersicht',
            description: 'Dein AFK-Status ganz einfach!',
            slug: '/category/discord-befehle/afk-system',
          },
          items: [
            'discord-befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord-befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        {
              type: 'category',
              label: 'Bewerbungen',
              link: {
                type: 'generated-index',
                title: 'Bewerbungs-System Übersicht Übersicht',
                description: 'Damit kannst du dich bei uns bewerben.',
                slug: '/category/discord-befehle/bewerbungen',
              },
              items: [
                'discord-befehle/Bewerbungen/Apply',
              ],
            },
            {
              type: 'category',
              label: 'Geburtstags-Kalender',
              link: {
                type: 'generated-index',
                title: 'Geburtstags-Kalender',
                description: 'Geburtstags-Kalender damit man sich gratulieren kann. :)',
                slug: '/category/discord-befehle/geburtstags-kalender',
              },
              items: [
                'discord-befehle/Geburtstags-Kalender/BirthdayDelete',
                'discord-befehle/Geburtstags-Kalender/BirthdaySet',
                'discord-befehle/Geburtstags-Kalender/BirthdayStatus',
              ],
            },
            {
              type: 'category',
              label: 'Color me',
              link: {
                type: 'generated-index',
                title: 'Color me',
                description: 'Wie bekommt man eine éigene Rolle?',
                slug: '/category/discord-befehle/Color me',
              },
              items: [
                'discord-befehle/Color me/Color-meManage',
                'discord-befehle/Color me/Color-meRemove',
              ],
            },
            {
              type: 'category',
              label: 'Minispiele',
              link: {
                type: 'generated-index',
                title: 'Minispiele',
                description: 'Hier findest du alle Minispiele die es auf dem Server gibt.',
                slug: '/category/discord-befehle/Minispiele',
              },
              items: [
                'discord-befehle/Minispiele/ConnectFour',
                'discord-befehle/Minispiele/Duel',
              ],
            },
      ],
    },
  ],
};

module.exports = sidebars;