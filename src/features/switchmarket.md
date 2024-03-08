---
title: SwitchMarket
---

[SwitchMarket](https://market.sc3.io) is a website provided by the server to allow players to auction and buy claims on
the server. Currently, its primary use is to auction unused land around spawn.

## Bidding on auctions

Check the [SwitchMarket website](https://market.sc3.io) to see the current auctions.

To bid on an auction, you can use the `/switchmarket bid` command in-game. For example, to bid 15 KST on the auction
"Lignum's Sugar Canes", you would run `/switchmarket bid lignums-sugar-canes 15`. You can also bid anonymously by
adding `anonymous` at the end of the command.

You will be prompted for confirmation, and then your bid will be taken from your in-game balance. If you are out-bid,
your bid will be refunded to you immediately (English auction), or when the auction ends (sealed-bid auctions).

## Auction types

There are three types of auctions supported by SwitchMarket:

- **[English auction](https://en.wikipedia.org/wiki/English_auction)**: The price starts low and increases as players
  bid. The highest bidder wins, and pays the amount they bid.
- **[Sealed-bid auction](https://en.wikipedia.org/wiki/First-price_sealed-bid_auction)**: Players submit their bids
  in secret. The highest bidder wins, and pays the amount they bid.

  At the end of the auction, the bidders and their bids are revealed, unless they chose to make their bid anonymous
  (`/switchmarket bid <listing> <amount> anonymous`).

  If the highest price is tied, the winner is chosen randomly from the tied bidders.
- **[Vickrey auction](https://en.wikipedia.org/wiki/Vickrey_auction)**: Players submit their bids in secret. The highest
  bidder wins, but **pays the amount bid by the second-highest bidder**.

  At the end of the auction, the bidders and their bids are revealed, unless they chose to make their bid anonymous
  (`/switchmarket bid <listing> <amount> anonymous`).

  If the highest price is tied, the winner is chosen randomly from the tied bidders. They pay the next lowest price.

## Extension

If a bid is placed within the last 12 hours of an auction, the remaining time will be reset to 12 hours. This may be
changed per-auction, so if a bidding war is going on for too long, staff may decide to reduce this extension time, or
have the players draw lots and end the auction early.

## FAQ

#### Can I bid anonymously?
Yes, by bidding with `/switchmarket bid <listing> <amount> anonymous` (add `anonymous` at the end), your bid will be
kept private. Your name will not be shown on the auction page, and your name will be replaced with "Anonymous" in the
Discord logs. **However:** if you win the auction, when the claim is transferred to you, you will publicly become the
owner of that claim.

#### Can I see a list of my current bids?
Yes, by running `/switchmarket bids` in-game. This will list all of your current bids on active auctions.

#### Are there shorter commands?
The aliases `/market` and `/sm` are available for all in-game commands.

#### Can I turn off Discord notifications?
Yes, by running `/switchmarket discordnotifs`, you can toggle the Discord pings. You will still be mentioned in the
messages, but you won't receive a notification.

#### Can I list my claim for auction?
At the moment, only staff can list claims for auction. You can submit a request to staff to list your claim for auction
by using [this form](https://docs.google.com/forms/d/e/1FAIpQLSdR3xaONYdzzY1ZPykQKDEb0l6hNVjwaO-UxHhOv4c7QZ_YUQ/viewform?usp=sf_link).

#### Can I list a non-claim commodity for auction?
At the moment, this is not possible.

#### I haven't played in a while. Will my claim be listed for auction?
We will never list a claim for auction if you have built in it. However, if:

- Your claim is completely empty
- Your claim is in a highly desired spot (e.g. near spawn, a landmark, or a warp)
- You haven't logged in for 30 days

then your claim may be listed for auction. If you were active within the last 90 days, and you are easy to contact, we
will reach out to you for permission first. Staff reserves the right to list any claim for auction at any time. You will
always receive the proceeds for the auction of your claim, directly to your in-game balance.

#### Can I bid on auctions outside the game?
No, this is not possible.

#### Can I bid on auctions automatically?
No, this is not allowed.

#### Can I bid on auctions with an alt account, or a bot account?
No, this is not allowed.

#### Why can't I out-bid myself?
On most auctions, you're able to out-bid yourself. However, on an auction with a hidden reserve price that hasn't yet
been met, you cannot out-bid yourself.

#### Can I retract my bid?
This is planned, but currently not possible.
