const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const embedHelp = new EmbedBuilder()
    .setColor('#0047AB')
    .setTitle('❓ Ajuda com Comandos')
    .addFields(
        { name: '📚 /docs', value: 'Acesse a documentação da tecnologia que quiser.', inline: true },
        { name: '📚 /git', value: 'Veja os comandos do Git.', inline: true },
        { name: '📚 /ping', value: 'Veja o ping do bot.', inline: true },
        { name: '📚 /playlist', value: 'Veja a playlist de estudos no spotify.', inline: true }
    );


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription("Veja quais comandos o bot tem e a descrição de cada um"),

        async execute(interaction) {
            await interaction.reply({ embeds: [embedHelp] });
        }
};