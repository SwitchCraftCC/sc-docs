---
title: Changes in v2
---

# Changes in v2

[[toc]]

Version 2 of the Chatbox API, prepared for SwitchCraft 3, focuses on internal codebase improvements and making the API 
more consistent. All events have been moved to the `event` packet.

### API route

- **New:** The API is now versioned and is accessed via `wss://chat.sc3.io/v2/TOKEN`.
- The documentation is now accessed via `https://docs.sc3.io/chatbox`.

### Events

- The `message` and `command` packets have been merged into the `event` packet. New `event` types are:
  - `chat_ingame`
  - `chat_discord`
  - `chat_chatbox`
  - `command`
  - `world_change`
- The `chat_me` event has been removed.
- The `afkReturn` event has been renamed to `afk_return`.
  - **New:** Owner-only chatbox commands are now available. Prefix a command with a caret (`^`, e.g. `^command`) or a 
  pipe (`|`, e.g. `|command`) to send a `command` event exclusively to websockets authenticated with your license token. 
  The `ownerOnly` boolean in the `command` event will be true.
- **New:** The `server_restart_scheduled` and `server_restart_cancelled` events have been added.

### Fields

- In the `hello` packet, `licenceOwner` has been renamed to `licenseOwner`.
- **New 2024-03-11:** In the `hello` packet, `licenceOwnerUser` has been added.
- In the `chat_discord` event, `discordID` has been renamed to `discordId`.
- In the `chat_ingame`, `chat_discord` and `chat_chatbox` events, the `channel` field has been removed.
- In the `event` packet, all `event` types are now snake_case instead of camelCase (e.g. `afkReturn` -> `afk_return`).
- In the `error` packet, all `error` types are now snake_case instead of camelCase (e.g. `rateLimited` -> `rate_limited`).
- In the `user` object, `world` now returns full identifiers (e.g. `minecraft:overworld`, `minecraft:the_nether`, `minecraft:the_end`).
- All error messages and close reasons containing `licence` now say `license`.
- The `disabledLicenceKey` error is now `disabled_license`.
- The `displayNameFormatted` field in the `user` object has been removed.

### Lua API

- The `chat` event has been renamed to `chat_ingame`.
- The `chat_me` event has been removed.
- The `chatbox.licence_key` setting has been renamed to `chatbox.license_key`.
- The `chatbox.getLicenceOwner()` function has been renamed to `chatbox.getLicenseOwner()`.
- The `server_restart_scheduled` and `server_restart_cancelled` events have been added.
