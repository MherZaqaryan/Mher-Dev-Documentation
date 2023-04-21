---
id: cosmetics-permissions
title: Cosmetics Permissions
description: BedWars1058 Cosmetics Addon cosmetics permissions.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Each cosmetic has a corresponding permission, so you can simply grant a player the necessary permissions to allow them to have a cosmetic belonging to a particular category.

Here is the permission form: `bedwars.cosmetics.cosmetic.<category>.<cosmetic>`

### Give a player a cosmetic from a category.
Example: `bedwars.cosmetics.cosmetic.bed-destroy.lady-bug`

### Give a player a whole category with their cosmetics.
Exmaple: `bedwars.cosmetics.cosmetic.victory-dance.*`

### Give a player all the categories and their cosmetics.
Permission: `bedwars.cosmetics.cosmetic.*`

## Category Identifiers

| Category Name | Permission Identifier |
| --- | --- |
| [Projectile Trail](../cosmetic-categories/projectile-trail.md) | projectile-trail |
| [Victory Dance](../cosmetic-categories/victory-dance.md) | victory-dance |
| [Final Kill Effect](../cosmetic-categories/final-kill-effect.md) | final-kill |
| [Spray](../cosmetic-categories/spray.md) | spray | 
| [Island Topper](../cosmetic-categories/island-topper.md) | island-topper |
| [Death Cry](../cosmetic-categories/death-cry.md) | death-cry |
| [Shopkeeper Skin](../cosmetic-categories/shopkeeper-skin.md) | shopkeeper-skin |
| [Kill Message](../cosmetic-categories/kill-message.md) | kill-message |
| [Glyph](../cosmetic-categories/glyph.md) | glyph |
| [Bed Destroy](../cosmetic-categories/bed-destroy.md) | bed-destroy |
| [Wood Skin](../cosmetic-categories/wood-skin.md) | wood-skin |

## Cosmetic Identifiers

Those identifiers can be found in the each categories configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories</code>
    </TabItem>
</Tabs>

For example

```yaml title="bed-destroy.yml (snippet)"
cosmetics:
  squid-missile: # < This is the identifier
    enabled: true
    obtaining-methods: COIN,PERMISSION
    material: MONSTER_EGG:94
    amount: 1
    enchanted: false
    price: 5000
    rarity: common
  fireworks: # < This is the identifier
    enabled: true
    obtaining-methods: COIN,PERMISSION
    material: FIREWORK
    amount: 1
    enchanted: false
    price: 5000
    rarity: common
```    