import { Injectable, Logger } from "@nestjs/common";
import { Client } from "discord.js";
import { Context, ContextOf, On, Once } from "necord";
import { DiscordCommands } from "./discord.commands";

@Injectable()
export class DiscordService extends DiscordCommands {
  private readonly logger = new Logger(DiscordService.name);

  public constructor(private readonly client: Client) {
    console.log("DiscordService constructor");
    super();
  }

  @Once("ready")
  public onReady(@Context() [client]: ContextOf<"ready">) {
    this.logger.log(`App is ready ${client.user.username}`);
  }

  @On("warn")
  public onWarn(@Context() [message]: ContextOf<"warn">) {
    this.logger.warn(message);
  }
}
