---
title: Plethora 1.19.4
---

# {{ $frontmatter.title }}

[View Plethora-Fabric on GitHub](https://github.com/SwitchCraftCC/Plethora-Fabric)

Plethora-Fabric is a port of [Plethora](https://github.com/SquidDev-CC/plethora) for [Fabric](https://fabricmc.net/) 
1.19+ and [CC: Tweaked](https://github.com/cc-tweaked/cc-tweaked). Most features have been ported over 1:1. There
are a few minor API changes (mainly to ensure consistency with modern CC: Tweaked).

[[toc]]

## Features ported

- Block scanner
- Entity sensor
- Frickin' laser beam
- Introspection modules
- Kinetic augment
- Manipulator
- Neural interface
- Overlay glasses
- Redstone integrator
- Keyboard module

## Not yet implemented

- Neural interfaces on mobs
- Computers in minecarts
- Documentation exporter

#### TODO meta providers:
- Tool harvest level
- Daylight Detector
- Sculk Sensor
- Mob Spawner
- Spawn egg

## Gameplay changes

- Block scanner and Entity sensor upgrades now require Netherite as well as Nether Stars to craft
- Block scanners, when held in your hand, now show accurate colors for ore blocks
  - All the new ore types (copper, deepslate ore, nether ores, etc.) are supported
  - Entity colors are still "random" but can be changed in the config file
- Keyboards can no longer be 'bound' to computers. Instead, computers can be right-clicked from up to 32 blocks away
  (shift-right-click if they are within the normal reach range) to open the keyboard GUI. They still work the same as
  a neural interface module, forwarding all key events while in-game.
- The following vanilla modules have been removed:
  - Note Blocks - use CC: Tweaked's Speakers instead
  - Clock - use `os.clock()` and `os.day()` instead
  - Daylight Detector

## API changes

::: tip Note

This list may be incomplete. If you notice any changes that are not listed here, please let us know! If you have a
specific request, please submit it to the [issue tracker](https://github.com/SwitchCraftCC/Plethora-Fabric/issues), or
submit a pull request.

:::

#### Inventory methods

Inventory methods have been renamed to be more consistent with CC: Tweaked:

- `getItemMeta` -> `getItemDetail`
- `size` -> `getSize`
- `getItemLimit` has been added
- `drop`, `suck` are <NYI/>
- `turtle.getItemDetail()` and CC `inventory.getItemDetail()` methods now return rich item metadata provided by Plethora
- `turtle.getInventory()` introspection method has been removed in favor of the native inventory methods
- The hardcoded `inventory` and `ender_chest` transfer locations are not available (see 
  [CC-Tweaked#731](https://github.com/cc-tweaked/CC-Tweaked/issues/731)). Instead, use a bound introspection module to 
  push and pull from `getInventory()`, `getEquipment()` and `getEnder()`.
- `getItem()` and `getItem().setActive()` have been removed

For the player inventory *only* (`getInventory()` with an introspection module):

- `getInventory().getItem(slot).consume()` has been changed to `getInventory().consume(slot)`
- `getInventory().getItem(slot).drop([limit, [direction]])` has been changed to 
  `getInventory().drop(slot, [limit, [direction]])`

#### Meta changes

- Player meta fields <NYI/>: `isFlying`, `allowFlying`, `walkSpeed`, `flySpeed`
- Block meta fields <NYI/>: `harvestLevel`, `harvestTool`, `metadata`
- Enchantment names are slightly different (e.g. `enchantment.oxygen` -> `minecraft:respiration`)
- Entity 'motion' and 'velocity' have been split up into two separate fields. They are:
  - `motionX`, `motionY`, `motionZ` - the entity's server-side velocity. For players, this only includes motion that
    was initiated by the server (e.g. kinetic launch, elytra flying, etc.). Since the player's position is always
    updated by the client, this means that it may not be a fully accurate representation of the change in the player's
    position.
  - `deltaPosX`, `deltaPosY`, `deltaPosZ` - the entity's client-side velocity. This is derived from the entity's
    position on the server at the end of the tick. For players, this includes all motion, including motion initiated by
    the client (e.g. walking, sprinting, knockback, etc.). However, since the player's position is always updated by the
    client, some components of the velocity may be delayed according to the client's latency, which will always be at 
    least 1 tick.
  - For non-player entities, these values should be identical, but the 'deltaPos' fields may be delayed by a tick.

#### Overlay glasses

- `canvas3d().addLine` is <NYI/>
- `canvas2d().addItem`'s `damage` argument has been removed
- `canvas3d().addItem`'s `damage` argument has been removed
- 3D items cannot currently have their depth test toggled - they are always depth tested by default. But, you can put
  the items in a frame (`canvas3d().addFrame()`) and then toggle the depth test on the frame.
