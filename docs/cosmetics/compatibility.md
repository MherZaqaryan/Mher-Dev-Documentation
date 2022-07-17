---
id: compatibility
title: Compatibility
---

## Server Software
This addon is made for [Spigot](https://www.spigotmc.org/), however, it supports some forks like [PaperSpigot](https://papermc.io/).

Please note that this addon is packet-based, which means [Spigot](https://www.spigotmc.org/) forks without [NMS](https://www.spigotmc.org/wiki/general-introduction-of-packets-nms/) aren't supported.

## Software Version

:::warning
We may drop support for some versions depending on BedWars1058.
:::

This addon is compatible with the following versions of [Spigot](https://www.spigotmc.org/).
* **1.8.8** (1_8_R3).
* **1.9.4** (1_9_R2).
* **1.10** (1_10_R1).
* **1.11** (1_11_R1).
* **1.12** (1_12_R1).
* **1.13.2** (1_13_R2).
* **1.14.x** (1_14_R1).
* **1.15.x** (1_15_R1).
* **1.16.x** (1_16_R1, 1_16_R2, 1_16_R3).
* **1.17.x** (1_17_R1).
* **1.18.x** (1_18_R1, 1_18_R2).

:::note
Version string 1.19.x means that it supports all the sub-versions of that version (1.18, 1.18.1, 1.18.2).
:::

## Java Version

You must use **Java 8** or higher to run this addon.

However, you should use:

* **Java 8** for 1.8.8 - 1.11.x versions.
* **Java 11** for 1.12.x - 1.16.4 versions.
* **Java 16** for 1.16.5 - 1.17.x versions.
* **Java 17, 18** for 1.18x version.

## Dependencies

This addon is standalone which means it's not required to install [BedWars1058](https://polymart.org/r/1152) or [BedWarsProxy](https://polymart.org/r/2167) to make it work, however using it as standalone may only give the ability to buy or select cosmetics from the cosmetics menu.

Addon supports for **SHARED**, **MULTIARENA**, **BUNGEE**, and **BUNGEE_LEGACY** server types. Read more about server types here.

Addon will use corresponding BedWars1058 Cosmetics server type for BedWars1058 server type.

* When running BedWarsProxy it'll use **BEDWARSPROXY** server type.
* When running BedWars1058 **SHARED**, **MULTIARENA**, and **BUNGEE** it'll use **BEDWARS1058** server type.
* When running BedWars1058 **BUNGEE_LEGACY** it'll use **STANDALONE** server type.

For more about BedWars1058 server types you can read [here](https://wiki.andrei1058.dev/docs/BedWars1058/configuration/main-configuration).

## Optional Soft-Dependencies

This add-on is integrated with some plugins, which will make addon work with some other ways.

* Citizens (Optional, but required for Shopkeeper Skin category, otherwise it won't load).
* Vault (Optional).
* PlaceholderAPI (Optional).