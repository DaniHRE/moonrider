module.exports = {
    token: "XXX",
    prefix: "XXX",

        app: {
            px: "XXX",
            token: "OTU0MTUwMzI0ODAzODk1MzE2.YjO7vA.zXOmLCQ5whSmUKt42cvlJARqZf8",
            playing: "Use !help - Lancelot Beserker 🌑🩸",
            filters: ["8D", "gate", "haas", "phaser", "treble", "tremolo", "vibrato", "karaoke", "flanger", "mcompand", "pulsator", "subboost", "bassboost", "vaporwave", "nightcore", "normalizer", "surrounding"]
        },
        opt: {
            DJ: {
                enabled: false,
                roleName: "DJ",
                commands: ["back", "clear", "filter", "loop", "pause", "resume", "seek", "shuffle", "skip", "stop", "volume"]
            },
            maxVol: 100,
            loopMessage: false,
            discordPlayer: {
                ytdlOptions: {
                    quality: "highestaudio",
                    highWaterMark: 1 << 25
                }
            }
        }

    }