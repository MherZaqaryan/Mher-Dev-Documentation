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

## Command Function

For the categories and cosmetics* menu you may add some items which will run a command when a player clicks on it.

### Player
To make the command run by the player who clicked, you can just simply put your command in the `command: example` config section.

### Console
To make the command run by the console, you have to use the form of `CONSOLE:command` in the `command: CONSOLE:example` config section. You may use **`{player}`** placeholder which will be replaced by the player's name who clicked the item.

### Close
To make the click close the inventory use `CLOSE` identifier for the command section.


## Material

:::tip
Use materials from useful resources for your server version.
:::

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

Example: `Material: texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjk4YmM2M2YwNWY2Mzc4YmYyOWVmMTBlM2Q4MmFjYjNjZWI3M2E3MjBiZjgwZjMwYmM1NzZkMGFkOGM0MGNmYiJ9fX0=`

Result will be:

![Imgur](https://minecraft-heads.com/media/k2/items/cache/a2447921a9bd1ff016b1779eec7e042c_XS.jpg)

Source: https://minecraft-heads.com/

</details>

### Leather Color
To make colored leather you have to use the form of `leather-material:hex-color` for example `LEATHER_LEGGINGS:#FF0000` will be displayed as red leather leggings.

### Fill Empty Slots
To fill the empty slots of the Categories, Cosmetics, and Confirm Purchase menus you have to change the empty-slots path's `enabled: false` section to **true**, to make it fill all the slots which are empty. You may change the material of the filling item. 

## Sounds

:::tip
Use sounds from useful resources for your server version.
:::

You can configure sounds volume and pitch by using the form of `sound:volume:pitch` for example `NOTE_PLING:1:2` this plays **NOTE_PLING** sound with volume of *1* and pitch of *2*.

## Categories

### Enabling or Disabling
To **disable** or **enable** a category set **true** or **false** for the corresponding category's enabled configuration section.

### Default Cosmetic
To modify the default cosmetic of a category handle to the `default:` configuration section and modify it with the corresponding category's cosmetic identifier.

## Rarities

### Priority
The priority will be in the range of 1-∞ it will help the sorter to sort the cosmetics when using the sorter.

### Color
The color for the rarity is the usual chat colors which you can find here. Those colors won't affect the sorting.