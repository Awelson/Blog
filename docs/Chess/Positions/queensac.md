# I sacrificed my queen

<iframe src="https://lichess.org/analysis/standard/8/5pkq/p1n1b2p/1pp5/8/P4NN1/1PP1BPPP/1K1R4_w_-_-_6_23?color=white" 
width="720" height="480" frameborder="0" allowfullscreen></iframe>

As you can see, I don't have a queen. No it was not some calculated clever sacrifice, it just got trapped and I did the best I could to win as much material back.

I got a rook, knight, and a pawn for my queen which is not terrible. I still ended up losing the game, but there were a couple moments where I could have seized the advantage, including this one right here.

### Solution

White's plan can be broken down into two objectives:

- Send the black king and queen to the 8th rank (with the king to the left of the queen)

this sets up a skewer along the 8th rank, Rd8+ will win the queen except the black knight is gurading d8, hence..

- Kick the black knight out of its square

This narrows our choices down to **Rd6** (which kicks the knight out), **Bd3** (which forces the queen back), and **Nh5+** (which forces the king back). The correct sequence involves some combination of these moves.

**23. Bd3 Qg8** already fails the first objective since upon kicking the king back, it can tuck itself to the right of the queen on g8. More than that, **Bd3** blocks the rook so it is not optimal.

**23. Nh5+** fails not because of .. Kg6 since 24. Nh4+ Kg5 25. g3! threatening mate with f4, and .. Bg4 doesn't work because of 26. Bxg4 Kxg4 27. Nf6+. Rather, after **.. Kf8 24. Rd6** there is **.. Qg6**, instead of allowing white's plan (of kicking the black knight), black counterattacks our knight.

This leaves **23. Rd3**. There is no way to defend the knight, what makes the most sense is **.. Nd4**. Now we have to choose between Bd3 and Nh5+. 

- **Bd3** fails on account of Qg8 as in previously. 

- **24. Nh5+** forces the king back, ..Kh8 fails because of 25. Rd8+. This leaves Kf8 or Kg8, which sets up the skewer once the queen is kicked back.

Let's say **.. Kf8 25. Bd3**, since queen back to the 8th rank is unacceptable, black has to block our bishop. There are three ways to do this:

1. **.. Bf5**, but Black loses a piece after **26. Nxd4 cxd4 27. Nf6 Qg7 28. Bxf5** the alternative .. Bxd3 27. Rd8+ Ke7 28. Nc6+ Ke6 29. Rxd3 also does not work out for black.

2. **.. Nf5**. Notice that g4 does not work because of Nxd6 Bxh7 Bxg4 leads to a drawn endgame. We can improve on this by moving our rook away with tempo which we can do via **26. Rd8+ Ke8 27. Rf8!! Kd6** and now g4 works.

3. **.. f5** leaves the bishop hanging after Nxd4.

Black can also try **.. Qd6** in response to **23. Rd3**, the idea is to meet Rxc3 with Ba2+, the resulting endgame still favors white albeit with a mere +1.3 valuation.

A better resposne is to refrain from capturing the knight and playing **24. b3** stopping the Ba2+ idea from earlier, and reinforcing threat on the knight. 


