---
title: Supporters
---

<script setup>
import SupporterTag from "../components/SupporterTag.vue";
</script>

# Supporters

<!--@include: ../shutdown.md-->

Players with this <SupporterTag :tier="1" /> tag appearing next to their name in chat and the tablist are 
<span style="color: #55FFFF">SwitchCraft Supporters</span>. This means that they have paid to help keep the server 
online. If you would like to buy <span color="#AAAAFF">Supporter</span> status, visit:
[https://sc3.io/supporter](https://sc3.io/supporter).

Supporter goes directly towards server upkeep and maintenance costs, helping SwitchCraft stay alive for longer!

By becoming a <span color="#55FFFF">Supporter</span>, you will receive multiple tags:

- <SupporterTag :tier=1 /> next to your name in-game
- <SupporterTag :tier=1 svg /> <span style="color: #55FFFF">Supporter</span> role on our [Discord](https://discord.sc3.io)
- <span style="color: #55FFFF">Supporter</span> role on the 
  [ComputerCraft:Tweaked Forums](https://forums.computercraft.cc)

You will also receive the following [cosmetic perks](#supporter-customization) in-game:

- [Custom Hats](#custom-hats): A special slot which allows you to wear almost any block or item as a hat, including 3D
  prints and posters, with the ability to change the position, rotation, and scale of the hat. You can also use the
  `/hat` command to swap in your currently held item as a hat.
- [Custom Elytras](#custom-elytras): Use a poster to change the texture of your Elytra, with support for asymmetric wing
  textures.
- [Step Sounds](#step-sounds): Override your step sounds to the sounds of many other blocks.
- The `/sleep` command, which allows you to sleep in any location, without a bed, and even during the day.
- The `/fly` command in the lobby.

And the following additional perks on our [Discord](https://discord.sc3.io):

- Access to the exclusive `#supporters` chat channel.
- The ability to change your own nickname.
- The ability to use external emoji and stickers.

Tags will last **30 days** for every **$5.00 USD** contributed. The minimum payment is **$5.00 USD**. For example, if 
you spend **$20.00 USD**, you will receive <SupporterTag :tier=1 /> for **120 days**. You may purchase Supporter 
multiple times, and it will stack.

Tags are usually applied within 30 minutes of purchase. Contact staff on [Discord](https://discord.sc3.io) for support.

<div style="text-align: center; font-size: 48px">
    <a href="https://sc3.io/supporter" style="color: #55FFFF">Support Now</a>
</div>

## Supporter Tiers

Supporter Tiers are special badges that are given to players who have cumulatively contributed a certain amount of money 
towards the server over time.

- <SupporterTag :tier="1" /> <b>$5.00 USD</b> or more contributed total
- <SupporterTag :tier="2" /> <b>$25.00 USD</b> or more contributed total
- <SupporterTag :tier="3" /> <b>$75.00 USD</b> or more contributed total

If you do not want to share your Supporter tier, you can choose which tag to show publicly in the Supporter
Customization screen, or by running `/supporter tier <1-3>`. You can revert back to any previous tier for the tag on
your username, e.g. if you are a Tier 3 supporter you can show a Tier 1 tag by running `/supporter tier 1`. You can
revert this at any time by running `/supporter tier auto`. Alternatively, if you don't want to show a tag at all, you
may [opt out](#opt-out).

## Opt out

You may opt out of publicly showing your Supporter status in the Supporter Customization screen by choosing "Hide" for
"Shown tier", or by running `/supporter opt out`. This will hide the Supporter tag from your name. You will still need
to manually un-link your Discord and Forums accounts if they have been linked. You may opt back in at any time by
running `/supporter opt in`.

# Supporter Customization

There are a number of exclusive cosmetic customization perks available to Supporters. You can access the Supporter
Customization screen in one of the following ways:

- Clicking the Supporter icon in the inventory screen
- Clicking the Supporter Customization button in Pause -> Options under "Quick Settings"
- Running `/supporter`
  - If you have active Supporter status, you can also use these shorthands for the respective tabs: `/supporter hat`,
    `/supporter elytra`, and `/supporter stepsounds`.

Supporter Customizations will be visible to other players for as long as your Supporter tags last, unless:

- You opt out of showing your Supporter status
- The other player disables that specific customization in the SwitchCraft Client Mod settings (Supporter 
  Customizations tab).

If you do not currently have Supporter status, you can still access the screen to view your customizations, but you will
not be able to make any changes until you purchase Supporter again. If you have items in the "Custom Hat" or "Custom
Elytra" slots, you will be able to remove them, but not put them back.

## Custom Hats

Custom Hats are a special slot which allows you to wear almost any block or item as a hat, including 3D prints and
posters, with the ability to change the position, rotation, and scale of the hat. You can also use the `/hat` command to
swap in your currently held item as a hat. Run `/supporter hat` to customize.

If you had a custom hat that was not a valid armor item before April 10th, 2024, it will be automatically moved to the
"Custom Hats" tab in the Supporter Customization screen when you next log in, even if you're not currently a Supporter.

If you're not currently a Supporter, you can still access the screen to remove the item, but you will no be able to put
it back until you purchase Supporter again.

![Screenshot of the "Custom Hat" tab in the Supporter Customization screen.](/img/supporter-customization-hat.png)

#### Tips

- Hat items are rendered the same way as they are in the inventory. If it has a model in the inventory, it will have a
  model on your head. Posters are handled specially, to appear as a flat plane (visible from both sides) in front of
  your face by default.
- You can toggle the rendering of your helmet by checking "Show helmet with hat" in the bottom left. This allows you to
  still wear armor, but have your hat render instead. The armor will still provide protection.
- You can hold <kbd>Shift</kbd> when dragging the sliders to snap them to sensible values (1/8th of a block for 
  positions and scales, 15° for rotations), and use the arrow keys to change them precisely.
- Click and drag to rotate the preview window, and scroll to zoom.

## Custom Elytras

Custom Elytras allow you to use a poster from sc-peripherals to change the texture of your Elytra. It works for both
vanilla Elytras and sc-goodies colored/special Elytras. Run `/supporter elytra` to customize.

- Symmetric UVs - This is the default mode. The model and UV map used is the same as the vanilla Elytra, where there is
  only one wing texture, mirrored to both sides.
- Asymmetric UVs - This mode allows you to use a different texture for each wing. The left wing adds an additional
  cuboid to the UV map, and moves the right wing's UVs to the right slightly to make room for it. This mode is not
  compatible with textures for vanilla Elytras, e.g. from other resource packs. The right wing texture is flipped
  horizontally.

You can download the templates for both modes in a variety of formats on the Custom Elytra screen, or from
[here](https://github.com/SwitchCraftCC/sc-docs/tree/1.20.1/src/public/supporter-elytra-templates):
- Layered (Aseprite) - Contains both an example Elytra and the UV map.
- Layered (Paint.NET) - Contains both an example Elytra and the UV map.
- Layered (GIMP) - Contains both an example Elytra and the UV map.
- UV Map (PNG) - Contains only the UV map.
- Example (PNG) - Contains only the example Elytra.

#### Tips
- Click and drag to rotate the preview window, and scroll to zoom.
- Hover over the poster preview to fade out the UV template.
- Although the vanilla Elytra texture is 64x32, posters are 128x128, so textures must be scaled up to this size to fit.
  This also means you get 2x extra detail horizontally, and 4x extra detail vertically.

![Screenshot of the "Custom Elytra" tab in the Supporter Customization screen.](/img/supporter-customization-elytra.png)

## Step Sounds

Step Sounds allow you to override your step sounds to the sounds of many other blocks. Run `/supporter stepsounds` to
customize.

![Screenshot of the "Step Sounds" tab in the Supporter Customization screen.](/img/supporter-customization-stepsounds.png)
