module.exports = {
    prefix: "!",
    app: {
        playing: "Use !help - Lancelot Beserker 🌑🩸",
        filters: ["8D", "gate", "haas", "phaser", "treble", "tremolo", "vibrato", "karaoke", "flanger", "mcompand", "pulsator", "subboost", "bassboost", "vaporwave", "nightcore", "normalizer", "surrounding"]
    },
    opt: {
        DJ: {
            enabled: true,
            roleName: "『🎶』- DJ",
            commands: ["play", "back", "clear", "filter", "loop", "pause", "resume", "seek", "shuffle", "skip", "stop", "volume"]
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