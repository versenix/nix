import { Module } from "@nestjs/common";
import { IntentsBitField } from "discord.js";
import { NecordModule } from "necord";
import { DiscordService } from "./discord.service";
import * as dotenv from "dotenv";

dotenv.config();

@Module({
  imports: [
    NecordModule.forRoot({
      token: process.env.DISCORD_APP_TOKEN,
      intents: [IntentsBitField.Flags.Guilds],
    }),
    DiscordModule,
  ],
  providers: [DiscordService],
})
export class DiscordModule {}
