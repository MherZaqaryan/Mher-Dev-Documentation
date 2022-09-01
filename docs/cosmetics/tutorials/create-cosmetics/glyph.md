---
id: glyph
title: Create Glyphs
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip
If you need additional help, we'll be happy to help you on our [Discord](https://mher.club/discord) server.
:::

:::note
Glyph images should be **1:1** it's recommended to use 128x128 dimensional pictures to not lose the image quality. Also, the size dimension is suited for the best performance to prevent servers from lagging. Supported image formats are **JPEG**, **PNG**, **BMP**, and **WEBMP**.
:::

## Glyph category configuration file.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/Categories/glyph.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Categories/glyph.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/Categories/glyph.yml</code>
    </TabItem>
</Tabs>

## Adding a new Glyph cosmetic.

1. Get your picture and put it in the directory according to your [mode](../../compatibility#dependencies).
<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    Folder location: <code>plugins/BedWars1058/Addons/Cosmetics/Glyph</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    Folder location: <code>plugins/BedWarsProxy/Addons/Cosmetics/Glyph</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    Folder location: <code>plugins/BedWars1058-Cosmetics/Glyph</code>
    </TabItem>
</Tabs>

2. Go to the [glyph's configuration file](#glyph-category-configuration-file) and add a new row under the **`cosmetics`** path, as shown in the snippet below.

```yaml title="glyph.yml (snippet)"
your-glyph-identifier:
  enabled: true
  material: # The icon's item material.
  amount: # The icon's item amount.
  enchanted: # True if you want to have an enchanted icon otherwise false.
  price: # The price (e.g 5.000, 10.000, 100.000).
  rarity: # The rarity (e.g common, rare, epic, legendary).
  path: # Glyph's picture path (e.g new_glyph.png).
```

3. Open your desired language file for your [mode](../../compatibility#dependencies) and then add a new row under the **`addons.cosmetics.cosmetics.glyph`** path, as shown in the snippet below.

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

```yaml title="messages_(lang).yml (snippet)"
your-glyph-identifier:
  display-name: # The display name for current language.
  description: # The description for current language.
  - 'Description line 1'
  - 'Description line 2'
```

4. Save all these files and restart your server.
5. You're done, now you should see your custom Glyph on the Glyphs menu via **`/cosmetic menu glyph`**.