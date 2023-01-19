---
title: Chatbox Introduction
---

# {{ $frontmatter.title }}

SwitchCraft uses a server-side chatbox system (instead of peripherals). This has several benefits:

* The player does not need to craft any additional items to use a chatbox
* The chatbox API can be [accessed from outside the game](websocket.md) (e.g. a web server)
* Chatboxes can receive messages from Discord and other chatboxes
* Improved moderation capabilities for staff

As of SwitchCraft 3, the latest version of the chatbox API is **[v2](changes.md)**.

The ComputerCraft-compatible [Lua API](computercraft.md) is built into the rom, and can be used straight away with a 
single command.
