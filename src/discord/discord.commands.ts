import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class DiscordCommands {
  @SlashCommand({
    name: 'ping',
    description: 'Ping-Pong',
    guilds: [process.env.DISCORD_GUILD_ID],
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: 'Pong' });
  }
}
