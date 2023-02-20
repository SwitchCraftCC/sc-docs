---
title: sc-goodies
---

# {{ $frontmatter.title }}

[sc-goodies](https://github.com/SwitchCraftCC/sc-goodies) is a Fabric 1.19 content mod for the SwitchCraft server. It
contains a variety of features specifically designed for SwitchCraft, many of which were inspired by previous 1.12 mods
on SwitchCraft 2 such as cpw's [ironchest](https://github.com/cpw/ironchest), ChickenBones' 
[EnderStorage](https://github.com/TheCBProject/EnderStorage), and Vazkii's [Quark](https://github.com/VazkiiMods/Quark).

## Table of Contents
[[toc]]

## Useful links

#### sc-goodies
- [sc-goodies on Modrinth](https://modrinth.com/mod/sc-goodies)
- [sc-goodies on CurseForge](https://www.curseforge.com/minecraft/mc-mods/sc-goodies)
- [sc-goodies on GitHub](https://github.com/SwitchCraftCC/sc-goodies)

## Iron Storage

Higher-capacity variants of chests, barrels, and shulker boxes are added to the game:

<ul>
  <li>
    <img src="/img/sc-goodies/iron_storage.png" alt="Iron Chest, Barrel, and Shulker Box" 
      title="Iron Chest, Barrel, and Shulker Box" style="height: 32px; vertical-align: bottom" />
    Iron - 54 slots (9x6)
  </li>
  <li>
    <img src="/img/sc-goodies/gold_storage.png" alt="Gold Chest, Barrel, and Shulker Box" 
      title="Gold Chest, Barrel, and Shulker Box" style="height: 32px; vertical-align: bottom" />
    Gold - 81 slots (9x9)
  </li>
  <li>
    <img src="/img/sc-goodies/diamond_storage.png" alt="Diamond Chest, Barrel, and Shulker Box" 
      title="Diamond Chest, Barrel, and Shulker Box" style="height: 32px; vertical-align: bottom" />
    Diamond - 108 slots (12x9)
  </li>
</ul>

Upgrades between variants can be crafted as well. For example, an iron chest can be upgraded to a gold chest by crafting
an Iron to Gold Storage Upgrade, and shift+right-clicking the chest with it. The upgrades work for chests, barrels, and
shulker boxes.

<ul>
  <li><ItemImg img="sc-goodies/vanilla_iron_chest_upgrade" name="Vanilla to Iron Storage Upgrade" /></li>
  <li><ItemImg img="sc-goodies/iron_gold_chest_upgrade" name="Iron to Gold Storage Upgrade" /></li>
  <li><ItemImg img="sc-goodies/iron_diamond_chest_upgrade" name="Iron to Diamond Storage Upgrade" /></li>
  <li><ItemImg img="sc-goodies/gold_diamond_chest_upgrade" name="Gold to Diamond Storage Upgrade" /></li>
</ul>

Iron Chests do not become double chests - they are always single chests. Otherwise, these upgraded storage variants 
behave identically to their vanilla counterparts. Hoppers and comparators can be used, shulker boxes can be dyed, and
all can be wrapped as ComputerCraft peripherals.

### Barrel Hammer
<img src="/img/sc-goodies/barrel_hammer.png" alt="Barrel Hammer" title="Barrel Hammer" 
  style="float: right; margin-left: 16px" />

Chests can be converted to barrels (and vice-versa) by shift+right-clicking them with a barrel hammer. This makes it
easy to convert storage types while still keeping all items inside. The Barrel Hammer has a durability of 64 and can be 
repaired with an iron ingot.

## Ender Storage
<img src="/img/sc-goodies/ender_storage.png" alt="Ender Storage" title="Ender Storage"
  style="float: right; margin-left: 16px" />

Ender Storage allows players to store their items in a special chest that features a changeable color coded frequency. 
Any chest with the same frequency will share inventory, enabling item transfer over any distance and even across 
dimensions. The frequency can be changed by right-clicking the three slots on top of the chest with a dye. As there are
16 colors, there are 4096 possible frequencies.

### Personal frequencies

If a player right-clicks the handle of the Ender Storage with a 
<img src="/img/diamond.png" alt="Diamond" title="Diamond" style="vertical-align: bottom; margin-right: -4px" /> diamond, 
it becomes a Personal Ender Storage chest. The contents of this chest are unique to the player who placed the diamond, 
and only that player can change its frequency. The diamond can be recovered by shift+right-clicking the chest with an 
empty hand.

For security reasons, the frequency of a Personal Ender Storage chest cannot be changed by ComputerCraft by default. To
allow this behavior, right-click the handle of the chest with an 
<img src="/img/emerald.png" alt="Emerald" title="Emerald" style="vertical-align: bottom; margin: 0 -4px" /> emerald. 
This will enable ComputerCraft to change the frequency of the chest.

::: warning
If you use an emerald on a Personal Ender Storage chest, **any** player with physical access to the chest will be able
to access **all** of your private frequencies. Take care with who you give Personal Ender Storage chests to, and who you
trust in your claims.
:::

::: tip
Public (non-personal) Ender Storage chests do not need an emerald to be changed by ComputerCraft. 
:::

## Peripheral API - Ender Storage

An Ender Storage Chest can be wrapped as a peripheral with the name `ender_storage`, e.g.:

```lua
local enderStorage = peripheral.wrap("ender_storage")
```

### `enderStorage.getFrequency(): number, number, number`

Returns the current frequency of the chest. The numbers returned are equivalent to the ComputerCraft 
[`colors` API](https://tweaked.cc/module/colors.html).

### `enderStorage.getOwner(): string, string`

If the chest is a Personal Ender Storage chest, returns the UUID of the player who owns the chest, and their last-known
username. If the chest is not a Personal Ender Storage chest, returns `nil, nil`.

### `enderStorage.isPersonal(): boolean`

Returns `true` if the chest is a Personal Ender Storage chest, `false` otherwise.

### `enderStorage.areComputerChangesEnabled(): boolean`

Returns `true` if the chest allows ComputerCraft to change its frequency, `false` otherwise. This will always be `true`
for non-personal Ender Storage chests. For Personal Ender Storage chests, this will be `true` if an emerald has been 
used on the chest's handle.

### `enderStorage.setFrequency(left: number, middle: number, right: number)`

Sets the frequency of the chest. The numbers passed are equivalent to the ComputerCraft 
[`colors` API](https://tweaked.cc/module/colors.html). For example, to set the frequency to white, white, white:

```lua
enderStorage.setFrequency(colors.white, colors.white, colors.white)
```

## Hover Boots
<img src="/img/sc-goodies/hover_boots.png" alt="Hover Boots" title="Hover Boots"
  style="float: right; margin-left: 16px" />

Hover Boots allow players to jump higher, walk up one-block high walls, and reduce fall damage. They can be equipped in
the "shoes" Trinket slot.

Hover Boots have no durability, and can be dyed by crafting them with a dye.

## Item Magnet
<img src="/img/sc-goodies/item_magnet.png" alt="Item Magnet" title="Item Magnet"
  style="float: right; margin-left: 16px" />

The Item Magnet attracts nearby items to the player. It can be equipped in the "gloves" Trinket slot. The Item Magnet
will disable itself if there is another player nearby with an active Item Magnet. It can also be disabled by pressing
the Toggle Item Magnet hotkey (<kbd>M</kbd> by default).

### Range

By default, the magnet attracts items within a 3 block radius. This can be upgraded by crafting the Item Magnet with
a <ItemImg img="nether_star" name="Nether Star" /> Nether Star and 
a <ItemImg img="netherite_ingot" name="Netherite Ingot" /> Netherite Ingot. Upgrades can be applied multiple times, 
increasing the range by 1 block each time, up to a maximum of 6 blocks.

## Concrete Slabs and Stairs

Concrete Slabs and Stairs are available in all 16 colors. They are crafted with the same recipe as the vanilla slabs and
stairs.

Additionally, walking speed on any type of concrete (blocks, slabs, stairs) is 25% faster.

## Trees

Three new tree types have been added to the game: Sakura Trees, Maple Trees, and Peppy Trees. They currently do not
generate naturally but their saplings can be found in loot chests.

<table>
<thead>
  <tr>
    <th>Sakura Tree</th>
    <th>Maple Tree</th>
    <th>Peppy Tree</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><img src="/img/sc-goodies/sakura_tree.png" alt="Sakura Tree" title="Sakura Tree" /></td>
    <td><img src="/img/sc-goodies/maple_tree.png" alt="Maple Tree" title="Maple Tree" /></td>
    <td><img src="/img/sc-goodies/peppy_tree.png" alt="Peppy Tree" title="Peppy Tree" /></td>
  </tr>
</tbody>
</table>

## Renewable Shulkers

Endermites will rarely bury into Purpur Blocks, similar to how Silverfish bury into stone. When they do, they fuse with 
the block, forming a Shulker.

## Dragon Scale
<img src="/img/sc-goodies/dragon_scale.png" alt="Dragon Scale" title="Dragon Scale"
  style="float: right; margin-left: 16px" />

When an Ender Dragon is killed, it will drop a Dragon Scale. The scale can be combined with an Elytra in a crafting 
table to create a new Elytra. The old Elytra stays behind untouched, therefore making Elytra cloneable.

## Dyeable Elytra
<img src="/img/sc-goodies/dyeable_elytra.png" alt="Dyeable Elytra in all 16 colors"
  title="Dyeable Elytra in all 16 colors" style="float: right; margin-left: 16px" />

The Elytra can be dyed with any of the 16 dyes by crafting it with the dye. The dye will be consumed in the process.
The original vanilla Elytra can be restored by cleaning it in a cauldron of water.

### Special Elytra

Special dyed variants of the Elytra are also available, and can be crafted with the following recipes:

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Recipe (shapeless)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ItemImg img="sc-goodies/elytra_lesbian" name="Lesbian Elytra" mid />
      </td>
      <td>
        <ItemImg img="elytra" name="Elytra" mid />
        <DyeImg color="Red" />
        <DyeImg color="Orange" />
        <DyeImg color="White" />
        <DyeImg color="Pink" />
        <DyeImg color="Magenta" />
      </td>
    </tr>
    <tr>
      <td>
        <ItemImg img="sc-goodies/elytra_non_binary" name="Non-Binary Elytra" mid />
      </td>
      <td>
        <ItemImg img="elytra" name="Elytra" mid />
        <DyeImg color="Yellow" />
        <DyeImg color="White" />
        <DyeImg color="Purple" />
        <DyeImg color="Black" />
      </td>
    </tr>
    <tr>
      <td>
        <ItemImg img="sc-goodies/elytra_pride" name="Pride Elytra" mid />
      </td>
      <td>
        <ItemImg img="elytra" name="Elytra" mid />
        <DyeImg color="Red" />
        <DyeImg color="Orange" />
        <DyeImg color="Yellow" />
        <DyeImg color="Green" />
        <DyeImg color="Blue" />
        <DyeImg color="Purple" />
      </td>
    </tr>
    <tr>
      <td>
        <ItemImg img="sc-goodies/elytra_trans" name="Trans Elytra" mid />
      </td>
      <td>
        <ItemImg img="elytra" name="Elytra" mid />
        <DyeImg color="Light Blue" />
        <DyeImg color="Pink" />
        <DyeImg color="White" />
      </td>
    </tr>
  </tbody>
</table>

## Ancient Tomes
<img src="/img/sc-goodies/ancient_tome.png" alt="Ancient Tome" title="Ancient Tome"
  style="float: right; margin-left: 16px" />

Ancient Tomes are special enchantment books that can an item one level beyond the maximum vanilla level. They are found
in loot chests in Dungeons, Stronghold Libraries, Bastion Remnants, and Woodland Mansions.

Ancient Tomes are available for most (but not all) enchantments:
- Feather Falling (max. V)
- Swift Sneak (max. IV)
- Thorns (max. IV)
- Sharpness (max. VI)
- Smite (max. VI)
- Bane of Arthropods (max. VI)
- Knockback (max. III)
- Fire Aspect (max. III)
- Looting (max. IV)
- Sweeping Edge (max. IV)
- Efficiency (max. VI)
- Unbreaking (max. IV)
- Fortune (max. IV)
- Power (max. VI)
- Punch (max. III)
- Luck of the Sea (max. IV)
- Lure (max. IV)
- Loyalty (max. IV)
- Riptide (max. IV)
- Impaling (max. VI)
- Piercing (max. V)

## Glass Item Frame
<img src="/img/sc-goodies/glass_item_frame.png" alt="Glass Item Frame" title="Glass Item Frame"
  style="float: right; margin-left: 16px" />

Glass Item Frames are a see-through variant of the vanilla Item Frame. They can be crafted by surrounding an Item Frame
with Glass Panes. Glow Glass Item Frames can be crafted by combining a Glass Item Frame with a Glow Ink Sac.

Glass Item Frames also have special behavior for banners and shields placed inside them.
