const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Obtenha o link da melhor playlist de estudos"),

  async execute(interaction) {
    // Cria uma mensagem embed para fornecer informações sobre a playlist
    const embed = new EmbedBuilder()
      .setColor("#1DB954")
      .setTitle("Playlist de estudos do Spotify")
      .setDescription("Esta é uma playlist de músicas para ajudá-lo a estudar e se concentrar.")
      .addField("Link", "[Clique aqui](https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn) para acessar a playlist.")
      .setThumbnail("https://i.imgur.com/v7MObHS.png")
      .setFooter("Criado por Lofi Beats");

    // Responde com a mensagem embed
    await interaction.reply({ embeds: [embed] });
  }
}