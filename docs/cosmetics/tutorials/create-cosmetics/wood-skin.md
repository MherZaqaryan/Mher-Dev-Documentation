---
id: wood-skin
title: Create Wood Skins
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

## Wood Skin category configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories/wood-skin.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories/wood-skin.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories/wood-skin.yml</code>
    </TabItem>
</Tabs>

## Adding a new Wood Skin cosmetic.

1. Go to the [glyph's configuration file](#wood-skin-category-configuration-file) and add a new row under the **`cosmetics`** path, as shown in the snippet below.

```yml title="wood-skin.yml (snippet)"
your-wood-skin-identifier:
  enabled: true
  material: # The icon's item material.
  amount: # The icon's item amount.
  enchanted: # True if you want to have an enchanted icon otherwise false.
  price: # The price (e.g 5.000, 10.000, 100.000).
  rarity: # The rarity (e.g common, rare, epic, legendary).
  skin-material: # The skin material that should be applied in-game.
```

2. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.cosmetics.wood-skin`** path, as shown in the snippet below.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Languages/messages_(lang).yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Languages/messages_(lang).yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml</code>
    </TabItem>
</Tabs>

```yml title="messages_(lang).yml (snippet)"
your-wood-skin-identifier:
  display-name: # The display name for current language.
  description: # The description for current language.
  - 'Description line 1'
  - 'Description line 2'
```

3. Save all these files and restart your server.
4. You're done, now you should see your custom Wood Skin on the Wood Skins menu via **`/cosmetic menu wood-skin`**.