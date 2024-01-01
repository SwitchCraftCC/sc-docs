---
title: API
---

# API

[[toc]]

The server exposes a smattering of small HTTP API endpoints for use in your programs. All of these endpoints are
accessible via `https://api.sc3.io/v3/`. All requests return a JSON response.

## `/v3/players`

Returns the number of players online, and the number of players currently active.

```json5
{
  "total": 10, // Total number of players online
  "active": 7  // Number of players currently active (not AFK or bots)
}
```

## `/v3/tps`

Returns the current TPS of the server.

```json5
{
  "tps": 20.0,               // The ticks per second, averaged over the last 100 ticks
  "avgMsPerTick": 1.592209,  // The time per tick, in milliseconds, averaged over the last 100 ticks
  "lastMsPerTick": 1.2700219 // The time per tick, in milliseconds, for the last tick
}
```

## `/v3/activetime`

Returns the top 50 most active players on the server, excluding players who have opted out.

```json5
{
  "lastUpdated": "2022-10-22T20:50:45.6221607+01:00[Europe/London]", // The time the data was last updated
  "entries": [
    {
      "name": "Lemmmy", // The username of the player
      "time": 53010     // Their total active (non-AFK) time, in seconds
    },
    { /* ... */ }
  ]
} 
```

## `/v3/supporter`

Returns the current Supporter goal.

```json5
{
  "supporterUrl": "https://sc3.io/supporter", // The URL to the Supporter page
  "current": "5.00", // The current amount contributed this month
  "goal": "10.00",   // The goal amount
  "goalMet": false   // Whether the goal has been met
} 
```

## `/v3/deaths`

Returns the top 50 players with the most deaths in descending order.

```json5
[
  { 
    "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
    "name": "Lemmmy",
    "count": 46
  },
  { "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
    "name": "Yemmel",
    "count": 21
  },
  { "uuid": "cf151463-687c-47cb-a248-2bbc9494afd7",
    "name": "Lignum",
    "count": 9
  }
]
```

## `/v3/proxies`

HTTP and Websocket requests from within ComputerCraft are proxied through a number of HTTP proxies. This endpoint 
returns a list of IP ranges (in 
[CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)) that HTTP requests may
originate from. If your webserver validates the IP address of incoming requests, you should refer to this list as it may
change at any time. We will aim to post information about changes to this list in the #changelog channel on Discord.

For an IPv4 address, a CIDR range of `/32` means that the IP address will be exactly that address.

```json5
{
  "httpProxies": [
    "1.2.3.4/32",
    "5.6.7.8/32"
  ]
}
```

## `/v3/uptime`

Returns information about how long the server has been up for, and when it will next restart. The `pendingRestart` field
is available when a restart countdown begins, for either a manual or automatic restart. It may be `null` if no restart
countdown has begun, or a restart has been cancelled. The `nextRestart` field is the time of the next **scheduled**
restart. The server may restart before this time.

```json5
{
  "startTime": "2023-06-11T22:33:15.998Z", // The time the server's JVM started
  "uptimeMs": 182551, // The uptime of the server's JVM in milliseconds
  "pendingRestart": {
    "type": "manual",
    "specifiedSeconds": 300, // The number of seconds the restart countdown was specified for (e.g. 10 minutes)
    "seconds": 247, // The number of seconds until the restart will occur
    "at": "2023-06-11T22:40:26.266558600Z" // The time the restart will occur
  },
  "nextRestart": "2023-06-12T00:00+01:00[Europe/London]"
}
```
