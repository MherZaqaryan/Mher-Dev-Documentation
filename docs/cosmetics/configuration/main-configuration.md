---
id: main-configuration
title: Main Configuration
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="dependency-plugin">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/config.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/config.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/config.yml</code>
    </TabItem>
</Tabs>

From the `config.yml` file, you can edit:

- [Commend Function](./main-configuration#command-function)
- [Material](./main-configuration#material)
- [Sounds](./main-configuration#sounds)
- [Categories](./main-configuration#categories)
- [Rarities](./main-configuration#rarities)
- [Permission Discount](./main-configuration#permission-discount)
- [Unlock Permission](./main-configuration#unlock-permission)

## Command Function

For the categories and cosmetics* menu you may add some items which will run a command when a player clicks on it.

### Player
To make the command run by the player who clicked, you can just simply put your command in the `command: example` config section.

Example Command:

```yaml
example-item:
  command: "cosmetics menu"
  material: ...
  amount: ...
  enchanted: ...
  slot: ...
```

### Console
To make the command run by the console, you have to use the form of `CONSOLE:command` in the `command: CONSOLE:example` config section. You may use **`{player}`** placeholder which will be replaced by the player's name who clicked the item.

Example Console Command:

```yaml
example-item:
  command: "CONSOLE:eco give {player} 100"
  material: ...
  amount: ...
  enchanted: ...
  slot: ...
```

### Close
To make the click close the inventory use `CLOSE` identifier for the command section.

Example Close Inventory Command:

```yaml
example-item:
  command: "CLOSE"
  material: ...
  amount: ...
  enchanted: ...
  slot: ...
```

## Material

:::tip
Use materials from [useful resources](/cosmetics/configuration/useful-resources) for your server version.
:::

```yaml
example-item:
  material: "HOPPER"
  amount: 1
  enchanted: true
```

### Amount
To set an amount for an item use `amount: 1` config section. The maximum amount is 64.

### Enchantment
To make an item enchanted you can set `enchanted: false` the config section from **false** to **true**.

### Data
To use data for material for only 1.8x-1.12x you can use the form of `material:data` for example `WOOL:5` will be lime wool. Otherwise use the full material name for example `LIME_WOOL`.

### Custom Textured Player Head
To make a textured player head you must use the form of `texture:base64` for example:

<details>

<summary>Example of custom texture head</summary>

Example:

```yaml
example-item:
  material: "texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjk4YmM2M2YwNWY2Mzc4YmYyOWVmMTBlM2Q4MmFjYjNjZWI3M2E3MjBiZjgwZjMwYmM1NzZkMGFkOGM0MGNmYiJ9fX0="
  amount: 1
  enchanted: false
```

Result will be:

![Imgur](https://minecraft-heads.com/media/k2/items/cache/a2447921a9bd1ff016b1779eec7e042c_XS.jpg)

Source: https://minecraft-heads.com/

</details>

### Leather Color

Example:

```yaml
example-item:
  material: "LEATHER_LEGGINGS:#FF0000"
  amount: 1
  enchanted: false
```

To make colored leather you have to use the form of `leather-material:hex-color` for example `LEATHER_LEGGINGS:#FF0000` will be displayed as red leather leggings.

### Fill Empty Slots

Example:

```yaml
empty-slots:
  enabled: false
  material: STAINED_GLASS_PANE
  amount: 1
  enchanted: false
```

To fill the empty slots of the Categories, Cosmetics, and Confirm Purchase menus you have to change the empty-slots path's `enabled: false` section to **true**, to make it fill all the slots which are empty. You may change the material of the filling item. 

## Sounds

:::tip
Use sounds from [useful resources](/cosmetics/configuration/useful-resources) for your server version.
:::

Sounds are used to make some actions more interactive and understandable for players, in the sound section you can configure everything with your desired way.

Snippet:
```yaml
sounds:
  cosmetic-select: "NOTE_PLING:1:2"
  cosmetic-preview: "SUCCESSFUL_HIT"
```

You can configure sounds volume and pitch by using the form of `sound:volume:pitch` for example `NOTE_PLING:1:2` this plays **NOTE_PLING** sound with volume of *1* and pitch of *2*.

## Categories

Snippet:

```yaml
categories:
  projectile-trail:
    enabled: true
    default: "none"
```

### Enabling or Disabling
To **disable** or **enable** a category set **true** or **false** for the corresponding category's enabled configuration section.

### Default Cosmetic
To modify the default cosmetic of a category handle to the `default:` configuration section and modify it with the corresponding category's cosmetic identifier.

## Rarities

Rarities are used to sort the cosmetics, so if the cosmetics has a high proiority rarity then that cosmetics is more better than the one that is set to low proiority rarity. Rarities can be applied to the cosmetics which later can be used by the sorter feature to sort the cosmetics by lowest to highest rarity or vice versa.

Snippet:

```yaml
rarities:
  common:
    priority: 1
    color: GREEN
```

### Priority
The priority will be in the range of 1-∞ it will help the sorter feature to sort the cosmetics in the menu when using the sorter item.

### Color
The color for the rarity is the usual chat colors which you can find here. Those colors won't affect the sorting.

## Permission Discount

Permission discounts will allow you to make permissions that will discount the price of a cosmetic by a percentage or an amount that is set for the corresponding permission discount, which then could be applied to a player or a group.

Example: 

```yaml
permission-discount:
  enabled: true
  example-percentage:
    discount-type: PERCENTAGE
    value: 20
  example-amount:
    discount-type: AMOUNT
    value: 1000
```

### Enabled

If the `enabled` path is set to true this feature will be activated.

### Identifer

The identifier is the base path for example the `example-percentage` or `example-amount` (shown in the example).

Identifier is a part of the permission which is formed like **`bedwars.cosmetics.discount.<identifier>`**

For example, if the player has **bedwars.cosmetics.discount.example-percentage** then the player will get a discount by corresponding `example-percentage` which is set to 20 percent.

### Discount Type

Discount types are two, the first one is **PERCENTAGE** which is used to do the discount by the value specified percent, and the second one is **AMOUNT** which will discount the price by the value specified.

### Value

The value is the number that is used to either do the discount by that percentage or by that amount, check out the [Discount Type](main-configuration#discount-type) for more.

## Unlock Permission

Unlock permissions are the permissions that can be attached to some specific cosmetics which will prevent purchasing the corresponding cosmetic without having that specific permission.

Example:
```yaml
unlock-permission:
  vip:
    permission: vip
    priority: 1
  mvp-plus:
    permission: mvp-plus
    priority: 2
```

### Permission

Permission form: **`bedwars.cosmetics.permit.<identifier>`**

The permission's key, the actual permission will look like so when the permission is `vip` for example, then the actual permission will be `bedwars.cosmetics.permit.vip`

### Priority

Can be anything between `1-∞`.

This is the priority of the unlock permission, since a cosmetic could have more than one unlock permission, this will be used to determine which permission to demand the player to have (starts from the lower to higher) 