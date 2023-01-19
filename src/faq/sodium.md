---
title: Sodium & Indium
---

# {{ $frontmatter.title }}

[[toc]]

### Why doesn't SwitchCraft ship with Sodium and Indium?

[Sodium](https://modrinth.com/mod/sodium/) is an experimental mod. The performance benefits are fantastic, but some 
features are not yet stable, and when combined with other mods, can cause visual glitches that affect gameplay. During 
testing, we identified several issues with [Sodium](https://modrinth.com/mod/sodium/) and 
[Indium](https://modrinth.com/mod/indium/) that made them unsuitable to distribute out of the box in SwitchCraft. 

Additionally, we chose to make the mods opt-in rather than opt-out because Packwiz (our modpack manager) does not yet
[support disabling mods](https://github.com/packwiz/packwiz-installer/issues/13). We have considered some workarounds
but this is the solution we have settled on in the meantime.

Some issues that caught our attention are:

#### 3D prints do not render correctly on some drivers

![](/img/sodium-3d-print-bug.png)

Three out of six faces for each 3D print do not render correctly under some conditions. This is a known issue with
Indium.

![\<ThatTrollzer\> this has been an issue with indium for awhile](/img/sodium-3d-print-bug-msg.png)

#### Block translucency is broken

![](https://user-images.githubusercontent.com/597053/142459663-9682c594-bcf0-477f-897f-582b9702aaa5.png)

Quad translucency is not sorted correctly, resulting in incorrect rendering of translucent blocks and player name tags.
This is a [known issue](https://github.com/CaffeineMC/sodium-fabric/issues/38) with a 
[fix](https://github.com/CaffeineMC/sodium-fabric/pull/963) in the works, but it has not been merged yet.

#### Block hover outlines do not render correctly sometimes

![](/img/sodium-block-outline-bug.png)

### Installing Sodium manually

You are welcome to try out Sodium and Indium at your own risk. We may add a quick button to do this in the menu in the
future.

Download the latest versions of Sodium and Indium and add them to the `mods` directory in your SwitchCraft instance:
- [Sodium](https://modrinth.com/mod/sodium/versions)
- [Indium](https://modrinth.com/mod/indium/versions)

**Both mods are required!** Indium is a compatibility layer that allows Sodium to work with other mods by adding support
for the Fabric Rendering API.

::: warning Reporting issues

If you experience any issues with either of these mods installed, please make sure to send us a screenshot **with the
F3 menu open**. This will help us understand your environment, as it is typically highly relevant to graphical issues.

:::
