---
id: category-configuration
title: Category Configuration
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

BedWars1058 Cosmetics Addon's each category has its own configuration file since the `1.0.1` version.

<Tabs groupId="dependency-plugin">
    <TabItem value="bedwars1058" label="BedWars1058">
    Folder location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    Folder location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    Folder location: <code>plugins/BedWars1058-Cosmetics/Categories</code>
    </TabItem>
</Tabs>


Each file contains cosmetics for the corresponding category, you may add more cosmetics for various categories, learn more about them here.

## Configuration Structure

- [Enabled](/cosmetics/configuration/category-configuration#enabled)
- [Obtaining Methods](/cosmetics/configuration/category-configuration#obtaining-methods)
- [Material](/cosmetics/configuration/main-configuration#material)
- [Amount](/cosmetics/configuration/main-configuration#amount)
- [Enchanted](/cosmetics/configuration/main-configuration#enchantment)
- [Price](/cosmetics/configuration/category-configuration#price)
- [Rarity](/cosmetics/configuration/category-configuration#rarity)

## Enabled

This is a configuration section to make the cosmetics either enabled or disabled.

When this configuration is set to **false**, the cosmetic will not be shown in the category menu for the corresponding cosmetic category.

When this configuration is set to **true**, the cosmetic will be available in the category menu for the corresponding cosmetic category.

## Obtaining Methods

There is a configuration section for each cosmetic to modify the obtaining way of a cosmetic.

There are three types of obtaining methods **NONE**, **COIN**, and **PERMISSION**.

:::tip
You may use multiple obtaining methods by separating them with commas, like **PERMISSION**,**COIN**
:::

:::note
If you use the **NONE** obtaining method with other obtaining methods, then only the other ones should be counted as methods.
:::

### None

This obtaining method will prevent the player from buying, and even after purchasing the cosmetic, will prevent the player to get it even when the player has the corresponding permission for a cosmetic

### Coin

This obtaining method will only let the players buy the cosmetics with coins only, having corresponding permission for corresponding cosmetics will not make the player have the cosmetic when you use this method only.

### Permission

This obtaining method will only let the player obtain cosmetics with corresponding permission only. If you use this as a method only you may not be able to buy cosmetics with coins.

## Price

This is the price of a cosmetic that the player could purchase when the obtaining [COIN](/cosmetics/configuration/category-configuration#coin) method exists, this feature only works when [Vault economy](/cosmetics/hooks/vault-support) is enabled.

## Rarity

This is the rarity of a cosmetic, that will help players to know that the higher the rarity is the cooler the cosmetic must be, you may add new rarities, change the colors, and the priorities of each cosmetic.