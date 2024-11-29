import "./commands";
import type { EventCreateInputWithChannels } from "./commandFunctions/seedData/seedEvents";
import type { DiscussionCreateInputWithChannels } from "./commandFunctions/seedData/seedDiscussions";
import type {
  ChannelCreateInput,
  TagCreateInput,
  ChannelRoleCreateInput,
  ServerRoleCreateInput,
  ModServerRoleCreateInput,
  ServerConfigCreateInput,
  ModChannelRoleCreateInput,
} from "../../__generated__/graphql";
import type { LoginInput } from "../support/commandFunctions/loginWithButtonClick";
/* eslint-disable @typescript-eslint/no-namespace */

export type SeedDataInput = {
  channels: ChannelCreateInput[];
  discussions: DiscussionCreateInputWithChannels[];
  events: EventCreateInputWithChannels[];
  tags: TagCreateInput[];
  channelRoles: ChannelRoleCreateInput[];
  modChannelRoles: ModChannelRoleCreateInput[];
  serverRoles: ServerRoleCreateInput[];
  modServerRoles: ModServerRoleCreateInput[];
  serverConfigs: ServerConfigCreateInput[];
};

declare global {
  namespace Cypress {
    interface Chainable {
      loginWithCreateEventButton(input?: LoginInput): Chainable<Element>;
      loginAsAdmin(): Chainable<Element>;
      authenticatedGraphQL(
        query: string,
        variables?: Record<string, unknown>
      ): Chainable<any>;
      ensureAuth0Login(): Chainable<Element>;
      safetyCheck(): Chainable<Element>;
      dropDataForCypressTests(): Chainable<Element>;
      seedDataForCypressTests(input: SeedDataInput): Chainable<Element>;
    }
  }
}
