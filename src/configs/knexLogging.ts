import { Knex } from "knex";
// import chalk from "chalk";

export type KnexLoggerOptions = {
  logger?: (message?: any, ...optionalParams: any[]) => void;
  bindings?: boolean;
};

export default function knexLogger(
  knex: Knex,
  options?: KnexLoggerOptions
): any {
  console.log("knexLogger");
}
