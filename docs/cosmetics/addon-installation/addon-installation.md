---
id: addon-installation
title: Addon Installation
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::note Before you continue
Please make sure that you've done these [steps](../verify-purchase), and read the [compatibility](../compatibility) before you'll continue.
:::

## Installation

1. Download the plugin from [Polymart](https://polymart.org/r/1619).
2. Drag and drop the BedWars1058-Cosmetics-x.x.x.jar file into your server's **plugins** folder.
3. Start your server, let it to fully start, and then stop it.
4. Open the **`authorization.yml`** file. If you are unsure about the mode you use please read [this](../compatibility#dependencies) article.

<Tabs groupId="dependency">
    <TabItem value="bedwars1058" label="BedWars1058">
    File location: <code>plugins/BedWars1058/Addons/Cosmetics/authentication.yml</code>
    </TabItem>
    <TabItem value="bedwarsproxy" label="BedWarsProxy">
    File location: <code>plugins/BedWarsProxy/Addons/Cosmetics/authentication.yml</code>
    </TabItem>
    <TabItem value="standalone" label="Standalone">
    File location: <code>plugins/BedWars1058-Cosmetics/authentication.yml</code>
    </TabItem>
</Tabs>

5. Put your personal license key that you've got from the result of these [steps](../verify-purchase) on the `license-key` path of the **`authorization.yml`** file.
6. Start your server. <span style={{color: '#FFD700'}}>Profit!</span>

:::warning Warning
If you have STANDALONE mode server (read [this](../compatibility#dependencies) article for modes) you have to also do these [steps](standalone-additions).
:::

---

Continue configuring BedWars1058 Cosmetics Addon by looking into these articles.
- [Main Configuration](../configuration/main-configuration)
- [Category Configuration](../configuration/category-configuration)
- [Language Configuration](../configuration/language-configuration)