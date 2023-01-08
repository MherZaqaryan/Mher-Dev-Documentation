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
- [Unlock Permission](/cosmetics/configuration/category-configuration#unlock-permission)
- [Material](/cosmetics/configuration/main-configuration#material)
- [Amount](/cosmetics/configuration/main-configuration#amount)
- [Enchanted](/cosmetics/configuration/main-configuration#enchantment)
- [Price](/cosmetics/configuration/category-configuration#price)
- [Rarity](/cosmetics/configuration/category-configuration#rarity)

Example:

```yaml
example:
  enabled: true
  obtaining-methods: COIN,PERMISSION
  unlock-permission: example-unlock-permit
  material: DIAMOND_BLOCK
  amount: 1
  enchanted: false
  price: 100000
  rarity: legendary
```

## Enabled

Example:

```yaml
example:
  enabled: # true or false
  obtaining-methods: ...
  unlock-permission: ...
  material: ...
  amount: ...
  enchanted: ...
  price: ...
  rarity: ...
```

This is a configuration section to make the cosmetics either enabled or disabled.

When this configuration is set to **false**, the cosmetic will not be shown in the category menu for the corresponding cosmetic category.

When this configuration is set to **true**, the cosmetic will be available in the category menu for the corresponding cosmetic category.

## Obtaining Methods

Example:

```yaml
example:
  enabled: # true or false
  obtaining-methods: # NONE, COIN and PERMISSION
  unlock-permission: ...
  material: ...
  amount: ...
  enchanted: ...
  price: ...
  rarity: ...
```

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

## Unlock Permission

Example:

```yaml
example:
  enabled: # true or false
  obtaining-methods: # NONE, COIN and PERMISSION
  unlock-permission: # The unlock permission(s) (seperated by commas)
  material: ...
  amount: ...
  enchanted: ...
  price: ...
  rarity: ...
```

Unlock permissions are the permissions that can be attached to some specific cosmetics which will prevent purchasing (even if the player has the permission to own the cosmetic) the corresponding cosmetic without having that specific permission.

Read more about how to create unlock permissions **[here](./main-configuration.md#unlock-permission)**.

## Price

Example:

```yaml
example:
  enabled: # true or false
  obtaining-methods: # NONE, COIN and PERMISSION
  unlock-permission: # The unlock permission(s) (seperated by commas)
  material: # The material for the cosmetic to show in the menu
  amount: # The amount for the icon
  enchanted: # Either true or false
  price: # The price that the player has to pay (Only when the COIN obtaining method is available)
  rarity: ...
```

This is the price of a cosmetic that the player could purchase when the obtaining [COIN](/cosmetics/configuration/category-configuration#coin) method exists, this feature only works when [Vault economy](/cosmetics/hooks/vault-support) is enabled.

## Rarity

Example:

```yaml
example:
  enabled: # true or false
  obtaining-methods: # NONE, COIN and PERMISSION
  unlock-permission: # The unlock permission(s) (seperated by commas)
  material: # The material for the cosmetic to show in the menu
  amount: # The amount for the icon
  enchanted: # Either true or false
  price: # The price that the player has to pay (Only when the COIN obtaining method is available)
  rarity: # Defaults are COMMON, RARE, EPIC and LEGENDARY
```

This is the rarity of a cosmetic, that will help players to know that the higher the rarity is the cooler the cosmetic must be, you may add new rarities, change the colors, and the priorities of each cosmetic.

Read more about how to create rarities **[here](./../tutorials/create-rarities.md)**.